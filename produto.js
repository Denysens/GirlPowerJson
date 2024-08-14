class Produto extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const div = document.createElement("div");

      div.innerHTML = `
            <div class="card text-center bg-light">
              <div class="position-absolute end-0 p-2 text-danger">
                <i class="bi-suit-heart heart"></i>
              </div>

              <img src ="${this.getAttribute('img')}" class="card-img-top"></img>
              <div class="card-header">${this.getAttribute('preco')}</div>
              <div class="card-body card_corpo">
                <h5 class="card-title"> ${this.getAttribute('titulo')} </h5>
              </div>

              <div class="card-footer card_rodape">
                <div class="btn btn-outline-secondary mt-2 d-block">
                  <a href="detalhes.html?id=${this.getAttribute('id')}">
                   Ver mais
                  </a>
                </div>
              </div>
            </div>
            
      `;
      this.appendChild(div);
    }
  }
customElements.define("produto-novo", Produto);

