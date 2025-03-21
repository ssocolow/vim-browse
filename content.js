// content.js

// Function to highlight and scroll to a search result
function selectResult(index) {
  const results = document.querySelectorAll('h3'); // Google search result titles are in <h3> tags
  if (index >= 0 && index < results.length) {
    // Remove highlight from all results
    results.forEach((result) => {
      result.style.backgroundColor = '';
    });

    // Highlight the selected result
    results[index].style.backgroundColor = '#e0e0e0';

    // Scroll the selected result into view
    results[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Function to click the highlighted link
function clickSelectedLink(index) {
  const results = document.querySelectorAll('h3');
  if (index >= 0 && index < results.length) {
    const link = results[index].closest('a'); // Find the closest <a> tag (the link)
    if (link) {
      link.click(); // Programmatically click the link
    }
  }
}

// Track the currently selected result
let currentIndex = -1;

// Listen for keydown events
document.addEventListener('keydown', (event) => {
  const results = document.querySelectorAll('h3');

  if (event.key === 'j') {
    // Move down
    currentIndex = (currentIndex + 1) % results.length;
    selectResult(currentIndex);
  } else if (event.key === 'k') {
    // Move up
    currentIndex = (currentIndex - 1 + results.length) % results.length;
    selectResult(currentIndex);
  } else if (event.key === 'Enter') {
    // Click the highlighted link
    clickSelectedLink(currentIndex);
  }
});
