import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
// // eslint-disable-next-line import/extensions
// import main from './script.js';
import App from './views/app';

// document.addEventListener('DOMContentLoaded', main());
const app = new App({
  button: document.querySelector('#menu'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
