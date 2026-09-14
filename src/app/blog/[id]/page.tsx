import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  content: string[];
  highlights: string[];
}

const ARTICLES: Record<string, BlogPostData> = {
  "top-places-marayoor": {
    id: "top-places-marayoor",
    title: "Top 5 Places to Visit in Marayoor",
    excerpt: "From ancient dolmens to sandalwood forests, Marayoor has something extraordinary waiting at every turn.",
    date: "Aug 20, 2025",
    readTime: "5 min read",
    category: "Destinations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSpakvm3GH-jhyIpfil1dXiKYhfXHNwkX5-U5ztgVbmIo6hdd2KDVf1oKryDPSvQQUfDaX8SFoNCu8_X4444mAQrWl-mT5eh-dOveL0tFHSkRr3HjeQtIOp1klcWftUw0GCZVT8Djfb2y1KJvLN2r_kQg9grgTJ1SjpOLQ-5_D6Z9Mck6WTIOH0Gpv__yUAhTv6xsX6FKWXxATrK2m7pmCi1xTg7RdDZBQ6E28RrfN0qepqAD4jli9",
    author: "Marayoor Tourism Team",
    highlights: [
      "Muniyara Dolmens — prehistoric stone burial chambers over 3,000 years old.",
      "Protected Sandalwood Forest — one of India's last natural sandalwood reserves.",
      "Chinnar Wildlife Sanctuary border — rich biodiversity and tribal heritage.",
      "Marayoor Jaggery Units — taste traditional Sharkara made over open wood fires.",
      "Mountain Viewpoints — panoramic 360-degree views of the Western Ghats.",
    ],
    content: [
      "Marayoor, tucked deep in Kerala's Idukki district, is a destination of extraordinary contrasts. Within a short radius you can stand beside 3,000-year-old prehistoric stones, breathe the fragrance of protected sandalwood groves, and watch traditional jaggery being made over open fires.",
      "The Muniyara Dolmens are the crown heritage attraction — ancient megalithic chambers built with massive granite slabs, believed to be burial monuments of early tribal communities. Walking among them while gazing out over forested mountain valleys is a profoundly humbling experience.",
      "The protected Sandalwood Forest (Chandana Vanam) is the other unmissable stop. One of India's last naturally occurring sandalwood reserves, it is carefully guarded and maintained by the Forest Department. The faint fragrance in the air as you walk the forest paths is unforgettable.",
      "Rounding out the top five: the Chinnar border region with its wildlife and tribal culture, the scenic Pambar River valley, and the various mountain viewpoints accessible by Jeep Safari that offer sweeping views across the Karnataka and Tamil Nadu plains.",
    ],
  },
  "best-time-marayoor": {
    id: "best-time-marayoor",
    title: "Best Time to Visit Marayoor",
    excerpt: "Plan your ideal Marayoor trip with our complete seasonal guide.",
    date: "Aug 18, 2025",
    readTime: "6 min read",
    category: "Travel Tips",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApPB7LkwjmlQtLw6kc9EMD8J9vYGicstCcvL6chTpYc4o6Jc8YtteVgmW5tNlc1Z0wUusn3i9lJlIKt_GFL0eRkSblCPxeKmLOdpLtIekXwAkjfgpvLSidbovG9YzcgPz5mruNagrh7aq_Md0TmePPaM_d5KI9-Abs_XMM24wZXYkMJlGpb2USzI-BBZ3xgDMZb-1ttAEcROalTrkwbBRiGK2Ilif1xMy4sWjtTrJGL08D7mVdQMiw",
    author: "Marayoor Travel Expert",
    highlights: [
      "October to February: Best season — cool weather, clear skies, harvest vibes.",
      "March to May: Pleasant temperatures, ideal for trekking and nature walks.",
      "June to September: Monsoon — dramatic waterfalls, lush green landscapes.",
      "Carry light woolens all year due to cool highland evenings.",
      "Festival season (Onam, Vishu) offers unique cultural experiences.",
    ],
    content: [
      "Marayoor's highland location means it enjoys a cooler climate than most of Kerala year-round. Temperatures rarely cross 30°C even in summer, making it a year-round destination — though each season offers a different experience.",
      "Winter (October – February) is undoubtedly the peak tourist season. Skies are clear, temperatures hover between 12°C and 22°C, and the entire landscape feels crisp and alive. Jeep Safaris offer the clearest views across the mountain ranges. This is also the best time for heritage visits to the Dolmens.",
      "Summer (March – May) is underrated. While the rest of Kerala bakes in heat, Marayoor stays cool. Waterfalls may be gentler, but forest trails are dry and walkable, making for excellent trekking. The sandalwood fragrance is especially strong during dry months.",
      "Monsoon (June – September) transforms Marayoor into a green paradise. Waterfalls roar, the landscape turns impossibly vivid, and the mist creates a mystical atmosphere. However, off-road Jeep Safaris require more caution during this period.",
    ],
  },
  "jeep-safari-tips": {
    id: "jeep-safari-tips",
    title: "Tips for a Safe & Enjoyable Jeep Safari",
    excerpt: "Everything you need to know before setting off on a Marayoor off-road Jeep Safari adventure.",
    date: "Aug 15, 2025",
    readTime: "7 min read",
    category: "Adventure",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8CF7Vg3AQLFOZrmmDGndJyz_Wq7FJDliO6Vv4xISAil65tKClJwyouj1wkM7iPGy5f3W3w8Q6aihjOHABNE24R6CJDbLnxm7mw9-elW49_afLyDynKJvrTxZRdzgE822tGXPSkq7icHmpDuKsKEwWlpyt445Z3sSN-0cg2r48xnw88D5Tb511hZQHCTKpDSx4rUBHxzAxVubrPJwy3Oi2lv3pzpL74sEBDSZ_srLDhJa7NqVyAEjL",
    author: "Marayoor Safari Team",
    highlights: [
      "Book only with registered local operators who know the mountain trails.",
      "Morning safaris (6–10 AM) offer the best lighting and wildlife sightings.",
      "Wear closed-toe shoes and carry a light jacket — it can be cold at viewpoints.",
      "Carry water and snacks — some routes are 4–5 hours long.",
      "Respect wildlife and do not litter in the forest areas.",
    ],
    content: [
      "A Jeep Safari is the most exhilarating way to experience Marayoor's rugged highland landscapes. Narrow mountain passes, dense forest corridors, sudden valley drops, and hidden viewpoints make this an adventure unlike any typical tourist experience.",
      "The first rule is to always book through a local registered operator. They know the safe routes, seasonal trail conditions, and hidden gems that no map will show you. Our safaris are driven by local guides who have spent years exploring these mountains.",
      "Start early. Morning safaris capture the best light for photography, the mist is still rolling over the valleys, and wildlife sightings — deer, gaur, peacocks, and occasionally elephants — are far more frequent before 9 AM.",
      "Pack smart. Wear layered clothing as mountain viewpoints at 4,500 ft can feel surprisingly cold even in summer. Closed footwear is essential for any short treks during the route. Carry water and light snacks as fuel stops are limited on mountain routes.",
    ],
  },
  "dolmens-marayoor": {
    id: "dolmens-marayoor",
    title: "The Ancient Muniyara Dolmens of Marayoor",
    excerpt: "Prehistoric stone burial chambers dating back 3,000 years, hidden in Marayoor's highland valleys.",
    date: "Aug 10, 2025",
    readTime: "5 min read",
    category: "Heritage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXIpb49dFjFaqIHrZQnFwIjCqzHPI0feEuoOPXSeZTOoO_8DHXirOVOjgramlsd34sNzNtbOFXwFWV-DYizioyv0jgdKUNigJdu6SIx-BAy6RjQWxe9ua-JC24x5QUc_a_zG5tACxX2cOYB3QhEg_0qlT7Rtg4xxeqWrcyWZlLYQnydJsZT-GowijYr43DspT4tHb5f0E4PETkbObBg2vszppa9Tycpsq6CRen2knGR20ZvAsFHRTh",
    author: "Marayoor Heritage Desk",
    highlights: [
      "Dating back to the Neolithic/Megalithic period — approx 1000 BCE.",
      "Known locally as Muniyaras (sage dwellings or burial chambers).",
      "Built using massive granite slabs balanced without mortar.",
      "Located near Kovil Kadavu along the Pambar River basin.",
      "Protected as an Archaeological Survey of India heritage site.",
    ],
    content: [
      "Scattered across rocky hillocks near Marayoor are the Muniyaras — ancient megalithic dolmens that stand as silent witnesses to over 3,000 years of human history in the Western Ghats. These stone structures are among the most important prehistoric archaeological sites in Kerala.",
      "Each dolmen consists of four upright granite slabs forming walls, topped by a massive capstone. The construction method, using only the precision fitting of enormous stones without mortar, demonstrates extraordinary skill by ancient builders.",
      "Historians and archaeologists believe these structures served as burial chambers for the community's important figures, or possibly as sacred shelters used by ascetics — hence the name 'Muniyara' (Muni = sage, Ara = dwelling).",
      "Visiting the dolmens is an experience that connects you directly with Kerala's deep pre-history. The site is best visited in the early morning when the low-angle light casts dramatic shadows on the stone slabs, and the mist rolling across the valley behind them creates an otherworldly atmosphere.",
    ],
  },
  "sandalwood-forest": {
    id: "sandalwood-forest",
    title: "Marayoor's Sandalwood Reserve: A Fragrant Forest Walk",
    excerpt: "One of India's last natural sandalwood forests — protected, pristine, and extraordinarily fragrant.",
    date: "Aug 5, 2025",
    readTime: "6 min read",
    category: "Nature",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByETeEkLq2Dtee818bYWkXAS7e6TM4NGwWq7f5Xp7NqnDLpKEw8JWrEusoEl1nMlpjafUdc_61Vb_eMSWPnTo-FNflr_GC6sWv11YITE5dfQZZ90Sx7ADK_1ZpUx7m3_BG-5qEjXeTupH2qGxEU2OScx60HPZWwcLqYEuJaKhItqI9LyYlWanQA_3DtMt7jw86RwE8XBnUYQ6VNvvVewHuvrnALxzmfMN-SShaFMgEmfyFXQyM7DEM",
    author: "Marayoor Nature Team",
    highlights: [
      "One of India's few remaining naturally occurring sandalwood (Chandana) reserves.",
      "Strictly protected and patrolled by the Kerala Forest Department.",
      "Accessible via guided Jeep Safari — independent forest entry is not permitted.",
      "The fragrance is most intense during the dry summer months (March–May).",
      "Home to a diverse understory of herbs, birds, and small wildlife.",
    ],
    content: [
      "The Marayoor Chandana Vanam (Sandalwood Forest) is one of Kerala's most precious natural treasures. A protected government reserve, it is one of the last naturally occurring sandalwood forests in India — a rarity that draws nature lovers, researchers, and curious travellers from across the country.",
      "Sandalwood (Santalum album) trees take decades to mature and develop their characteristic fragrant heartwood. The Marayoor forest contains trees of varying ages, and the concentration of mature specimens makes the air unmistakably fragrant, especially during the hot, dry summer months when the sap is most active.",
      "Entry to the forest interior is strictly regulated by the Forest Department. The safest and most rewarding way to experience it is via a guided Jeep Safari, where your local driver will take you along approved routes that allow you to see and smell the forest without disturbing the ecosystem.",
      "Beyond sandalwood, the reserve forest shelters a rich diversity of tree species, medicinal plants, and a variety of bird and small animal life. Watching the dappled light filter through the canopy while that distinctive warm fragrance surrounds you is a sensory experience unlike anything else in Kerala.",
    ],
  },
  "jaggery-trail": {
    id: "jaggery-trail",
    title: "The Marayoor Jaggery Trail: Sweetness from the Mountains",
    excerpt: "Follow the trail from the farm to the fire to the golden block of Marayoor Sharkara.",
    date: "Jul 28, 2025",
    readTime: "5 min read",
    category: "Culture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFFux-I6foQ2Gi1EmajRnV4StVf915Xa4qD26x-CdipCpSPcFzEf6aQIUc_yRKUB5DogE2GPv7g6pzbrGqOlTBK1GAJOEs-haU3sdBbdpHd1TwxnG8vVF5nRBFVpohy1p4hipM6U7KtVqiodvi14gYanU1x7yazTmyJNyRNAIxtEWa9nC-Y-ivFIzqkPsyq3RjrMLGFyZfWtPbEGe4WTRYB5t4XjM9D201Jy-0xNvchj-uzYyzBiv",
    author: "Marayoor Cultural Team",
    highlights: [
      "Marayoor Sharkara (jaggery) is renowned across Kerala for its unique flavour.",
      "Traditional processing uses cast-iron kadhai pans over wood fires.",
      "Sugarcane is grown on private farms and processed in community units.",
      "The jaggery-making season runs roughly from December to March.",
      "Available for direct purchase from farm units during Jeep Safari stops.",
    ],
    content: [
      "Marayoor is as famous for its golden jaggery as it is for its heritage dolmens and sandalwood forests. Marayoor Sharkara — the traditional unrefined sugar made from locally grown sugarcane — is a product of deep agricultural heritage that has fed and sweetened Kerala for centuries.",
      "The process begins in the sugarcane fields that fill the valley floors between November and March. Farmers harvest the tall, thick-stemmed cane by hand and feed it through mechanical crushers to extract the juice. The raw juice is then slowly boiled in large cast-iron kadhai pans over open wood fires.",
      "As the juice reduces and concentrates, it thickens into a golden treacle. Artisan jaggery-makers know precisely when to stir, when to add lime to clarify, and when to pour the golden liquid into circular moulds. After cooling, out comes the iconic cylindrical block of Marayoor Sharkara.",
      "During Jeep Safari trips, stops at active jaggery processing units are among the most popular experiences. Watching the process live, tasting the warm syrup straight from the pan, and buying freshly made blocks to take home is an authentic cultural highlight that no traveller should miss.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = ARTICLES[id];
  if (!post) return { title: "Article Not Found | Kanthalloor Safari & Stay" };
  const url = `https://ilovekanthalloor.com/blog/${post.id}`;
  return {
    title: `${post.title} — Travel Guide`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Kanthalloor Travel Guide`,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "Kanthalloor Safari & Stay",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = ARTICLES[id];
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": "2025-08-01T00:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Kanthalloor Safari & Stay",
      "url": "https://ilovekanthalloor.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kanthalloor Safari & Stay",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ilovekanthalloor.com/kanthal.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ilovekanthalloor.com/blog/${post.id}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ilovekanthalloor.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://ilovekanthalloor.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://ilovekanthalloor.com/blog/${post.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">

        {/* Hero */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover blur-sm scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112918] via-[#112918]/80 to-[#112918]/50" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-5">
              <Link href="/" className="hover:text-[#4ade80]">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#4ade80]">Blog</Link>
              <span>/</span>
              <span className="text-[#4ade80] truncate">{post.title}</span>
            </div>
            <span className="inline-block bg-[#1a4329]/80 border border-[#4ade80]/30 text-[#4ade80] text-xs font-bold rounded-full px-3 py-1 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-gray-300 border-t border-white/10 pt-4">
              <span>By {post.author}</span>
              <span>•</span><span>{post.date}</span>
              <span>•</span><span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* Highlights */}
          <div className="bg-green-50 border border-green-200 rounded-[2rem] p-6 sm:p-8 mb-10 shadow-sm">
            <h3 className="text-base font-black text-[#1a4329] mb-4 flex items-center gap-2">
              <i className="fas fa-leaf text-[#2e7d32]" />
              Key Highlights
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {post.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#2e7d32] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            {post.content.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          {/* Image */}
          <div className="my-10 rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-auto max-h-[480px] object-cover" />
            <p className="text-center text-xs text-gray-400 py-2.5 bg-[#f9faf8] border-t border-gray-100">
              Marayoor — Nature, Heritage and Adventure in Kerala&apos;s Western Ghats.
            </p>
          </div>

          {/* CTA card */}
          <div className="bg-[#153420] rounded-[2rem] p-8 text-white shadow-xl mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-black mb-2">Ready to Experience Marayoor?</h4>
              <p className="text-gray-300 text-sm">
                Book Jeep Safari, stays and custom itineraries directly with our local team.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="https://wa.me/919188211822?text=Hi%2C%20I%20read%20your%20blog%20and%20want%20to%20plan%20a%20trip!" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white font-bold text-xs px-5 py-3 rounded-full shadow-md transition-all">
                <i className="fab fa-whatsapp" />WhatsApp Us
              </a>
              <a href="tel:+918281141813"
                className="inline-flex items-center gap-2 bg-white text-[#112918] font-bold text-xs px-5 py-3 rounded-full shadow-md transition-all">
                <i className="fa-solid fa-phone" />Call Now
              </a>
            </div>
          </div>

          {/* Back */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#1a4329] font-bold text-sm hover:gap-3 transition-all">
              <i className="fas fa-arrow-left" />Back to All Articles
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
