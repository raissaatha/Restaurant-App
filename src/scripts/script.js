const main = () => {
    const restaurantList = document.querySelector('.restaurantList');
    const searchInput = document.getElementById('searchInput');
    const menu = document.querySelector('#menu');
    const navMobile = document.querySelector('#nav-mobile');
    const toggleButtonIcon = document.querySelector('.hamburger-menu i');
  
    menu.addEventListener('click', function (event) {
      event.preventDefault();
      navMobile.classList.toggle('d-none');
      const isActive = navMobile.classList.contains('d-none');
      toggleButtonIcon.classList = isActive
        ? 'bx bx-menu bx-md'
        : 'bx bx-x bx-md';
    });
  
    const fetchRestaurant = () => {
      fetch('./data/DATA.json')
        .then((res) => res.json())
        .then((data) => {
          let restaurants = data.restaurants;
  
          renderRestaurants(restaurants);
  
          searchInput.addEventListener('input', () =>
            searchRestaurant(restaurants)
          );
        })
        .catch((err) => console.log(err));
    };
  
    const CreateHTMLElement = (restaurant) => {
      return `
              <div class="card-restaurant-heading">
                  <h2>${restaurant['city']}</h2>
              </div>
              <img src="${restaurant.pictureId}" alt="${restaurant['name']}" title="${restaurant['name']}" />
              <div class="card-restaurant-details">
                  <div class="rating">
                      <p>Rating : ${restaurant['rating']}</p>
                  </div>
                  <div class="name">
                      <h2>${restaurant['name']}</h2>
                  </div>
                  <div>
                      <p class="description">${restaurant['description']}</p>
                  </div>
                  <button class="read-more" type="submit">Read More</button>
              </div>
          `;
    };
  
    const renderRestaurants = (restaurants) => {
      const restaurantCards = restaurants.map((restaurant) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card-restaurant');
        cardElement.innerHTML = CreateHTMLElement(restaurant);
  
        const buttonReadMore = cardElement.querySelector('.read-more');
        const description = cardElement.querySelector('.description');
  
        buttonReadMore.addEventListener('click', (event) => {
          event.preventDefault();
          description.classList.toggle('active');
  
          buttonReadMore.textContent = description.classList.contains('active')
            ? 'Close'
            : 'Read More';
        });
  
        return cardElement;
      });
  
      restaurantList.innerHTML = '';
      restaurantCards.forEach((card) => {
        restaurantList.appendChild(card);
      });
    };
  
    const searchRestaurant = (restaurants) => {
      const searchTerm = searchInput.value.toLowerCase();
      console.log(searchTerm);
      const filteredRestaurants = restaurants.filter((restaurant) => {
        return (
          restaurant.name.toLowerCase().includes(searchTerm) ||
          restaurant.city.toLowerCase().includes(searchTerm)
        );
      });
  
      renderRestaurants(filteredRestaurants);
    };
  
    fetchRestaurant();
};
  
export default main;
  