import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marayoor.in";
  const currentDate = new Date();

  return [
    { url: baseUrl,                        lastModified: currentDate, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/#about`,            lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/#experiences`,      lastModified: currentDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/#testimonials`,     lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/#blog`,             lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/#contact`,          lastModified: currentDate, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${baseUrl}/about`,             lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/jeep-safari`,       lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/stay`,              lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/destinations`,      lastModified: currentDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/blog`,              lastModified: currentDate, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/contact`,           lastModified: currentDate, changeFrequency: "yearly",  priority: 0.6 },
  ];
}
