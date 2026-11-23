import { LicenseController } from "./license-controller.js";

class App {
  constructor() {
    this.licenses = new LicenseController();
  }

  async start() {
    await this.licenses.loadData();
    this.licenses.renderCategories();
    this.licenses.renderFeatured();
    this.licenses.renderCatalog();
    this.licenses.bindFilters();
  }
}

new App().start().catch((error) => {
  console.error("Error al iniciar Softly:", error);
  const catalog = document.querySelector("#all-products");
  catalog.innerHTML = '<p class="load-error">No se pudo cargar el catálogo. Comprueba que la página se sirve desde un servidor local y vuelve a intentarlo.</p>';
});

const dialog = document.querySelector("#license-dialog");
const closeDialog = () => dialog.close();
document.querySelector("#dialog-close").addEventListener("click", closeDialog);
document.querySelector("#dialog-done").addEventListener("click", closeDialog);
document.querySelector("#copy-key").addEventListener("click", async () => {
  const key = document.querySelector("#license-key").textContent;
  try {
    await navigator.clipboard.writeText(key);
    showToast("Clave copiada al portapapeles");
  } catch {
    const selection = document.createRange();
    selection.selectNodeContents(document.querySelector("#license-key"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selection);
    showToast("Selecciona la clave para copiarla");
  }
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-input");
  const message = document.querySelector("#newsletter-message");
  message.textContent = `¡Gracias! Te escribiremos en ${email.value}.`;
  email.value = "";
});

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("toast--visible");
  window.setTimeout(() => toast.classList.remove("toast--visible"), 2400);
}
