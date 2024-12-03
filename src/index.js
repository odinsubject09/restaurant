import "./styles.css";
import loadHomeContent from './home.js'; // Import the function to load home content
import loadMenuContent from './menu.js'; // Assuming you have menu.js for the "Menu" tab
import loadAboutContent from './about.js'; // Assuming you have about.js for the "About" tab

document.addEventListener('DOMContentLoaded', () => {
  // Load home content by default when the page loads
  loadHomeContent();

  // Event listeners for the tabs
  document.getElementById('home-tab').addEventListener('click', () => {
    loadHomeContent(); // Load home content when "Home" tab is clicked
  });

  document.getElementById('menu-tab').addEventListener('click', () => {
    loadMenuContent(); // Load menu content when "Menu" tab is clicked
  });

  document.getElementById('about-tab').addEventListener('click', () => {
    loadAboutContent(); // Load about content when "About" tab is clicked
  });
});

