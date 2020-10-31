const baseUrl = 'https://github.com/kamranahmedse/makers.ae';

const siteConfig = {
  copyright: `Copyright © ${ new Date().getFullYear() } Kamran Ahmed. All Rights Reserved.`,
  author: {
    name: 'Kamran Ahmed',
    github: 'https://github.com/kamranahmedse',
    twitter: 'https://twitter.com/kamranahmedse',
    linkedin: 'https://linkedin.com/in/kaamranahmed',
    email: 'kamranahmed.se@gmail.com'
  },
  repo: {
    url: baseUrl,
    issuesUrl: `${ baseUrl }/issues/new`,
    editUrl: `${ baseUrl }/edit/develop`,
    blobUrl: `${ baseUrl }/blob/develop`
  },
  seo: {
    title: 'makers.ae',
    titleTemplate: '%s - makers.ae',
    description: 'Community of developers and designers in UAE focusing on open-source, practical knowledge, tech culture, career growth.',
    siteUrl: 'https://makers.ae',
    twitter: {
      handle: '@kamranahmedse',
      site: '@kamranahmedse',
      cardType: 'summary_large_image'
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://makers.ae',
      title: 'Makers.ae',
      description: 'Open community of makers in UAE',
      site_name: 'Makers.ae: Community of makers in UAE',
      images: [
        {
          url: '/og-image.png',
          width: 1240,
          height: 480,
          alt:
            'Makers.ae: Community of makers in UAE'
        },
        {
          url: '/twitter-og-image.png',
          width: 1012,
          height: 506,
          alt: 'Makers.ae: Community of makers in UAE'
        }
      ]
    }
  }
};

export default siteConfig;
