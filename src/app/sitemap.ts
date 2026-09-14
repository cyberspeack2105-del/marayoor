import { MetadataRoute } from "next";

const BASE = "https://www.ilovekanthalloor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    /* ── Core pages ── */
    {
      url:             `${BASE}/`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        1.0,
    },
    {
      url:             `${BASE}/jeep-safari`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.9,
    },
    {
      url:             `${BASE}/stay`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.9,
    },
    {
      url:             `${BASE}/destinations`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.8,
    },
    {
      url:             `${BASE}/gallery`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.8,
    },
    {
      url:             `${BASE}/about`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${BASE}/blog`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/contact`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },

    /* ── Blog Articles ── */
    {
      url:             `${BASE}/blog/top-places-marayoor`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/blog/best-time-marayoor`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/blog/jeep-safari-tips`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/blog/dolmens-marayoor`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/blog/sandalwood-forest`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${BASE}/blog/jaggery-trail`,
      lastModified:    now,
      changeFrequency: "monthly",
      priority:        0.7,
    },
  ];
}
