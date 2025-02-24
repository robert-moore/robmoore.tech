import { useSeoMeta, useHead } from "#imports";
import { computed } from "vue";

export interface SiteMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

const DEFAULT_METADATA = {
  title: "Rob Moore",
  description:
    "Building products, writing about philosophy and technology, and visualizing sports data.",
  image: "/images/default-social.jpg",
  type: "website" as const,
};

export function useSiteMetadata(options: SiteMetadataOptions = {}) {
  const config = useRuntimeConfig();
  const route = useRoute();

  const {
    title = DEFAULT_METADATA.title,
    description = DEFAULT_METADATA.description,
    image = DEFAULT_METADATA.image,
    path = route.path,
    type = DEFAULT_METADATA.type,
    publishedTime,
    modifiedTime,
    tags,
  } = options;

  const canonicalUrl = computed(() => `${config.public.siteUrl}${path}`);
  const fullTitle = computed(() =>
    title === DEFAULT_METADATA.title
      ? title
      : `${title} - ${DEFAULT_METADATA.title}`
  );

  useSeoMeta({
    title: () => fullTitle.value,
    ogTitle: () => fullTitle.value,
    description: () => description,
    ogDescription: () => description,
    ogImage: () => image,
    ogUrl: () => canonicalUrl.value,
    ogType: () => type,

    // Twitter Card
    twitterCard: "summary_large_image",
    twitterTitle: () => fullTitle.value,
    twitterDescription: () => description,
    twitterImage: () => image,

    // Article specific meta
    ...(type === "article" && {
      articlePublishedTime: () => publishedTime,
      articleModifiedTime: () => modifiedTime,
      articleTag: () => tags,
    }),

    // Additional meta
    author: "Rob Moore",
    robots: "index, follow",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "canonical",
        href: canonicalUrl.value,
      },
    ],
  });
}
