import Link from "next/link";
import BrandLogo from "../components/brand-logo";
import LegalLinks from "../components/legal-links";

const worlds = [
  {
    name: "Hogar Bonito",
    description: "Espacios que cuentan tu historia.",
    background: "bg-[#e8d8c6]",
    object: "bg-[#b87553]",
    shape: "rounded-t-[45%] rounded-b-2xl",
  },
  {
    name: "Bienestar",
    description: "Rituales sencillos para volver a ti.",
    background: "bg-[#dfe3d8]",
    object: "bg-[#879276]",
    shape: "rounded-full",
  },
  {
    name: "Familia",
    description: "Acompañar cada etapa con ternura.",
    background: "bg-[#ecded6]",
    object: "bg-[#c48e7b]",
    shape: "rounded-t-full rounded-b-[42%]",
  },
  {
    name: "Mascotas",
    description: "Porque ellos también hacen hogar.",
    background: "bg-[#e8e4d3]",
    object: "bg-[#aa9c67]",
    shape: "rounded-[45%_45%_30%_30%]",
  },
  {
    name: "Crecimiento Personal",
    description: "Ideas para florecer a tu propio ritmo.",
    background: "bg-[#e2dce7]",
    object: "bg-[#9789a8]",
    shape: "rounded-t-[50%] rounded-b-lg",
  },
  {
    name: "Temporada",
    description: "Celebrar lo cotidiano y lo extraordinario.",
    background: "bg-[#eee1d4]",
    object: "bg-[#c58761]",
    shape: "rounded-full",
  },
] as const;

const beliefs = [
  {
    number: "01",
    title: "Lo cotidiano merece belleza",
    description:
      "No hace falta esperar una ocasión especial para rodearte de cosas que te hacen bien.",
  },
  {
    number: "02",
    title: "Cada casa es distinta",
    description:
      "No hay una sola forma de hacer hogar. La mejor es la que se siente tuya.",
  },
  {
    number: "03",
    title: "Los detalles sí importan",
    description:
      "Un pequeño gesto, un rincón cuidado, una pausa: ahí también vive la felicidad.",
  },
  {
    number: "04",
    title: "Hay espacio para todos",
    description:
      "Tu historia incluye a quienes quieres, a quienes cuidas y a quienes mueven la cola.",
  },
] as const;

