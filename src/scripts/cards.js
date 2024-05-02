import { getTemplate } from "../pages";
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Создание карточки
export function createCard( name, link, handleDelete, like, openImage) {
  const place = getTemplate();
  place.querySelector('.card__image').src = link;
  place.querySelector('.card__image').alt = name;
  place.querySelector('.card__title').textContent = name;
  place.querySelector('.card__delete-button')
    .addEventListener('click', (event) => handleDelete(event));
  place.querySelector('.card__like-button')
  .addEventListener('click', (event) => like(event));
  place.querySelector('.card__image')
  .addEventListener('click', (event) => openImage(event));

  return place;
}

//Удаление карточки
export function handleDelete() {
let placeDelete = event.target.closest('.card');
placeDelete.remove();
    }

//Лайки для карточки
export function like(event){
      event.target.classList.toggle('card__like-button_is-active');
     }