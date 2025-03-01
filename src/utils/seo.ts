import config from '@/config';
import { Metadata } from 'next';

const getSeoMetadata = ({
  title,
  description,
  keywords,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
} = {}) => {
  return {
    title: String(title || config.app.name),
    description: description || config.app.description,
    keywords: keywords || [config.app.name],
    metadataBase: new URL(config.app.url),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: String(title || config.app.name),
      description: description || config.app.description,
      url: config.app.url,
      siteName: String(title || config.app.name),
      images: [
        {
          url: '/opengraph-image.png',
          width: 800,
          height: 600,
          alt: String(title || config.app.name),
        },
      ],
    },
    twitter: {
      handle: '@YourHandle',
      site: '@YourSiteHandle',
      cardType: 'summary_large_image',
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

export default getSeoMetadata;
