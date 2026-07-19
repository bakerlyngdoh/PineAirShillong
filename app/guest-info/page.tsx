import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Coffee,
  Utensils,
  Wind,
  Wifi,
  Car,
  CreditCard,
  Heart,
  Dog,
  Ban,
  Clock
} from "lucide-react";

export const metadata = {
  title: "Guest Information | Pine Air Shillong",
  description: "Important information for guests staying at Pine Air B&B including meals, laundry, amenities, and policies.",
};

const infos = [
  {
    id: 1,
    title: "Complimentary Breakfast",
    icon: Coffee,
    items: [
      "A complimentary CONTINENTAL Breakfast is included with your stay.",
      "We can also provide PURI BHAJI or ALU PARATHA as an alternative.",
      { text: "We request you to please inform the staff latest by 6:00 PM on the day you check in for alternative breakfast options.", highlight: true }
    ]
  },
  {
    id: 2,
    title: "Home-cooked Meals",
    icon: Utensils,
    items: [
      "We can provide simple home-cooked meals (lunch/dinner).",
      { text: "Meals must be informed/ordered at least 4 hours in advance.", highlight: true },
      "Vegetarian: Rice, Dal, 2 Vegetable items, Salad, Chutney/Pickle, Papad (₹250/meal)",
      "Non-Vegetarian: Rice, Dal, Meat (Chicken/Fish), Vegetable item, Salad, Chutney/Pickle (₹350/meal)",
      "Roti: Please inform if you need Roti in advance and how many."
    ]
  },
  {
    id: 3,
    title: "Laundry Service",
    icon: Wind,
    items: [
      "We wash, dry and fold clothes.",
      "We charge ₹200/load and there should be 5-8 clothes per load."
    ]
  },
  {
    id: 4,
    title: "Power Backup Generator",
    icon: Clock,
    items: [
      "We have a heavy-duty generator because the electrical power supply can be erratic during the winter months.",
      { text: "The generator is switched on when required, but we cannot keep it running throughout the night.", highlight: true }
    ]
  },
  {
    id: 5,
    title: "Wi-Fi & Connectivity",
    icon: Wifi,
    items: [
      "We provide free high-speed Wi-Fi at 100 Mbps."
    ]
  },
  {
    id: 6,
    title: "Parking",
    icon: Car,
    items: [
      "Free parking is available for all our guests."
    ]
  },
  {
    id: 7,
    title: "Serendipity Café",
    icon: Coffee,
    items: [
      "Pine Air provides the space for Serendipity café and it functions as a separate entity.",
      "The café serves only local (Khasi) snacks, lunch and a variety of teas from 11:00 AM - 7:00 PM, Monday to Saturday.",
      "Ms. Darhmingliani (Ming) is the owner and manager, and you may contact her if needed at 87874-41451."
    ]
  },
  {
    id: 8,
    title: "Nearby ATM",
    icon: CreditCard,
    items: [
      "There is only one SBI ATM located just ahead of Gateau – Bakes and More BAKERY (walking distance)"
    ]
  },
  {
    id: 9,
    title: "Our Dogs",
    icon: Dog,
    items: [
      "Witty, Lexi (females) and Phup-Phup (male) are the 3 dogs cared for at Pine Air. Many of our guests have enjoyed their company, especially Phup-phup the superstar.",
      "For guests who are not comfortable with dogs or who have cynophobia, please inform us beforehand so we can keep the dogs in their enclosures before you arrive and during your stay.",
      { text: "Guests should also inform the staff if they need to go out after 8:00 PM or when they arrive at Pine Air after 8:00 PM.", highlight: true }
    ]
  },
  {
    id: 10,
    title: "Booking Cancellation Charge",
    icon: Ban,
    items: [
      "Full Refund: For cancellations made 30 days or more prior to the check in date.",
      "50% Refund: For cancellations made between 7 and 29 days prior to the check in date.",
      { text: "No Refund: For cancellations made within 6 days of the check in date.", highlight: true }
    ]
  }
];

export default function GuestInfoPage() {
  return (
    <div className="min-h-screen bg-pine-bone pb-20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-pine-bone/80 backdrop-blur-md border-b border-pine-primary/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Link
            href="/"
            className="group flex items-center text-pine-gray hover:text-pine-accent transition-colors"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-widest uppercase font-medium">Back to Home</span>
          </Link>
          <div className="hidden md:block">
            <Image
              src="/logo.webp"
              alt="Pine Air Logo"
              width={50}
              height={50}
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-16 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pine-accent/10 text-pine-accent text-xs font-semibold uppercase tracking-wider">
            Important Information
          </div>
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-tight text-pine-charcoal">
            Guest Information
          </h1>
          <p className="text-pine-gray font-light leading-relaxed">
            Everything you need to know to make your stay at Pine Air comfortable and enjoyable.
          </p>
        </div>

        <div className="space-y-6">
          {infos.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.id}
                className="bg-white rounded-2xl border border-pine-primary/5 shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6 hover:shadow-md transition-shadow"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-pine-mist/40 border border-pine-primary/5 flex items-center justify-center shrink-0 text-pine-accent">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <h2 className="font-serif text-xl text-pine-charcoal tracking-wide flex items-center gap-3">
                    <span className="text-sm text-pine-accent font-sans font-semibold">
                      {String(info.id).padStart(2, "0")}.
                    </span>
                    {info.title}
                  </h2>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => {
                      const isHighlight = typeof item === "object" ? item.highlight : false;
                      const text = typeof item === "object" ? item.text : item;

                      // Match label before colon (e.g. "Full Refund:", "Vegetarian:"), excluding time strings like "8:00 PM"
                      const colonMatch = text.match(/^([^:]+?)(?<!\d):(.*)$/);

                      return (
                        <li
                          key={idx}
                          className={`text-sm md:text-[15px] font-light leading-relaxed flex items-start ${isHighlight
                            ? "text-pine-charcoal font-medium bg-pine-accent/10 p-2.5 rounded-lg border-l-2 border-pine-accent"
                            : "text-pine-gray"
                            }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mt-2.5 mr-3 shrink-0 ${isHighlight ? "bg-pine-accent" : "bg-pine-accent/40"}`}></span>
                          <span className="flex-1">
                            {colonMatch ? (
                              <>
                                <strong className="font-bold text-pine-charcoal">{colonMatch[1]}:</strong>
                                {colonMatch[2]}
                              </>
                            ) : (
                              text
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Thank You card */}
        <div className="mt-16 bg-pine-deep text-white rounded-3xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pine-accent/10 rounded-full blur-[60px] pointer-events-none"></div>
          <div className="relative z-10 max-w-md mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-pine-accent">
              <Heart size={24} className="fill-current" />
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-wider text-white">We&apos;re here for you</h3>
            <p className="text-sm md:text-base font-light text-white/80 leading-relaxed">
              If you have any further questions or special requests, please don&apos;t hesitate to reach out to our staff.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
