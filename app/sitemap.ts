import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.jhinger.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.jhinger.com/resume.pdf",
      lastModified: new Date(),
    },
  ];
}
