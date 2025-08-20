import { content } from "./content";

export const siteConfig = {
  name: content.profile.name,
  title: content.meta.title,
  description: content.meta.description,
  url: content.meta.url,
  ogImage: content.meta.ogImage,
  creator: {
    name: content.profile.name,
    role: content.profile.role,
  },
  themeColor: "#1B2542",
  locale: "en_US",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  analytics: {
    googleId: "G-3KV6EK6ZWQ",
  },
} as const;
