"use client";

import type { FormEvent } from "react";

const contactEmail = "hola@lacasadelcosito.mx";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("nombre") ?? "");
    const email = String(formData.get("correo") ?? "");
    const message = String(formData.get("mensaje") ?? "");
    const subject = encodeURIComponent(`Mensaje de contacto de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo electrónico: ${email}\n\nMensaje:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#49463f]/10 bg-white/60 p-6 shadow-sm sm:p-9"
    >
      <div className="space-y-6">
        <label htmlFor="nombre" className="block text-sm font-medium">
          Nombre
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-[#49463f]/15 bg-[#f7f4ed] px-4 py-3 text-base font-normal outline-none transition focus:border-[#b87553] focus:ring-2 focus:ring-[#b87553]/20"
          />
        </label>

        <label htmlFor="correo" className="block text-sm font-medium">
          Correo electrónico
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-[#49463f]/15 bg-[#f7f4ed] px-4 py-3 text-base font-normal outline-none transition focus:border-[#b87553] focus:ring-2 focus:ring-[#b87553]/20"
          />
        </label>

        <label htmlFor="mensaje" className="block text-sm font-medium">
          Mensaje
          <textarea
            id="mensaje"
            name="mensaje"
            rows={6}
            required
            className="mt-2 w-full resize-y rounded-xl border border-[#49463f]/15 bg-[#f7f4ed] px-4 py-3 text-base font-normal outline-none transition focus:border-[#b87553] focus:ring-2 focus:ring-[#b87553]/20"
          />
        </label>
      </div>

      <button
        type="submit"
        aria-describedby="contact-form-note"
        className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#b87553] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#a66343] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a66343]"
      >
        Preparar mensaje
        <span aria-hidden="true">→</span>
      </button>
      <p id="contact-form-note" className="mt-4 text-xs leading-5 text-[#49463f]/55">
        Se abrirá tu aplicación de correo para que puedas revisar y enviar el mensaje.
      </p>
    </form>
  );
}
