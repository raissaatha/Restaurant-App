// eslint-disable-next-line import/no-unresolved
import toggle from '../../public/images/icons/menu.png';
import close from '../../public/images/icons/close.png';

class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <div class="buttonnav">
        <a href="/" class="buttonnav__logo">Kuliner Apps</a>
      </div>
      <div class="button__menu" id="btn-menu">
        <a href="#"><img src="${toggle}" alt="toggle-menu" /></a>
      </div>
      <div class="navbar__menu" id="navbar-menu">
        <div class="button__close" id="btn-close">
          <a href="#"><img src="${close}" alt="close" /></a>
        </div>
        <ul class="nav__list">
          <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
          <li class="nav__item">
            <a href="#/like" class="nav__link">Favorite</a>
          </li>
          <li class="nav__item">
            <a href="https://www.linkedin.com/in/raissa-atha-febrianti-2b4bb5221" target="_blank" rel="noopener noreferrer" class="nav__link">About</a>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('app-bar', Appbar);
