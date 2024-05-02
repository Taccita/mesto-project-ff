import './index.css';
import '../scripts/cards.js'
import '../scripts/popup.js'
import  {initialCards} from'../scripts/cards.js';
import { popupCard } from '../scripts/popup.js';
import { popupPlace } from '../scripts/popup.js';
import {popupOpenAndClose} from '../scripts/popup.js';
import { createCard, handleDelete, like } from '../scripts/cards.js';


const cardList = document.querySelector('.places__list');
const template = document.querySelector('#card-template').content;
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formPlace = document.querySelector('.popup__form-place');
export const popupImage = document.querySelector('.popup_type_image');
const image = popupImage.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');
let namePlace = document.querySelector('.popup__input_type_card-name');
let linkPlace = document.querySelector('.popup__input_type_url');
const cards = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

formElement.addEventListener('submit', handleFormSubmit);
function view() {
  cards.forEach(function(item){
      cardList.append(createCard(item.name, item.link, handleDelete, like, openImage));
  });
}


export function getTemplate(){
  return template.querySelector('.places__item').cloneNode(true);
}

//Изменение профиля
function handleFormSubmit(event) {
  event.preventDefault(); 
document.querySelector('.profile__title').textContent= nameInput.value;
document.querySelector('.profile__description').textContent = jobInput.value;
popupOpenAndClose(popupCard);
}

//Добавление новой карточки
formPlace.addEventListener('submit', function (event) {
  event.preventDefault();
  let place = createCard(namePlace.value, linkPlace.value, handleDelete, like, openImage);
  cardList.prepend(place);
  formPlace.reset();
  popupOpenAndClose(popupPlace);

});



//Разворачивание карточки
function openImage(event) {
  const place= event.target.closest('.card');
    let cardImage = place.querySelector('.card__image');
    let cardTitle = place.querySelector('.card__title');
    caption.textContent = cardTitle.textContent;
    image.src = cardImage.src;
    image.alt = cardTitle.alt;
    popupOpenAndClose(popupImage);
}


 view();






