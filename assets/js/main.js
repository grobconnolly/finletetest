// Finlete Bootstrap rebuild — minimal enhancements.
// Bootstrap JS bundle handles navbar toggles, accordions, carousels, etc.

(function () {
  "use strict";

  // Smooth-scroll for same-page anchor links
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute("href");
    if (href === "#" || href.length < 2) return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Close the navbar on link click (mobile)
  document.querySelectorAll(".navbar-finlete .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var toggler = document.querySelector(".navbar-toggler");
      var collapse = document.querySelector(".navbar-collapse.show");
      if (toggler && collapse) toggler.click();
    });
  });
})();
