import BrandLogo from "./components/brand-logo";
import LegalLinks from "./components/legal-links";

const categories = [
  {
    id: "decoracion",
    name: "Decoración",
    description: "Texturas y detalles que hacen espacio para ti.",
    label: "Objetos con historia",
    style: "bg-[#e3d2c0]",
    accent: "bg-[#c58761]",
  },
  {
    id: "organizacion",
    name: "Organización",
    description: "Un lugar para cada cosa, sin perder calidez.",
    label: "Orden con calma",
    style: "bg-[#d8ded1]",
    accent: "bg-[#87947c]",
  },
  {
    id: "bienestar",
    name: "Bienestar",
    description: "Pequeños rituales para cuidar de ti.",
    label: "Tu momento",
    style: "bg-[#eadbd2]",
    accent: "bg-[#c48e7b]",
  },
  {
    id: "mascotas",
    name: "Mascotas",
    description: "Cositos bonitos para quienes también son familia.",
    label: "Patas felices",
    style: "bg-[#e4dfc9]",
    accent: "bg-[#aa9c67]",
  },
  {
    id: "crecimiento",
    name: "Crecimiento Personal",
    description: "Ideas y herramientas para florecer a tu manera.",
    label: "Crecer a tu ritmo",
    style: "bg-[#d9d4e0]",
    accent: "bg-[#9789a8]",
  },
] as const;

const worlds = [
  {
    id: "mundo-hogar-bonito",
    name: "Hogar Bonito",
    description: "Decoración, organización y cocina.",
    accent: "text-[#a46f53] bg-[#e8d8c6]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="m3.5 10 8.5-7 8.5 7" />
        <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    id: "mundo-bienestar",
    name: "Bienestar",
    description: "Autocuidado, belleza y fitness.",
    accent: "text-[#788268] bg-[#dfe3d8]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M12 20s-7.5-4.4-7.5-10a4.2 4.2 0 0 1 7.5-2.6A4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
        <path d="M12 7.5v7m-3.5-3.5h7" />
      </svg>
    ),
  },
  {
    id: "mundo-familia",
    name: "Familia",
    description: "Embarazo, bebés y crianza.",
    accent: "text-[#a87868] bg-[#ecded6]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="8" r="2.5" />
        <circle cx="5.5" cy="10" r="1.75" />
        <circle cx="18.5" cy="10" r="1.75" />
        <path d="M7.5 19v-1.5a4.5 4.5 0 0 1 9 0V19m-13 0v-1a3 3 0 0 1 4-2.8m15 3.8v-1a3 3 0 0 0-4-2.8" />
      </svg>
    ),
  },
  {
    id: "mundo-mascotas",
    name: "Mascotas",
    description: "Productos prácticos y acogedores para mascotas.",
    accent: "text-[#8b8058] bg-[#e8e4d3]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <ellipse cx="12" cy="15.5" rx="5" ry="4" />
        <circle cx="6.5" cy="9" r="1.5" />
        <circle cx="10.5" cy="6.5" r="1.5" />
        <circle cx="15" cy="6.5" r="1.5" />
        <circle cx="18.5" cy="9" r="1.5" />
      </svg>
    ),
  },
  {
    id: "mundo-crecimiento-personal",
    name: "Crecimiento Personal",
    description: "Libros, ebooks, filosofía y espiritualidad.",
    accent: "text-[#7f718d] bg-[#e2dce7]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="M12 20V9m0 4c-4.5 0-7-2.5-7-6 4.5 0 7 2.5 7 6Zm0-3c0-4 2-6 6-7 0 4-2 7-6 7Z" />
        <path d="M5 20h14" />
      </svg>
    ),
  },
  {
    id: "mundo-temporada",
    name: "Temporada",
    description: "Colecciones especiales para cada celebración.",
    accent: "text-[#a46f53] bg-[#eee1d4]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 3l.7 1.3L7 5l-1.3.7L5 7l-.7-1.3L3 5l1.3-.7L5 3Z" />
      </svg>
    ),
  },
] as const;

