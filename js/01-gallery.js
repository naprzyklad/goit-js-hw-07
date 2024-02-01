import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.innerHTML = galleryItem;
//==============================================

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.source) {
    function listenForEscapeKey(event) {
      if (event.key === "Escape" && instance) {
        instance.close();
      }
    }

    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`,
      {
        onShow: (instance) => {
          document.body.addEventListener("keydown", listenForEscapeKey);
        },
        onClose: () => {
          document.body.removeEventListener("keydown", listenForEscapeKey);
        },
      }
    );
    instance.show();
  }
});
