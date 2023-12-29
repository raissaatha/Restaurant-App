// /* eslint-disable no-console */
// /* eslint-disable no-use-before-define */
// const main = () => {
//   const restaurantList = document.querySelector('.restaurantList');
//   const searchInput = document.getElementById('searchInput');
//   const menu = document.querySelector('#menu');
//   const navMobile = document.querySelector('#nav-mobile');
//   const toggleButtonIcon = document.querySelector('.hamburger-menu i');

//   menu.addEventListener('click', (event) => {
//     event.preventDefault();
//     navMobile.classList.toggle('d-none');
//     const isActive = navMobile.classList.contains('d-none');
//     toggleButtonIcon.classList = isActive
//       ? 'bx bx-menu bx-md'
//       : 'bx bx-x bx-md';
//   });

//   // const fetchRestaurant = async () => {
//   //   try {
//   //     const response = await fetch('https://restaurant-api.dicoding.dev/list');
//   //     const data = await response.json();
//   //     const { restaurants } = data;

//   //     renderRestaurants(restaurants);

//   //     searchInput.addEventListener('input', () => searchRestaurant(restaurants));
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };

//   const CreateHTMLElement = (restaurant) => `
//               <div class="card-restaurant-heading">
//                   <h2>${restaurant.city}</h2>
//               </div>
//               <img src="https://restaurant-api.dicoding.dev/images/large/${restaurant.id}" alt="${restaurant.name}" title="${restaurant.name}" />
//               <div class="card-restaurant-details">
//                   <div class="rating">
//                       <p>Rating : ${restaurant.rating}</p>
//                   </div>
//                   <div class="name">
//                       <h2>${restaurant.name}</h2>
//                   </div>
//                   <div>
//                       <p class="description">${restaurant.description}</p>
//                   </div>
//                   <button class="read-more" type="submit">Read More</button>
//               </div>
//           `;

//   const renderRestaurants = (restaurants) => {
//     const restaurantCards = restaurants.map((restaurant) => {
//       const cardElement = document.createElement('div');
//       cardElement.classList.add('card-restaurant');
//       cardElement.innerHTML = CreateHTMLElement(restaurant);

//       const buttonReadMore = cardElement.querySelector('.read-more');
//       const description = cardElement.querySelector('.description');

//       buttonReadMore.addEventListener('click', (event) => {
//         event.preventDefault();
//         description.classList.toggle('active');

//         buttonReadMore.textContent = description.classList.contains('active')
//           ? 'Close'
//           : 'Read More';
//       });

//       return cardElement;
//     });

//     restaurantList.innerHTML = '';
//     restaurantCards.forEach((card) => {
//       restaurantList.appendChild(card);
//     });
//   };

//   const searchRestaurant = (restaurants) => {
//     const searchTerm = searchInput.value.toLowerCase();
//     // eslint-disable-next-line no-console
//     console.log(searchTerm);
//     const filteredRestaurants = restaurants.filter((restaurant) => (
//       restaurant.name.toLowerCase().includes(searchTerm)
//           || restaurant.city.toLowerCase().includes(searchTerm)
//     ));

//     renderRestaurants(filteredRestaurants);
//   };

//   fetchRestaurant();
// };

// export default main;
