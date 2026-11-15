import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "../components/brand-logo";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contacto | La Casa del Cosito",
  description:
    "Hablemos. Escríbenos tus preguntas, ideas o saludos; nos encantará leerte.",
};

export default function Contacto() {
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
            <Link href="/#mundos" className="transition-colors hover:text-[#b87553]">
              Explorar
            </Link>
            <Link href="/tienda" className="transition-colors hover:text-[#b87553]">
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
            <Link href="/contacto" aria-current="page" className="text-[#a46f53]">
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
              <Link href="/#mundos" className="hover:text-[#b87553]">Explorar</Link>
              <Link href="/tienda" className="hover:text-[#b87553]">Tienda</Link>
              <Link href="/nuestra-esencia" className="hover:text-[#b87553]">Nuestra Esencia</Link>
              <Link href="/carta-de-la-casa" className="hover:text-[#b87553]">Carta de la casa</Link>
              <Link href="/contacto" aria-current="page" className="text-[#a46f53]">Contacto</Link>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#efebe2] px-6 py-24 text-center md:px-10 md:py-32">
          <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#d8ded1]/70 blur-2xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#e8d8c6]/80 blur-2xl" />
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#a46f53]">
              Una conversación bonita empieza aquí
            </p>
            <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl">
              Hablemos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#49463f]/70 sm:text-lg">
              ¿Tienes una pregunta, una idea o simplemente quieres saludarnos?
              Nos encantará leerte. Cuéntanos qué tienes en mente y te responderemos
              con mucho cariño.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-24">
          <div className="pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#a46f53]">
              Estamos para leerte
            </p>
            <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Cada mensaje hace más nuestra esta casa.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#49463f]/70">
              Ya sea que busques un detalle para tu hogar o quieras compartirnos
              una sugerencia, aquí hay alguien feliz de escucharte.
            </p>
            <a
              href="mailto:hola@lacasadelcosito.mx"
              className="mt-6 inline-flex text-sm text-[#a46f53] transition-colors hover:text-[#8f573a]"
            >
              hola@lacasadelcosito.mx
            </a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="bg-[#f7f4ed] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#49463f]/65">
              Un hogar se construye con detalles, cariño y espacio para ser tú.
            </p>
          </div>
          <nav aria-label="Explorar" className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm text-[#49463f]/70">
            <Link href="/" className="transition-colors hover:text-[#b87553]">Inicio</Link>
            <Link href="/tienda" className="transition-colors hover:text-[#b87553]">Tienda</Link>
            <Link href="/nuestra-esencia" className="transition-colors hover:text-[#b87553]">Nuestra Esencia</Link>
            <Link href="/carta-de-la-casa" className="transition-colors hover:text-[#b87553]">Carta de la casa</Link>
            <Link href="/contacto" aria-current="page" className="text-[#a46f53]">Contacto</Link>
          </nav>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-[#49463f]/10 pt-5 text-xs text-[#49463f]/50 sm:flex-row sm:justify-between">
          <span>© 2026 La Casa del Cosito</span>
          <span>Hecho con cariño en México</span>
        </div>
      </footer>
    </div>
  );
}
