// src/components/TawkTo/TawkTo.js
import React, { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    // Initialize Tawk.to when component mounts
    if (window.Tawk_API && window.Tawk_API.showWidget) {
      window.Tawk_API.showWidget();
      return;
    }

    // If Tawk.to is not loaded yet, set up the script
    if (!window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://embed.tawk.to/68a749501229991923dacb13/1j36ncos8";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      script.onload = () => {
        // Once loaded, show the widget immediately
        if (window.Tawk_API && window.Tawk_API.showWidget) {
          window.Tawk_API.showWidget();
        }
      };

      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkTo;
