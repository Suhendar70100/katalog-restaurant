class NavItem extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#content" class="skip-link">Skip to content ?</a>
      <!-- Mobile Navbar -->
      <div class="menumob">
        <div class="iconmenu" id="menu" aria-label="navigation-menu"><a href="#">&#9776;</a></div>
        <div class="logomob">Restaurant Apps</div>
        <div class="logomob">&nbsp;</div>
      </div>
      <nav id="drawer" class="navmob">
        <ul class="navlistmob">
          <li class="navitemsmob"><a href="">Home</a></li>
          <li class="navitemsmob"><a href="#">Favorite</a></li>
          <li class="navitemsmob"><a target="_blank" href="https://github.com/Suhendar70100">About Us</a></li>
        </ul>
      </nav>
      <!-- Desktop Navbar -->
      <nav class="nav">
        <a class="logo" href="">Restaurant Apps</a>
        <ul class="navlist">
          <li class="navitems"><a href="">Home</a></li>
          <li class="navitems"><a href="#">Favorite</a></li>
          <li class="navitems"><a target="_blank" href="https://github.com/Suhendar70100">About Us</a></li>
        </ul>
      </nav>
        `
  }
}

customElements.define('nav-item', NavItem);