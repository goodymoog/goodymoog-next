import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https:" + "//" + "www.goodymoog.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/music`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/art`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/merch`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },

    { url: `${baseUrl}/art/meditative-spaces`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/art/the-washingtons`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/art/shattered-sidewalks`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/art/wild-flowers`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/art/kinetic-sculptures`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/art/etude-comparative`, lastModified: new Date(), priority: 0.8 },
  ];
}
