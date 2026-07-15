import { MetadataRoute } from "next";
import { obras } from "@/lib/data/obras";

export const dynamic = "force-static";

const siteUrl = "https://www.rgrconstrutora.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const obrasUrls = obras.map((o) => ({
    url: `${siteUrl}/obras/${o.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/obras`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...obrasUrls,
  ];
}
