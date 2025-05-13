// Add this to your script.js file

// Store user preference in localStorage
function saveUserPreference(key, value) {
  localStorage.setItem(key, value);
}

// Retrieve user preference from localStorage
function getUserPreference(key) {
  return localStorage.getItem(key);
}

// Apply the user preference to the page
function applyUserPreference() {
  const bgColor = getUserPreference("bgColor");

  if (bgColor) {
    document.body.style.backgroundColor = bgColor;
  } else {
    // Default color if not set
    document.body.style.backgroundColor = "#ffffff";
  }
}

// Example usage: Set a background color when a button is clicked
document.getElementById("changeBgColorBtn").addEventListener("click", function() {
  const newColor = prompt("Enter a background color (e.g., 'yellow', '#ffcc00'):");
  saveUserPreference("bgColor", newColor);  // Save color to localStorage
  applyUserPreference();  // Apply the new color
});

// Call applyUserPreference when the page loads
window.onload = function() {
  applyUserPreference();
};

