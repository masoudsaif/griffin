import { Helmet } from "react-helmet";
import { type FC, memo, useEffect } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  path?: string;
  ogType?: "website" | "article" | "profile" | "product";
}

const upsertMeta = (
  selectorAttr: "name" | "property",
  attr: string,
  content: string
) => {
  const selector = `meta[${selectorAttr}="${attr}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);

  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(selectorAttr, attr);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
};

const SEO: FC<SEOProps> = memo(
  ({
    title = "Void Voyagers — Explore the Cosmic Frontier",
    description = "Void Voyagers is an immersive iOS space exploration game by Masoud Studios. Pilot your ship, discover strange worlds, and uncover the mysteries of the galaxy.",
    keywords = "Void Voyagers, space game, iOS game, sci-fi adventure, space exploration, Masoud Studios, spaceship game, cosmic exploration, indie game, Masoud",
    canonicalUrl = import.meta.env.VITE_DOMAIN_URL,
    imageUrl = "/images/void-voyagers-preview.png",
    ogType = "website",
    path,
  }) => {
    const fullUrl = path ? `${canonicalUrl}${path}` : canonicalUrl;

    useEffect(() => {
      const fullUrl = path ? `${canonicalUrl}${path}` : canonicalUrl;
      document.title = title;

      upsertMeta("name", "description", description);
      upsertMeta("name", "keywords", keywords);

      upsertMeta("property", "og:type", ogType);
      upsertMeta("property", "og:title", title);
      upsertMeta("property", "og:description", description);
      upsertMeta("property", "og:image", imageUrl);
      upsertMeta("property", "og:url", fullUrl);

      upsertMeta("name", "twitter:card", "summary_large_image");
      upsertMeta("name", "twitter:title", title);
      upsertMeta("name", "twitter:description", description);
      upsertMeta("name", "twitter:image", imageUrl);

      let link = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = fullUrl;
    }, [title, description, keywords, imageUrl, canonicalUrl, path, ogType]);

    return (
      <Helmet key={`${title}-${path}`}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={fullUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:site_name" content="Void Voyagers" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Branding */}
        <meta name="application-name" content="Void Voyagers" />
        <meta name="apple-mobile-web-app-title" content="Void Voyagers" />
        <meta name="theme-color" content="#030617" />

        {/* Performance */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Helmet>
    );
  }
);

export default SEO;
