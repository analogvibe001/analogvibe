/* ============================================================
   CATÁLOGO DE PROYECTOS  (aquí es donde agregas trabajos nuevos)
   ------------------------------------------------------------
   Cada proyecto es un bloque { ... } dentro de "projects".
   - block  : "cine" (Cinematography & Color) o "digital" (Digital & Motion)
   - cats   : una o varias categorías del bloque (ver "categories")
   - name   : título corto que se ve grande sobre la imagen
   - sub    : línea secundaria bajo el título
   - credit : línea pequeña al pie (cámara, rol, cliente...). Puede ir vacía.
   - title  : título completo (se ve al abrir el video)
   - desc   : descripción completa (se ve al abrir el video)
   - thumb  : imagen 16:9 de 1280 px en assets/img/thumbs/
   - UNO de estos para el video:
       youtube : "ID_DEL_VIDEO"           (el código después de v= en YouTube)
       instagram : "ID_DEL_REEL"          (el código en instagram.com/reel/ID/)
       src     : "assets/video/archivo.mp4"  o una URL https://... (R2, Bunny, etc.)
   - vertical : true  si es un video 9:16 (reels, UGC, stories)
   ============================================================ */
window.SITE = {
  blocks: {
    cine: {
      pageSize: 8,
      categories: [
        ["all", "All"],
        ["doc", "Documentary"],
        ["com", "Comercial"],
        ["short", "Short Film"]
      ]
    },
    digital: {
      pageSize: 8,
      categories: [
        ["all", "All"],
        ["social", "Social"],
        ["motion", "Motion"]
      ]
    }
  },

  projects: [
    /* ------------------ CINEMATOGRAPHY & COLOR ------------------ */
    {
      block: "cine", cats: ["doc"],
      name: "Las chicas no patinan", sub: "Documental", credit: "Tesis de graduación",
      title: "Las chicas no patinan | Documental por Mauricio Mena",
      desc: "Documental realizado para mi tesis de graduación de producción audiovisual. Espero sea de su agrado",
      thumb: "assets/img/thumbs/0KZmv_dgKTw.jpg", youtube: "0KZmv_dgKTw"
    },
    {
      block: "cine", cats: ["com"],
      name: "Always on the Run", sub: "New Balance, spec ad", credit: "iPhone 15 Pro · Apple Log · Dehancer Pro",
      title: "Always on the run |New balance Spec Ad | Apple Log | Dehancer",
      desc: "Spec ad for New Balance Iphone 15 pro Log Film Emulation thanks to Dehancer Pro",
      thumb: "assets/img/thumbs/kL1WvA6N6kE.jpg", src: "assets/video/cine/kL1WvA6N6kE.mp4"
    },
    {
      block: "cine", cats: ["short"],
      name: "Niagara Falls", sub: "Así vivimos Niagara Falls", credit: "",
      title: "Niagara Falls",
      desc: "Así vivimos Niagara Falls, increíble.",
      thumb: "assets/img/thumbs/tCmc2-om3kg.jpg", src: "assets/video/cine/tCmc2-om3kg.mp4"
    },
    {
      block: "cine", cats: ["short"],
      name: "Renne", sub: "Short film", credit: "",
      title: "Renne | Short Film",
      desc: "",
      thumb: "assets/img/thumbs/FeL9aSXXf10.jpg", youtube: "FeL9aSXXf10"
    },
    {
      block: "cine", cats: ["short"],
      name: "Conocí Brooklyn Bridge", sub: "Film emulation", credit: "Sony FX30 · S-Log · Dehancer Pro",
      title: "Conocí Brooklyn Bridge | Film emulation Dehancer | Fx30",
      desc: "Film emulation realizado en Dehancer Pro Grabando en slog en la Sony Fx30",
      thumb: "assets/img/thumbs/nCmjuqpgJh8.jpg", src: "assets/video/cine/nCmjuqpgJh8.mp4"
    },
    {
      block: "cine", cats: ["short"],
      name: "Tengo algo que confesarte", sub: "Cortometraje", credit: "Dirección de fotografía",
      title: "Tengo algo que confesarte — Cortometraje",
      desc: "Dirección: Sergio Ortiz Guion: Ariana Solórzano Asistente de dirección: Paula Zambrano Producción: Ariana Solórzano y Keyla Ayala Dirección de arte: Cristel Rivadeneira, Ariana Solórzano y Keyla Ayala Dirección de fotografía: Amalin Bustamante y Mauricio Mena Edición y Montaje: Johanna Ortiz y Sergio Ortiz Sonido: Johanna Ortiz",
      thumb: "assets/img/thumbs/tengo-algo-que-confesarte.jpg", youtube: "_TCeEmALuGg"
    },
    {
      block: "cine", cats: ["doc"],
      name: "mm. | doc", sub: "Documental", credit: "Trabajo universitario",
      title: "mm. | doc",
      desc: "docu sobre mi, trabajo de la u",
      thumb: "assets/img/thumbs/qFVOgsY5jgc.jpg", youtube: "qFVOgsY5jgc"
    },
    {
      block: "cine", cats: ["short"],
      name: "New York", sub: "El orden del caos", credit: "Apple Log · Dehancer Pro",
      title: "New York | El orden del caos | Film emulation Dehancer | Apple Log",
      desc: "🦅",
      thumb: "assets/img/thumbs/sqU7mamU6To.jpg", src: "assets/video/cine/sqU7mamU6To.mp4"
    },
    {
      block: "cine", cats: ["short"],
      name: "Grand Central Terminal", sub: "Film emulation", credit: "iPhone 15 Pro · Apple Log · Dehancer Pro",
      title: "Grand Central Terminal | Film emulation Dehancer | Iphone 15 pro",
      desc: "Film emulation realizado en Dehancer Pro Grabando en Apple log en el iphone 15 pro",
      thumb: "assets/img/thumbs/dOgVtiqxSsA.jpg", src: "assets/video/cine/dOgVtiqxSsA.mp4"
    },
    {
      block: "cine", cats: ["short"],
      name: "Un día en Coney Island", sub: "Film emulation", credit: "iPhone 15 Pro · Apple Log · Dehancer Pro",
      title: "Un día en Coney Island | Film emulation Dehancer | Apple Log",
      desc: "Film emulation realizado en Dehancer Pro Grabando en Log con dl iphone 15 pro",
      thumb: "assets/img/thumbs/kkV8BU-45BE.jpg", src: "assets/video/cine/kkV8BU-45BE.mp4"
    },

    /* ------------------ DIGITAL & MOTION ------------------ */
    {
      block: "digital", cats: ["social"], vertical: true,
      name: "Harry Potter en LiSTO!", sub: "TikTok · 25 Years of Magic", credit: "TikTok · LiSTO!",
      title: "Harry Potter 25 Years of Magic | LiSTO!",
      desc: "Pieza vertical para TikTok de la colección Harry Potter 25 Years of Magic en LiSTO!, con efectos y producción propia.",
      thumb: "assets/img/thumbs/tiktok-harry-potter-listo.jpg", src: "assets/video/work/tiktok-harry-potter-listo.mp4"
    },
    {
      block: "digital", cats: ["motion"],
      name: "Menú Frozen LiSTO!", sub: "Menuboard horizontal", credit: "Pantallas · LiSTO!",
      title: "Menuboard Frozen | LiSTO!",
      desc: "Animación para menuboard horizontal de los Frozen LiSTO! by drinkteam.",
      thumb: "assets/img/thumbs/menuboard-listo.jpg", src: "assets/video/work/menuboard-listo.mp4"
    },
    {
      block: "digital", cats: ["social"], vertical: true,
      name: "Cuarta ganadora", sub: "La Súper Tanqueada del Año", credit: "Reel · Primax",
      title: "La Súper Tanqueada del Año | Cuarta ganadora",
      desc: "Reel con la cuarta ganadora de La Súper Tanqueada del Año de Primax: un año de gasolina Super G-Prix gratis.",
      thumb: "assets/img/thumbs/cuarta-ganadora-primax.jpg", src: "assets/video/work/cuarta-ganadora-primax.mp4"
    },
    {
      block: "digital", cats: ["motion"],
      name: "Donde la Navidad nos envuelve", sub: "El Paseo Shopping · YouTube", credit: "YouTube skippable · 16 s",
      title: "Donde la Navidad nos envuelve | El Paseo Shopping",
      desc: "Anuncio de 16 segundos para YouTube skippable de El Paseo Shopping.",
      thumb: "assets/img/thumbs/paseo-youtube.jpg", src: "assets/video/work/paseo-youtube.mp4"
    },
    {
      block: "digital", cats: ["social"], vertical: true,
      name: "Maxito y la Súper Tanqueada", sub: "Primax · Animación", credit: "Animación · Primax",
      title: "Maxito Sésamo | Primax",
      desc: "Animación del personaje Maxito integrada con imagen real para la campaña La Súper Tanqueada del Año de Primax.",
      thumb: "assets/img/thumbs/maxito-sesamo-primax.jpg", src: "assets/video/work/maxito-sesamo-primax.mp4"
    },
    {
      block: "digital", cats: ["motion"],
      name: "Promos diarias LiSTO!", sub: "Pantallas en tienda", credit: "Mockup · LiSTO!",
      title: "Promos diarias en pantallas | LiSTO!",
      desc: "Mockup de las promos diarias animadas en las pantallas verticales de las tiendas LiSTO!.",
      thumb: "assets/img/thumbs/promos-diarias-listo.jpg", src: "assets/video/work/promos-diarias-listo.mp4"
    },
    {
      block: "digital", cats: ["social"], vertical: true,
      name: "Riocentro Plaza", sub: "Reel de producción", credit: "Reel · Riocentro Plaza",
      title: "Reel de producción | Riocentro Plaza",
      desc: "Reel vertical de producción para Riocentro Plaza, noviembre 2026.",
      thumb: "assets/img/thumbs/reel-riocentro-plaza.jpg", src: "assets/video/work/reel-riocentro-plaza.mp4"
    },
    {
      block: "digital", cats: ["motion"],
      name: "Es maravilloso, si es Navidoso", sub: "Riocentro · YouTube", credit: "YouTube skippable · 16 s",
      title: "Es maravilloso, si es Navidoso | Riocentro",
      desc: "Anuncio de 16 segundos para YouTube skippable de Riocentro.",
      thumb: "assets/img/thumbs/riocentro-youtube.jpg", src: "assets/video/work/riocentro-youtube.mp4"
    },
    {
      block: "digital", cats: ["motion"],
      name: "Pantallas dobles", sub: "Halloween · Test", credit: "Pantallas · LiSTO!",
      title: "Pantallas dobles Halloween | LiSTO!",
      desc: "Prueba de animación para pantallas dobles en tienda, edición Halloween.",
      thumb: "assets/img/thumbs/pantallas-dobles-halloween.jpg", src: "assets/video/work/pantallas-dobles-halloween.mp4"
    }
  ]
};
