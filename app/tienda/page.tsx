"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "../components/brand-logo";

const categories = [
  { name: "Hogar Bonito", icon: "🏡" },
  { name: "Bienestar", icon: "💆" },
  { name: "Familia", icon: "👶" },
  { name: "Mascotas", icon: "🐾" },
  { name: "Crecimiento Personal", icon: "🌱" },
  { name: "Temporada", icon: "✨" },
] as const;

const products = [
  {
    name: "Organizador multifuncional de cocina",
    category: "Hogar Bonito",
    description: "Todo a la mano para que cocinar se sienta más ligero.",
    price: "$689 MXN",
    color: "from-[#e7dfce] via-[#d7c9ad] to-[#b9a889]",
    form: "shelf",
  },
  {
    name: "Jarrón de barro bruñido",
    category: "Hogar Bonito",
    description: "Una pieza serena para flores frescas o ramas del jardín.",
    price: "$1,280 MXN",
    color: "from-[#e6d3bf] via-[#d5b99d] to-[#bd9778]",
    form: "vase",
  },
  {
    name: "Canasto tejido multiuso",
    category: "Hogar Bonito",
    description: "Textura natural para guardar lo que hace hogar.",
    price: "$540 MXN",
    color: "from-[#e9dfd0] via-[#d8c5a9] to-[#b49a78]",
    form: "basket",
  },
  {
    name: "Difusor efecto llama",
    category: "Bienestar",
    description: "Una luz serena y un aroma suave para bajar el ritmo.",
    price: "$799 MXN",
    color: "from-[#ead8c5] via-[#dfc1a7] to-[#c99c7e]",
    form: "diffuser",
  },
  {
    name: "Rodillo facial de cuarzo",
    category: "Bienestar",
    description: "Un pequeño ritual para empezar o cerrar el día.",
    price: "$429 MXN",
    color: "from-[#eadeda] via-[#dcc7c3] to-[#bf9e98]",
    form: "roller",
  },
  {
    name: "Set de bandas de resistencia",
    category: "Bienestar",
    description: "Movimiento amable, a tu ritmo y en tu propio espacio.",
    price: "$369 MXN",
    color: "from-[#e4e6dc] via-[#c8d0c0] to-[#9da991]",
    form: "bands",
  },
  {
    name: "Organizador para artículos de bebé",
    category: "Familia",
    description: "Pequeños esenciales en su lugar, listos para cada abrazo.",
    price: "$749 MXN",
    color: "from-[#e9dfd4] via-[#ddcabb] to-[#c9ad97]",
    form: "baby",
  },
  {
    name: "Manta suave para recién nacido",
    category: "Familia",
    description: "Una capa extra de calma para sus primeros días.",
    price: "$890 MXN",
    color: "from-[#eee5d9] via-[#ded2c3] to-[#c5b19e]",
    form: "blanket",
  },
  {
    name: "Luz nocturna nube",
    category: "Familia",
    description: "Una luz tenue para acompañar las noches en casa.",
    price: "$520 MXN",
    color: "from-[#e7e2d9] via-[#d5d1c9] to-[#b7b2a7]",
    form: "cloud",
  },
  {
    name: "Fuente automática para mascotas",
    category: "Mascotas",
    description: "Agua fresca siempre lista para quien alegra tus días.",
    price: "$1,090 MXN",
    color: "from-[#e5dfce] via-[#d1d1bb] to-[#aeb49e]",
    form: "fountain",
  },
  {
    name: "Cama acolchada para mascotas",
    category: "Mascotas",
    description: "Un rincón mullido para sus siestas favoritas.",
    price: "$1,250 MXN",
    color: "from-[#e9ded1] via-[#d7c3b0] to-[#b79c84]",
    form: "petbed",
  },
  {
    name: "Comedero elevado de cerámica",
    category: "Mascotas",
    description: "Un espacio propio para disfrutar cada comida.",
    price: "$680 MXN",
    color: "from-[#e4e2d6] via-[#d0d1bf] to-[#adb29c]",
    form: "bowl",
  },
  {
    name: "Journal de gratitud",
    category: "Crecimiento Personal",
    description: "Unas páginas para reconocer todo lo bueno que ya está.",
    price: "$390 MXN",
    color: "from-[#e9ddd3] via-[#d9c8bc] to-[#c6ab9a]",
    form: "journal",
  },
  {
    name: "Cartas para volver a ti",
    category: "Crecimiento Personal",
    description: "Preguntas que abren espacio para escucharte mejor.",
    price: "$460 MXN",
    color: "from-[#e3dfe9] via-[#cec5d8] to-[#aca0bc]",
    form: "cards",
  },
  {
    name: "Cuaderno de nuevos comienzos",
    category: "Crecimiento Personal",
    description: "Un lugar en blanco para las ideas que quieren florecer.",
    price: "$320 MXN",
    color: "from-[#e4e6d9] via-[#cfd6c3] to-[#a8b195]",
    form: "notebook",
  },
  {
    name: "Guirnalda de luz cálida",
    category: "Temporada",
    description: "Una luz suave para celebrar lo cotidiano.",
    price: "$590 MXN",
    color: "from-[#eee0d1] via-[#dfc6a9] to-[#c79f7e]",
    form: "lights",
  },
  {
    name: "Set de adornos naturales",
    category: "Temporada",
    description: "Detalles inspirados en la belleza de cada estación.",
    price: "$480 MXN",
    color: "from-[#e4e3d4] via-[#ced0b8] to-[#a9ad8e]",
    form: "ornaments",
  },
  {
    name: "Velas de celebración",
    category: "Temporada",
    description: "Un brillo delicado para hacer especial cualquier mesa.",
    price: "$350 MXN",
    color: "from-[#eedfd4] via-[#dfc4b5] to-[#c3937e]",
    form: "candles",
  },
] as const;

