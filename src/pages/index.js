import "./index.css";
import "../scripts/cards.js";
import "../scripts/popup.js";
import { initialCards } from "../scripts/initialCards.js";
import { popupOpenAndClose, onlyClose } from "../scripts/popup.js";
import { createCard, handleDelete, like } from "../scripts/cards.js";

const popupImage = document.querySelector(".popup_type_image");
const popupPlace = document.querySelector(".popup_type_new-card");
const popupProfile = document.querySelector(".popup_type_edit");
const cardList = document.querySelector(".places__list");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const formPlace = document.querySelector(".popup__form-place");
const image = popupImage.querySelector(".popup__image");
const caption = document.querySelector(".popup__caption");
const namePlace = document.querySelector(".popup__input_type_card-name");
const linkPlace = document.querySelector(".popup__input_type_url");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const buttonOpenProfile = document.querySelector(".profile__edit-button");
const buttonCloseProfile = document.querySelector(".popup__close-profile");
const buttonClosePlace = document.querySelector(".popup__close-place");
const buttonOpenPlace = document.querySelector(".profile__add-button");
const buttonCloseImage = document.querySelector(".image-close");
const inputProfileName = document.querySelector(".popup__input_type_name");
const inputProfileDescription = document.querySelector(
  ".popup__input_type_description"
);
const cards = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

inputProfileName.placeholder = profileTitle.textContent;
inputProfileDescription.placeholder = profileDescription.textContent;

buttonOpenProfile.addEventListener("click", openProfile(popupProfile));
buttonCloseProfile.addEventListener("click", openAndClose(popupProfile));
buttonOpenPlace.addEventListener("click", openAndClose(popupPlace));
buttonClosePlace.addEventListener("click", openAndClose(popupPlace));
buttonCloseImage.addEventListener("click", () => {
  onlyClose(popupImage);
});

function openAndClose(popup) {
  return function () {
    popupOpenAndClose(popup);
  };
}

//Открытие профиля, запись в инпуты данных пользователя
function openProfile(popup) {
  return function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    popupOpenAndClose(popup);
  };
}

//Удаление кликом по оверлею
window.addEventListener("click", function closePopapByOverlay(event) {
  if (
    event.target === popupProfile ||
    event.target === popupPlace ||
    event.target === popupImage
  ) {
    onlyClose(event.target);
    window.removeEventListener("click", closePopapByOverlay);
  }
  window.addEventListener("click", closePopapByOverlay);
});

//Удаление нажатием "esc"
window.addEventListener("keydown", function closePopapByEsc(event) {
  if (event.key === "Escape") {
    onlyClose(popupProfile);
    onlyClose(popupPlace);
    onlyClose(popupImage);
    window.removeEventListener("click", closePopapByEsc);
  }
  window.addEventListener("keydown", closePopapByEsc);
});

//Отображение карточек
formElement.addEventListener("submit", handleFormSubmit);
function view() {
  cards.forEach(function (item) {
    cardList.append(
      createCard(item.name, item.link, handleDelete, like, openImage)
    );
  });
}

//Изменение профиля
function handleFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupOpenAndClose(popupCard);
}

//Добавление новой карточки
formPlace.addEventListener("submit", function (event) {
  event.preventDefault();
  const place = createCard(
    namePlace.value,
    linkPlace.value,
    handleDelete,
    like,
    openImage
  );
  cardList.prepend(place);
  formPlace.reset();
  popupOpenAndClose(popupPlace);
});

//Разворачивание карточки
function openImage(event) {
  const place = event.target.closest(".card");
  const cardImage = place.querySelector(".card__image");
  const cardTitle = place.querySelector(".card__title");
  caption.textContent = cardTitle.textContent;
  image.src = cardImage.src;
  image.alt = cardTitle.alt;
  popupOpenAndClose(popupImage);
}

view();
