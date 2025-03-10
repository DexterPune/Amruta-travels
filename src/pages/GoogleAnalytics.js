import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Make sure dataLayer is defined
    window.dataLayer = window.dataLayer || [];

    // Load Google Analytics script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16733418092';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize gtag once the script has loaded
      function gtag() {
        window.dataLayer.push(arguments);  // Make sure we use the global dataLayer
      }
      gtag('js', new Date());
      gtag('config', 'AW-16733418092');
    };

    return () => {
      // Cleanup the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16733418092"></script>
    </Helmet>

  );
};

export default GoogleAnalytics;
