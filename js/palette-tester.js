/* Probador de rojos. Solo aparece con #colores en la dirección.
   Cuando elijas uno, cambia --red y --red-hi en css/style.css (o dime cuál). */
(function () {
  var COLORS = [
    ["Rojo vintage", "#9b1c14", "#e0553f"],
    ["Burdeos", "#7f1713", "#d04a3b"],
    ["Ladrillo", "#a8321f", "#e8654a"],
    ["Rojo cine", "#b3201a", "#ee5b45"],
    ["Carmín profundo", "#8c1427", "#da4a5e"],
    ["Rojo tomate (referencia)", "#d4200c", "#ff5a43"]
  ];
  var box = document.createElement("div");
  box.className = "palette";
  box.innerHTML = "<p>Rojo</p><div class='palette__row'></div><output></output>";
  var row = box.querySelector(".palette__row"), out = box.querySelector("output");
  function set(c) {
    document.documentElement.style.setProperty("--red", c[1]);
    document.documentElement.style.setProperty("--red-hi", c[2]);
    out.textContent = c[0] + "  " + c[1] + " / " + c[2];
    row.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.hex === c[1])); });
  }
  COLORS.forEach(function (c) {
    var b = document.createElement("button");
    b.type = "button"; b.style.background = c[1]; b.dataset.hex = c[1];
    b.setAttribute("aria-label", c[0] + " " + c[1]); b.title = c[0] + " " + c[1];
    b.addEventListener("click", function () { set(c); });
    row.appendChild(b);
  });
  document.body.appendChild(box);
  set(COLORS[0]);
})();
