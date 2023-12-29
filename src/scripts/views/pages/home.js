// eslint-disable-next-line import/extensions
import RestaurantSource from '../../data/resto-source.js';
// eslint-disable-next-line import/extensions, import/named
import { restoTemplate } from '../templates/template-creator.js';

const Home = {
  async render() {
    return `
        <section id="list-restaurants" class="card-container">
          
        </section>
      `;
  },

  async afterRender() {
    const data = await RestaurantSource.getRestaurantList();
    const restaurantsContainer = document.querySelector('#list-restaurants');
    data.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restoTemplate(restaurant);
    });
  },
};

export default Home;
