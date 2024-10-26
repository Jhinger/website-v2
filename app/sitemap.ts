import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jhinger.com",
      lastModified: new Date(),
    },
    {
      url: "https://jhingeer.com/resume.pdf",
      lastModified: new Date(),
    },
  ];
}
