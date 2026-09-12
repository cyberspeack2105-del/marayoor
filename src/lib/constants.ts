export const SITE_NAME = "Kanthalur";
export const SITE_TAGLINE = "Kerala's Hidden Highland Paradise";
export const SITE_URL = "https://kanthalur.in";

export const NAV_LINKS = [
  { label: "Home",             href: "/" },
  { label: "Explore",          href: "/explore" },
  { label: "Plan Your Visit",  href: "/plan-your-visit" },
  { label: "About",            href: "/about" },
  { label: "Packages",         href: "/packages" },
  { label: "Contact",          href: "#contact" },
];

export const STATS = [
  { value: "5,000", unit: "ft", label: "Above Sea Level" },
  { value: "54", unit: "km", label: "From Munnar" },
  { value: "98%", unit: "", label: "Literacy Rate" },
  { value: "50k+", unit: "", label: "Annual Visitors" },
];

export const DESTINATIONS = [
  {
    id: "anaimudi-shola",
    title: "Anaimudi Shola",
    tag: "Wildlife",
    description: "Ancient evergreen forests shrouded in rolling white mist — a primeval wilderness of the high Western Ghats.",
    icon: "park",
  },
  {
    id: "keezhanthoor-falls",
    title: "Keezhanthoor Waterfalls",
    tag: "Nature",
    description: "Pristine cascades hidden within dense highland foliage, accessible via scenic jungle trails.",
    icon: "water",
  },
  {
    id: "bhramaram-point",
    title: "Bhramaram Viewpoint",
    tag: "Viewpoint",
    description: "Breath-taking panoramic views of deep valleys and rugged cliffs of the Western Ghats.",
    icon: "landscape",
  },
  {
    id: "chinnar-sanctuary",
    title: "Chinnar Wildlife Sanctuary",
    tag: "Wildlife",
    description: "One of South India's richest wildlife habitats along the Kerala-Tamil Nadu border.",
    icon: "forest",
  },
  {
    id: "marayoor-dolmens",
    title: "Marayoor Dolmens",
    tag: "Heritage",
    description: "Ancient megalithic burial chambers (Muniyaras) dating back thousands of years.",
    icon: "account_balance",
  },
  {
    id: "pambar-river",
    title: "Pambar River",
    tag: "Nature",
    description: "The second major east-flowing river in Kerala, enriching fertile valleys and farms.",
    icon: "waves",
  },
];

export const EXPERIENCES = [
  {
    id: "jeep-safari",
    title: "Jeep Safari",
    description: "Venture through mountain passes, Marayoor jaggery farms, sandalwood forests and scenic valleys with expert guides.",
    icon: "directions_car",
    tag: "Adventure",
    image: "/stays/res6.jpeg",
  },
  {
    id: "trekking",
    title: "Trekking & Camping",
    description: "Explore highland trails through shola forests, camp under stars and wake up to mist-covered valleys at 5,000 ft.",
    icon: "hiking",
    tag: "Outdoor",
    image: "/stays/res5.jpeg",
  },
  {
    id: "farm-visits",
    title: "Apple Farm Visits",
    description: "Walk through Kerala's only apple orchards. Pick apples, plums and strawberries during harvest season.",
    icon: "agriculture",
    tag: "Agri-Tourism",
    image: "/stays/res5.jpeg",
  },
  {
    id: "waterfall",
    title: "Waterfall Excursions",
    description: "Discover hidden waterfalls tucked inside dense forests — a rewarding trek through untouched highland wilderness.",
    icon: "water_drop",
    tag: "Nature",
    image: "/waterfals.png",
  },
  {
    id: "tribal-culture",
    title: "Muthuvan Tribe Culture",
    description: "Meet the indigenous Muthuvan tribe, learn their centuries-old customs and experience authentic highland hospitality.",
    icon: "people",
    tag: "Culture",
    image: "/stays/res4.jpeg",
  },
  {
    id: "organic-farm",
    title: "Organic Farm Stays",
    description: "Live on a working farm, tend to cardamom, garlic and vegetable crops, savour fresh farm-to-table meals.",
    icon: "eco",
    tag: "Farm Life",
    image: "/stays/res3.jpeg",
  },
];

