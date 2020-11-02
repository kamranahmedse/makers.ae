import React from 'react';

export const trackingId = 'G-7YLYMPYKGP';

export function trackPageview(url: string) {
  const _window = window as typeof window & { gtag: any };
  try {
    _window.gtag('config', trackingId, {
      page_location: url,
      page_title: document.title
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
}

type TrackEventOptions = {
  action: any;
  category: string;
  label: string;
  value: string;
}

export function trackEvent(options: TrackEventOptions) {
  const { action, category, label, value } = options;
  const _window = window as typeof window & { gtag: any };
  try {
    _window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  } catch (err) {
    console.error('Failed sending metrics', err);
  }
}

const GAScript = () => (
  <>
    <script
      async
      src={ `https://www.googletagmanager.com/gtag/js?id=${ trackingId }` }
    />
    <script
      dangerouslySetInnerHTML={ {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ trackingId }');
          `
      } }
    />
  </>
);

export default GAScript;
