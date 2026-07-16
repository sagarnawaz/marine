const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,20}$/;

export const SERVICE_TYPES = [
  "Pleasure Vessel Registration",
  "Commercial Vessel Registration",
  "Foreign Vessel Registration",
  "Naval Architecture",
  "General Inquiry",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export function validateContact(body: Partial<ContactPayload>): string | null {
  if (!body.name?.trim()) return "Name is required.";
  if (body.name.trim().length < 2) return "Name must be at least 2 characters.";
  if (!body.email?.trim()) return "Email is required.";
  if (!EMAIL_RE.test(body.email.trim())) return "Please provide a valid email address.";
  if (!body.phone?.trim()) return "Phone number is required.";
  if (!PHONE_RE.test(body.phone.trim())) return "Please provide a valid phone number.";
  if (!body.serviceType?.trim()) return "Please select a service type.";
  if (!SERVICE_TYPES.includes(body.serviceType as ServiceType)) {
    return "Please select a valid service type.";
  }
  if (!body.message?.trim()) return "Message is required.";
  if (body.message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

export function validateNewsletterEmail(email: string | undefined): string | null {
  if (!email?.trim()) return "Email is required.";
  if (!EMAIL_RE.test(email.trim())) return "Please provide a valid email address.";
  return null;
}
