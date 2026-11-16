(function () {
  "use strict";
  var SITE = window.SITE || { blocks: {}, projects: [] };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* =====================================================
     Tarjeta de proyecto
     ===================================================== */
  function makeTile(p) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "tile" + (p.vertical ? " tile--v" : "");
    b.setAttribute("aria-label", "Reproducir: " + p.title);
    b.innerHTML = (p.vertical ? '<img class="tile__bg" alt="" aria-hidden="true" loading="lazy" decoding="async" src="' + esc(p.thumb) + '">' : "") +
      '<img class="tile__media" alt="' + esc(p.title) + '" loading="lazy" decoding="async" width="1280" height="720" src="' + esc(p.thumb) + '">' +
      '<span class="tile__shade"></span><span class="tile__tint"></span>' +
      '<span class="tile__text"><span class="tile__name">' + esc(p.name || p.title) + '</span>' +
      (p.sub ? '<span class="tile__sub">' + esc(p.sub) + '</span>' : "") + '</span>' +
      (p.credit ? '<span class="tile__credit">' + esc(p.credit) + '</span>' : "");
    b.addEventListener("click", function () { openLightbox(p, b); });
    return b;
  }

  /* =====================================================
     Bloques de galería
     ===================================================== */
  document.querySelectorAll("[data-block]").forEach(function (section) {
    var key = section.getAttribute("data-block");
    var cfg = SITE.blocks[key];
    if (!cfg) return;
    var label = key === "cine" ? "Selected work" : "Digital & motion";
    var items = SITE.projects.filter(function (p) { return p.block === key; });
    var filtersEl = section.querySelector(".filters");
    var stage = section.querySelector(".stage");
    var grid = section.querySelector(".grid");
    var moreBtn = section.querySelector(".more__btn");
    var countEl = section.querySelector(".work__count");
    var pageSize = (window.matchMedia && matchMedia("(max-width:700px)").matches) ? 4 : (cfg.pageSize || 8);
    var state = { cat: "all", shown: pageSize, cur: [], stop: null };
    var debris = document.createElement("div");
    debris.className = "debris"; debris.setAttribute("aria-hidden", "true");
    stage.appendChild(debris);

    items.forEach(function (p) { p.__el = makeTile(p); });

    function filtered() {
      return items.filter(function (p) { return state.cat === "all" || p.cats.indexOf(state.cat) > -1; });
    }

    function placeholders() {
      grid.innerHTML = "";
      for (var i = 0; i < 2; i++) {
        var d = document.createElement("div");
        d.className = "tile tile--soon";
        d.innerHTML = '<span class="tile__text"><span class="tile__name">Próximamente</span><span class="tile__sub">Social · Performance · Pantallas · Motion</span></span>';
        grid.appendChild(d);
      }
      moreBtn.hidden = true;
      if (countEl) countEl.textContent = label + " · 00";
    }

    function update(animate) {
      if (!items.length) { placeholders(); return; }
      if (state.stop) state.stop();
      var all = filtered();
      var next = all.slice(0, state.shown);
      var prev = state.cur;
      var leaving = prev.filter(function (p) { return next.indexOf(p) < 0; });
      var entering = next.filter(function (p) { return prev.indexOf(p) < 0; });
      var stayers = next.filter(function (p) { return prev.indexOf(p) > -1; });
      var anim = animate && !reduce && prev.length > 0;

      var stageRect = stage.getBoundingClientRect();
      var first = new Map();
      var clones = [];
      if (anim) {
        prev.forEach(function (p) { first.set(p, p.__el.getBoundingClientRect()); });
        leaving.forEach(function (p) {
          var r = first.get(p), c = p.__el.cloneNode(true);
          c.disabled = true; c.tabIndex = -1;
          c.style.width = r.width + "px"; c.style.height = r.height + "px";
          c.style.transform = "translate3d(" + (r.left - stageRect.left) + "px," + (r.top - stageRect.top) + "px,0)";
          debris.appendChild(c);
          clones.push({ c: c, w: r.width, h: r.height, x0: r.left - stageRect.left, y0: r.top - stageRect.top });
        });
        stage.style.minHeight = stageRect.height + "px";
      }

      grid.innerHTML = "";
      next.forEach(function (p) { grid.appendChild(p.__el); });

      if (anim) {
        stayers.forEach(function (p) {
          var f = first.get(p), l = p.__el.getBoundingClientRect();
          var dx = f.left - l.left, dy = f.top - l.top;
          if (dx || dy) p.__el.animate([{ transform: "translate(" + dx + "px," + dy + "px)" }, { transform: "none" }], { duration: 700, delay: 260, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
        });
        entering.forEach(function (p, i) {
          p.__el.animate([{ transform: "translateY(46px)", opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 700, delay: 380 + i * 80, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
        });
        if (clones.length) fall(clones);
        else stage.style.minHeight = "";
      }

      state.cur = next;
      moreBtn.hidden = all.length <= state.shown;
      if (countEl) countEl.textContent = label + " · " + pad(all.length);
    }

    /* Salida: cada tarjeta que se va se desvanece y se encoge un poco, en cascada,
       mientras las que se quedan se reacomodan y las nuevas suben. */
    /* al terminar la salida, la altura de la galería se ajusta suavemente (sin saltos de página) */
    function settle() {
      var from = stage.getBoundingClientRect().height;
      var to = grid.getBoundingClientRect().height;
      if (Math.abs(from - to) < 2) { stage.style.minHeight = ""; return; }
      stage.style.minHeight = from + "px";
      void stage.offsetHeight;
      stage.style.transition = "min-height .7s cubic-bezier(.2,.8,.2,1)";
      requestAnimationFrame(function () { requestAnimationFrame(function () { stage.style.minHeight = to + "px"; }); });
      setTimeout(function () { stage.style.transition = ""; stage.style.minHeight = ""; }, 760);
    }

    function fall(clones) {
      var ordered = clones.slice().sort(function (a, b) { return a.y0 - b.y0 || a.x0 - b.x0; });
      var left = ordered.length;
      function finish() {
        if (--left > 0) return;
        state.stop = null;
        settle();
      }
      ordered.forEach(function (o, i) {
        var base = "translate3d(" + o.x0 + "px," + o.y0 + "px,0)";
        var a = o.c.animate(
          [{ transform: base + " scale(1)", opacity: 1 }, { transform: base + " translateY(-18px) scale(.94)", opacity: 0 }],
          { duration: 420, delay: i * 55, easing: "cubic-bezier(.4,0,.2,1)", fill: "both" }
        );
        a.onfinish = function () { if (o.c.parentNode) o.c.parentNode.removeChild(o.c); finish(); };
      });
      state.stop = function () {
        ordered.forEach(function (o) { if (o.c.parentNode) o.c.parentNode.removeChild(o.c); });
        stage.style.minHeight = ""; stage.style.transition = ""; state.stop = null;
      };
    }

    function renderFilters() {
      filtersEl.innerHTML = "";
      cfg.categories.forEach(function (c) {
        var b = document.createElement("button");
        b.type = "button"; b.textContent = c[1];
        b.setAttribute("aria-pressed", String(state.cat === c[0]));
        b.addEventListener("click", function () {
          if (state.cat === c[0]) return;
          state.cat = c[0]; state.shown = pageSize;
          renderFilters(); update(true);
        });
        filtersEl.appendChild(b);
      });
    }

    moreBtn.addEventListener("click", function () { state.shown += pageSize; update(true); });
    renderFilters(); update(false);
  });

  /* =====================================================
     Visor de video (nace desde la tarjeta que tocaste)
     ===================================================== */
  var lb = document.getElementById("lightbox");
  var screen = document.getElementById("lbScreen");
  var lastFocus = null;

  function openLightbox(p, tile) {
    lastFocus = document.activeElement;
    screen.innerHTML = "";
    lb.classList.toggle("lb--vertical", !!p.vertical);
    document.getElementById("lbTitle").textContent = p.title;
    document.getElementById("lbDesc").textContent = p.desc || "";
    var link = document.getElementById("lbLink");
    if (p.youtube) {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + p.youtube + "?autoplay=1&rel=0&modestbranding=1";
      f.title = p.title;
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      screen.appendChild(f);
      link.href = "https://www.youtube.com/watch?v=" + p.youtube; link.textContent = "Ver en YouTube"; link.hidden = false;
    } else if (p.instagram) {
      var ig = document.createElement("iframe");
      ig.src = "https://www.instagram.com/reel/" + p.instagram + "/embed/";
      ig.title = p.title;
      ig.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      ig.allowFullscreen = true;
      ig.setAttribute("scrolling", "no");
      screen.appendChild(ig);
      link.href = "https://www.instagram.com/reel/" + p.instagram + "/"; link.textContent = "Ver en Instagram"; link.hidden = false;
    } else if (p.src) {
      var v = document.createElement("video");
      v.src = p.src; v.controls = true; v.autoplay = true; v.playsInline = true;
      if (p.thumb) v.poster = p.thumb;
      screen.appendChild(v);
      link.hidden = true;
    }
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
    if (!reduce && tile && screen.animate) {
      var t = tile.getBoundingClientRect(), s = screen.getBoundingClientRect();
      if (s.width && t.width) {
        screen.style.transformOrigin = "0 0";
        screen.animate([
          { transform: "translate(" + (t.left - s.left) + "px," + (t.top - s.top) + "px) scale(" + (t.width / s.width) + "," + (t.height / s.height) + ")", opacity: 0.5 },
          { transform: "none", opacity: 1 }
        ], { duration: 560, easing: "cubic-bezier(.2,.8,.2,1)" });
      }
    }
  }
  function closeLightbox() {
    screen.innerHTML = "";
    if (lb.close) lb.close(); else lb.removeAttribute("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  lb.querySelector(".lb__close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  lb.addEventListener("close", function () { screen.innerHTML = ""; });

  /* =====================================================
     Franja: hora de Ecuador en vivo
     ===================================================== */
  var clocks = document.querySelectorAll(".clock");
  if (clocks.length) {
    var fmt = null;
    try { fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "America/Guayaquil", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }); } catch (e) {}
    var tick = function () {
      var t = fmt ? fmt.format(new Date()) : new Date().toTimeString().slice(0, 8);
      clocks.forEach(function (c) { c.textContent = "EC " + t; });
    };
    tick(); setInterval(tick, 1000);
  }

  /* =====================================================
     Menú: resalta la sección actual
     ===================================================== */
  var navEl = document.querySelector(".nav");
  function navState() { navEl.classList.toggle("is-solid", window.scrollY > 40); }
  navState(); window.addEventListener("scroll", navState, { passive: true });
  var links = {};
  document.querySelectorAll("[data-spy]").forEach(function (a) { links[a.getAttribute("data-spy")] = a; });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) Object.keys(links).forEach(function (k) { links[k].classList.toggle("is-active", k === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["what", "work", "who"].forEach(function (id) { var el = document.getElementById(id); if (el) spy.observe(el); });
  }

  /* =====================================================
     Hero: respeta "reducir movimiento" y ahorra batería
     ===================================================== */
  var hv = document.getElementById("heroVideo");
  if (hv) {
    if (reduce) { hv.removeAttribute("autoplay"); hv.pause(); }
    else if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { var pr = hv.play(); if (pr && pr.catch) pr.catch(function () {}); } else hv.pause(); });
      }, { threshold: 0.05 }).observe(hv);
    }
  }

  /* Probador de rojos: añade #colores a la dirección para activarlo */
  if (location.hash === "#colores") {
    var s = document.createElement("script"); s.src = "js/palette-tester.js"; document.body.appendChild(s);
  }
})();
