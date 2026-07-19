export interface Room {
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images: string[];
  occupancy: string;
  amenities: string[];
  details: {
    breakfast: string;
    meals?: string;
    cleaning: string;
    laundry?: string;
    extraCharges?: string[];
    understanding?: string[];
  };
}

export const rooms: Room[] = [
  {
    slug: "double-room",
    name: "Double Room",
    price: "₹ 2,500",
    occupancy: "double occupancy",
    shortDescription: "A serene and comfortable space designed for quiet reflection and rest.",
    fullDescription: "1 Double Rooms at ₹ 2350/night for double occupancy, inclusive of Breakfast. Both rooms have attached bathroom with geysers.",
    image: "/images/rooms/double-room/room-1.jpeg",
    images: ["/images/rooms/double-room/room-1.jpeg", "/images/rooms/double-room/bathroom.jpeg", "/images/rooms/double-room/room-2.jpeg"],
    amenities: ["Attached Bathroom", "Geyser", "Breakfast Included", "Wi-Fi"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: ₹350/person, Veg: ₹ 250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      laundry: "We charge ₹200/load (No of clothes per load should be 5-8). Our housekeeping attendant will machine wash the clothes. Then she will hang them to dry on the terrace. It is the responsibility of the guest to collect the clothes from the hanger (on the terrace).",
      extraCharges: [
        "For extra bed,₹450 and extra mattress,₹300 will be charged",
        "For a child under 5 years accompanying the parents, there is no charge."
      ]
    }
  },
  {
    slug: "twin-bed-room",
    name: "Twin Bed Room",
    price: "₹ 2,500",
    occupancy: "double occupancy",
    shortDescription: "Warm wooden accents and natural light create an inviting atmosphere.",
    fullDescription: "1 Twin Bed Rooms at ₹2350/night for double occupancy, inclusive of Breakfast. Both rooms have attached bathroom with geysers.",
    image: "/images/rooms/twin-bed-room/room-1.webp",
    images: ["/images/rooms/twin-bed-room/room-1.webp"],
    amenities: ["Attached Bathroom", "Geyser", "Breakfast Included", "Wi-Fi"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: ₹350/person, Veg: ₹250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      extraCharges: [
        "For extra bed, Rs.450 and extra mattress, Rs.300 will be charged",
        "For a child under 5 years accompanying the parents, there is no charge."
      ]
    }
  },
  {
    slug: "family-room",
    name: "Family Room",
    price: "₹ 3,500",
    occupancy: "up to 4 people",
    shortDescription: "Our premium offering, blending traditional comfort with intentional design.",
    fullDescription: "One Family room Rs 3200/night (inclusive of breakfast). Features a Queen size bed and 2 single beds.",
    image: "/images/rooms/family-room/room-1.webp",
    images: ["/images/rooms/family-room/room-1.webp"],
    amenities: ["Queen Size Bed", "2 Single Beds", "Attached Bathroom", "Geyser", "Breakfast Included"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your bed charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: ₹350/person, Veg: ₹250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      extraCharges: [
        "Queen size bed and 2 single beds",
        "Extra bed/s can be added if needed",
        "For extra bed, Rs.450 and extra mattress, Rs.300 will be charged",
        "For a child under 5 years accompanying the parents, there is no charge."
      ]
    }
  },
  {
    slug: "multi-bedded-room",
    name: "Multi-Bedded Room",
    price: "₹ 3,200 or ₹800/bed",
    occupancy: "up to 4 people",
    shortDescription: "Ideal for families or groups seeking a comfortable, shared space.",
    fullDescription: "One Multi-Bedded Room at ₹3,200/night for up to 4 people, inclusive of Breakfast. Features 4 single beds and an attached bathroom with geyser.",
    image: "/images/rooms/multi-bedded-room/dorm-1.jpeg",
    images: ["/images/rooms/multi-bedded-room/dorm-1.jpeg"],
    amenities: ["4 Single Beds", "Attached Bathroom", "Geyser", "Breakfast Included"],
    details: {
      breakfast: "We offer breakfast from 7:30 to 9:00 am as complimentary with your room charge. Options include Continental, Puri Bhaaji, or Alu Paratha. (Continental includes – Bread/Toast/Pancakes with butter & jam, Cornflake/Oats, Eggs, tea).",
      meals: "Order at least 4 hours in advance. We serve simple home cooked food. Non-veg: ₹350/person, Veg: ₹250/person.",
      cleaning: "If you need your room to be cleaned please inform the housekeeping assistant before you leave the room.",
      extraCharges: [
        "For an extra mattress, ₹300 will be charged."
      ]
    }
  }
];
