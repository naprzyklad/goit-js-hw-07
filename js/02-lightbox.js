import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const { preview, original, description } = image;

  const li = document.createElement("li");
  li.classList.add("gallery_item");
  gallery.appendChild(li);

  const a = document.createElement("a");
  a.classList.add("gallery_link");
  a.href = original;
  li.appendChild(a);

  const img = document.createElement("img");
  img.classList.add("gallery_image");
  img.src = preview;
  img.alt = description;
  a.appendChild(img);
});

document.addEventListener("DOMContentLoaded", () => {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "outside",
    captionDelay: 250,
  });
});