export const ACCOMMODATION = [
  {
    id: "mud-houses",
    title: "Traditional Mud Houses",
    type: "Heritage",
    description: "Authentic highland living in centuries-old mud and stone homes — cool in summer, warm in winter.",
    tag: "Most Authentic",
    image: "/stays/res2.jpeg",
  },
  {
    id: "homestays",
    title: "Homestays",
    type: "Local",
    description: "Stay with a local family, eat home-cooked highland meals and experience warm Kanthalur hospitality.",
    tag: "Most Popular",
    image: "/stays/res3.jpeg",
  },
  {
    id: "cottages",
    title: "Cottages",
    type: "Boutique",
    description: "Privately nestled cottages amid apple orchards and cardamom gardens with uninterrupted mountain views.",
    tag: "Best Views",
    image: "/stays/res1.jpeg",
  },
  {
    id: "resorts",
    title: "Resorts",
    type: "Luxury",
    description: "Modern resorts designed to blend into the landscape — premium amenities and curated adventure packages.",
    tag: "Premium",
    image: "/stays/res4.jpeg",
  },
];

export const TRAVEL_INFO = {
  routes: [
    {
      from: "From Kerala",
      steps: [
        "Kochi to Munnar to Marayoor to Kanthalur",
        "Munnar to Marayoor to Kanthalur (approx 50 km)",
      ],
    },
    {
      from: "From Tamil Nadu",
      steps: [
        "Udumalpet to Chinnar Wildlife Sanctuary to Marayoor to Kanthalur (approx 54 km)",
      ],
    },
  ],
  network: "BSNL and Jio are the only reliable mobile networks. Carry a SIM from either provider.",
  bestTime: "October to February — cool weather, apple harvest season, crystal-clear skies.",
  climate: "Cool and misty year-round. Temperatures range 5 to 22 degrees Celsius. Carry light woolens.",
};

export const CROPS = [
  { name: "Apple", icon: "apple" },
  { name: "Plum", icon: "nutrition" },
  { name: "Peach", icon: "spa" },
  { name: "Strawberry", icon: "local_florist" },
  { name: "Cardamom", icon: "grass" },
  { name: "Coffee", icon: "coffee" },
  { name: "Garlic", icon: "eco" },
  { name: "Potato", icon: "agriculture" },
  { name: "Carrot", icon: "nature" },
  { name: "Coconut", icon: "park" },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Krishnamurthy",
    location: "Bangalore",
    rating: 5,
    text: "Kanthalur is unlike anything I have experienced in Kerala. The morning mist, apple orchards, the silence — it felt like we had entered an alpine paradise.",
    date: "October 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Priya & Vivek Nair",
    location: "Kochi",
    rating: 5,
    text: "We came for our honeymoon and left with hearts full. The homestay was beautifully run, the food was outstanding, and the sunrise over the valley was breathtaking.",
    date: "November 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Rohan Mehta",
    location: "Mumbai",
    rating: 5,
    text: "The jeep safari through the high-altitude passes was the trip highlight. Our guide knew every trail. Chinnar forest is absolutely magical.",
    date: "December 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Sneha Thomas",
    location: "Chennai",
    rating: 5,
    text: "Peaceful, pure and profoundly beautiful. The Muthuvan tribe visit was deeply moving. Already planning my next trip to catch the apple harvest season.",
    date: "January 2025",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Santhosh Kumar",
    location: "Trivandrum",
    rating: 5,
    text: "Stayed at the mud house — absolutely loved the experience. Cool weather, fresh organic food, and the most welcoming hosts. Will definitely come back!",
    date: "February 2025",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Deepa Raj",
    location: "Coimbatore",
    rating: 5,
    text: "An unforgettable experience! The apple and plum orchards, the campfire at night, the misty mornings — Kanthalur is truly a hidden paradise of Kerala.",
    date: "November 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Anil & Meena Sharma",
    location: "Hyderabad",
    rating: 5,
    text: "Booked through Kanthalur Tourism and had a fantastic trip. The jeep safari was thrilling and the views of Anamudi were breathtaking. Highly professional team.",
    date: "December 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Ranjit Pillai",
    location: "Thrissur",
    rating: 5,
    text: "One of the best travel experiences I've had in Kerala. The cottage was cozy and the mountain views were stunning. Great service from the local team.",
    date: "October 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Kavitha Menon",
    location: "Ernakulam",
    rating: 5,
    text: "We visited during apple season — the orchards were incredible. Our host was very helpful and the food was amazing. Perfect weekend escape from the city.",
    date: "November 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Mohammed Ashraf",
    location: "Calicut",
    rating: 5,
    text: "The mud house experience was truly authentic. Woke up to thick mist, birds chirping, and fresh mountain air. A must-visit for anyone who loves nature.",
    date: "January 2025",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Suresh & Family",
    location: "Palakkad",
    rating: 5,
    text: "Perfect family holiday! Kids loved the apple picking and the farm walk. The accommodation was clean and comfortable. Will surely recommend to all friends.",
    date: "December 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Lakshmi Iyer",
    location: "Bangalore",
    rating: 5,
    text: "Kanthalur Tourism team was very responsive and arranged everything perfectly. The jeep safari through the mountain passes was the highlight of our trip!",
    date: "February 2025",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Thomas Mathew",
    location: "Kottayam",
    rating: 5,
    text: "Stayed for 2 nights at the cottage. The view from the balcony was worth every penny. Calm, clean, and absolutely beautiful place. Loved every moment.",
    date: "October 2024",
    profileUrl: "https://maps.google.com",
  },
  {
    name: "Anitha & Biju",
    location: "Kannur",
    rating: 5,
    text: "A magical place — especially the strawberry fields and the waterfall trek. The local operator was very helpful and the stay was memorable. 5 stars!",
    date: "January 2025",
    profileUrl: "https://maps.google.com",
  },
];

