// Business details used across the site. Address, phone and hours come from the
// salon's Instagram and still need to be confirmed with the client.
export const site = {
  name: "Xcosmopolitan",
  tagline: "The reverse aging experience",
  description:
    "Science-led skin rejuvenation, hair and nail care at a luxury unisex salon in Naxal, Kathmandu. Strictly by appointment.",
  address: "Nagpokhari, Naxal, Kathmandu",
  landmark: "Near Marriott Hotel",
  hours: "Strictly by appointment",
  phone: { display: "+977 985-1362553", href: "tel:+9779851362553" },
  whatsapp: "https://wa.me/9779851362553",
  instagram: {
    handle: "@xcosmopolitan.nepal",
    href: "https://www.instagram.com/xcosmopolitan.nepal/",
  },
  facebook: "https://www.facebook.com/xcosmopolitan.nepal/",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Xcosmopolitan%2C+Nagpokhari%2C+Naxal%2C+Kathmandu",
  bookingHref: "/book",
} as const;

export const navLinks = [
  { label: "Treatments", href: "/#concerns" },
  { label: "Services", href: "/#services" },
  { label: "Membership", href: "/#membership" },
  { label: "Visit", href: "/#visit" },
] as const;

export function whatsappLink(message: string) {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
