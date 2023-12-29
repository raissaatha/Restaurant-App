import LikeButtonInitiatior from '../../src/scripts/utils/likebutton-initiator';

const createLikeButtonInitiatiorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiatior.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatiorWithRestaurant };
