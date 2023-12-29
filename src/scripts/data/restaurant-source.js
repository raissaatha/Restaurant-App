import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const data = await response.json();
    return data.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
  }

  static async searchRestaurant(keyword) {
    const response = await fetch(`https://restaurant-api.dicoding.dev/search?q=${keyword}`);
    const data = await response.json();
    return data.restaurants;
  }
}

export default RestaurantSource;
