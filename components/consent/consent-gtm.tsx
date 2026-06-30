"use client";

import { GoogleTagManager } from "@next/third-parties/google";

type ConsentGtmProps = {
  gtmId: string;
};

export function ConsentGtm({ gtmId }: ConsentGtmProps) {
  return <GoogleTagManager gtmId={gtmId} />;
}
