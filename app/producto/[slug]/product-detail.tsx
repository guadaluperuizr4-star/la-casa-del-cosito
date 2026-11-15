"use client";

import Link from "next/link";
import { useState } from "react";
import BrandLogo from "../../components/brand-logo";

const gallery = [
  { name: "Vista principal", tone: "from-[#ead8c5] via-[#dfc1a7] to-[#c99c7e]" },
  { name: "Luz en calma", tone: "from-[#e8d8c6] via-[#d7bea7] to-[#a98269]" },
  { name: "Un rincón para ti", tone: "from-[#e4e6dc] via-[#c9d0be] to-[#9da991]" },
  { name: "Detalle de diseño", tone: "from-[#eee4d8] via-[#dfcdb9] to-[#c5a68b]" },
] as const;

const benefits = [
  "Aromaterapia",
  "Ambiente acogedor",
  "Diseño decorativo",
  "Fácil uso",
] as const;

const relatedProducts = [
  {
    name: "Journal de gratitud",
    category: "Crecimiento Personal",
    price: "$390 MXN",
    tone: "from-[#e9ddd3] via-[#d9c8bc] to-[#c6ab9a]",
    art: "journal",
  },
  {
    name: "Vela de soya y cedro",
    category: "Bienestar",
    price: "$420 MXN",
    tone: "from-[#eee0d1] via-[#dfc6a9] to-[#c79f7e]",
    art: "candle",
  },
  {
    name: "Jarrón de barro bruñido",
    category: "Hogar Bonito",
    price: "$1,280 MXN",
    tone: "from-[#e6d3bf] via-[#d5b99d] to-[#bd9778]",
    art: "vase",
  },
  {
    name: "Manta suave para el descanso",
    category: "Hogar Bonito",
    price: "$890 MXN",
    tone: "from-[#eee5d9] via-[#ded2c3] to-[#c5b19e]",
    art: "blanket",
  },
] as const;

function DiffuserIllustration({ variant = 0 }: { variant?: number }) {
  return (
    <svg
      viewBox="0 0 320 260"
      className={`h-64 w-72 transition-transform duration-700 ${
        variant === 1 ? "scale-110" : variant === 2 ? "scale-90" : ""
      }`}
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="160" cy="219" rx="74" ry="13" fill="#795B4A" fillOpacity=".16" />
      <path d="M151 115c-24-26 3-44 8-66 23 23 30 45 11 67h-19Z" fill="#F7E5BC" />
      <path d="M161 111c-10-14 3-23 5-35 11 13 14 26 3 35h-8Z" fill="#C78763" />
      <path d="M143 113h34l-7 14h-20l-7-14Z" fill="#795B4A" />
      <rect x="108" y="126" width="104" height="82" rx="27" fill="#A76649" />
      <rect x="119" y="137" width="82" height="63" rx="21" fill="#C58D6B" />
      <path d="M130 169c16-12 40-12 58 0" stroke="#E8C8A8" strokeWidth="3" strokeLinecap="round" />
      <path d="M139 183h42" stroke="#A76649" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" />
      {variant === 3 ? (
        <path d="M150 149h20m-16 7h12" stroke="#F0D8BE" strokeWidth="2" strokeLinecap="round" />
      ) : null}
    </svg>
  );
}

