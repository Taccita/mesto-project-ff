// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardList = document.querySelector(".places__list");
const template = document.querySelector("#card-template").content;
const buttonRemove = document.querySelector(".card__delete-button");
const popup = document.querySelector(".popup_type_image");
const card = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

function view() {
  card.forEach(createCard);
}

function createCard({ name, link }) {
  const place = template.querySelector(".places__item").cloneNode(true);
  place.querySelector(".card__title").textContent = name;
  place.querySelector(".card__image").src = link;
  place
    .querySelector(".card__delete-button")
    .addEventListener("click", () => place.remove());

  cardList.prepend(place);
}
view();
