"use client";

import { useEffect } from "react";
import { readConsent } from "@/lib/consent-client";
import { updateGoogleConsent } from "@/lib/consent-mode";

export function ConsentModeSync() {
  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      updateGoogleConsent(stored);
    }
  }, []);

  return null;
}
