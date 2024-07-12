"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import FloatingBanner from "./FloatingBanner";
import Cookies from "universal-cookie";
import PropTypes from "prop-types";

export default function ConsentForm({ color }) {
  const [decisionMade, setDecisionMade] = useState(true); // start with true to avoid flashing
  const cookies = useMemo(() => new Cookies(), []);

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  const sendConsent = useCallback((consent) => {
    gtag("consent", "default", consent);
  }, []);

  useEffect(() => {
    if (cookies.get("consentCookie") !== undefined) {
      setDecisionMade(true);
    } else {
      setDecisionMade(false);
    }
  }, [cookies, setDecisionMade, sendConsent]);

  const handleDecision = (outcome) => {
    const consent = {
      ad_storage: outcome,
      ad_user_data: outcome,
      ad_personalization: outcome,
      analytics_storage: outcome,
      functional_storage: outcome,
      personalization_storage: outcome,
      security_storage: outcome,
    };

    cookies.set("consentCookie", consent, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
      domain: "localhost",
    });

    sendConsent(consent);

    setDecisionMade(true);
  };

  return decisionMade ? (
    <></>
  ) : (
    <FloatingBanner
      color={"blue"}
      header="Consent Header"
      message="Consent message"
      acceptText="Yes"
      denyText="No"
      onAccept={() => {
        handleDecision("granted");
      }}
      onDeny={() => {
        handleDecision("denied");
      }}
    />
  );
}
