export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  introduction: string;
  sections: LegalSection[];
};

export const legalDocuments = {
  privacy: {
    title: "Política de Privacidad",
    description:
      "Conoce cómo La Casa del Cosito trata y protege tus datos personales.",
    introduction:
      "Tu confianza también hace hogar. En La Casa del Cosito procuramos tratar tus datos personales con cuidado, transparencia y únicamente para los fines que aquí explicamos.",
    sections: [
      {
        title: "Responsable y contacto",
        paragraphs: [
          "Guadalupe Ruiz Reyes, quien opera bajo el nombre comercial La Casa del Cosito, es responsable del tratamiento de los datos personales que reciba en relación con sus productos y servicios.",
          "Domicilio del responsable: pendiente de confirmar e incorporar antes de publicar esta política. Para consultas sobre privacidad, puedes escribir a hola@lacasadelcosito.mx.",
        ],
      },
      {
        title: "Datos que podemos tratar",
        paragraphs: [
          "Solo solicitamos los datos necesarios para atender cada interacción. Dependiendo del servicio que utilices, estos pueden incluir:",
        ],
        bullets: [
          "Datos de contacto, como nombre, correo electrónico y, cuando sea necesario para una entrega, teléfono y domicilio.",
          "Información que incluyas voluntariamente en una consulta o solicitud de atención.",
          "Datos relacionados con una compra, como productos, importe, estado del pedido y datos necesarios para coordinar pago y entrega.",
          "Datos técnicos básicos que el navegador y la infraestructura de alojamiento generan al visitar el sitio.",
        ],
      },
      {
        title: "Finalidades",
        paragraphs: [
          "Usamos los datos para responder consultas, dar seguimiento a pedidos, coordinar entregas, atender solicitudes de garantía o devolución, cumplir obligaciones legales y mantener la seguridad del sitio.",
          "Cualquier comunicación promocional se utilizará únicamente cuando corresponda y podrás pedir que dejemos de enviarla escribiendo a nuestro correo de contacto.",
        ],
      },
      {
        title: "Con quién compartimos los datos",
        paragraphs: [
          "No vendemos tus datos personales. Cuando sea necesario para completar una compra o prestar el servicio, podremos comunicar la información indispensable a proveedores de pago, paquetería, alojamiento o soporte tecnológico, quienes deberán tratarla conforme a sus funciones y a la legislación aplicable.",
          "Los proveedores pueden operar dentro o fuera de México. Cuando corresponda, tomaremos las medidas aplicables para proteger la información y limitar su uso a la finalidad contratada.",
        ],
      },
      {
        title: "Derechos ARCO y revocación",
        paragraphs: [
          "Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos personales, así como revocar tu consentimiento cuando proceda. Envía tu solicitud a hola@lacasadelcosito.mx e incluye tu nombre, un medio para responderte, una descripción clara de la solicitud y la información necesaria para verificar tu identidad.",
          "Te informaremos si hace falta algún dato adicional y responderemos dentro de los plazos previstos por la legislación mexicana aplicable. La cancelación puede estar sujeta a obligaciones legales de conservación.",
        ],
      },
      {
        title: "Conservación y seguridad",
        paragraphs: [
          "Conservamos los datos solo durante el tiempo necesario para atender la finalidad para la que fueron obtenidos y cumplir obligaciones legales. Aplicamos medidas razonables para protegerlos contra pérdida, uso o acceso no autorizado; ningún medio de transmisión o almacenamiento puede garantizar seguridad absoluta.",
        ],
      },
      {
        title: "Cambios a esta política",
        paragraphs: [
          "Podemos actualizar esta política para reflejar cambios en el sitio, nuestros servicios o la normativa aplicable. Publicaremos aquí la versión vigente e indicaremos su fecha de actualización.",
          "Última actualización: 16 de noviembre de 2026.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos y Condiciones",
    description:
      "Términos de uso y condiciones generales de compra de La Casa del Cosito en México.",
    introduction:
      "Te damos la bienvenida a La Casa del Cosito. Al navegar por este sitio aceptas estos términos de uso. Las condiciones concretas de una compra deberán mostrarse antes de confirmar el pedido.",
    sections: [
      {
        title: "Quiénes somos y cómo contactarnos",
        paragraphs: [
          "La Casa del Cosito es el nombre comercial bajo el que opera Guadalupe Ruiz Reyes. Para preguntas o aclaraciones, escríbenos a hola@lacasadelcosito.mx.",
        ],
      },
      {
        title: "Información de productos y precios",
        paragraphs: [
          "Procuramos describir y mostrar los productos con claridad. Las imágenes son ilustrativas y pueden existir variaciones menores de color o apariencia por la pantalla o el lote del producto.",
          "Los precios se expresan en pesos mexicanos (MXN). Antes de confirmar una compra se deberán informar el precio total, impuestos aplicables, cargos de envío y cualquier otra condición de pago. Una promoción solo aplica durante el periodo y bajo las condiciones que se indiquen.",
        ],
      },
      {
        title: "Pedidos y disponibilidad",
        paragraphs: [
          "La disponibilidad se confirma al momento de procesar el pedido. La recepción de una solicitud no significa que la compra esté confirmada: la confirmación deberá indicar los productos, el importe y las condiciones de entrega.",
          "Si un producto no está disponible o existe un error relevante en la información del pedido, nos pondremos en contacto contigo para ofrecer una solución conforme a la legislación mexicana aplicable.",
        ],
      },
      {
        title: "Pagos y entrega",
        paragraphs: [
          "Los métodos de pago aceptados, la cobertura de entrega, los costos y los plazos estimados deberán mostrarse antes de que confirmes la compra. Si interviene un proveedor externo de pago o envío, también podrán aplicar sus condiciones de servicio.",
          "Consulta la Política de Envíos y la Política de Devoluciones y Reembolsos para conocer más sobre estas operaciones.",
        ],
      },
      {
        title: "Devoluciones, garantías y derechos del consumidor",
        paragraphs: [
          "Las solicitudes por productos dañados, defectuosos, incorrectos o por cualquier otro motivo se atenderán conforme a la legislación mexicana de protección al consumidor y a la política vigente al momento de la compra. Estos términos no limitan los derechos irrenunciables que te reconoce la ley.",
        ],
      },
      {
        title: "Uso del sitio y propiedad intelectual",
        paragraphs: [
          "Te comprometes a utilizar el sitio de forma lícita y a no interferir con su seguridad o funcionamiento. Los textos, logotipos, imágenes y elementos gráficos pertenecen a sus titulares y no pueden reproducirse con fines comerciales sin autorización.",
        ],
      },
      {
        title: "Legislación y cambios",
        paragraphs: [
          "Estos términos se interpretan conforme a las leyes aplicables en México, incluida la legislación de protección al consumidor. Las controversias podrán plantearse ante las autoridades competentes, sin limitar las vías de reclamación que la ley reconoce a las personas consumidoras.",
          "Podemos actualizar estos términos; los cambios se publicarán en esta página. La versión aplicable a una compra será la vigente cuando se confirme el pedido.",
          "Última actualización: 16 de noviembre de 2026.",
        ],
      },
    ],
  },
  shipping: {
    title: "Política de Envíos",
    description:
      "Información sobre cobertura, costos, tiempos y seguimiento de los envíos de La Casa del Cosito.",
    introduction:
      "Queremos que tus cositos lleguen con cuidado. Los detalles de cada envío deben confirmarse antes de que realices tu compra.",
    sections: [
      {
        title: "Cobertura y datos de entrega",
        paragraphs: [
          "La cobertura de entrega y las localidades disponibles están pendientes de confirmación por La Casa del Cosito. Antes de aceptar una compra, se deberá verificar que la dirección se encuentre dentro de la zona atendida.",
          "Al proporcionar una dirección, revisa que esté completa y correcta. Si necesitas corregirla, escríbenos cuanto antes a hola@lacasadelcosito.mx; una vez entregado el paquete a la paquetería, el cambio puede no ser posible.",
        ],
      },
      {
        title: "Costo y plazo",
        paragraphs: [
          "Los costos de envío, las paqueterías disponibles y los plazos estimados están pendientes de confirmación. Deben informarse claramente antes de que confirmes y pagues un pedido. No se entenderá que existe envío gratuito salvo que se indique expresamente en la oferta.",
          "Cuando se definan, los plazos se expresarán en días hábiles y se contarán desde la confirmación del pedido y del pago. Son estimados y pueden verse afectados por la ubicación, días festivos, clima, fuerza mayor o incidencias de la paquetería; te avisaremos si conocemos algún retraso relevante.",
        ],
      },
      {
        title: "Preparación y seguimiento",
        paragraphs: [
          "El tiempo de preparación y la disponibilidad de seguimiento se informarán al confirmar el pedido. Si se proporciona un número de rastreo, podrás consultar el avance directamente con la paquetería.",
        ],
      },
      {
        title: "Recepción e incidencias",
        paragraphs: [
          "Procura que una persona pueda recibir el paquete en la dirección indicada. Si el paquete llega visiblemente dañado, conserva el empaque y toma fotografías antes de desecharlo; contáctanos en hola@lacasadelcosito.mx con tu número de pedido y una descripción de lo ocurrido.",
          "Las incidencias se revisarán con la paquetería y se atenderán conforme a la Política de Devoluciones y Reembolsos y a los derechos previstos por la ley.",
        ],
      },
      {
        title: "Información pendiente de publicación",
        paragraphs: [
          "Antes de iniciar ventas en línea, La Casa del Cosito debe completar y publicar las zonas de cobertura, paqueterías, costo de envío, tiempo de preparación y plazo estimado de entrega. No se deben interpretar los campos pendientes como una promesa de servicio.",
          "Última actualización: 16 de noviembre de 2026.",
        ],
      },
    ],
  },
  returns: {
    title: "Política de Devoluciones y Reembolsos",
    description:
      "Conoce cómo solicitar ayuda con una devolución, cambio o reembolso en La Casa del Cosito.",
    introduction:
      "Si algo no salió como esperabas, queremos escucharte y ayudarte. Esta política explica cómo iniciar una solicitud y qué información compartir.",
    sections: [
      {
        title: "Cómo iniciar una solicitud",
        paragraphs: [
          "Escríbenos a hola@lacasadelcosito.mx con el número de pedido, el nombre usado al comprar, el motivo de la solicitud y fotografías cuando ayuden a explicar un daño o error. Te responderemos para indicarte los siguientes pasos y la dirección autorizada, si corresponde.",
          "No envíes productos de regreso sin comunicarte primero con nosotros: esto ayuda a identificar el pedido y acordar una forma segura de devolución.",
        ],
      },
      {
        title: "Producto dañado, defectuoso o distinto",
        paragraphs: [
          "Si recibes un artículo dañado, defectuoso o diferente al solicitado, avísanos tan pronto como sea posible y conserva el producto, su empaque y la evidencia disponible. Revisaremos el caso contigo y propondremos la solución que corresponda conforme a la legislación mexicana aplicable.",
        ],
      },
      {
        title: "Devolución por cambio de opinión",
        paragraphs: [
          "El plazo y las condiciones para devoluciones voluntarias por cambio de opinión están pendientes de definición por La Casa del Cosito. Cuando se ofrezca esta opción, sus condiciones se informarán antes de la compra. Esto no limita los derechos que te concede la ley.",
        ],
      },
      {
        title: "Reembolsos",
        paragraphs: [
          "Si procede un reembolso, confirmaremos por escrito el importe y el método. Siempre que sea posible, se gestionará al medio de pago original; el tiempo para reflejarse puede depender del banco o proveedor de pago.",
          "El plazo operativo y el procedimiento definitivo de reembolso están pendientes de confirmación y deberán informarse antes de iniciar ventas en línea. No se descontarán cargos no informados al confirmar la compra.",
        ],
      },
      {
        title: "Cambios y garantías",
        paragraphs: [
          "La disponibilidad de cambios depende del inventario y se confirmará para cada caso. Las garantías y demás derechos previstos en la legislación de protección al consumidor se mantienen vigentes y no quedan sustituidos por esta política.",
          "Última actualización: 16 de noviembre de 2026.",
        ],
      },
    ],
  },
  cookies: {
    title: "Aviso de Cookies",
    description:
      "Información sobre cookies y tecnologías similares en el sitio de La Casa del Cosito.",
    introduction:
      "Usamos esta página para explicar qué son las cookies y cómo puedes administrar su uso al visitar La Casa del Cosito.",
    sections: [
      {
        title: "Qué son las cookies",
        paragraphs: [
          "Las cookies son pequeños archivos que un sitio puede guardar en tu navegador. Tecnologías similares pueden recordar preferencias, permitir funciones técnicas o medir el uso de una página.",
        ],
      },
      {
        title: "Uso en este sitio",
        paragraphs: [
          "La versión actual del sitio no integra herramientas propias de analítica ni publicidad basada en cookies. La infraestructura que entrega y protege el sitio podría utilizar tecnologías técnicas necesarias para seguridad y funcionamiento.",
          "Si se incorporan herramientas de analítica, publicidad, pago u otras tecnologías no esenciales, este aviso se actualizará para describirlas y, cuando corresponda, solicitar tu consentimiento antes de activarlas.",
        ],
      },
      {
        title: "Cómo administrar cookies",
        paragraphs: [
          "Puedes revisar, bloquear o eliminar cookies desde la configuración de privacidad de tu navegador. Si bloqueas tecnologías estrictamente necesarias, algunas funciones del sitio podrían no comportarse como se espera.",
        ],
      },
      {
        title: "Contacto y actualizaciones",
        paragraphs: [
          "Si tienes dudas sobre este aviso, escríbenos a hola@lacasadelcosito.mx. Publicaremos cualquier cambio en esta página.",
          "Última actualización: 16 de noviembre de 2026.",
        ],
      },
    ],
  },
} satisfies Record<string, LegalDocument>;
