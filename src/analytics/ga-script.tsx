import React from "react"

export const trackingId = 'G-7YLYMPYKGP';

const GAScript = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
      }}
    />
  </>
)

export default GAScript
