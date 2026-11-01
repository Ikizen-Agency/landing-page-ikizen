"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const NAMESPACE = "ikizen-booking";

/** Cal.com takes literal colors, so these repeat the ink, amber and line tokens. */
const DARK_THEME_VARS = {
  "cal-brand": "#f4ad46",
  "cal-brand-emphasis": "#fde095",
  "cal-brand-text": "#16120e",
  "cal-bg": "#16120e",
  "cal-bg-muted": "#231c15",
  "cal-text": "#f3eadb",
  "cal-text-emphasis": "#f3eadb",
  "cal-text-muted": "#b8ac9a",
  "cal-border": "#4a4239",
};

export default function CalFrame({ calLink }: { calLink: string }) {
  useEffect(() => {
    getCalApi({ namespace: NAMESPACE }).then((cal) => {
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { light: {}, dark: DARK_THEME_VARS },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    });
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      config={{ layout: "month_view", theme: "dark" }}
      className="absolute inset-0 overflow-auto"
    />
  );
}
