/* AdsTube theme helpers: sticky-header shadow and gentle scroll reveal. */
(function () {
  var header = document.getElementById("header");
  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle("is-scrolled", window.scrollY > 10);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Desktop dropdowns: small close delay so the menu doesn't vanish on the way down,
  // click-to-toggle for items that have no page of their own (href="#"), Esc / outside click to close
  var desktop = window.matchMedia("(min-width: 992px)");
  var drops = document.querySelectorAll("#header ul.navbar-nav > li.dropdown");
  var closeAll = function (except) {
    drops.forEach(function (d) { if (d !== except) d.classList.remove("is-open"); });
  };
  drops.forEach(function (li) {
    var timer;
    li.addEventListener("mouseenter", function () {
      if (!desktop.matches) return;
      clearTimeout(timer);
      closeAll(li);
      li.classList.add("is-open");
    });
    li.addEventListener("mouseleave", function () {
      if (!desktop.matches) return;
      timer = setTimeout(function () { li.classList.remove("is-open"); }, 300);
    });
    var toggle = li.querySelector(":scope > a");
    if (toggle && toggle.getAttribute("href") === "#") {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        if (!desktop.matches) return;
        var open = li.classList.contains("is-open");
        closeAll();
        if (!open) li.classList.add("is-open");
      });
    }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest("#header li.dropdown")) closeAll();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll();
  });

  // Breadcrumb right after the page banner comes in three markup variants — tag it for styling
  var banner = document.querySelector(".page-banner-area");
  var next = banner && banner.nextElementSibling;
  if (next && /^\s*Home\b/.test(next.textContent) && next.textContent.length < 200) {
    var inner = next.querySelector("p, span") || next;
    next.classList.add("crumbs-wrap");
    inner.classList.add("crumbs");
  }

  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var targets = document.querySelectorAll(
    ".single-price-box, .latest-post, .facts-wrapper, .panel-group .panel, .intro-video, .ts-intro .col-md-6 > img"
  );
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });

  var vh = window.innerHeight;
  targets.forEach(function (el) {
    // never hide something already on screen
    if (el.getBoundingClientRect().top < vh) return;
    el.classList.add("reveal");
    io.observe(el);
  });
})();
