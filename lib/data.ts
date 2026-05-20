export const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Destination",
    href: "#destinations",
  },
  {
    label: "Itineraries",
    href: "#itineraries",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const destinations = [
  { name: "SERENGETI NATIONAL PARK", slug: "serengeti", featured: true },
  { name: "MAASAI MARA NATIONAL RESERVE", slug: "maasai-mara", featured: true },
  { name: "NGORONGORO CRATER", slug: "ngorongoro", featured: false },
  { name: "LAKE MANYARA NATIONAL PARK", slug: "lake-manyara", featured: false },
  { name: "TARANGIRE NATIONAL PARK", slug: "tarangire", featured: false },
  { name: "KILIMANAJARO NATIONAL PARK", slug: "kilimanjaro", featured: false },
  { name: "RUAHA NATIONAL PARK", slug: "ruaha", featured: false },
  { name: "MIKUMI NATIONAL PARK", slug: "mikumi", featured: false },
  { name: "KATAVI NATIONAL PARK", slug: "katavi", featured: false },
] as const;

export const itineraries = [
  {
    image: "/images/itineraries/card-1.jpg",
    park: "Arusha National Park",
    nights: "3 Nights",
    locations: "4 Locations",
    title: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari",
  },
  {
    image: "/images/itineraries/card-2.jpg",
    park: "Arusha National Park",
    nights: "8 Nights",
    locations: "4 Locations",
    title: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari",
  },
  {
    image: "/images/itineraries/card-3.jpg",
    park: "Arusha National Park",
    nights: "7 Nights",
    locations: "4 Locations",
    title: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari",
  },
] as const;

export const features = [
  {
    icon: "/images/icons/seamless-journeys.png",
    title: "Seamless Journeys",
    description:
      "Effortlessly combine flight bookings with inspiring safari itineraries.",
  },
  {
    icon: "/images/icons/travel-experts.png",
    title: "Travel Experts",
    description:
      "Rely on local knowledge and partners for safe, memorable safaris.",
  },
  {
    icon: "/images/icons/smart-fares.png",
    title: "Smart Fares",
    description:
      "Enjoy exclusive savings and special offers on Tanzania flight bookings.",
  },
  {
    icon: "/images/icons/curated-itineraries.png",
    title: "Curated Itineraries",
    description:
      "Hand-picked safari routes showcasing Tanzania's most iconic destinations.",
  },
] as const;

export const blogs = [
  {
    image: "/images/blogs/card-1.jpg",
    tags: ["ANIMALS", "SAFARI", "TANZANIA"],
    title:
      "Dung Architects: The Unsung Engineers of the Serengeti (And why they matter to your safari)",
    variant: "primary" as const,
  },
  {
    image: "/images/blogs/card-2.jpg",
    tags: ["ANIMALS", "TANZANIA"],
    title:
      "Dung Architects: The Unsung Engineers of the Serengeti (And why they matter to your safari)",
    variant: "light" as const,
  },
  {
    image: "/images/blogs/card-3.jpg",
    tags: ["ANIMALS"],
    title:
      "Dung Architects: The Unsung Engineers of the Serengeti (And why they matter to your safari)",
    variant: "light" as const,
  },
] as const;

export const footerDestinations = [
  { href: "#Arusha", label: "Arusha" },
  { href: "#Serengeti", label: "Serengeti" },
  { href: "#Kilimanjaro", label: "Kilimanjaro" },
  { href: "#Ngorongoro-Crater", label: "Ngorongoro Crater" },
  { href: "#Lake-Manyara", label: "Lake Manyara" },
  { href: "#Tranagire", label: "Tranagire" },
  { href: "#Mahale-Mountains", label: "Mahale Mountains" },
] as const;

export const footerResources = [
  { href: "/about", label: "About Us" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/destination", label: "Destination" },
  { href: "/gallery", label: "Gallery" },
  { href: "/", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
] as const;
