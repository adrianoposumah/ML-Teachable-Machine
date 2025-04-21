class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["title", "subtitle", "show-button", "button-text", "back-url"];
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Model Machine Learning";
    const subtitle = this.getAttribute("subtitle") || "";
    const showButton = this.getAttribute("show-button") === "true";
    const buttonText = this.getAttribute("button-text") || "Start Listening";
    const backUrl = this.getAttribute("back-url") || "../index.html";
    const showBackLink = this.hasAttribute("back-url");

    let headerContent = `
      <div class="container-header">
        ${showBackLink ? `<a href="${backUrl}" class="back-link"><i class="bi bi-arrow-left"></i> Kembali</a>` : ""}
        <div class="badge-container">
          <span class="badge-dot"></span>
          <span class="badge-text">Kelas E Topik Khusus Teknik Informatika</span>
        </div>
      </div>

      <div class="header">
        <h1 class="app-title">${title}</h1>
        ${subtitle ? `<p class="lead">${subtitle}</p>` : ""}
    `;

    if (showButton) {
      headerContent += `
        <div class="d-flex justify-content-center align-items-center">
          <button type="button" id="startButton" class="btn btn-primary start-btn" onclick="toggleListening()">
            <i class="bi bi-mic"></i> ${buttonText}
          </button>
          <div class="status-indicator" id="statusIndicator"></div>
          <span class="status-text" id="statusText">Not listening</span>
        </div>
      `;
    }

    headerContent += `</div>`;

    this.innerHTML = headerContent;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isConnected) {
      this.connectedCallback();
    }
  }
}

customElements.define("app-header", AppHeader);
