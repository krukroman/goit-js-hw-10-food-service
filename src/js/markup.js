import menuCardTemplate from '../templates/menu-card.hbs';
import menuCollection from './menu.json';

const menuListRef = document.querySelector('.js-menu');
const menuCardsMarkup = makeMenuMarkup(menuCollection);
menuListRef.insertAdjacentHTML('afterbegin', menuCardsMarkup);

function makeMenuMarkup(menuCollection) {
  return menuCollection.map(menuCardTemplate).join('');
}
