import Link from "next/link";
import BrandLogo from "../components/brand-logo";

const promises = [
  {
    number: "01",
    title: "Seleccionar con intención",
    description:
      "Elegimos cada pieza pensando en cómo puede acompañar tu vida, no solo en cómo se ve.",
  },
  {
    number: "02",
    title: "Inspirar sin imponer",
    description:
      "Compartimos ideas para abrir posibilidades, dejando siempre espacio para tu propia manera.",
  },
  {
    number: "03",
    title: "Crear espacios con significado",
    description:
      "Creemos que un hogar se construye con recuerdos, pequeños rituales y cosas que hablan de ti.",
  },
  {
    number: "04",
    title: "Celebrar las distintas etapas de la vida",
    description:
      "Acompañamos los cambios, los comienzos y los momentos cotidianos que hacen una historia.",
  },
  {
    number: "05",
    title: "Priorizar la calidez humana",
    description:
      "Detrás de cada pedido hay una persona. Queremos que cada encuentro se sienta cercano y amable.",
  },
] as const;

export default function CartaDeLaCasa() {
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
            <Link href="/carta-de-la-casa" aria-current="page" className="text-[#a46f53]">
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
              <Link href="/nuestra-esencia" className="hover:text-[#b87553]">Nuestra Esencia</Link>
              <Link href="/carta-de-la-casa" className="text-[#a46f53]">Carta de la casa</Link>
              <Link href="/contacto" className="hover:text-[#b87553]">Contacto</Link>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#efebe2] px-6 py-24 md:px-10 md:py-32">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#d8ded1]/75 blur-2xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#e8d8c6]/80 blur-2xl" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.24em] text-[#a46f53]">
              Desde nuestra casa, para la tuya
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Carta de la Casa
            </h1>
            <div className="mt-8 flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-start">
              <span className="mt-3 hidden h-px w-16 shrink-0 bg-[#b87553] sm:block" />
              <p className="max-w-2xl font-serif text-2xl leading-relaxed text-[#49463f]/80 sm:text-3xl">
                Una carta para quienes creen que los pequeños detalles
                transforman la vida.
              </p>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[#49463f]/50">
              Con cariño, La Casa del Cosito
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-28">
          <aside className="md:sticky md:top-36 md:self-start">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a46f53]">
              Unas palabras de nuestra casa
            </p>
            <div className="mt-6 h-px w-16 bg-[#b87553]" />
            <p className="mt-6 font-serif text-2xl leading-relaxed text-[#59634f]">
              Para leer sin prisa, como se disfrutan las cosas buenas.
            </p>
          </aside>

          <article className="max-w-3xl">
            <p className="font-serif text-3xl leading-relaxed sm:text-4xl">
              Hola, qué alegría que estés aquí.
            </p>
            <div className="mt-8 space-y-6 text-base leading-8 text-[#49463f]/75 sm:text-lg">
              <p>
                En esta casa creemos que la belleza no vive en la perfección.
                Vive en lo que se usa, en lo que guarda una historia y en esos
                detalles que hacen que un espacio se sienta verdaderamente tuyo.
              </p>
              <p>
                Los hogares cuentan historias. Las cuentan con una mesa
                compartida, una taza de todos los días, una esquina que por fin
                encontró su calma. Por eso pensamos que cada rincón merece
                atención: no para que luzca impecable, sino para que te haga
                sentir bien.
              </p>
              <p>
                Los objetos nos acompañan en momentos pequeños y enormes. Están
                cerca cuando empezamos algo nuevo, cuando hacemos una pausa y
                cuando simplemente estamos en casa. Nos gusta elegir cosas que
                puedan formar parte de esos recuerdos, sin pedir ser el centro
                de ellos.
              </p>
              <p>
                Y sabemos que una casa no se siente hogar sin quienes la
                comparten. Las mascotas también son familia: tienen sus
                costumbres, sus rincones favoritos y un lugar irremplazable en
                nuestras historias.
              </p>
              <p>
                El bienestar, para nosotros, comienza en lo cotidiano. En
                cuidarte un poco, en encontrar orden donde lo necesitas, en
                respirar más despacio. No hacen falta grandes cambios; a veces
                basta con algo pequeño que te recuerde que estás aquí.
              </p>
              <p>
                Porque los pequeños detalles importan. No por ser perfectos,
                sino porque hacen la vida más amable, más cálida y más nuestra.
              </p>
            </div>
            <p className="mt-10 font-serif text-2xl text-[#59634f]">
              Con cariño,
              <br />
              La Casa del Cosito
            </p>
          </article>
        </section>

        <section className="bg-[#59634f] px-6 py-20 text-[#f7f4ed] md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#e2c6ae]">
                Nuestra palabra
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Lo que prometemos
              </h2>
            </div>
            <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {promises.map((promise) => (
                <article key={promise.number} className="border-t border-white/25 py-6">
                  <p className="text-xs tracking-[0.18em] text-[#e2c6ae]">
                    {promise.number}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl">{promise.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {promise.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e8d8c6] px-6 py-20 text-center md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8d5f48]">
              Siempre hay un lugar para ti
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Bienvenida a casa
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#49463f]/70 sm:text-lg">
              Ojalá encuentres aquí algo que te acompañe, te inspire o te haga
              sonreír. Y que, entre tantos pequeños detalles, encuentres uno
              que se sienta hecho para ti.
            </p>
            <Link
              href="/#favoritos"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#59634f] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#424b3a]"
            >
              Explorar la colección
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
              Los pequeños detalles hacen la vida más nuestra.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#49463f]/70">
            <Link href="/#mundos" className="hover:text-[#b87553]">
              Explorar
            </Link>
            <Link href="/tienda" className="hover:text-[#b87553]">
              Tienda
            </Link>
            <Link href="/nuestra-esencia" className="hover:text-[#b87553]">
              Nuestra Esencia
            </Link>
            <Link href="/#newsletter" className="hover:text-[#b87553]">
              Newsletter
            </Link>
            <Link href="/contacto" className="hover:text-[#b87553]">
              Contacto
            </Link>
            <a href="mailto:hola@lacasadelcosito.mx" className="hover:text-[#b87553]">
              Escríbenos
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-[#49463f]/10 pt-5 text-xs text-[#49463f]/50 sm:flex-row sm:justify-between">
          <span>© 2026 La Casa del Cosito</span>
          <span>Hecho con cariño en México</span>
        </div>
      </footer>
    </div>
  );
}
