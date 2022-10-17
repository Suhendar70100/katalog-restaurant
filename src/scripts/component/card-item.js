class CardItem extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <main id="content">
        <section class="content">
          <div class="latest">
            <h1>Rekomendasi Restaurant</h1>
            <hr>
            <div class="list" id="tes"></div>
          </div>
        </section>
      </main>
        `
    }
}

customElements.define('card-item', CardItem);