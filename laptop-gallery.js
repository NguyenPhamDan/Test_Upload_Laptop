function renderLaptopGallery(laptop) {
  const images = LAPTOP_IMAGES[laptop.id] || [];
  if (!images.length) return "";
  const name = laptop.ten.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `
    <section class="laptop-gallery" aria-label="Ảnh ${name}">
      <img class="laptop-gallery-main" src="${images[0]}" alt="${name} — ảnh 1" decoding="async">
      ${images.length > 1 ? `
        <div class="laptop-gallery-thumbnails" role="group" aria-label="Chọn ảnh sản phẩm">
          ${images.map((src, index) => `
            <button class="laptop-gallery-thumbnail" type="button" data-gallery-src="${src}" data-gallery-alt="${name} — ảnh ${index + 1}" aria-label="Xem ảnh ${index + 1} của ${name}" aria-pressed="${index === 0}">
              <img src="${src}" alt="" loading="lazy" decoding="async">
            </button>`).join("")}
        </div>
        <p class="laptop-gallery-count" aria-live="polite">Ảnh 1 / ${images.length}</p>` : ""}
    </section>`;
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-src]");
  if (!button) return;
  const gallery = button.closest(".laptop-gallery");
  const mainImage = gallery.querySelector(".laptop-gallery-main");
  mainImage.src = button.dataset.gallerySrc;
  mainImage.alt = button.dataset.galleryAlt;
  const thumbnails = [...gallery.querySelectorAll("[data-gallery-src]")];
  thumbnails.forEach((thumbnail) => thumbnail.setAttribute("aria-pressed", String(thumbnail === button)));
  gallery.querySelector(".laptop-gallery-count").textContent = `Ảnh ${thumbnails.indexOf(button) + 1} / ${thumbnails.length}`;
});
