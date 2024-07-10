"use client";

import { useEffect } from "react";
import { initializeGA } from "../../../../utils/analytics";
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
    }
    initializeGA();
  }, []);
}
