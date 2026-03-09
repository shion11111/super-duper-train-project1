

const jsObjectData = [
/* 🌐 */
    { id: 1, continent: "North America", country: "The United States", city: "New York", link: "../pages/new-york.html"},
    { id: 2, continent: "North America", country: "The United States", city: "California", link: "../pages/california.html"},
    { id: 3, continent: "Europe", country: "Switzerland", city: "St.Gallen", link: "../pages/switzerland.html"},
    { id: 4, continent: "Europe", country: "Germany", city: "Nuremberg", link: "../pages/germany.html"},
    { id: 5, continent: "Asia", country: "Japan", city: "Tokyo", link: "../pages/japan.html"},
    { id: 6, continent: "Asia", country: "Korea", city: "Seoul", link: "../pages/korea.html"},
   
]

// NATO PHONETIC ALPHABET

const jsArrayData = [
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu"
];

// Controlled search: only search specific keys in jsObjectData
// This step demonstrates searching for a query in selected fields (e.g., 'app' and 'action')

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const searchMessage = document.getElementById("searchMessage");

const SEARCHABLE_FIELDS = ["continent", "country", "city"];

function renderObjectResults(items, query) {
  searchResults.innerHTML = "";
  if (items.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    const link = document.createElement("a");

    // Highlight the matched part (optional)
    let displayText = `${item.continent} | ${item.country} | ${item.city}`;
    if (query) {
      const regex = new RegExp(`(${query})`, "gi");
      displayText = displayText.replace(regex, "<strong>$1</strong>");
    }
    
    link.href = item.link || "#"; 
    link.innerHTML = displayText;
    li.appendChild(link);
    searchResults.appendChild(li);
  });
   searchResults.style.display = "block";
}

function handleControlledObjectSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = ""; // hide list if nothing typed
    searchMessage.textContent = "Type to search places (continent/country/city)";
    return;
  }
  const results = jsObjectData.filter(item =>
    SEARCHABLE_FIELDS.some(field =>
      String(item[field]).toLowerCase().includes(query)
    )
  );
  renderObjectResults(results, query);
  searchMessage.textContent = results.length ? `Found ${results.length} result(s)` : `No results for: ${query}`;
}

// Search as you type
searchInput.addEventListener("input", handleControlledObjectSearch);

// Search on button click
searchButton.addEventListener("click", handleControlledObjectSearch);

searchResults.innerHTML = "";
searchMessage.textContent = "Type to search places (continent/country/city)";

// Hide dropdown if clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    searchResults.style.display = "none";
  }
});
