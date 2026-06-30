import { cookies } from "next/headers";

const RATE_LIMIT_COOKIE = "buxmate_contact_last";
const MIN_SUBMIT_MS = 2_000;
const RATE_LIMIT_MS = 60_000;

export async function assertContactSubmissionAllowed(
  formStartedAt: number,
): Promise<{ allowed: true } | { allowed: false; error: string }> {
  const elapsed = Date.now() - formStartedAt;
  if (elapsed < MIN_SUBMIT_MS) {
    return {
      allowed: false,
      error: "Please wait a moment before submitting.",
    };
  }

  const jar = await cookies();
  const lastSubmit = jar.get(RATE_LIMIT_COOKIE)?.value;
  if (lastSubmit) {
    const lastMs = Number.parseInt(lastSubmit, 10);
    if (!Number.isNaN(lastMs) && Date.now() - lastMs < RATE_LIMIT_MS) {
      return {
        allowed: false,
        error: "Please wait a minute before sending another message.",
      };
    }
  }

  return { allowed: true };
}

export async function markContactSubmitted(): Promise<void> {
  const jar = await cookies();
  jar.set(RATE_LIMIT_COOKIE, String(Date.now()), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60,
    path: "/contact",
  });
}
