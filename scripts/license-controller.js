import { License } from "./license.js";

export class LicenseController {
  constructor() {
    this.licenses = [];
    this.elements = {
      featured: document.querySelector("#featured-products"),
      all: document.querySelector("#all-products"),
      search: document.querySelector("#search-input"),
      category: document.querySelector("#category-filter"),
      sort: document.querySelector("#sort-filter"),
      pills: document.querySelector("#category-pills"),
      count: document.querySelector("#result-count"),
      empty: document.querySelector("#empty-state")
    };
    this.activeCategory = "";
  }

  async loadData() {
    const response = await fetch("./data/licenses.json");
    if (!response.ok) throw new Error(`No se pudo cargar el catálogo (${response.status}).`);
    const data = await response.json();
    this.licenses = data.map((item) => new License(item));
  }

  renderFeatured() {
    this.elements.featured.replaceChildren();
    this.licenses.filter((license) => license.featured).slice(0, 3)
      .forEach((license) => license.Render(this.elements.featured, { featured: true }));
  }

  renderCatalog() {
    const query = this.elements.search.value.trim().toLocaleLowerCase("es");
    const sort = this.elements.sort.value;
    let matches = this.licenses.filter((license) => {
      const matchesSearch = `${license.software} ${license.version} ${license.category}`.toLocaleLowerCase("es").includes(query);
      return matchesSearch && (!this.activeCategory || license.category === this.activeCategory);
    });

    if (sort === "price-asc") matches.sort((a, b) => a.currentPrice - b.currentPrice);
    if (sort === "price-desc") matches.sort((a, b) => b.currentPrice - a.currentPrice);
    if (sort === "name") matches.sort((a, b) => a.software.localeCompare(b.software, "es"));
    if (sort === "featured") matches.sort((a, b) => Number(b.featured) - Number(a.featured) || a.id - b.id);

    this.elements.all.replaceChildren();
    matches.forEach((license) => license.Render(this.elements.all));
    this.elements.count.textContent = `${matches.length} ${matches.length === 1 ? "licencia" : "licencias"}`;
    this.elements.empty.hidden = matches.length > 0;
    this.elements.all.hidden = matches.length === 0;
  }

  renderCategories() {
    const categories = [...new Set(this.licenses.map((license) => license.category))].sort((a, b) => a.localeCompare(b, "es"));
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      this.elements.category.append(option);

      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "category-pill";
      pill.textContent = category;
      pill.dataset.category = category;
      pill.setAttribute("aria-pressed", "false");
      pill.addEventListener("click", () => {
        this.activeCategory = this.activeCategory === category ? "" : category;
        this.elements.category.value = this.activeCategory;
        this.updatePills();
        this.renderCatalog();
      });
      this.elements.pills.append(pill);
    });
  }

  bindFilters() {
    this.elements.search.addEventListener("input", () => this.renderCatalog());
    this.elements.category.addEventListener("change", () => {
      this.activeCategory = this.elements.category.value;
      this.updatePills();
      this.renderCatalog();
    });
    this.elements.sort.addEventListener("change", () => this.renderCatalog());
    document.querySelector("#clear-filters").addEventListener("click", () => {
      this.elements.search.value = "";
      this.elements.category.value = "";
      this.activeCategory = "";
      this.updatePills();
      this.renderCatalog();
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        this.elements.search.focus();
      }
    });
  }

  updatePills() {
    this.elements.pills.querySelectorAll(".category-pill").forEach((pill) => {
      const selected = pill.dataset.category === this.activeCategory;
      pill.classList.toggle("is-active", selected);
      pill.setAttribute("aria-pressed", String(selected));
    });
  }
}
