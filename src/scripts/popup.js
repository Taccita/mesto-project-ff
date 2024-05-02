import { popupImage } from '../pages';

const buttonOpenProfile = document.querySelector('.profile__edit-button');
const buttonCloseProfiles = document.querySelectorAll('.popup__close');
const inputProfileName = document.querySelector('.popup__input_type_name');
const inputProfileDescription = document.querySelector('.popup__input_type_description');
inputProfileName.placeholder = document.querySelector('.profile__title').textContent;
inputProfileDescription.placeholder = document.querySelector('.profile__description').textContent;
export const popupPlace = document.querySelector('.popup_type_new-card');
export const popupCard = document.querySelector('.popup_type_edit');
const buttonOpenPlace = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.image-close');


//Открытие и закрытие попапов
buttonOpenProfile.addEventListener('click', openAndClose(popupCard));
buttonCloseProfiles[0].addEventListener('click', openAndClose(popupCard));
buttonOpenPlace.addEventListener('click', openAndClose(popupPlace));
buttonCloseProfiles[1].addEventListener('click', openAndClose(popupPlace));
closeButton.addEventListener('click', () =>{
  onlyClose(popupImage);
});


  function openAndClose(popup){
  return function(){
    popupOpenAndClose(popup); 
}}

//Функция для открытия и закрытия попапа
export function popupOpenAndClose(popup){
    popup.classList.toggle('popup_is-opened');} 

//Функция для закрытия попапа
function onlyClose(popup){
      popup.classList.remove('popup_is-opened');} 

//Удаление кликом по оверлею
window.addEventListener('click', (event) =>{
  if(event.target===popupCard||event.target===popupPlace||event.target===popupImage){
   onlyClose(event.target);
}});

//Удаление нажатием "esc"
window.addEventListener('keydown', (event) =>{
  if(event.key==='Escape'){ 
    onlyClose(popupCard);
    onlyClose(popupPlace);
    onlyClose(popupImage);

  }
})






