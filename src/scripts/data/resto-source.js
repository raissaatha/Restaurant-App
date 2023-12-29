import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurantList() {
    const respon = await fetch(API_ENDPOINT.LIST);
    return respon.json();
  }

  static async getRestaurantDetail(id) {
    const respon = await fetch(API_ENDPOINT.DETAIL(id));
    return respon.json();
  }
}

export default RestaurantSource;