const featuredProducts = [
  {
    name: "Difusor efecto llama",
    category: "Bienestar",
    description: "Una luz serena y un aroma suave para bajar el ritmo.",
    label: "Más querido",
    image: "bg-gradient-to-br from-[#ead8c5] via-[#dfc1a7] to-[#c99c7e]",
    art: (
      <svg viewBox="0 0 240 180" className="relative z-10 h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="151" rx="53" ry="9" fill="#795B4A" fillOpacity=".16" />
        <path d="M112 87c-16-18 2-29 5-44 17 17 22 32 8 45h-13Z" fill="#F7E5BC" />
        <path d="M119 84c-7-10 2-16 4-24 8 9 10 18 2 24h-6Z" fill="#C78763" />
        <rect x="83" y="83" width="74" height="62" rx="20" fill="#A76649" />
        <rect x="91" y="91" width="58" height="49" rx="15" fill="#C58D6B" />
        <path d="M99 118c11-8 28-8 39 0" stroke="#E8C8A8" strokeWidth="2" strokeLinecap="round" />
        <path d="M107 74h26" stroke="#795B4A" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Organizador multifuncional de cocina",
    category: "Hogar Bonito",
    description: "Todo a la mano para que cocinar se sienta más ligero.",
    label: "Más práctico",
    image: "bg-gradient-to-br from-[#e7dfce] via-[#d7c9ad] to-[#b9a889]",
    art: (
      <svg viewBox="0 0 240 180" className="relative z-10 h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="151" rx="62" ry="8" fill="#645B4D" fillOpacity=".15" />
        <path d="M70 137h100M78 104h84M86 72h68" stroke="#80694F" strokeWidth="5" strokeLinecap="round" />
        <path d="M80 70v69m80-69v69" stroke="#9B8061" strokeWidth="4" strokeLinecap="round" />
        <rect x="94" y="45" width="20" height="26" rx="5" fill="#F0E7D7" />
        <path d="M99 45v-7h10v7" stroke="#A98768" strokeWidth="2" />
        <rect x="126" y="50" width="17" height="21" rx="4" fill="#B87958" />
        <path d="M96 105h24v30H96z" fill="#B99A75" />
        <path d="M128 111h27v24h-27z" fill="#D1B997" />
      </svg>
    ),
  },
  {
    name: "Soporte premium para laptop",
    category: "Home Office",
    description: "Un espacio de trabajo que también cuida de ti.",
    label: "Favorito diario",
    image: "bg-gradient-to-br from-[#e7d8cb] via-[#d8c3ae] to-[#b99d83]",
    art: (
      <svg viewBox="0 0 240 180" className="relative z-10 h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="150" rx="62" ry="8" fill="#5F5146" fillOpacity=".15" />
        <rect x="72" y="48" width="96" height="59" rx="6" fill="#71675D" />
        <rect x="78" y="54" width="84" height="46" rx="3" fill="#E9E0D3" />
        <path d="M97 125 112 108h16l15 17-5 5h-36l-5-5Z" fill="#B27B59" />
        <path d="M91 132h58" stroke="#8E6047" strokeWidth="4" strokeLinecap="round" />
        <path d="m112 108-8 20m24-20 8 20" stroke="#8E6047" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Fuente automática para mascotas",
    category: "Mascotas",
    description: "Agua fresca siempre lista para quien alegra tus días.",
    label: "Para consentir",
    image: "bg-gradient-to-br from-[#e5dfce] via-[#d1d1bb] to-[#aeb49e]",
    art: (
      <svg viewBox="0 0 240 180" className="relative z-10 h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="150" rx="60" ry="9" fill="#59634F" fillOpacity=".16" />
        <path d="M80 111c0 20 18 34 40 34s40-14 40-34H80Z" fill="#F0E9DA" />
        <path d="M80 111h80c0 9-18 17-40 17s-40-8-40-17Z" fill="#B9BBA7" />
        <path d="M120 105V69" stroke="#829080" strokeWidth="5" strokeLinecap="round" />
        <path d="M106 68c0-8 6-14 14-14s14 6 14 14" stroke="#829080" strokeWidth="4" strokeLinecap="round" />
        <path d="M111 83c3 5 5 8 9 8s6-3 9-8" stroke="#B5C9C1" strokeWidth="3" strokeLinecap="round" />
        <circle cx="120" cy="43" r="3" fill="#C78763" />
      </svg>
    ),
  },
  {
    name: "Journal de gratitud",
    category: "Crecimiento Personal",
    description: "Unas páginas para reconocer todo lo bueno que ya está.",
    label: "Inspiración diaria",
    image: "bg-gradient-to-br from-[#e9ddd3] via-[#d9c8bc] to-[#c6ab9a]",
    art: (
      <svg viewBox="0 0 240 180" className="relative z-10 h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="149" rx="53" ry="8" fill="#6D5649" fillOpacity=".15" />
        <path d="m78 55 77-8 9 82-77 9-9-83Z" fill="#986C56" />
        <path d="m84 60 65-7 7 70-65 7-7-70Z" fill="#E8D8C8" />
        <path d="m83 60 13-1 7 71-13 1-7-71Z" fill="#B78365" />
        <path d="m120 73 4 9 10 1-7 7 2 10-9-5-8 5 2-10-7-7 10-1 3-9Z" fill="#B87553" />
        <path d="m108 111 27-3" stroke="#B59C88" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Organizador para artículos de bebé",
    category: "Familia",
    description: "Pequeños esenciales en su lugar, listos para cada abrazo.",
    label: "Elegido por mamás",
    image: "bg-gradient-to-br from-[#e9dfd4] via-[#ddcabb] to-[#c9ad97]",
    art: (
      <svg viewBox="0 0 240 180" className="relative z-10 h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true" focusable="false">
        <ellipse cx="120" cy="151" rx="58" ry="8" fill="#715D4E" fillOpacity=".15" />
        <path d="M71 88h98l-9 55H80l-9-55Z" fill="#B48D6D" />
        <path d="M81 97h78l-6 38H87l-6-38Z" fill="#D7B99A" />
        <path d="M95 89V70c0-7 5-12 12-12s12 5 12 12v19" stroke="#F0E8DC" strokeWidth="6" strokeLinecap="round" />
        <path d="M130 89V67c0-6 4-10 10-10s10 4 10 10v22" stroke="#A87868" strokeWidth="5" strokeLinecap="round" />
        <path d="M87 107h66m-63 9h60m-58 9h56" stroke="#B48D6D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

const benefits = [
  {
    number: "01",
    title: "Elegidos con intención",
    description: "Cada cosito tiene un porqué y un lugar en tu día a día.",
  },
  {
    number: "02",
    title: "Hecho para la vida real",
    description: "Piezas prácticas, bonitas y listas para vivir contigo.",
  },
  {
    number: "03",
    title: "Envíos con cariño",
    description: "Preparamos cada pedido con cuidado y lo llevamos hasta ti.",
  },
  {
    number: "04",
    title: "Una casa para todos",
    description: "Ideas para tu espacio, tu bienestar y tus compañeros peludos.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#49463f]">
      <header className="sticky top-0 z-20 border-b border-[#49463f]/10 bg-[#f7f4ed]/95 backdrop-blur">
        <p className="bg-[#59634f] px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#f7f4ed] sm:text-xs">
          Un hogar más tuyo, un cosito a la vez
        </p>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
          <a href="#inicio" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
            <BrandLogo variant="header" />
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Principal">
            <a href="#categorias" className="transition-colors hover:text-[#b87553]">
              Explorar
            </a>
            <a href="/tienda" className="transition-colors hover:text-[#b87553]">
              Tienda
            </a>
            <a href="#beneficios" className="transition-colors hover:text-[#b87553]">
              Beneficios
            </a>
            <a href="/nuestra-esencia" className="transition-colors hover:text-[#b87553]">
              Nuestra Esencia
            </a>
            <a
              href="/carta-de-la-casa"
              className="rounded-full border border-[#49463f]/20 px-5 py-2 transition-colors hover:border-[#b87553] hover:text-[#b87553]"
            >
              Carta de la casa
            </a>
            <a href="/contacto" className="transition-colors hover:text-[#b87553]">
              Contacto
            </a>
          </nav>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full bg-[#59634f] px-4 py-2 text-xs font-medium text-white">
              Menú
            </summary>
            <nav
              className="absolute right-0 mt-3 flex w-52 flex-col gap-3 rounded-xl border border-[#49463f]/10 bg-[#f7f4ed] p-4 text-sm shadow-lg"
              aria-label="Principal móvil"
            >
              <a href="#categorias" className="hover:text-[#b87553]">Explorar</a>
              <a href="/tienda" className="hover:text-[#b87553]">Tienda</a>
              <a href="/nuestra-esencia" className="hover:text-[#b87553]">Nuestra Esencia</a>
              <a href="/carta-de-la-casa" className="hover:text-[#b87553]">Carta de la casa</a>
              <a href="/contacto" className="hover:text-[#b87553]">Contacto</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24"
        >
          <div className="relative z-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-[#a46f53]">
              Cositas para vivir bonito
            </p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tu hogar no necesita ser perfecto, solo necesita sentirse tuyo.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#49463f]/75 sm:text-lg">
              Encuentra esos pequeños detalles que hacen que cada rincón cuente
              tu historia. Sin reglas, con mucho corazón.
            </p>
            <a
              href="#categorias"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b87553] px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#a66343]"
            >
              Descubrir Cositos
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-[#49463f]/50">
              Hecho para ti y para los tuyos
            </p>
          </div>

          <div className="relative mx-auto h-[390px] w-full max-w-[530px] sm:h-[480px]" aria-label="Un rincón cálido de hogar">
            <div className="absolute inset-x-7 inset-y-5 rotate-3 rounded-[48%_48%_8%_8%] bg-[#e8d8c6] sm:inset-x-12" />
            <div className="absolute bottom-8 left-4 right-4 h-36 rounded-[50%] bg-[#d6c6b3] sm:bottom-10 sm:left-10 sm:right-10" />
            <div className="absolute bottom-24 left-[18%] h-44 w-36 rounded-t-[48%] rounded-b-2xl bg-[#aab39c] shadow-lg sm:bottom-28 sm:h-56 sm:w-44">
              <div className="absolute left-1/2 top-7 h-28 w-20 -translate-x-1/2 rounded-t-full rounded-b-[45%] border border-white/40 bg-[#d5c0a9] sm:h-36 sm:w-24" />
              <div className="absolute left-1/2 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#a46f53]" />
            </div>
            <div className="absolute bottom-28 right-[16%] h-28 w-28 rounded-full bg-[#c78763] shadow-md sm:bottom-32 sm:h-36 sm:w-36">
              <div className="absolute inset-4 rounded-full border border-white/45" />
              <div className="absolute inset-8 rounded-full border border-white/35" />
            </div>
            <div className="absolute right-[22%] top-12 h-32 w-2 rotate-12 rounded-full bg-[#788268] sm:right-[24%] sm:top-16 sm:h-40">
              <span className="absolute -left-7 top-8 h-12 w-9 -rotate-45 rounded-[100%_0_100%_0] bg-[#788268]" />
              <span className="absolute left-1 top-16 h-12 w-9 rotate-45 rounded-[0_100%_0_100%] bg-[#899276]" />
            </div>
            <div className="absolute left-1 top-12 -rotate-6 rounded-full bg-[#f7f4ed] px-5 py-3 font-serif text-sm shadow-sm sm:left-2 sm:top-16">
              Un hogar vivido
            </div>
            <div className="absolute bottom-5 right-0 rotate-3 rounded-full bg-[#59634f] px-5 py-3 text-xs uppercase tracking-[0.12em] text-white sm:bottom-8">
              Se siente como tú
            </div>
          </div>
        </section>

        <section id="mundos" className="bg-[#efebe2] px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                Un lugar para cada parte de tu vida
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Explora nuestros mundos
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {worlds.map((world, index) => (
                <article
                  key={world.name}
                  id={world.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#49463f]/10 bg-[#f7f4ed] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b87553]/35 hover:shadow-[0_16px_40px_-24px_rgba(73,70,63,0.35)] sm:p-8"
                >
                  <span className="absolute right-7 top-7 text-[11px] tracking-[0.18em] text-[#49463f]/35">
                    0{index + 1}
                  </span>
                  <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full ${world.accent}`}>
                    <span className="h-7 w-7">{world.icon}</span>
                  </div>
                  <h3 className="font-serif text-2xl">{world.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#49463f]/65">
                    {world.description}
                  </p>
                  <div className="mt-7 h-px w-10 bg-[#b87553]/55 transition-all duration-300 group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="favoritos" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                Pequeños hallazgos, grandes momentos
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Favoritos de la Casa
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#49463f]/65">
              Pequeños detalles elegidos para hacer que cada rincón se sienta más tuyo.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article key={product.name} className="group">
                <div
                  className={`relative flex h-64 items-center justify-center overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-[0_18px_40px_-22px_rgba(73,70,63,0.4)] ${product.image} sm:h-72`}
                  aria-label={`Ilustración placeholder de ${product.name}`}
                  role="img"
                >
                  <div className="absolute inset-4 rounded-xl border border-white/35" />
                  <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border border-white/25" />
                  <div className="absolute -bottom-12 -right-6 h-36 w-36 rounded-full border border-white/25" />
                  {product.art}
                  <span className="absolute left-6 top-6 rounded-full border border-white/50 bg-[#f7f4ed]/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#49463f]/75 backdrop-blur-sm">
                    {product.label}
                  </span>
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#a46f53]">
                  {product.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl transition-colors duration-300 group-hover:text-[#a46f53]">
                  {product.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#49463f]/65">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="categorias" className="bg-[#efebe2] px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                  Encuentra tu cosito
                </p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                  Un espacio para cada tú
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#49463f]/65">
                Para tu casa, tus rituales y todos los que hacen hogar contigo.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {categories.map((category, index) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={`group rounded-2xl p-4 transition-transform hover:-translate-y-1 ${
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  }`}
                >
                  <div
                    className={`relative flex h-52 items-end overflow-hidden rounded-xl p-5 sm:h-60 ${category.style}`}
                  >
                    <div className={`absolute -right-7 -top-8 h-36 w-36 rounded-full opacity-80 transition-transform duration-500 group-hover:scale-110 ${category.accent}`} />
                    <div className="absolute right-10 top-10 h-24 w-20 rotate-6 rounded-t-full rounded-b-xl border border-white/50 bg-white/25" />
                    <span className="relative rounded-full bg-[#f7f4ed]/85 px-4 py-2 text-xs tracking-wide">
                      {category.label}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#49463f]/65">
                    {category.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                La casa se siente
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                Lo bonito también puede ser sencillo.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#49463f]/70">
                Creemos en elegir menos, elegir mejor y disfrutar cada cosita
                como parte de una vida más tuya.
              </p>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article key={benefit.number} className="border-t border-[#49463f]/15 py-6">
                  <p className="text-xs tracking-[0.18em] text-[#a46f53]">
                    {benefit.number}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#49463f]/65">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="bg-[#59634f] px-6 py-20 text-[#f7f4ed] md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-[#e2c6ae]">
              Una cartita de vez en cuando
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Cositas lindas directo a tu correo.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Novedades, inspiración y pequeños recordatorios para hacer de tu
              casa un lugar más tuyo. Sin ruido, lo prometemos.
            </p>
            <form
              action="#newsletter"
              method="get"
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Tu correo electrónico"
                className="h-12 min-w-0 flex-1 rounded-full border border-white/30 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/60 focus:border-white"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-[#e2c6ae] px-7 text-sm font-medium text-[#49463f] transition-colors hover:bg-white"
              >
                Quiero mi cartita
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#f7f4ed] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#inicio" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
              <BrandLogo variant="footer" />
            </a>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#49463f]/65">
              Un hogar se construye con detalles, cariño y espacio para ser tú.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-[auto_auto_auto] sm:gap-10">
            <nav aria-label="Explorar" className="flex flex-col items-start gap-2.5 text-sm text-[#49463f]/70">
              <h2 className="mb-1 text-[10px] uppercase tracking-[0.18em] text-[#49463f]/45">
                Explorar
              </h2>
              <a href="#inicio" className="transition-colors hover:text-[#b87553]">Inicio</a>
              <a href="/tienda" className="transition-colors hover:text-[#b87553]">Tienda</a>
              <a href="/nuestra-esencia" className="transition-colors hover:text-[#b87553]">Nuestra Esencia</a>
              <a href="/carta-de-la-casa" className="transition-colors hover:text-[#b87553]">Carta de la Casa</a>
              <a href="/contacto" className="transition-colors hover:text-[#b87553]">Contacto</a>
              <a href="mailto:hola@lacasadelcosito.mx" className="transition-colors hover:text-[#b87553]">Escríbenos</a>
            </nav>
            <nav aria-label="Nuestros mundos" className="flex flex-col items-start gap-2.5 text-sm text-[#49463f]/70">
              <h2 className="mb-1 text-[10px] uppercase tracking-[0.18em] text-[#49463f]/45">
                Nuestros mundos
              </h2>
              {worlds.map((world) => (
                <a
                  key={world.id}
                  href={`#${world.id}`}
                  className="transition-colors hover:text-[#b87553]"
                >
                  {world.name}
                </a>
              ))}
            </nav>
            <nav aria-label="Redes sociales" className="flex flex-col items-start gap-2.5 text-sm text-[#49463f]/70">
              <h2 className="mb-1 text-[10px] uppercase tracking-[0.18em] text-[#49463f]/45">
                Síguenos
              </h2>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#b87553]">
                Instagram
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#b87553]">
                Facebook
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#b87553]">
                Pinterest
              </a>
            </nav>
          </div>
        </div>
        <LegalLinks />
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-[#49463f]/10 pt-5 text-xs text-[#49463f]/50 sm:flex-row sm:justify-between">
          <span>© 2026 La Casa del Cosito</span>
          <span>Hecho con cariño en México</span>
        </div>
      </footer>
    </div>
  );
}
