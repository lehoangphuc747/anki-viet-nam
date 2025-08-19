import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SupportButton from '@site/src/components/SupportButton';

export default function SupportFooter() {
  return (
    <BrowserOnly>
      {() => (
        <>
          <hr />
          <SupportButton />
        </>
      )}
    </BrowserOnly>
  );
}


