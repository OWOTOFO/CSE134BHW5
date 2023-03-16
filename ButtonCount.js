class ButtonCount extends HTMLElement {
    constructor() {
      super();
  
      this.count = 0;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      const sbutton = document.createElement('button');
      sbutton.textContent = 'Times Clicked: ' + this.count;
      sbutton.addEventListener('click', this.handleClick.bind(this));
    
      shadowRoot.appendChild(sbutton);
    }
  
    handleClick() {
      this.count++;
      this.shadowRoot.querySelector('button').textContent = 'Times Clicked: ' + this.count;
    }
  }
  
  customElements.define('button-count', ButtonCount);
  