import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<a class="card-restaurant" href="${`/#/detail/${restaurant.id}`}">
<div class="card-restaurant-heading">
<h2>${restaurant.city}</h2>
</div>
<img class="lazyload card-img" height="200px" width="100%" data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}" />
<div class="card-restaurant-details">
<div class="rating">
    <i title="ratings" class="fas fa-star icon-primary"></i>
    <p>Rating : ${restaurant.rating}</p>
</div>
<div class="name">
    <h2>${restaurant.name}</h2>
</div>
<div>
    <p class="description">${restaurant.description}</p>
</div>
</div>
</a>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
<div tabindex="0" class="container-info">
<div class="img-container">
<picture>
<source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" type="image/webp" media="all and (max-width: 300px)" />        
<source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" type="image/jpeg" media="all and (max-width: 300px)" />
<source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" type="image/webp" media="all and (min-width: 700px) and (max-width: 900px)" />    
<source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 700px) and (max-width: 900px)" />
<source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" type="image/webp" media="all and (min-width: 901px)" />        
<source class="detail-img lazyload" srcset="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" type="image/jpeg" media="all and (min-width: 901px)" />
<img class="detail-img lazyload" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
</picture>
</div>

<ul class="detail-info">
  <li class="resto-name">
    <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.name}</p>
    </li>

  <li class="resto-address">
    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
    </li>

  <li class="resto-rating">
    <i title="ratings" class="fas fa-star icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.rating}</p>
  </li>
  <h4> Description: </h4>
  <li><p class="detail-desc">${restaurant.description}</p></li>

  <li class="resto-category">${restaurant.categories
    .map(
      (category) => `
        <span class="category">${category.name}</span>
      `,
    )
    .join('')}
  </li>
</ul>
</div>
<h3 tabindex="0" >Menu</h3>

<div tabindex="0" class="detail-menu">
  <div class="detail-food">
    <h4>Food</h4>
    <ul>
      ${restaurant.menus.foods
    .map(
      (food) => `
            <li><p>${food.name}</p></li>
          `,
    )
    .join('')}
    <ul>
  </div>

  <div class="detail-drink">
    <h4>Drink</h4>
    <ul>
      ${restaurant.menus.drinks
    .map(
      (drink) => `
            <li><p>${drink.name}</p></li>
          `,
    )
    .join('')}
    <ul>
  </div>
</div>

<h3 tabindex="0" class="title-review">Reviews</h3>

<div tabindex="0" class="detail-review">
${restaurant.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>

          <p class="date-review">${review.date}</p>
        </div>

        <div class="body-review">
          ${review.review}
        </div>
      </div>
    `,
    )
    .join('')}
</div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
