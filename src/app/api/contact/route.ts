import { NextResponse } from "next/server";
import { getResendClient, getContactEmails } from "@/lib/resend";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { validateContact, type ContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });

    if (!limited.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: limited.retryAfter
            ? { "Retry-After": String(limited.retryAfter) }
            : undefined,
        }
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;
    const validationError = validateContact(body);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const resend = getResendClient();
    const emails = getContactEmails();

    if (!resend || !emails) {
      return NextResponse.json(
        { error: "Contact service is not configured. Please call us directly." },
        { status: 503 }
      );
    }

    const { name, email, phone, serviceType, message } = body as ContactPayload;
    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      serviceType: serviceType.trim(),
      message: message.trim(),
    };

    const { error } = await resend.emails.send({
      from: emails.from,
      to: emails.to,
      replyTo: trimmed.email,
      subject: `[MRS Contact] ${trimmed.serviceType} — ${trimmed.name}`,
      html: `
        <h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmed.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmed.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(trimmed.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(trimmed.serviceType)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmed.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Unable to send your message. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent. We will respond shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
