import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const { preview, original, description } = image;

  const li = document.createElement("li");
  li.classList.add("gallery_item");
  gallery.appendChild(li);

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;
  li.appendChild(link);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;
  link.appendChild(img);

  link.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(
      `<img src='${
        event.currentTarget.querySelector("img").dataset.source
      }' alt='${description}'>`,
      {
        onshow: (instance) => {
          document.addEventListener("keydown", (x) => {
            if (x.key === "Escape") {
              instance.close();
            }
          });
        },
      }
    );
    instance.show();
  });
});
