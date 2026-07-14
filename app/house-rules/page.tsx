import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Home,
  ClipboardCheck,
  Sparkles,
  Trash2,
  Bath,
  Wind,
  Ban,
  Bed,
  Users,
  Moon,
  Lock,
  Heart
} from "lucide-react";

export const metadata = {
  title: "House Rules | Pine Air Shillong",
  description: "Welcome to Pine Air B&B! To ensure a pleasant stay for all guests, kindly observe our house rules regarding property care, quiet hours, safety, and more.",
};

const rules = [
  {
    id: 1,
    title: "Handle Pine Air B&B Property with Care",
    icon: Home,
    items: [
      "Guests will be charged for any damage, breakage or loss of Pine Air B&B property.",
      "Please report any accidental damage immediately to the staff.",
      { text: "Please keep room keys safely. Loss of keys will result in additional charge.", highlight: true }
    ]
  },
  {
    id: 2,
    title: "Room Inspection Before Check-out",
    icon: ClipboardCheck,
    items: [
      "Rooms will be inspected by Pine Air B&B staff before the final check-out process is completed.",
      "Charges, if any, for damages or missing items will be communicated at that time."
    ]
  },
  {
    id: 3,
    title: "Room Cleaning",
    icon: Sparkles,
    items: [
      "If you want your room to be cleaned, please inform the staff in advance and leave the key with the staff when you leave the room.",
      "For guests who have already checked-in and who go out for the day, we request them to return to Pine Air latest by 10:30 pm and to inform the staff in advance about any delay in returning."
    ]
  },
  {
    id: 4,
    title: "Waste Disposal",
    icon: Trash2,
    items: [
      "Guests must use the wet and dry dustbins provided for disposing of all waste.",
      "Do not discard waste in the room, bathroom, or toilets that is meant for the dustbins.",
      { text: "If waste is found littered outside the designated bins, an additional cleaning charge will apply.", highlight: true }
    ]
  },
  {
    id: 5,
    title: "Bathroom Etiquette",
    icon: Bath,
    items: [
      "Please hang wet towels on the wall mounted rack provided in the bathroom.",
      "Do not leave wet clothes on furniture or bedding.",
      { text: "Use water conservatively and SWITCH OFF the Geyser before you leave the room.", highlight: true }
    ]
  },
  {
    id: 6,
    title: "Drying Clothes",
    icon: Wind,
    items: [
      { text: "Drying clothes inside the room is not permitted.", highlight: true },
      "Please use the clothes drying rack in the bathroom or the clothes drying area on the terrace.",
      "A laundry basket is provided for used towels and linen."
    ]
  },
  {
    id: 7,
    title: "Smoking",
    icon: Ban,
    items: [
      "No smoking inside the room.",
      { text: "Smoking on the terrace and balcony is allowed. Throwing of cigarette buds on the terrace and from the balcony will attract charges.", highlight: true }
    ]
  },
  {
    id: 8,
    title: "Respect Hotel Furniture & Linen",
    icon: Bed,
    items: [
      "Do not move heavy furniture without permission.",
      "Do not use bath towels, bed sheets or quilt covers for purposes other than intended."
    ]
  },
  {
    id: 9,
    title: "Visitors",
    icon: Users,
    items: [
      "Only registered guests are allowed to stay overnight.",
      "Visitors must register at reception."
    ]
  },
  {
    id: 10,
    title: "Quiet Hours",
    icon: Moon,
    items: [
      { text: "Kindly maintain low noise levels between 10:00 PM and 7:00 AM, so that other guests can enjoy a peaceful stay and neighbours are not disturbed.", highlight: true }
    ]
  },
  {
    id: 11,
    title: "Safety",
    icon: Lock,
    items: [
      { text: "Switch off lights and other electrical appliances when leaving the room.", highlight: true },
      "Keep doors locked whenever you leave the room.",
      "Do not leave cash, wallet or valuables in the room."
    ]
  }
];

export default function HouseRulesPage() {
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
            Guest Information
          </div>
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-tight text-pine-charcoal">
            House Rules
          </h1>
          <p className="text-pine-gray font-light leading-relaxed">
            Welcome! To ensure a pleasant and comfortable stay for all guests, we kindly request you to observe the following guidelines:
          </p>
        </div>

        <div className="space-y-6">
          {rules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.id}
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
                      {String(rule.id).padStart(2, "0")}.
                    </span>
                    {rule.title}
                  </h2>
                  <ul className="space-y-3">
                    {rule.items.map((item, idx) => {
                      const isHighlight = typeof item === "object" ? item.highlight : false;
                      const text = typeof item === "object" ? item.text : item;

                      return (
                        <li
                          key={idx}
                          className={`text-sm md:text-[15px] font-light leading-relaxed flex items-start ${
                            isHighlight
                              ? "text-rose-600 font-normal bg-rose-50/50 p-2.5 rounded-lg border-l-2 border-rose-500"
                              : "text-pine-gray"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mt-2.5 mr-3 shrink-0 ${isHighlight ? "bg-rose-500" : "bg-pine-accent/40"}`}></span>
                          <span className="flex-1">{text}</span>
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
            <h3 className="font-serif text-2xl uppercase tracking-wider text-white">Thank You</h3>
            <p className="text-sm md:text-base font-light text-white/80 leading-relaxed">
              We appreciate your cooperation in keeping Pine Air B&B safe, clean, and peaceful for everyone. Have a wonderful stay with us!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
