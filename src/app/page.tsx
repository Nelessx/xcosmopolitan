const designs = [
  { label: "Design 1", href: "/designs/design-1.html" },
  { label: "Design 2", href: "/designs/design-2.html" },
  { label: "Design 3", href: "/designs/design-3.html" },
];

export default function Home() {
  return (
    <ul>
      {designs.map((design) => (
        <li key={design.href}>
          {/* Static HTML files in public/, so a plain anchor rather than next/link. */}
          <a href={design.href}>{design.label}</a>
        </li>
      ))}
    </ul>
  );
}
