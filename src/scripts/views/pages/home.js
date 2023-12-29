import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <main id="main-content" class="main-content__container" tabindex="0">
      <section>
        <div class="explore">
          <h1 tabindex="0">Explore Kuliner</h1>
        </div>
        <div class="search" tabindex="0">
        <label for="searchInput">Search :</label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search name or menu..."
        />
        </div>
        <div id="explore-restaurant-list" class="restaurantList"></div>
      <section>
      </main>
      `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.getElementById('explore-restaurant-list');
    restaurantContainer.innerHTML = '';
    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', async (event) => {
      const keyword = event.target.value;

      if (keyword.length > 0) {
        restaurantContainer.innerHTML = '';
        const resultSeach = await RestaurantSource.searchRestaurant(keyword);
        if (resultSeach.length > 0) {
          resultSeach.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
          });
        } else {
          restaurantContainer.innerHTML = '<h2>restaurant tidak ditemukan</h2>';
        }
      } else {
        restaurantContainer.innerHTML = '';
        listRestaurant.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
    });
  },
};

export default Home;