function RelatedArtwork({ art }: { art: (typeof relatedProducts)[number]["art"] }) {
  if (art === "journal") {
    return (
      <svg viewBox="0 0 180 140" className="h-32 w-40" fill="none" aria-hidden="true">
        <ellipse cx="90" cy="117" rx="48" ry="7" fill="#6D5649" fillOpacity=".15" />
        <path d="m52 39 69-7 9 73-69 7-9-73Z" fill="#986C56" />
        <path d="m59 44 57-6 6 62-57 6-6-62Z" fill="#E8D8C8" />
        <path d="m87 58 4 8 9 1-7 6 2 9-8-4-7 4 2-9-7-6 9-1 3-8Z" fill="#B87553" />
      </svg>
    );
  }
  if (art === "candle") {
    return (
      <svg viewBox="0 0 180 140" className="h-32 w-40" fill="none" aria-hidden="true">
        <ellipse cx="90" cy="118" rx="42" ry="7" fill="#705448" fillOpacity=".15" />
        <rect x="61" y="51" width="58" height="63" rx="14" fill="#F2E9DA" />
        <path d="M86 51c-9-10 1-17 2-28 11 11 12 20 3 28h-5Z" fill="#C78763" />
        <path d="M75 78h30m-25 9h20" stroke="#C6A88D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (art === "vase") {
    return (
      <svg viewBox="0 0 180 140" className="h-32 w-40" fill="none" aria-hidden="true">
        <ellipse cx="90" cy="119" rx="34" ry="6" fill="#654F40" fillOpacity=".15" />
        <path d="M84 55h12l4 12c10 9 15 26 11 43H69c-4-17 1-34 11-43l4-12Z" fill="#A8795A" />
        <path d="M89 54c-1-20 8-27 19-35m-24 36c0-15-8-21-16-26" stroke="#68745F" strokeWidth="3" strokeLinecap="round" />
        <path d="M108 20c11-5 16-2 17 4-9 4-14 2-17-4Z" fill="#899276" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 180 140" className="h-32 w-40" fill="none" aria-hidden="true">
      <ellipse cx="90" cy="115" rx="49" ry="7" fill="#796858" fillOpacity=".15" />
      <path d="m44 57 87-9 10 54-87 9-10-54Z" fill="#C8B29A" />
      <path d="m54 65 67-7m-62 17 67-7m-62 17 67-7m-62 17 67-7" stroke="#EDE3D7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#49463f]">
      <header className="sticky top-0 z-20 border-b border-[#49463f]/10 bg-[#f7f4ed]/95 backdrop-blur">
        <p className="bg-[#59634f] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#f7f4ed] sm:text-xs">
          Un hogar más tuyo, un cosito a la vez
        </p>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
          <Link href="/" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
            <BrandLogo variant="header" />
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Principal">
            <Link href="/" className="transition-colors hover:text-[#b87553]">
              Inicio
            </Link>
            <Link href="/tienda" className="text-[#a46f53]">
              Tienda
            </Link>
            <Link href="/nuestra-esencia" className="transition-colors hover:text-[#b87553]">
              Nuestra Esencia
            </Link>
            <Link href="/carta-de-la-casa" className="transition-colors hover:text-[#b87553]">
              Carta de la casa
            </Link>
            <Link href="/contacto" className="transition-colors hover:text-[#b87553]">
              Contacto
            </Link>
          </nav>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-[#49463f]/20 px-4 py-2 text-xs transition-colors hover:border-[#b87553] hover:text-[#a46f53]">
              Menú
            </summary>
            <nav
              className="absolute right-0 mt-3 flex w-52 flex-col gap-3 rounded-xl border border-[#49463f]/10 bg-[#f7f4ed] p-4 text-sm shadow-lg"
              aria-label="Principal móvil"
            >
              <Link href="/" className="hover:text-[#b87553]">Inicio</Link>
              <Link href="/tienda" className="text-[#a46f53]">Tienda</Link>
              <Link href="/nuestra-esencia" className="hover:text-[#b87553]">Nuestra Esencia</Link>
              <Link href="/carta-de-la-casa" className="hover:text-[#b87553]">Carta de la casa</Link>
              <Link href="/contacto" className="hover:text-[#b87553]">Contacto</Link>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <nav aria-label="Ruta de navegación" className="mx-auto max-w-7xl px-6 pt-7 text-xs text-[#49463f]/55 md:px-10">
          <Link href="/" className="hover:text-[#a46f53]">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/tienda" className="hover:text-[#a46f53]">Tienda</Link>
          <span className="mx-2">/</span>
          <span className="text-[#49463f]/80">Difusor efecto llama</span>
        </nav>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-10 md:py-12">
          <div className="grid gap-4 sm:grid-cols-[1fr_82px]">
            <div className={`relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gallery[activeImage].tone} sm:min-h-[520px]`}>
              <div className="absolute inset-5 rounded-xl border border-white/35" />
              <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full border border-white/25" />
              <div className="absolute -bottom-10 -right-4 h-48 w-48 rounded-full border border-white/25" />
              <DiffuserIllustration variant={activeImage} />
              <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.18em] text-[#49463f]/55">
                {gallery[activeImage].name}
              </span>
            </div>
            <div className="flex gap-3 sm:flex-col">
              {gallery.map((image, index) => (
                <button
                  key={image.name}
                  type="button"
                  aria-label={`Ver imagen: ${image.name}`}
                  aria-pressed={activeImage === index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex h-20 flex-1 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${image.tone} transition-all duration-300 sm:h-auto sm:flex-1 ${
                    activeImage === index
                      ? "ring-2 ring-[#a46f53] ring-offset-2 ring-offset-[#f7f4ed]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <DiffuserIllustration variant={index} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center py-2">
            <span className="w-fit rounded-full border border-[#b87553]/30 bg-[#eee1d4]/70 px-4 py-2 text-[10px] uppercase tracking-[0.17em] text-[#8d5f48]">
              Favorito de la Casa
            </span>
            <p className="mt-7 text-xs uppercase tracking-[0.22em] text-[#a46f53]">
              Bienestar · Aromas para tu espacio
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Difusor efecto llama
            </h1>
            <p className="mt-5 text-2xl text-[#59634f]">$799 MXN</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#49463f]/70">
              Una luz suave y un aroma envolvente para transformar cualquier
              rincón en un refugio personal.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-[#49463f]/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a46f53]" />
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setCartCount((count) => count + 1)}
                className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-[#59634f] px-6 text-sm font-medium text-white transition-colors hover:bg-[#424b3a]"
              >
                {cartCount > 0 ? `Añadir al carrito · ${cartCount}` : "Añadir al carrito"}
              </button>
              <button
                type="button"
                aria-pressed={isSaved}
                onClick={() => setIsSaved((saved) => !saved)}
                className={`inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border px-6 text-sm transition-colors ${
                  isSaved
                    ? "border-[#b87553] bg-[#eee1d4]/70 text-[#8d5f48]"
                    : "border-[#49463f]/20 hover:border-[#b87553] hover:text-[#a46f53]"
                }`}
              >
                <span aria-hidden="true">{isSaved ? "♥" : "♡"}</span>
                {isSaved ? "Guardado para después" : "Guardar para después"}
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#49463f]/50">
              Un pequeño ritual para hacer una pausa, respirar y volver a ti.
            </p>
          </div>
        </section>

        <section className="bg-[#efebe2] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                Una nota de la casa
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Por qué nos encanta
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="font-serif text-2xl leading-relaxed text-[#59634f] sm:text-3xl">
                Porque a veces basta una luz cálida para cambiar el ritmo de
                toda una habitación.
              </p>
              <p className="mt-5 text-base leading-7 text-[#49463f]/70">
                Nos encanta este difusor por cómo convierte una pausa sencilla
                en un pequeño ritual. Su efecto de llama dibuja movimiento y
                calidez; su presencia es serena, sin pedir demasiado espacio.
                Lo enciendes al terminar el día, mientras lees o cuando quieres
                que tu rincón favorito se sienta todavía más tuyo.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                Compañía para tus rituales
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                También te pueden gustar
              </h2>
            </div>
            <Link href="/tienda" className="hidden text-sm text-[#59634f] transition-colors hover:text-[#a46f53] sm:block">
              Ver toda la tienda →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <article key={product.name} className="group">
                <div className={`flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br transition-shadow duration-500 group-hover:shadow-[0_14px_32px_-20px_rgba(73,70,63,0.4)] ${product.tone}`}>
                  <RelatedArtwork art={product.art} />
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#a46f53]">
                  {product.category}
                </p>
                <div className="mt-1 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl transition-colors group-hover:text-[#a46f53]">
                    {product.name}
                  </h3>
                  <span className="shrink-0 pt-1 text-xs text-[#49463f]/65">
                    {product.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#59634f] px-6 py-16 text-[#f7f4ed] md:px-10 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e2c6ae]">
                Un rincón, un respiro
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Lo imaginamos en tu hogar
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ["En tu mesa de noche", "Una luz tenue para despedir el día con calma."],
                ["En tu rincón de lectura", "Un aroma suave que acompaña tus páginas favoritas."],
                ["En tu momento de pausa", "Un pequeño ritual entre una cosa y la siguiente."],
              ].map(([title, description]) => (
                <article key={title} className="border-t border-white/25 pt-4">
                  <h3 className="font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f7f4ed] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
            <BrandLogo variant="footer" />
          </Link>
          <Link href="/tienda" className="text-xs text-[#49463f]/65 transition-colors hover:text-[#a46f53]">
            ← Volver a la tienda
          </Link>
          <Link href="/contacto" className="text-xs text-[#49463f]/65 transition-colors hover:text-[#a46f53]">
            Contacto
          </Link>
        </div>
      </footer>
    </div>
  );
}
