//Функция для открытия и закрытия попапа
export function popupOpenAndClose(popup) {
  popup.classList.toggle("popup_is-opened");
}

//Функция для закрытия попапа
export function onlyClose(popup) {
  popup.classList.remove("popup_is-opened");
}