export const FAQS = [
  {
    question: "What is the best time to visit Kanthalur?",
    answer: "October to February is ideal — the weather is cool, orchards are full of fruit, and the skies are crystal clear. The apple harvest season (October to November) is particularly magical. Avoid June to August due to heavy monsoon rains.",
  },
  {
    question: "How do I reach Kanthalur?",
    answer: "Kanthalur is accessible only by road. From Kerala: Kochi to Munnar to Marayoor to Kanthalur (approx 50 km from Munnar). From Tamil Nadu: Udumalpet to Chinnar Wildlife Sanctuary to Marayoor to Kanthalur (approx 54 km). The drive through Chinnar forest is itself a spectacular experience.",
  },
  {
    question: "Which mobile networks work in Kanthalur?",
    answer: "Only BSNL and Jio provide reliable mobile network coverage. We strongly advise carrying a SIM card from either of these providers before arriving.",
  },
  {
    question: "What accommodation options are available?",
    answer: "Options range from traditional mud houses and local homestays to modern cottages and full-service resorts, catering to every budget. Homestays are especially recommended for an authentic highland experience.",
  },
  {
    question: "What fruits and crops can I see or buy?",
    answer: "Kanthalur is Kerala's only apple village. You can also find plums, peaches, strawberries, oranges, cardamom, garlic, potatoes, carrots and coffee depending on the season.",
  },
  {
    question: "Is Kanthalur suitable for families?",
    answer: "Absolutely. Farm visits, waterfall excursions, mild trekking routes and the open village atmosphere make it ideal for families with children of all ages.",
  },
  {
    question: "Are there medical facilities nearby?",
    answer: "There is a Primary Health Centre in Kanthalur. Private hospitals are within approximately 10 km. It is advisable to carry basic medicines for altitude and cold-related conditions.",
  },
];

export const BLOG_POSTS = [
  {
    id: "apple-harvest-kanthalur",
    title: "Inside Kerala's Only Apple Village During Harvest Season",
    excerpt: "Every October, Kanthalur transforms. The orchards turn gold and red, the air smells of sweet fruit, and the entire village comes alive with the joy of harvest.",
    date: "October 12, 2024",
    readTime: "6 min read",
    category: "Culture",
    image: "/apple.jpeg",
  },
  {
    id: "jeep-safari-guide",
    title: "The Ultimate Guide to Kanthalur Jeep Safari",
    excerpt: "Narrow mountain trails, dense shola forests, hidden waterfalls — our guide to getting the most out of a full-day jeep safari through Marayoor and Chinnar.",
    date: "November 5, 2024",
    readTime: "8 min read",
    category: "Adventure",
    image: "/stays/res5.jpeg",
  },
  {
    id: "dolmens-of-marayoor",
    title: "3000 Years of Silence: The Dolmens of Marayoor",
    excerpt: "Standing stones, ancient burial chambers, and mysteries that archaeologists are still unravelling — a short drive from Kanthalur.",
    date: "December 18, 2024",
    readTime: "5 min read",
    category: "Heritage",
    image: "/stays/res6.jpeg",
  },
];

