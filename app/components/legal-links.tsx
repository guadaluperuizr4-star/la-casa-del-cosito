import Link from "next/link";

const links = [
  { href: "/politica-de-privacidad", label: "Política de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
  { href: "/politica-de-envios", label: "Política de Envíos" },
  { href: "/devoluciones-y-reembolsos", label: "Devoluciones y Reembolsos" },
  { href: "/aviso-de-cookies", label: "Aviso de Cookies" },
];

export default function LegalLinks() {
  return (
    <nav
      aria-label="Información legal"
      className="mx-auto mt-5 flex max-w-7xl flex-wrap gap-x-5 gap-y-2 text-xs text-[#49463f]/55"
    >
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="transition-colors hover:text-[#b87553]"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
