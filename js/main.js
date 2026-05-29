const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!nav || !navToggle) return;
  nav.classList.remove("is-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

function createArtworkCard(artwork) {
  const card = document.createElement("button");
  card.className = "art-card";
  card.type = "button";
  card.setAttribute("aria-label", `View ${artwork.title} by ${artwork.artist}`);

  card.innerHTML = `
    <div class="art-image">
      <img src="${artwork.image}" alt="${artwork.title} by ${artwork.artist}" loading="lazy">
    </div>
    <div class="art-meta">
      <h3>${artwork.title}</h3>
      <p>${artwork.year} · ${artwork.size}</p>
    </div>
  `;

  card.addEventListener("click", () => openArtworkModal(artwork));

  return card;
}

function renderHomeWorks() {
  const container = document.getElementById("homeWorks");
  if (!container || typeof artworks === "undefined") return;

  const selectedTitles = [
    "Happy Spirit",
    "Radiant",
    "Feeling Good",
    "Agile",
    "Dance Hour",
    "Cool",
    "Momentum 1",
    "Four Seasons: Spring"
  ];

  const selectedWorks = selectedTitles
    .map((title) => artworks.find((artwork) => artwork.title === title))
    .filter(Boolean)
    .filter((artwork) => artwork.ratio === "square");

  container.innerHTML = "";
  selectedWorks.forEach((artwork) => {
    container.appendChild(createArtworkCard(artwork));
  });
}
function setupHomeWorksSlider() {
  const slider = document.getElementById("homeWorks");
  if (!slider) return;

  let frameId = null;
  let lastTime = null;

  const isMobile = () => window.matchMedia("(max-width: 620px)").matches;

  function animateSlider(timestamp) {
    if (!lastTime) lastTime = timestamp;

    const delta = timestamp - lastTime;
    lastTime = timestamp;

    if (isMobile() && slider.scrollWidth > slider.clientWidth) {
      const speed = 0.012;
      slider.scrollLeft += delta * speed;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 2) {
        slider.scrollLeft = 0;
      }
    }

    frameId = requestAnimationFrame(animateSlider);
  }

  frameId = requestAnimationFrame(animateSlider);

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(frameId);
  });
}

function renderArchive() {
  if (typeof artworks === "undefined") return;

  const colourRhythms = document.getElementById("colourRhythms");
  const colourFields = document.getElementById("colourFields");
  const verticalGestures = document.getElementById("verticalGestures");
  const horizontalResonance = document.getElementById("horizontalResonance");

  const squareWorks = artworks.filter((artwork) => artwork.ratio === "square");
  const portraitWorks = artworks.filter((artwork) => artwork.ratio === "portrait");
  const landscapeWorks = artworks.filter((artwork) => artwork.ratio === "landscape");

  const midpoint = Math.ceil(squareWorks.length / 2);
  const firstSquareSet = squareWorks.slice(0, midpoint);
  const secondSquareSet = squareWorks.slice(midpoint);

  function renderTo(container, list) {
    if (!container) return;

    container.innerHTML = "";
    list.forEach((artwork) => {
      container.appendChild(createArtworkCard(artwork));
    });
  }

  renderTo(colourRhythms, firstSquareSet);
  renderTo(colourFields, secondSquareSet);
  renderTo(verticalGestures, portraitWorks);
  renderTo(horizontalResonance, landscapeWorks);
}

const modal = document.getElementById("artModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
let lastFocusedElement = null;

function openArtworkModal(artwork) {
  if (!modal || !modalImage || !modalTitle || !modalMeta) return;

  lastFocusedElement = document.activeElement;

  modalImage.src = artwork.image;
  modalImage.alt = `${artwork.title} by ${artwork.artist}`;
  modalTitle.textContent = artwork.title;

  modalMeta.innerHTML = `
    <div><dt>Artist</dt><dd>${artwork.artist}</dd></div>
    <div><dt>Year</dt><dd>${artwork.year}</dd></div>
    <div><dt>Size</dt><dd>${artwork.size}</dd></div>
    <div><dt>Medium</dt><dd>${artwork.medium}</dd></div>
    <div><dt>Price</dt><dd>${artwork.price}</dd></div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const closeButton = modal.querySelector("[data-modal-close]");
  if (closeButton) closeButton.focus();
}

function closeArtworkModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (modalImage) {
    modalImage.removeAttribute("src");
    modalImage.removeAttribute("alt");
  }

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function setupReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -70px 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeArtworkModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
    closeArtworkModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateHeader();
  renderHomeWorks();
  renderArchive();
  setupHomeWorksSlider();
  setupReveal();
});
