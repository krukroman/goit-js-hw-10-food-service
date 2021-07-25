import menuCardsTemplate from '../templates/menu-cards.hbs';
import menuCollection from './menu.json';

const menuListRef = document.querySelector('.js-menu');
const menuCardsMarkup = makeMenuMarkup(menuCollection);
menuListRef.insertAdjacentHTML('beforeend', menuCardsMarkup);

function makeMenuMarkup(menuCollection) {
  return menuCardsTemplate(menuCollection);
}
