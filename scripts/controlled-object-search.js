const jsObjectData = [
/* 🌐 */
    { id: 1, continent: "North America", country: "The United States", city: "New York"},
    { id: 2, continent: "North America", country: "Canada", city: "Toronto"},
    { id: 3, continent: "Europe", country: "United Kingdom", city: "London"},
    { id: 4, continent: "Europe", country: "France", city: "Paris"},
    { id: 5, continent: "Asia", country: "Japan", city: "Tokyo"},
    { id: 6, continent: "Asia", country: "China", city: "Beijing"},
   
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

function renderObjectResults(items) {
  searchResults.innerHTML = "";
  if (items.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.link || "#";
    link.textContent = `${item.continent} | ${item.country} | ${item.city}`;
    li.appendChild(link);
    searchResults.appendChild(li);
  });
}

function handleControlledObjectSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    renderObjectResults(jsObjectData);
    searchMessage.textContent = "Type to search places (continent/country/city)";
    return;
  }
  const results = jsObjectData.filter(item =>
    SEARCHABLE_FIELDS.some(field =>
      String(item[field]).toLowerCase().includes(query)
    )
  );
  renderObjectResults(results);
  searchMessage.textContent = results.length ? `Found ${results.length} result(s)` : `No results for: ${query}`;
}

// Search as you type
searchInput.addEventListener("input", handleControlledObjectSearch);

// Search on button click
searchButton.addEventListener("click", handleControlledObjectSearch);

// Initial render
renderObjectResults(jsObjectData);
searchMessage.textContent = "Type to search places (continent/country/city)";


