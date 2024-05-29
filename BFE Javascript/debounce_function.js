function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Original function that fetches autocomplete suggestions
function fetchSuggestions(input) {
  console.log("Fetching suggestions for:", input);
}

// Debounced version of the fetchSuggestions function
const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

// Event listener for the input field
document.getElementById("searchInput").addEventListener("input", (event) => {
  debouncedFetchSuggestions(event.target.value);
});
