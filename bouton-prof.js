// Bouton caché (coin bas-droit) vers la gestion des frises.
// À inclure dans chaque page : <script src="bouton-prof.js"></script>
(function () {
  var CIBLE = "prof-frise.html";
  function ajouter() {
    if (document.getElementById("acces-prof-frise")) return;
    if (location.pathname.split("/").pop() === CIBLE) return;
    var a = document.createElement("a");
    a.href = CIBLE;
    a.target = "_blank";
    a.rel = "noopener";
    a.id = "acces-prof-frise";
    a.setAttribute("aria-hidden", "true");
    a.tabIndex = -1;
    a.style.cssText = "position:fixed;right:0;bottom:0;width:22px;height:22px;opacity:0;z-index:99999;cursor:default;display:block";
    document.body.appendChild(a);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ajouter);
  else ajouter();
})();