export default function NuestraEsencia() {
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
            <Link href="/#beneficios" className="transition-colors hover:text-[#b87553]">
              Beneficios
            </Link>
            <Link href="/tienda" className="transition-colors hover:text-[#b87553]">
              Tienda
            </Link>
            <Link href="/nuestra-esencia" aria-current="page" className="text-[#a46f53]">
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
              <Link href="/#mundos" className="hover:text-[#b87553]">Explorar</Link>
              <Link href="/tienda" className="hover:text-[#b87553]">Tienda</Link>
              <Link href="/nuestra-esencia" className="text-[#a46f53]">Nuestra Esencia</Link>
              <Link href="/carta-de-la-casa" className="hover:text-[#b87553]">Carta de la casa</Link>
              <Link href="/contacto" className="hover:text-[#b87553]">Contacto</Link>
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
              La historia detrás de cada cosito
            </p>
            <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-6xl md:text-7xl">
              Nuestra Esencia
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#49463f]/70 sm:text-lg">
              Creemos que sentirse en casa empieza en las pequeñas cosas.
              Bienvenida a un espacio hecho para encontrar las tuyas.
            </p>
            <a
              href="#nacimos"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b87553] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#a66343]"
            >
              Conócenos
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section id="nacimos" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div className="relative mx-auto flex h-80 w-full max-w-lg items-center justify-center overflow-hidden rounded-[48%_48%_12%_12%] bg-[#e8d8c6] sm:h-96">
            <div className="absolute bottom-8 h-32 w-64 rounded-[50%] bg-[#d2bda6]" />
            <div className="absolute bottom-20 left-[23%] h-36 w-28 rounded-t-[48%] rounded-b-xl bg-[#aab39c] sm:h-44 sm:w-32" />
            <div className="absolute bottom-24 right-[22%] h-24 w-24 rounded-full bg-[#c78763] sm:h-28 sm:w-28" />
            <div className="absolute right-[28%] top-12 h-32 w-2 rotate-12 rounded-full bg-[#788268]">
              <span className="absolute -left-5 top-6 h-10 w-7 -rotate-45 rounded-[100%_0_100%_0] bg-[#788268]" />
              <span className="absolute left-1 top-14 h-10 w-7 rotate-45 rounded-[0_100%_0_100%] bg-[#899276]" />
            </div>
            <span className="absolute left-6 top-8 rounded-full bg-[#f7f4ed]/90 px-4 py-2 font-serif text-sm">
              Los pequeños detalles
            </span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
              Un comienzo sencillo
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              Nacimos del amor por los pequeños detalles
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#49463f]/70">
              De esos objetos que te hacen sonreír al pasar, de los rituales que
              convierten un día cualquiera en un buen día y de los rincones que
              se sienten como un abrazo.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#49463f]/70">
              La Casa del Cosito nació para reunir hallazgos que aportan algo
              más que belleza: calma, alegría, compañía y un poquito de magia
              cotidiana.
            </p>
          </div>
        </section>

        <section className="bg-[#59634f] px-6 py-20 text-[#f7f4ed] md:px-10 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#e2c6ae]">
                Una palabra muy nuestra
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                ¿Qué es un cosito?
              </h2>
            </div>
            <div className="border-l border-white/25 pl-6 sm:pl-9">
              <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
                Es esa cosita que no sabías que necesitabas hasta que llegó a
                casa y encontró su lugar.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                Puede ser útil, bonita, reconfortante o simplemente hacerte
                feliz. Un cosito es pequeño en tamaño, pero grande en lo que
                significa para ti.
              </p>
            </div>
          </div>
        </section>

        <section id="mundos" className="bg-[#efebe2] px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
                Seis formas de hacer hogar
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Nuestros mundos
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {worlds.map((world, index) => (
                <article key={world.name} className="group">
                  <div className={`relative flex h-56 items-center justify-center overflow-hidden rounded-2xl ${world.background}`}>
                    <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-[#49463f]/45">
                      0{index + 1}
                    </span>
                    <div className="absolute h-40 w-40 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute h-28 w-28 rounded-full border border-white/40" />
                    <div className={`relative h-24 w-20 shadow-md transition-transform duration-500 group-hover:-translate-y-1 ${world.object} ${world.shape}`}>
                      <span className="absolute inset-3 rounded-[inherit] border border-white/35" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{world.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#49463f]/65">
                    {world.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="creencias" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="mb-12 max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
              Nuestra forma de mirar
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Lo que creemos
            </h2>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <article key={belief.number} className="border-t border-[#49463f]/15 py-7">
                <p className="text-xs tracking-[0.18em] text-[#a46f53]">
                  {belief.number}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{belief.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#49463f]/65">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#e8d8c6] px-6 py-20 text-center md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8d5f48]">
              Aquí hay lugar para ti
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Bienvenida a casa
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#49463f]/70">
              Ojalá encuentres algo que te haga sentir bien, que te recuerde
              algo bonito o que simplemente te saque una sonrisa.
            </p>
            <Link
              href="/#mundos"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#59634f] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#424b3a]"
            >
              Explora nuestros mundos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#f7f4ed] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="flex shrink-0 items-center" aria-label="La Casa del Cosito">
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#49463f]/65">
              Un hogar se construye con detalles, cariño y espacio para ser tú.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#49463f]/70">
            <Link href="/#mundos" className="hover:text-[#b87553]">Nuestros mundos</Link>
            <a href="#creencias" className="hover:text-[#b87553]">Lo que creemos</a>
            <Link href="/tienda" className="hover:text-[#b87553]">Tienda</Link>
            <Link href="/carta-de-la-casa" className="hover:text-[#b87553]">Carta de la casa</Link>
            <Link href="/#newsletter" className="hover:text-[#b87553]">Newsletter</Link>
            <Link href="/contacto" className="hover:text-[#b87553]">Contacto</Link>
            <a href="mailto:hola@lacasadelcosito.mx" className="hover:text-[#b87553]">
              Escríbenos
            </a>
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
