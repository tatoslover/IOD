/**
 * Module 4 Specific JavaScript Functions
 * Functions unique to Module 4 Lab Portfolio - Advanced Frontend Development
 */

// ============================================================================
// MODULE 4 SPECIFIC FUNCTIONS
// ============================================================================

const Module4 = {
  // ========================================================================
  // DEMO FUNCTIONALITY
  // ========================================================================

  /**
   * Add demo news item to the news feed system
   */
  addDemoNews: function () {
    const title = document.getElementById("demo-title").value;
    if (title) {
      const container = document.getElementById("news-demo-container");
      const newItem = document.createElement("div");
      newItem.style.cssText =
        "border: 1px solid #ccc; padding: 10px; margin: 5px 0;";
      newItem.innerHTML = `<h5>${title}</h5><p>User-generated news content...</p>`;
      container.appendChild(newItem);
      document.getElementById("demo-title").value = "";
    }
  },

  /**
   * Load artist gallery with template system
   */
  loadArtistGallery: function () {
    const container = document.getElementById("artist-gallery");
    container.innerHTML = "";

    const artists = [
      {
        name: "Vincent van Gogh",
        portfolio: [
          {
            title: "Self Portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
          },
          {
            title: "The Starry Night",
            url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
          },
        ],
      },
      {
        name: "Frida Kahlo",
        portfolio: [
          {
            title: "Self Portrait",
            url: "https://www.fridakahlo.org/assets/img/paintings/self-portrait-with-necklace-of-thorns.jpg",
          },
          {
            title: "Viva la Vida",
            url: "https://www.fridakahlo.org/assets/img/paintings/viva-la-vida-watermelons.jpg",
          },
        ],
      },
      {
        name: "Gottfried Lindauer",
        portfolio: [
          {
            title: "Self Portrait",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gottfried_Lindaur_-_Self-Portrait_1862.jpg/500px-Gottfried_Lindaur_-_Self-Portrait_1862.jpg",
          },
          {
            title: "The Tohunga-ta-moko",
            url: "https://www.lindaueronline.co.nz/media/281639/tohunga-ta-moko-at-work-web.jpg",
          },
        ],
      },
    ];

    function addCard(title, description, imageUrl = null) {
      const template = document
        .getElementById("lab3-card-template")
        .content.cloneNode(true);
      template.querySelector(".lab3-card-title").innerText = title;
      template.querySelector(".lab3-card-description").innerText = description;

      const img = template.querySelector(".lab3-card-image");
      if (imageUrl) {
        img.src = imageUrl;
        img.alt = title;
      } else {
        img.style.display = "none";
      }

      container.appendChild(template);
    }

    artists.forEach((artist) => {
      addCard(artist.name, "Artist Portfolio:");
      artist.portfolio.forEach((item) => {
        addCard(item.title, "", item.url);
      });
    });

    // Add lightbox functionality
    const lightbox = document.getElementById("lab3-lightbox");
    const lightboxImg = document.getElementById("lab3-lightbox-img");

    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("lab3-card-image")) {
        lightboxImg.src = e.target.src;
        lightbox.style.display = "flex";
      }
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  },

  // ========================================================================
  // DATE/TIME CALCULATIONS WITH LUXON
  // ========================================================================

  /**
   * Update date calculations using Luxon library with fallback
   */
  updateDateCalculations: function () {
    try {
      // Using Luxon for date calculations
      const birthDate = luxon.DateTime.fromISO("1996-09-15");
      const now = luxon.DateTime.now();
      const daysBetween = now.diff(birthDate, "days").days;

      document.getElementById("days-count").textContent =
        Math.floor(daysBetween);

      // Detailed age breakdown
      const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();
      document.getElementById("age-breakdown").textContent =
        `${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, ${Math.floor(diff.days)} days`;

      // Date comparison
      const date1 = luxon.DateTime.fromISO("2024-12-25");
      const date2 = luxon.DateTime.fromISO("2025-01-01");
      const diff1 = Math.abs(now.diff(date1).milliseconds);
      const diff2 = Math.abs(now.diff(date2).milliseconds);
      const closest = diff1 < diff2 ? date1 : date2;

      document.getElementById("date-comparison").textContent =
        `Closest: ${closest.toISODate()}`;

      // London time
      const londonTime = luxon.DateTime.now().setZone("Europe/London");
      document.getElementById("london-time").textContent =
        londonTime.toFormat("HH:mm:ss");
    } catch (error) {
      console.log("Luxon not available, using fallback calculations");

      // Fallback calculations without Luxon
      const birthDate = new Date("1996-09-15");
      const now = new Date();
      const daysBetween = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));

      document.getElementById("days-count").textContent = daysBetween;

      const ageYears = Math.floor(daysBetween / 365.25);
      const remainingDays = daysBetween % 365.25;
      const ageMonths = Math.floor(remainingDays / 30.44);
      const ageDays = Math.floor(remainingDays % 30.44);

      document.getElementById("age-breakdown").textContent =
        `${ageYears} years, ${ageMonths} months, ${ageDays} days`;

      document.getElementById("date-comparison").textContent =
        "Christmas 2024 vs New Year 2025";

      document.getElementById("london-time").textContent =
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
        });
    }
  },

  /**
   * Lab 5 News Feed System
   */
  lab5News: [
    {
      id: 1,
      title: "Election Results",
      content:
        "Newly elected minister announces policy changes for the upcoming fiscal year...",
    },
    {
      id: 2,
      title: "Sporting Success",
      content:
        "World Cup winners celebrate historic victory in front of thousands of fans...",
    },
    {
      id: 3,
      title: "Tornado Warning",
      content:
        "Residents should prepare for severe weather conditions expected this evening...",
    },
  ],

  lab5IntervalId: null,
  lab5UpdatesActive: true,

  renderLab5News: function () {
    const container = document.getElementById("news-demo-container");
    container.innerHTML = "";

    Module4.lab5News.forEach((item) => {
      const div = document.createElement("div");
      div.className = "lab5-news-item";
      div.innerHTML = `
        <h5>${item.title}</h5>
        <p>${item.content}</p>
      `;
      container.appendChild(div);
    });
  },

  addDemoNews: function () {
    const titleInput = document.getElementById("demo-title");
    const contentInput = document.getElementById("demo-content");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
      const newId = Module4.lab5News.length
        ? Module4.lab5News[Module4.lab5News.length - 1].id + 1
        : 1;
      Module4.lab5News.push({
        id: newId,
        title,
        content,
      });

      titleInput.value = "";
      contentInput.value = "";

      // Render immediately
      Module4.renderLab5News();
    } else {
      alert("Please enter both title and content");
    }
  },

  renderLab5News: function () {
    const container = document.getElementById("news-demo-container");
    if (!container) return;

    container.innerHTML = "";

    Module4.lab5News.forEach((item) => {
      const div = document.createElement("div");
      div.className = "lab5-news-item";
      div.innerHTML = `
        <h5>${item.title}</h5>
        <p>${item.content}</p>
      `;
      container.appendChild(div);
    });
  },

  toggleNewsUpdates: function () {
    const btn = document.getElementById("toggle-btn");
    const status = document.getElementById("update-status");

    if (Module4.lab5UpdatesActive) {
      clearInterval(Module4.lab5IntervalId);
      Module4.lab5UpdatesActive = false;
      btn.textContent = "Start Updates";
      status.textContent = "News updates: Stopped";
    } else {
      Module4.lab5IntervalId = setInterval(Module4.renderLab5News, 5000);
      Module4.lab5UpdatesActive = true;
      btn.textContent = "Stop Updates";
      status.textContent = "News updates: Active (every 5 seconds)";
    }
  },

  /**
   * Initialize Lab 5 news feed
   */
  initializeLab5News: function () {
    const container = document.getElementById("news-demo-container");
    if (container) {
      Module4.renderLab5News();
      Module4.lab5IntervalId = setInterval(Module4.renderLab5News, 5000);
    }
  },

  /**
   * Load API demo cards for Bootstrap integration
   */
  loadAPIDemoCards: function () {
    const container = document.getElementById("api-cards-demo");
    container.innerHTML = `
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Sample API Post</h5>
                        <p class="card-text">This demonstrates fetching data from JSONPlaceholder API and displaying it in responsive Bootstrap cards.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Another API Post</h5>
                        <p class="card-text">Each card represents a post fetched from the API, demonstrating real-time data integration.</p>
                    </div>
                </div>
            </div>
        `;
  },

  /**
   * Load chart data for ECharts visualization
   */
  loadChartData: function () {
    const container = document.getElementById("chart-container");
    container.innerHTML =
      '<p style="text-align: center; padding: 50px;">Chart would load here with real API data showing product categories distribution.</p>';
  },

  /**
   * Load store products for e-commerce interface demo
   */
  loadStoreProducts: function () {
    const container = document.getElementById("demo-product-grid");
    container.innerHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Wireless Headphones</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <i class="fa-solid fa-plug"></i> Electronics
                        </h6>
                        <p class="card-text">High-quality wireless headphones with noise cancellation...</p>
                        <div class="mt-auto">
                            <span class="fw-bold">$89.99</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Gold Necklace</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <i class="fa-solid fa-gem"></i> Jewelry
                        </h6>
                        <p class="card-text">Beautiful gold necklace with elegant design...</p>
                        <div class="mt-auto">
                            <span class="fw-bold">$299.99</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Men's Jacket</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <i class="fa-solid fa-mars"></i> Men's Clothing
                        </h6>
                        <p class="card-text">Stylish winter jacket for men...</p>
                        <div class="mt-auto">
                            <span class="fw-bold">$79.99</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },

  // ========================================================================
  // DATE/TIME DEMO FUNCTIONS
  // ========================================================================

  /**
   * Update date/time demo calculations
   */
  updateDateTimeDemo: function () {
    const now = new Date();
    const birthDate = new Date("1996-09-15");
    const daysBetween = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));

    const daysCountElement = document.getElementById("days-count");
    if (daysCountElement) {
      daysCountElement.textContent = daysBetween;
    }

    const years = Math.floor(daysBetween / 365);
    const months = Math.floor((daysBetween % 365) / 30);
    const days = Math.floor((daysBetween % 365) % 30);

    const ageBreakdownElement = document.getElementById("age-breakdown");
    if (ageBreakdownElement) {
      ageBreakdownElement.textContent = `${years} years, ${months} months, ${days} days`;
    }

    const londonTime = new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour12: false,
    });
    const londonTimeElement = document.getElementById("london-time");
    if (londonTimeElement) {
      londonTimeElement.textContent = londonTime;
    }

    const date1 = new Date("2024-12-25");
    const date2 = new Date("2025-01-01");
    const comparison =
      date1 < date2
        ? "Christmas is before New Year"
        : "New Year is before Christmas";
    const dateComparisonElement = document.getElementById("date-comparison");
    if (dateComparisonElement) {
      dateComparisonElement.textContent = comparison;
    }
  },

  // ========================================================================
  // GALLERY GENERATION
  // ========================================================================

  /**
   * Generate artist gallery cards
   */
  generateArtistGallery: function () {
    const artists = [
      { name: "Van Gogh", description: "Post-impressionist master" },
      { name: "Frida Kahlo", description: "Mexican surrealist artist" },
      {
        name: "Gottfried Lindauer",
        description: "New Zealand portrait artist",
      },
    ];

    const gallery = document.getElementById("artist-gallery");
    if (gallery) {
      artists.forEach((artist) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${artist.name}</h5>
                            <p class="card-text">${artist.description}</p>
                        </div>
                    </div>
                `;
        gallery.appendChild(col);
      });
    }
  },

  // ========================================================================
  // UX/UI DESIGN UTILITIES
  // ========================================================================

  /**
   * Demonstrate UX/UI design principles
   */
  demonstrateDesignPrinciples: function () {
    console.log("Module 4: UX/UI Design principles demonstrated");
    // Placeholder for future UX/UI demonstrations
  },

  /**
   * Bootstrap responsive layout demonstration
   */
  demonstrateResponsiveLayout: function () {
    console.log("Module 4: Responsive Bootstrap layout");
    // Placeholder for future responsive layout demonstrations
  },

  /**
   * CSS animations and transitions showcase
   */
  demonstrateAnimations: function () {
    console.log("Module 4: CSS animations and transitions");
    // Placeholder for future animation demonstrations
  },

  /**
   * API integration patterns
   */
  demonstrateAPIIntegration: function () {
    console.log("Module 4: API integration patterns");
    // Placeholder for future API integration demonstrations
  },

  /**
   * Data visualization with charts
   */
  demonstrateDataVisualization: function () {
    console.log("Module 4: Data visualization with ECharts");
    // Placeholder for future data visualization demonstrations
  },

  // ========================================================================
  // INITIALIZATION
  // ========================================================================

  /**
   * Initialize Module 4 specific functionality
   */
  init: function () {
    console.log("Module 4 specific functions loaded");

    // Initialize demos when page loads
    document.addEventListener("DOMContentLoaded", function () {
      // Small delay to ensure Portfolio is fully initialized
      setTimeout(() => {
        // Initialize proper icon rotation for active sections
        const sections = document.querySelectorAll(".lab-content");
        const icons = document.querySelectorAll(".toggle-icon");

        sections.forEach((section, index) => {
          if (section.classList.contains("active") && icons[index]) {
            icons[index].style.transform = "rotate(180deg)";
          }
        });

        // Initialize Module 4 specific demos
        Module4.updateDateTimeDemo();
        Module4.updateDateCalculations();
        Module4.generateArtistGallery();

        // Initialize Lab 5 news feed with delay to ensure DOM is ready
        setTimeout(() => {
          Module4.initializeLab5News();
        }, 200);

        // Set up date calculations interval
        setInterval(Module4.updateDateCalculations, 30000);
      }, 100);
    });
  },
};

// ============================================================================
// LEGACY FUNCTION WRAPPERS FOR BACKWARD COMPATIBILITY
// ============================================================================

// Demo functions
function addDemoNews() {
  return Module4.addDemoNews();
}

function loadAPIDemoCards() {
  return Module4.loadAPIDemoCards();
}

function loadChartData() {
  return Module4.loadChartData();
}

function loadStoreProducts() {
  return Module4.loadStoreProducts();
}

function updateDateTimeDemo() {
  return Module4.updateDateTimeDemo();
}

function updateDateCalculations() {
  return Module4.updateDateCalculations();
}

function renderLab5News() {
  return Module4.renderLab5News();
}

function toggleNewsUpdates() {
  return Module4.toggleNewsUpdates();
}

function initializeLab5News() {
  return Module4.initializeLab5News();
}

function loadArtistGallery() {
  return Module4.loadArtistGallery();
}

// UX/UI and demo functions
function demonstrateDesignPrinciples() {
  return Module4.demonstrateDesignPrinciples();
}

function demonstrateResponsiveLayout() {
  return Module4.demonstrateResponsiveLayout();
}

function demonstrateAnimations() {
  return Module4.demonstrateAnimations();
}

function demonstrateAPIIntegration() {
  return Module4.demonstrateAPIIntegration();
}

function demonstrateDataVisualization() {
  return Module4.demonstrateDataVisualization();
}

// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

// Initialize Module 4 when loaded
Module4.init();

// Make globally available
window.Module4 = Module4;

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = Module4;
}
