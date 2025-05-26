// src/theme/Head/index.tsx
import React from 'react';
import Head from '@docusaurus/Head';

export default function CustomHead() {
  return (
    <Head>
      {/* GA4 Setup */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVE4ZW13RS"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BVE4ZW13RS');

        document.addEventListener('DOMContentLoaded', function () {
          function getCategoryFromUrl(url) {
            if (url.includes('buymeacoffee.com')) return 'buymeacoffee';
            if (url.includes('docs.google.com')) return 'google_sheets';
            if (url.includes('drive.google.com')) return 'google_drive';
            return 'other';
          }

          document.querySelectorAll('.download-buttons a').forEach(function(el) {
            el.addEventListener('click', function () {
              const text = el.innerText.trim();
              const category = getCategoryFromUrl(el.href);
              gtag('event', 'click_button', {
                event_category: category,
                event_label: text,
              });
            });
          });

          const excelDemoBtn = document.querySelector('.buttonPrimary');
          if (excelDemoBtn) {
            excelDemoBtn.addEventListener('click', function () {
              gtag('event', 'click_button', {
                event_category: 'google_drive',
                event_label: 'Demo 500 từ đầu tiên',
              });
            });
          }
        });
        `}
      </script>
    </Head>
  );
}
