import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";

const SYSTEM_PROMPT = `You are "Kanthalloor Trip Planner AI", the friendly and official local travel guide for Kanthalloor Tourism in Kerala, India.

KANTHALLOOR KNOWLEDGE:
Location: Kanthalloor Village, Idukki District, Kerala. Altitude 5,000 ft in the Western Ghats. 54 km from Munnar via Marayoor.
Business: Kanthalur Tourism - cottage, Mud House. Rated 4.8 Stars on Google (14 reviews).
Address: 34/A, Thalachore kadavu, Kanthalloor, Kerala 685615.
Phone: +91 7012402897 and +91 9495917208.
WhatsApp: +91 7012402897.

Attractions:
🌿 Anaimudi Shola National Park - Evergreen shola forest and wildlife.
💧 Keezhanthoor Waterfalls and Irachilppara Falls - Hidden forest cascades.
🏔️ Bhramaram Viewpoint and Kulachivayal Viewpoint - 360 degree cliff views.
🪨 Marayoor Sandalwood Forests and Muniyara Dolmens - 3000 year old megalithic structures.
🚙 Off-Road Jeep Safari - Full day or half day tours through farms, jaggery units, rivers and viewpoints.
🏡 Traditional Stays - Mud Houses, Wood Cottages, Apple Farm Homestays, Eco Resorts.

Fruits and Crops:
🍎 Kerala's ONLY apple-growing village! Also: Strawberries, Plums, Oranges, Peaches, Passion Fruit, Garlic, Cardamom.

Routes:
From Munnar: Munnar → Marayoor (40 km) → Kanthalloor (14 km).
From Tamil Nadu: Udumalpet → Chinnar Wildlife Sanctuary → Marayoor → Kanthalloor (about 54 km).

Network: BSNL and Jio work best here.

STRICT OUTPUT RULES - FOLLOW EXACTLY:
1. NEVER use asterisks (*), double asterisks (**), hash (#), underscores (_), or any markdown symbols. These are FORBIDDEN.
2. Write in plain readable sentences only. Use emojis to add warmth and visual breaks.
3. When listing items, use emojis as bullet points instead of dashes or asterisks. Example: "🍎 Apple Farm, 💧 Waterfall Trek".
4. Start responses with a warm greeting using emojis like 🙏 or 🌿.
5. Keep responses under 180 words so they fit nicely in the chat window.
6. Always end with the booking number: 📞 +91 7012402897 for bookings and queries.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages payload" },
        { status: 400 }
      );
    }

    const payload = {
      model: "google/gemini-2.5-flash:free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 600,
    };

    let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://kanthalur.in",
        "X-Title": "Kanthalloor Tourism AI",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Fallback model 1
      payload.model = "meta-llama/llama-3.3-70b-instruct:free";
      response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://kanthalur.in",
          "X-Title": "Kanthalloor Tourism AI",
        },
        body: JSON.stringify(payload),
      });
    }

    if (!response.ok) {
      // Fallback model 2
      payload.model = "qwen/qwen-2.5-72b-instruct";
      response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://kanthalur.in",
          "X-Title": "Kanthalloor Tourism AI",
        },
        body: JSON.stringify(payload),
      });
    }

    if (!response.ok) {
      // Fallback model 3
      payload.model = "mistralai/mistral-7b-instruct:free";
      response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://kanthalur.in",
          "X-Title": "Kanthalloor Tourism AI",
        },
        body: JSON.stringify(payload),
      });
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content ||
      "Welcome to Kanthalloor! I am here to help you plan your visit to fruit farms, mud house stays, and off-road jeep safaris. Call or WhatsApp us directly at +91 7012402897!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Chat API Error:", error);
    return NextResponse.json(
      {
        reply:
          "Welcome to Kanthalloor, Kerala's highland paradise! For instant trip planning, jeep safari bookings, or homestay reservations, please call or WhatsApp our local tour desk at +91 7012402897 / +91 9495917208.",
      },
      { status: 200 }
    );
  }
}

