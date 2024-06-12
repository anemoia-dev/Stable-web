import React from "react";
import { useEffect } from "react";
import "./myComponent.css";

const HubSpotForm = ({ lang }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId:
            lang === "en"
              ? process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID_ENG
              : process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId:
            lang === "en"
              ? process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID_ENG
              : process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
          target:
            lang === "en"
              ? process.env.NEXT_PUBLIC_HUBSPOT_FORM_TARGET_ENG
              : process.env.NEXT_PUBLIC_HUBSPOT_FORM_TARGET,
        });
      }
    });
  }, []);

  return (
    <div
      id="hubspotForm"
      className="hubspotForm"
      style={{
        width: "100%",
        height: "100%",
        padding: "3rem 0rem",
      }}
    ></div>
  );
};

export default HubSpotForm;
{
  /* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "41506338",
    formId: "964b225d-afc3-401d-931a-8adc00d28c1c"
  });
</script> */
}

{
  /* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "41506338",
    formId: "7f37dc3d-3d94-48d9-ae79-57065f3c3478"
  });
</script>
 */
}
