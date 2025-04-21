class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p><i class="bi bi-cpu"></i> Powered by TensorFlow.js and Teachable Machine</p>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