type Product = (typeof products)[number];

function ProductArtwork({ form }: { form: Product["form"] }) {
  switch (form) {
    case "shelf":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="151" rx="62" ry="8" fill="#645B4D" fillOpacity=".15" />
          <path d="M70 137h100M78 104h84M86 72h68M80 70v69m80-69v69" stroke="#80694F" strokeWidth="5" strokeLinecap="round" />
          <rect x="94" y="45" width="20" height="26" rx="5" fill="#F0E7D7" />
          <rect x="126" y="50" width="17" height="21" rx="4" fill="#B87958" />
          <path d="M96 105h24v30H96zm32 6h27v24h-27z" fill="#B99A75" />
        </svg>
      );
    case "vase":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="151" rx="46" ry="8" fill="#654F40" fillOpacity=".15" />
          <path d="M112 73h16l4 15c12 11 18 32 13 54H95c-5-22 1-43 13-54l4-15Z" fill="#A8795A" />
          <path d="M116 71h8m0 1c-2-26 10-34 23-43m-31 45c-1-20-10-28-21-35" stroke="#68745F" strokeWidth="3" strokeLinecap="round" />
          <path d="M145 30c14-7 20-3 21 5-11 5-17 3-21-5Zm-55 8c-13-8-20-5-21 3 10 6 16 5 21-3Z" fill="#899276" />
        </svg>
      );
    case "basket":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="149" rx="55" ry="8" fill="#665440" fillOpacity=".15" />
          <path d="M73 80h94l-9 61H82l-9-61Z" fill="#B79670" />
          <path d="M92 80c0-22 11-35 28-35s28 13 28 35" stroke="#8E7455" strokeWidth="7" />
          <path d="M79 94h82m-79 13h76m-74 13h70m-60-38 6 57m19-57v57m19-57-6 57" stroke="#D3B991" strokeWidth="2" />
        </svg>
      );
    case "diffuser":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="151" rx="53" ry="9" fill="#795B4A" fillOpacity=".16" />
          <path d="M112 87c-16-18 2-29 5-44 17 17 22 32 8 45h-13Z" fill="#F7E5BC" />
          <path d="M119 84c-7-10 2-16 4-24 8 9 10 18 2 24h-6Z" fill="#C78763" />
          <rect x="83" y="83" width="74" height="62" rx="20" fill="#A76649" />
          <rect x="91" y="91" width="58" height="49" rx="15" fill="#C58D6B" />
          <path d="M99 118c11-8 28-8 39 0" stroke="#E8C8A8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "roller":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="146" rx="60" ry="8" fill="#6A514B" fillOpacity=".15" />
          <path d="m88 111 42-42 26 26-42 42-26-26Z" fill="#B78F8A" />
          <path d="m82 117 12-12 13 13-12 12-13-13Zm56-56 12-12 13 13-12 12-13-13Z" fill="#E8D6D1" />
          <path d="m100 106 26 26" stroke="#F0E6DF" strokeWidth="3" />
        </svg>
      );
    case "bands":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="145" rx="62" ry="8" fill="#54604E" fillOpacity=".15" />
          <ellipse cx="105" cy="90" rx="25" ry="42" stroke="#68745F" strokeWidth="10" />
          <ellipse cx="140" cy="90" rx="25" ry="42" stroke="#A8795A" strokeWidth="10" />
          <path d="M92 139h59" stroke="#80694F" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "baby":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="151" rx="58" ry="8" fill="#715D4E" fillOpacity=".15" />
          <path d="M71 88h98l-9 55H80l-9-55Z" fill="#B48D6D" />
          <path d="M81 97h78l-6 38H87l-6-38Z" fill="#D7B99A" />
          <path d="M95 89V70c0-7 5-12 12-12s12 5 12 12v19m11 0V67c0-6 4-10 10-10s10 4 10 10v22" stroke="#F0E8DC" strokeWidth="6" strokeLinecap="round" />
          <path d="M87 107h66m-63 9h60m-58 9h56" stroke="#B48D6D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "blanket":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="147" rx="65" ry="8" fill="#796858" fillOpacity=".15" />
          <path d="m73 81 92-10 10 61-92 10-10-61Z" fill="#C8B29A" />
          <path d="m83 88 72-8m-67 20 72-8m-67 20 72-8m-67 20 72-8" stroke="#EDE3D7" strokeWidth="3" strokeLinecap="round" />
          <path d="m82 137-3 10m15-12-3 10m15-11-3 10m15-11-3 10m15-12-3 10m15-11-3 10" stroke="#A78C72" strokeWidth="2" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="143" rx="60" ry="9" fill="#685F52" fillOpacity=".12" />
          <path d="M75 111c0-12 9-21 21-21 2-17 16-28 33-25 12 2 20 11 22 22 13-2 24 7 24 19 0 12-9 20-21 20H96c-12 0-21-6-21-15Z" fill="#F1E9DD" />
          <path d="M119 126v9m-19-9v9m38-9v9" stroke="#C9A987" strokeWidth="3" strokeLinecap="round" />
          <path d="M106 68c3-10 8-14 14-17m20 9 7-10" stroke="#F6E1B7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "fountain":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="150" rx="60" ry="9" fill="#59634F" fillOpacity=".16" />
          <path d="M80 111c0 20 18 34 40 34s40-14 40-34H80Z" fill="#F0E9DA" />
          <path d="M80 111h80c0 9-18 17-40 17s-40-8-40-17Z" fill="#B9BBA7" />
          <path d="M120 105V69m-14-1c0-8 6-14 14-14s14 6 14 14m-23 15c3 5 5 8 9 8s6-3 9-8" stroke="#829080" strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="43" r="3" fill="#C78763" />
        </svg>
      );
    case "petbed":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="145" rx="68" ry="12" fill="#765F4D" fillOpacity=".15" />
          <path d="M58 111c0-25 19-43 45-43h34c26 0 45 18 45 43v18H58v-18Z" fill="#B58F73" />
          <path d="M73 108c0-17 13-29 31-29h32c18 0 31 12 31 29v12H73v-12Z" fill="#E6D7C8" />
          <path d="M89 102c8-8 17-8 25 0m14 0c7-7 15-7 22 0" stroke="#B58F73" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "bowl":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="144" rx="55" ry="8" fill="#5D614F" fillOpacity=".15" />
          <path d="M69 92h102c-4 35-22 53-51 53S73 127 69 92Z" fill="#EEE9DC" />
          <path d="M69 92c9-12 22-18 51-18s42 6 51 18c-9 12-22 17-51 17S78 104 69 92Z" fill="#C6C7B4" />
          <path d="M93 124h54" stroke="#A6A992" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "journal":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="149" rx="53" ry="8" fill="#6D5649" fillOpacity=".15" />
          <path d="m78 55 77-8 9 82-77 9-9-83Z" fill="#986C56" />
          <path d="m84 60 65-7 7 70-65 7-7-70Z" fill="#E8D8C8" />
          <path d="m83 60 13-1 7 71-13 1-7-71Z" fill="#B78365" />
          <path d="m120 73 4 9 10 1-7 7 2 10-9-5-8 5 2-10-7-7 10-1 3-9Z" fill="#B87553" />
        </svg>
      );
    case "cards":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="145" rx="60" ry="8" fill="#5C5266" fillOpacity=".14" />
          <rect x="77" y="57" width="62" height="82" rx="6" transform="rotate(-9 77 57)" fill="#A99BB6" />
          <rect x="103" y="51" width="62" height="82" rx="6" transform="rotate(7 103 51)" fill="#EEE7DD" />
          <path d="m131 77 4 9 10 1-7 7 2 10-9-5-8 5 2-10-7-7 10-1 3-9Z" fill="#B87553" />
          <path d="m86 76 41-6" stroke="#DCD1E2" strokeWidth="2" />
        </svg>
      );
    case "notebook":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="148" rx="55" ry="8" fill="#58614E" fillOpacity=".14" />
          <path d="m81 51 78 7-7 82-78-7 7-82Z" fill="#879276" />
          <path d="m87 57 65 6-6 70-65-6 6-70Z" fill="#EDF0E6" />
          <path d="m105 83 29 3m-31 9 36 3m-37 8 25 2" stroke="#AAB39C" strokeWidth="2" strokeLinecap="round" />
          <path d="M83 56 77 132" stroke="#B7C0AC" strokeWidth="3" />
        </svg>
      );
    case "lights":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <path d="M59 73c32-34 89-35 122 1" stroke="#7D735F" strokeWidth="2" />
          <path d="M71 69v22m29-32v24m31-23v24m31-13v23m28-20v22" stroke="#B58A59" strokeWidth="2" />
          <path d="M66 92c0-5 3-8 5-8s5 3 5 8v7H66v-7Zm29-23c0-5 3-8 5-8s5 3 5 8v7H95v-7Zm31-1c0-5 3-8 5-8s5 3 5 8v7h-10v-7Zm31 10c0-5 3-8 5-8s5 3 5 8v7h-10v-7Zm28 3c0-5 3-8 5-8s5 3 5 8v7h-10v-7Z" fill="#F4E3BD" />
        </svg>
      );
    case "ornaments":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="147" rx="60" ry="8" fill="#59634F" fillOpacity=".14" />
          <path d="M87 73v-15m0 15c-10-10-21-4-20 7 9 4 16 1 20-7Zm0 0c5-14 17-13 20-3-5 8-12 9-20 3Zm42 15V70m0 18c-10-10-20-4-19 6 9 4 15 1 19-6Zm0 0c5-14 17-13 20-3-5 8-12 9-20 3Zm39 8V79m0 17c-9-9-18-4-17 5 8 4 13 1 17-5Zm0 0c4-12 15-11 18-2-5 7-11 8-18 2Z" fill="#7D896F" />
          <circle cx="87" cy="119" r="17" fill="#C48E7B" />
          <circle cx="129" cy="126" r="20" fill="#D7C6A7" />
          <circle cx="168" cy="119" r="16" fill="#A5AF96" />
        </svg>
      );
    case "candles":
      return (
        <svg viewBox="0 0 240 180" className="h-44 w-56 transition-transform duration-500 group-hover:scale-105 sm:h-48 sm:w-60" fill="none" aria-hidden="true">
          <ellipse cx="120" cy="147" rx="58" ry="8" fill="#705448" fillOpacity=".15" />
          <rect x="75" y="91" width="34" height="48" rx="6" fill="#F2E9DA" />
          <rect x="114" y="71" width="36" height="68" rx="7" fill="#D8C6AE" />
          <rect x="155" y="98" width="28" height="41" rx="5" fill="#E9D7C7" />
          <path d="M92 91c-7-8 0-13 1-21 8 8 9 14 2 21h-3Zm15 0c-6-7 0-11 1-17 6 7 7 12 2 17h-3Zm24-20c-8-9 0-15 1-24 9 9 10 17 2 24h-3Zm37 27c-6-7 0-11 1-17 6 7 7 12 2 17h-3Z" fill="#C78763" />
          <path d="M92 98v31m38-17v17m37-22v22" stroke="#C6A88D" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Tienda() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === null || product.category === activeCategory;
    const query = search.trim().toLocaleLowerCase("es");
    const matchesSearch =
      query.length === 0 ||
      `${product.name} ${product.category} ${product.description}`
        .toLocaleLowerCase("es")
        .includes(query);

    return matchesCategory && matchesSearch;
  });

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
            <Link href="/tienda" aria-current="page" className="text-[#a46f53]">
              Tienda
            </Link>
            <Link href="/nuestra-esencia" className="transition-colors hover:text-[#b87553]">
              Nuestra Esencia
            </Link>
            <Link
              href="/carta-de-la-casa"
              className="rounded-full border border-[#49463f]/20 px-5 py-2 transition-colors hover:border-[#b87553] hover:text-[#b87553]"
            >
              Carta de la casa
            </Link>
            <Link href="/contacto" className="transition-colors hover:text-[#b87553]">
              Contacto
            </Link>
          </nav>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full bg-[#59634f] px-4 py-2 text-xs font-medium text-white">
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
        <section className="bg-[#efebe2] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#49463f]/60 transition-colors hover:text-[#a46f53]"
            >
              <span aria-hidden="true">←</span> Volver al inicio
            </Link>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#a46f53]">
                  La selección de la casa
                </p>
                <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl">
                  Tienda
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#49463f]/70 sm:text-lg">
                  Pequeños detalles seleccionados para hacer que cada espacio
                  se sienta más tuyo.
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#49463f]/50">
                18 hallazgos para vivir bonito
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="flex flex-col gap-6 border-b border-[#49463f]/10 pb-8">
            <div className="flex flex-wrap gap-2.5" aria-label="Filtrar por categoría">
              <button
                type="button"
                aria-pressed={activeCategory === null}
                onClick={() => setActiveCategory(null)}
                className={`rounded-full border px-4 py-2.5 text-xs transition-colors ${
                  activeCategory === null
                    ? "border-[#59634f] bg-[#59634f] text-white"
                    : "border-[#49463f]/15 bg-transparent text-[#49463f]/75 hover:border-[#b87553] hover:text-[#a46f53]"
                }`}
              >
                Ver todo
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  aria-pressed={activeCategory === category.name}
                  onClick={() =>
                    setActiveCategory((current) =>
                      current === category.name ? null : category.name,
                    )
                  }
                  className={`rounded-full border px-4 py-2.5 text-xs transition-colors ${
                    activeCategory === category.name
                      ? "border-[#59634f] bg-[#59634f] text-white"
                      : "border-[#49463f]/15 bg-transparent text-[#49463f]/75 hover:border-[#b87553] hover:text-[#a46f53]"
                  }`}
                >
                  <span className="mr-1.5" aria-hidden="true">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label htmlFor="catalog-search" className="sr-only">
                Buscar productos
              </label>
              <div className="relative w-full sm:max-w-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#49463f]/45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="10.8" cy="10.8" r="6.3" />
                  <path d="m15.5 15.5 4 4" strokeLinecap="round" />
                </svg>
                <input
                  id="catalog-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar un cosito..."
                  className="h-11 w-full rounded-full border border-[#49463f]/15 bg-transparent pl-11 pr-5 text-sm outline-none transition-colors placeholder:text-[#49463f]/45 focus:border-[#a46f53]"
                />
              </div>
              <p className="text-xs tracking-wide text-[#49463f]/55" aria-live="polite">
                {filteredProducts.length} {filteredProducts.length === 1 ? "cosito" : "cositos"}
                {activeCategory ? ` en ${activeCategory}` : " para descubrir"}
              </p>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-6 gap-y-12 pt-9 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article key={product.name} className="group">
                  <div
                    className={`relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br transition-shadow duration-500 group-hover:shadow-[0_18px_40px_-22px_rgba(73,70,63,0.4)] ${product.color} sm:h-72`}
                  >
                    <div className="absolute inset-4 rounded-xl border border-white/35" />
                    <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border border-white/25 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute -bottom-12 -right-6 h-36 w-36 rounded-full border border-white/25" />
                    <ProductArtwork form={product.form} />
                    <span className="absolute left-6 top-6 rounded-full border border-white/50 bg-[#f7f4ed]/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[#49463f]/65 backdrop-blur-sm">
                      Selección de la casa
                    </span>
                  </div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#a46f53]">
                    {product.category}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h2 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#a46f53]">
                      {product.name === "Difusor efecto llama" ? (
                        <Link href="/producto/difusor-efecto-llama">
                          {product.name}
                        </Link>
                      ) : (
                        product.name
                      )}
                    </h2>
                    <span className="shrink-0 pt-1 text-sm text-[#49463f]/75">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#49463f]/65">
                    {product.description}
                  </p>
                  {product.name === "Difusor efecto llama" ? (
                    <Link
                      href="/producto/difusor-efecto-llama"
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#59634f] transition-colors hover:text-[#a46f53]"
                    >
                      Ver detalle <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-serif text-3xl">No encontramos ese cosito.</p>
              <p className="mt-3 text-sm text-[#49463f]/65">
                Prueba con otra búsqueda o explora todas las categorías.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory(null);
                }}
                className="mt-6 rounded-full border border-[#49463f]/20 px-5 py-2.5 text-sm transition-colors hover:border-[#b87553] hover:text-[#a46f53]"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-[#49463f]/10 bg-[#efebe2] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
            <BrandLogo variant="footer" />
          </Link>
          <p className="text-xs text-[#49463f]/55">
            Cositas elegidas con cariño para hacer hogar.
          </p>
          <Link href="/" className="text-xs text-[#49463f]/65 transition-colors hover:text-[#a46f53]">
            Volver al inicio ↑
          </Link>
          <Link href="/contacto" className="text-xs text-[#49463f]/65 transition-colors hover:text-[#a46f53]">
            Contacto
          </Link>
        </div>
      </footer>
    </div>
  );
}