export const PACKAGES = [
  {
    id: "weekend",
    title: "Weekend Escape",
    duration: "2 Nights / 3 Days",
    price: "Rs 8,999",
    priceNote: "per person",
    highlight: "Best Seller",
    color: "forest",
    includes: [
      "Accommodation in Premium Homestay",
      "Daily Breakfast & Dinner",
      "Guided Village Walk",
      "Apple Farm Visit",
      "Sunset Viewpoint Tour",
    ],
  },
  {
    id: "family",
    title: "Family Adventure",
    duration: "3 Nights / 4 Days",
    price: "Rs 14,999",
    priceNote: "per person",
    highlight: "Family Favourite",
    color: "olive",
    includes: [
      "Family Cottage Stay",
      "All Meals Included",
      "Jeep Safari (Full Day)",
      "Cooking Class with Local Chef",
      "Children's Farm Activities",
      "Campfire & Storytelling Night",
    ],
  },
  {
    id: "honeymoon",
    title: "Romantic Retreat",
    duration: "3 Nights / 4 Days",
    price: "Rs 22,999",
    priceNote: "per couple",
    highlight: "Most Romantic",
    color: "accent",
    includes: [
      "Luxury Suite with Mountain View",
      "Candle-lit Private Dinner",
      "Nature Walk at Dawn",
      "Spa & Wellness Session",
      "Private Jeep Tour",
      "Farewell Fruit Basket",
    ],
  },
  {
    id: "adventure",
    title: "Adventure Explorer",
    duration: "4 Nights / 5 Days",
    price: "Rs 18,499",
    priceNote: "per person",
    highlight: "Thrill Seeker",
    color: "forest",
    includes: [
      "Trekker's Cabin Stay",
      "Full-Day Jeep Safari",
      "Chinnar Wildlife Trek",
      "Night Camping in Forest",
      "River Walk & Waterfall Visit",
      "Rock Climbing Session",
    ],
  },
];

export const HISTORY_TIMELINE = [
  {
    year: "Ancient Times",
    title: "Megalithic Settlers",
    description: "Evidence of ancient habitation through dolmens (Muniyaras), cave paintings and archaeological remains scattered across the highlands.",
  },
  {
    year: "Medieval Era",
    title: "Anju Nadu",
    description: "Known as Anju Nadu (Five Nadus). Communities from Madurai settled here, bringing rich Tamil traditions and Hindu customs that continue today.",
  },
  {
    year: "Centuries Old",
    title: "Sacred Temples",
    description: "Ancient places of worship including a centuries-old Shiva Temple and the sacred Kovil Kadavu Kanthalur Perumala Sri Rama Cave Temple.",
  },
  {
    year: "Traditional",
    title: "Muthuvan Tribe",
    description: "The indigenous Muthuvan tribe has lived in the interior forests for generations, preserving unique customs, traditions and cultural practices.",
  },
  {
    year: "Modern Era",
    title: "Apple Cultivation",
    description: "Experimental farming introduced apple cultivation — Kanthalur became Kerala's first and only apple-growing region.",
  },
  {
    year: "Today",
    title: "Tourism Awakens",
    description: "Word spreads of this hidden highland paradise. Travellers from across India discover Kanthalur's extraordinary beauty and warm hospitality.",
  },
];

export const GALLERY_IMAGES = [
  { title: "Apple Harvest", stat: "Oct-Feb", description: "Kerala's only apple village — orchards turn golden during harvest season.", icon: "apple", image: "/stays/res5.jpeg" },
  { title: "Morning Mist", stat: "5,000 ft", description: "At 5000 ft above sea level, mornings begin with ethereal mist and golden light.", icon: "cloud", image: "/jeep/jeep 9.png" },
  { title: "Shola Forests", stat: "12+ Trails", description: "Guided routes through ancient evergreen shola forests and hidden waterfalls.", icon: "park", image: "/stays/res5.jpeg" },
  { title: "Wildlife", stat: "Chinnar", description: "One of South India's richest wildlife habitats, just 15 km away.", icon: "pets", image: "/stays/res7.jpeg" },
  { title: "Jeep Trails", stat: "54 km", description: "Off-road adventures through valleys, sandalwood forests and tribal villages.", icon: "directions_car", image: "/stays/res7.jpeg" },
  { title: "Farm Life", stat: "120+ Farms", description: "Organic farms growing apples, cardamom, garlic and seasonal vegetables.", icon: "agriculture", image: "/stays/res3.jpeg" },
];
