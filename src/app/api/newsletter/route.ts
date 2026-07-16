import { NextResponse } from "next/server";
import { getResendClient, getContactEmails } from "@/lib/resend";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { validateNewsletterEmail } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(`newsletter:${ip}`, { limit: 3, windowMs: 60_000 });

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

    const body = (await request.json()) as { email?: string };
    const validationError = validateNewsletterEmail(body.email);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const resend = getResendClient();
    const emails = getContactEmails();

    if (!resend || !emails) {
      return NextResponse.json(
        { error: "Newsletter is not available at the moment." },
        { status: 503 }
      );
    }

    const email = body.email!.trim();

    const { error } = await resend.emails.send({
      from: emails.from,
      to: emails.to,
      subject: "[MRS Newsletter] New subscriber",
      html: `<p>New newsletter subscription: <strong>${escapeHtml(email)}</strong></p>`,
    });

    if (error) {
      return NextResponse.json(
        { error: "Unable to subscribe right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing!",
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
