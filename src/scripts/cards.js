
export const template = document.querySelector("#card-template").content;

  function getTemplate() {
  return template.querySelector(".places__item").cloneNode(true);
}

//Создание карточки
export function createCard(name, link, handleDelete, like, openImage) {
  const place = getTemplate();
  place.querySelector(".card__image").src = link;
  place.querySelector(".card__image").alt = name;
  place.querySelector(".card__title").textContent = name;
  place
    .querySelector(".card__delete-button")
    .addEventListener("click", (event) => handleDelete(event));
  place
    .querySelector(".card__like-button")
    .addEventListener("click", (event) => like(event));
  place
    .querySelector(".card__image")
    .addEventListener("click", (event) => openImage(event));

  return place;
}

//Удаление карточки
export function handleDelete() {
  const placeDelete = event.target.closest(".card");
  placeDelete.remove();
}

//Лайки для карточки
export function like(event) {
  event.target.classList.toggle("card__like-button_is-active");
}
