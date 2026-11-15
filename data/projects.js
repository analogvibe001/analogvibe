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
        ["short", "Short Film"],
        ["dp", "D.P."],
        ["emu", "Film Emulation"]
      ]
    },
    digital: {
      pageSize: 8,
      categories: [
        ["all", "All"],
        ["social", "Social / UGC"],
        ["perf", "Performance"],
        ["screens", "Pantallas"],
        ["motion", "Motion Graphics"]
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
      block: "cine", cats: ["com", "emu"],
      name: "Always on the Run", sub: "New Balance, spec ad", credit: "iPhone 15 Pro · Apple Log · Dehancer Pro",
      title: "Always on the run |New balance Spec Ad | Apple Log | Dehancer",
      desc: "Spec ad for New Balance Iphone 15 pro Log Film Emulation thanks to Dehancer Pro",
      thumb: "assets/img/thumbs/kL1WvA6N6kE.jpg", youtube: "kL1WvA6N6kE"
    },
    {
      block: "cine", cats: ["emu"],
      name: "Niagara Falls", sub: "Así vivimos Niagara Falls", credit: "",
      title: "Niagara Falls",
      desc: "Así vivimos Niagara Falls, increíble.",
      thumb: "assets/img/thumbs/tCmc2-om3kg.jpg", youtube: "tCmc2-om3kg"
    },
    {
      block: "cine", cats: ["short"],
      name: "Renne", sub: "Short film", credit: "",
      title: "Renne | Short Film",
      desc: "",
      thumb: "assets/img/thumbs/FeL9aSXXf10.jpg", youtube: "FeL9aSXXf10"
    },
    {
      block: "cine", cats: ["emu"],
      name: "Conocí Brooklyn Bridge", sub: "Film emulation", credit: "Sony FX30 · S-Log · Dehancer Pro",
      title: "Conocí Brooklyn Bridge | Film emulation Dehancer | Fx30",
      desc: "Film emulation realizado en Dehancer Pro Grabando en slog en la Sony Fx30",
      thumb: "assets/img/thumbs/nCmjuqpgJh8.jpg", youtube: "nCmjuqpgJh8"
    },
    {
      block: "cine", cats: ["short", "dp"],
      name: "Tengo algo que confesarte", sub: "Cortometraje", credit: "Dirección de fotografía",
      title: "Tengo algo que confesarte — Cortometraje",
      desc: "Dirección: Sergio Ortiz Guion: Ariana Solórzano Asistente de dirección: Paula Zambrano Producción: Ariana Solórzano y Keyla Ayala Dirección de arte: Cristel Rivadeneira, Ariana Solórzano y Keyla Ayala Dirección de fotografía: Amalin Bustamante y Mauricio Mena Edición y Montaje: Johanna Ortiz y Sergio Ortiz Sonido: Johanna Ortiz",
      thumb: "assets/img/thumbs/_TCeEmALuGg.jpg", youtube: "_TCeEmALuGg"
    },
    {
      block: "cine", cats: ["doc"],
      name: "mm. | doc", sub: "Documental", credit: "Trabajo universitario",
      title: "mm. | doc",
      desc: "docu sobre mi, trabajo de la u",
      thumb: "assets/img/thumbs/qFVOgsY5jgc.jpg", youtube: "qFVOgsY5jgc"
    },
    {
      block: "cine", cats: ["emu"],
      name: "New York", sub: "El orden del caos", credit: "Apple Log · Dehancer Pro",
      title: "New York | El orden del caos | Film emulation Dehancer | Apple Log",
      desc: "🦅",
      thumb: "assets/img/thumbs/sqU7mamU6To.jpg", youtube: "sqU7mamU6To"
    },
    {
      block: "cine", cats: ["emu"],
      name: "Grand Central Terminal", sub: "Film emulation", credit: "iPhone 15 Pro · Apple Log · Dehancer Pro",
      title: "Grand Central Terminal | Film emulation Dehancer | Iphone 15 pro",
      desc: "Film emulation realizado en Dehancer Pro Grabando en Apple log en el iphone 15 pro",
      thumb: "assets/img/thumbs/dOgVtiqxSsA.jpg", youtube: "dOgVtiqxSsA"
    },
    {
      block: "cine", cats: ["emu"],
      name: "Un día en Coney Island", sub: "Film emulation", credit: "iPhone 15 Pro · Apple Log · Dehancer Pro",
      title: "Un día en Coney Island | Film emulation Dehancer | Apple Log",
      desc: "Film emulation realizado en Dehancer Pro Grabando en Log con dl iphone 15 pro",
      thumb: "assets/img/thumbs/kkV8BU-45BE.jpg", youtube: "kkV8BU-45BE"
    }

    /* ------------------ DIGITAL & MOTION ------------------ */
    // Ejemplo: copia este bloque, quita las dos barras // del inicio de cada línea
    // y pon una coma después de la llave del proyecto anterior.
    // {
    //   block: "digital", cats: ["social"], vertical: true,
    //   name: "Nombre del reel", sub: "Cliente", credit: "Plataforma · qué hiciste",
    //   title: "Nombre completo del reel",
    //   desc: "Descripción larga",
    //   thumb: "assets/img/thumbs/mi-reel.jpg",
    //   src: "assets/video/mi-reel.mp4"
    // }
  ]
};
