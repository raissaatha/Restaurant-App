import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import restoDetail from '../templates/restaurant-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurant from '../../data/resto-favorite';

const Detail = {
  async render() {
    return `
        <section id="detail-restaurant">
        </section>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.getRestaurantDetail(url.id);
    const { restaurant } = data;
    const detailContainer = document.querySelector('#detail-restaurant');
    detailContainer.innerHTML = restoDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteResto: FavoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
