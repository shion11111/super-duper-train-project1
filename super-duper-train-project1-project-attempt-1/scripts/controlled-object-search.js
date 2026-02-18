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
    li.textContent = `${item.continent} | ${item.country} | ${item.city} `;
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
