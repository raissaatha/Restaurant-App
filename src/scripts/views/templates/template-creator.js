import CONFIG from '../../globals/config';
import star from '../../../public/images/icons/start.png';

const restoTemplate = (item) => `
    <a href="#/detail/${item.id}" class='resto__tag'>
        <div tabindex="0" class="katalog__resto">
            <figure class="resto__image">
            <p class="resto__city">${item.city}</p>
                <img tabindex="0" src="${CONFIG.IMG_URL_SM}${item.pictureId}" alt="${item.name}" />
            </figure>
            <div tabindex="0" class="resto__content">
                    <h2 class="resto__name">${item.name}</h2>
                    <div class="rating">
                        <img src="${star}" alt="star-rating" />
                        <span>${item.rating}</span>
                    </div>

                <p class="resto__description truncate">${item.description}</p>
            </div>
        </div>
    </a>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export { restoTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
