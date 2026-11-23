const PRODUCT_MARKS = [
  ["Photoshop", "Ps", "photoshop"],
  ["Illustrator", "Ai", "illustrator"],
  ["Premiere", "Pr", "premiere"],
  ["Acrobat", "Ac", "acrobat"],
  ["Office", "O", "office"],
  ["Windows", "⊞", "windows"],
  ["Project", "Pj", "project"],
  ["AutoCAD", "A", "autocad"],
  ["3ds Max", "3D", "max"],
  ["Revit", "R", "revit"],
  ["IntelliJ", "IJ", "jetbrains"],
  ["WebStorm", "W", "jetbrains"],
  ["CorelDRAW", "C", "corel"],
  ["Ableton", "A", "ableton"],
  ["FL Studio", "FL", "flstudio"],
  ["DaVinci", "DR", "davinci"],
  ["Affinity", "Af", "affinity"],
  ["Norton", "N", "norton"],
  ["ESET", "E", "eset"],
  ["SketchUp", "S", "sketchup"]
];

const BRAND_LOGOS = {
  photoshop: `<svg viewBox="0 0 64 64" role="img" aria-label="Adobe Photoshop"><rect x="7" y="7" width="50" height="50" rx="8" fill="#31a8ff"/><text x="32" y="43" text-anchor="middle" font-size="29" font-family="Arial, sans-serif" font-weight="700" fill="#001e36">Ps</text></svg>`,
  illustrator: `<svg viewBox="0 0 64 64" role="img" aria-label="Adobe Illustrator"><rect x="7" y="7" width="50" height="50" rx="8" fill="#ff9a00"/><text x="32" y="43" text-anchor="middle" font-size="29" font-family="Arial, sans-serif" font-weight="700" fill="#330000">Ai</text></svg>`,
  premiere: `<svg viewBox="0 0 64 64" role="img" aria-label="Adobe Premiere Pro"><rect x="7" y="7" width="50" height="50" rx="8" fill="#9999ff"/><text x="32" y="43" text-anchor="middle" font-size="29" font-family="Arial, sans-serif" font-weight="700" fill="#00005b">Pr</text></svg>`,
  acrobat: `<svg viewBox="0 0 64 64" role="img" aria-label="Adobe Acrobat"><rect x="7" y="7" width="50" height="50" rx="8" fill="#ed1c24"/><path d="M19 47l13-31 13 31h-7l-2-7H28l-2 7z" fill="#fff"/><path d="M30 34h4l-2-6z" fill="#ed1c24"/></svg>`,
  office: `<svg viewBox="0 0 64 64" role="img" aria-label="Microsoft Office"><rect x="10" y="13" width="36" height="38" rx="3" fill="#ff6829"/><path d="M10 13l35-7v52l-35-7z" fill="#d83b01" opacity=".72"/><text x="31" y="41" text-anchor="middle" font-size="23" font-family="Arial, sans-serif" font-weight="700" fill="#fff">O</text><rect x="47" y="18" width="9" height="9" rx="1" fill="#43a047"/><rect x="47" y="29" width="9" height="9" rx="1" fill="#3b8ed8"/><rect x="47" y="40" width="9" height="9" rx="1" fill="#ffc107"/></svg>`,
  windows: `<svg viewBox="0 0 64 64" role="img" aria-label="Microsoft Windows"><rect x="9" y="9" width="22" height="22" fill="#f25022"/><rect x="33" y="9" width="22" height="22" fill="#7fba00"/><rect x="9" y="33" width="22" height="22" fill="#00a4ef"/><rect x="33" y="33" width="22" height="22" fill="#ffb900"/></svg>`,
  project: `<svg viewBox="0 0 64 64" role="img" aria-label="Microsoft Project"><rect x="8" y="8" width="48" height="48" rx="8" fill="#9c1d5b"/><rect x="19" y="17" width="26" height="30" rx="2" fill="#fff"/><rect x="19" y="17" width="26" height="7" fill="#e89bb9"/><text x="32" y="43" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#9c1d5b">P</text></svg>`,
  autocad: `<svg viewBox="0 0 64 64" role="img" aria-label="Autodesk AutoCAD"><rect x="7" y="7" width="50" height="50" rx="8" fill="#e41f26"/><path d="M32 14l16 36H39l-3-8H26l-3 8h-9zm-3 21h8l-4-11z" fill="#fff"/></svg>`,
  max: `<svg viewBox="0 0 64 64" role="img" aria-label="Autodesk 3ds Max"><rect x="7" y="7" width="50" height="50" rx="8" fill="#2e8b57"/><path d="M15 43l10-24 9 24 9-24 7 24" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/></svg>`,
  revit: `<svg viewBox="0 0 64 64" role="img" aria-label="Autodesk Revit"><rect x="7" y="7" width="50" height="50" rx="8" fill="#1867a8"/><path d="M18 45V19h13c8 0 12 4 12 10 0 4-2 7-6 9l8 7H33l-7-7v7zm8-14h5c3 0 5-1 5-3s-2-3-5-3h-5z" fill="#fff"/></svg>`,
  jetbrains: `<svg viewBox="0 0 64 64" role="img" aria-label="JetBrains"><defs><linearGradient id="jb" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff4081"/><stop offset=".5" stop-color="#c64fff"/><stop offset="1" stop-color="#21d4fd"/></linearGradient></defs><rect x="7" y="7" width="50" height="50" rx="8" fill="url(#jb)"/><path d="M17 45V19h13c8 0 12 4 12 10 0 4-2 7-6 8l8 8H32l-7-8v8zm8-14h5c3 0 5-1 5-3s-2-3-5-3h-5z" fill="#fff"/><rect x="15" y="48" width="34" height="4" rx="2" fill="#1a1a1a"/></svg>`,
  corel: `<svg viewBox="0 0 64 64" role="img" aria-label="CorelDRAW"><rect x="7" y="7" width="50" height="50" rx="8" fill="#111"/><circle cx="31" cy="32" r="17" fill="none" stroke="#7ed957" stroke-width="7"/><path d="M31 15a17 17 0 0121 12" fill="none" stroke="#f04e23" stroke-width="7" stroke-linecap="round"/></svg>`,
  ableton: `<svg viewBox="0 0 64 64" role="img" aria-label="Ableton Live"><rect x="7" y="7" width="50" height="50" rx="8" fill="#ff5f2e"/><g fill="#fff"><rect x="16" y="17" width="31" height="4" rx="2"/><rect x="16" y="24" width="31" height="4" rx="2"/><rect x="16" y="31" width="31" height="4" rx="2"/><rect x="16" y="38" width="31" height="4" rx="2"/></g></svg>`,
  flstudio: `<svg viewBox="0 0 64 64" role="img" aria-label="FL Studio"><rect x="7" y="7" width="50" height="50" rx="8" fill="#f4c430"/><path d="M17 45V19h25v8H25v5h14v8H25v5z" fill="#1b1b1b"/><path d="M43 17h5v31h-5z" fill="#ef5b2a"/></svg>`,
  davinci: `<svg viewBox="0 0 64 64" role="img" aria-label="DaVinci Resolve"><rect x="7" y="7" width="50" height="50" rx="8" fill="#19212b"/><circle cx="32" cy="32" r="18" fill="#5e64d8"/><path d="M20 32l12-12 12 12-12 12z" fill="#fff"/><circle cx="32" cy="32" r="5" fill="#f4c542"/></svg>`,
  affinity: `<svg viewBox="0 0 64 64" role="img" aria-label="Affinity"><defs><linearGradient id="af" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3f78e0"/><stop offset=".5" stop-color="#8c50b3"/><stop offset="1" stop-color="#e7b52f"/></linearGradient></defs><rect x="7" y="7" width="50" height="50" rx="8" fill="#20252d"/><path d="M15 43L32 17l17 26H15zm17-16l-7 10h14z" fill="url(#af)" fill-rule="evenodd"/></svg>`,
  norton: `<svg viewBox="0 0 64 64" role="img" aria-label="Norton"><rect x="7" y="7" width="50" height="50" rx="8" fill="#161616"/><path d="M32 12l16 7v12c0 10-6 17-16 21-10-4-16-11-16-21V19z" fill="#fbd20a"/><path d="M32 18l10 5v8c0 7-4 12-10 15-6-3-10-8-10-15v-8z" fill="#222"/></svg>`,
  eset: `<svg viewBox="0 0 64 64" role="img" aria-label="ESET"><rect x="7" y="7" width="50" height="50" rx="8" fill="#5c2d91"/><circle cx="32" cy="32" r="17" fill="none" stroke="#00a9e0" stroke-width="5"/><path d="M20 32h24M32 20v24" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  sketchup: `<svg viewBox="0 0 64 64" role="img" aria-label="SketchUp"><rect x="7" y="7" width="50" height="50" rx="8" fill="#d71920"/><path d="M15 43l17-28 17 28-17 10z" fill="#fff"/><path d="M32 15v38M15 43l34 0" fill="none" stroke="#d71920" stroke-width="3"/></svg>`,
  default: `<svg viewBox="0 0 64 64" role="img"><rect x="7" y="7" width="50" height="50" rx="8" fill="#6a7d61"/><path d="M20 20h24v24H20z" fill="none" stroke="#fff" stroke-width="4"/></svg>`
};

export class License {
  constructor({ id, software, version, price, key, featured, discount, category }) {
    this.id = id;
    this.software = software;
    this.version = version;
    this.price = price;
    this.key = key;
    this.featured = featured;
    this.discount = discount;
    this.category = category;
  }

  get currentPrice() {
    return this.price * (1 - this.discount / 100);
  }

  get mark() {
    const match = PRODUCT_MARKS.find(([name]) => this.software.includes(name));
    const style = match?.[2] ?? "default";
    return { text: match?.[1] ?? this.software.slice(0, 2).toUpperCase(), style };
  }

  Render(parent, { featured = false } = {}) {
    const card = document.createElement("article");
    const mark = this.mark;
    card.className = `product-card${featured ? " product-card--featured" : ""}`;
    card.dataset.category = this.category;
    card.innerHTML = `
      <div class="product-card__visual product-card__visual--${mark.style}">
        ${this.discount ? `<span class="discount-badge">-${this.discount}%</span>` : ""}
        <span class="product-mark" aria-hidden="true">${BRAND_LOGOS[mark.style] ?? BRAND_LOGOS.default}</span>
        <span class="product-category">${this.category}</span>
        <button class="quick-buy" type="button" aria-label="Comprar ${this.software} ${this.version}">↗</button>
      </div>
      <div class="product-card__content">
        <div class="product-title-row"><h3>${this.software}</h3><span class="version-tag">${this.version}</span></div>
        <div class="product-card__bottom">
          <div class="price-block"><strong>${this.formatPrice(this.currentPrice)}</strong>${this.discount ? `<del>${this.formatPrice(this.price)}</del>` : ""}</div>
          <button class="buy-button" type="button" aria-label="Comprar ${this.software} ${this.version}">Comprar <span aria-hidden="true">↗</span></button>
        </div>
      </div>`;
    card.querySelectorAll(".quick-buy, .buy-button").forEach((button) => {
      button.addEventListener("click", () => this.Buy());
    });
    parent.append(card);
    return card;
  }

  Buy() {
    const dialog = document.querySelector("#license-dialog");
    document.querySelector("#dialog-title").textContent = "Tu licencia está lista.";
    document.querySelector("#dialog-description").textContent = `${this.software} ${this.version} · Copia tu clave para activar el producto.`;
    document.querySelector("#license-key").textContent = this.key;
    dialog.showModal();
  }

  formatPrice(amount) {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(amount);
  }
}
