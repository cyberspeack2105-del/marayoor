"use client";

const WA_ROOMS = "https://wa.me/919188211822?text=Hi%20Sasikumar%2C%20I%20would%20like%20to%20check%20room%20availability%20at%20Kanthalloor%20Safari%20%26%20Stay!";

const ROOMS = [
  {
    img: "/stays/res3.jpeg",
    alt: "Cozy nature stay room Kanthalloor",
    name: "Deluxe Nature Room",
    desc: "Spacious room with beautiful views of Kanthalloor's landscape. Ideal for couples and families.",
    facilities: ["Private Bathroom", "Mountain View", "Free Wi-Fi", "Room Service"],
    guests: 2,
  },
  {
    img: "/stays/res1.jpeg",
    alt: "Premium room stay Kanthalloor",
    name: "Premium Stay Room",
    desc: "A premium room offering a peaceful retreat with modern comforts amidst the green hills.",
    facilities: ["En-suite Bathroom", "Garden View", "Hot Water", "Parking"],
    guests: 3,
  },
  {
    img: "/stays/res4.jpeg",
    alt: "Family room stay Kanthalloor",
    name: "Family Stay Room",
    desc: "Spacious and comfortable room ideal for families exploring the Kanthalloor region.",
    facilities: ["Private Balcony", "Forest View", "Free Wi-Fi", "Free Parking"],
    guests: 4,
  },
  {
    img: "/stays/res2.jpeg",
    alt: "Standard room Kanthalloor stay",
    name: "Standard Room",
    desc: "Clean and comfortable standard room — perfect for solo travellers and budget-friendly stays.",
    facilities: ["Shared Bathroom", "Nature View", "Parking", "Breakfast Available"],
    guests: 2,
  },
  {
    img: "/stays/res5.jpeg",
    alt: "Cozy double room Kanthalloor",
    name: "Cozy Double Room",
    desc: "A warm double room surrounded by nature — ideal for couples seeking a quiet getaway.",
    facilities: ["Private Bathroom", "Garden View", "Hot Water", "Wi-Fi"],
    guests: 2,
  },
  {
    img: "/stays/res6.jpeg",
    alt: "Hill view room Kanthalloor",
    name: "Hill View Room",
    desc: "Wake up to stunning hill views — this room brings you closest to the natural beauty of Kanthalloor.",
    facilities: ["Hill View Balcony", "Private Bathroom", "Hot Water", "Room Service"],
    guests: 2,
  },
  {
    img: "/stays/res7.jpeg",
    alt: "Group accommodation Kanthalloor",
    name: "Group Stay Room",
    desc: "Larger accommodation designed for groups and friends visiting Kanthalloor together.",
    facilities: ["Multiple Beds", "Common Bathroom", "Parking", "Kitchen Access"],
    guests: 6,
  },
  {
    img: "/stays/res8.jpeg",
    alt: "Luxury room Kanthalloor safari stay",
    name: "Luxury Room",
    desc: "Experience the best of Kanthalloor in our most comfortable and well-appointed room.",
    facilities: ["Luxury Bathroom", "Panoramic View", "AC", "Premium Bedding"],
    guests: 2,
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
            <span>🏡</span>
            <span>Stay Close to Nature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#112918] tracking-tight leading-tight">
            Comfortable Rooms.
            <br />
            <span className="text-[#2e7d32]">Peaceful Moments.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-[15px] leading-relaxed">
            After a day of exploring Kanthalloor, relax in a comfortable stay surrounded by nature.
          </p>
        </div>

        {/* Room cards — 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROOMS.map((room) => (
            <div key={room.name}
              className="group bg-[#f9faf8] rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={room.img} alt={room.alt}
                  onError={(e) => { (e.target as HTMLImageElement).src = "/stays/res3.jpeg"; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-sm font-extrabold text-[#112918] mb-1.5">{room.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">{room.desc}</p>

                {/* Facilities */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {room.facilities.slice(0, 3).map((f) => (
                    <span key={f}
                      className="text-[9px] font-semibold bg-green-50 text-[#1a4329] px-2 py-0.5 rounded-full border border-green-100">
                      {f}
                    </span>
                  ))}
                  {room.facilities.length > 3 && (
                    <span className="text-[9px] font-semibold bg-gray-50 text-gray-400 px-2 py-0.5 rounded-full border border-gray-100">
                      +{room.facilities.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTAs */}
                <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                  <a href={WA_ROOMS} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-bold text-white bg-[#1a4329] hover:bg-[#112918] py-2 rounded-full transition-all active:scale-95">
                    Check Availability
                  </a>
                  <a href={WA_ROOMS} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] flex items-center justify-center transition-colors group/wa flex-shrink-0">
                    <i className="fab fa-whatsapp text-[#25D366] group-hover/wa:text-white text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <p className="text-center text-sm text-gray-400 mt-8 font-medium">
          <i className="fas fa-info-circle mr-1.5 text-[#2e7d32]" />
          Room rates on enquiry. Contact Sasikumar directly for current availability and honest pricing.
        </p>

      </div>
    </section>
  );
}
