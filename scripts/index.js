// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardList = document.querySelector(".places__list");
const template = document.querySelector("#card-template").content;
const cards = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

function view() {
  cards.forEach(function(item, index){
      cardList.append(createCard(cards[index], handleDelete));
  });
}


function getTemplate(){
  return template.querySelector(".places__item").cloneNode(true);
}


function createCard({ name, link}, handleDelete) {
  const place = getTemplate();
  place.querySelector(".card__image").src = link;
  place.querySelector(".card__image").alt = name;
  place.querySelector(".card__title").textContent = name;
  place.querySelector(".card__delete-button")
    .addEventListener("click", (event) => handleDelete(event));


  return place;
}

    function handleDelete() {
    let placeDelete = event.target.closest('.card');
    placeDelete.remove();
    }
  
  



view();
