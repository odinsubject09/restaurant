export default function loadMenuContent() {
    const contentDiv = document.querySelector('.content');
    
    // Clear any existing content
    contentDiv.innerHTML = '';
  
    // Create the menu content dynamically
    const menuContent = document.createElement('div');
    menuContent.classList.add('content');

    // Row for title
    const rowTitle = document.createElement('div');
    rowTitle.classList.add('row', 'row-title');
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    rowTitle.appendChild(title);

    // Row for content (text and image columns)
    const rowContent = document.createElement('div');
    rowContent.classList.add('row', 'row-content');

    // Column A: Text
    const textColumn = document.createElement('div');
    textColumn.classList.add('column', 'text-column');
    const text = document.createElement('p');
    text.textContent = 'Our delicious menu...';
    textColumn.appendChild(text);

    // Column B: Image
    const imageColumn = document.createElement('div');
    imageColumn.classList.add('column', 'image-column');
    const image = document.createElement('img');
    image.src = 'menu-image.jpg'; // Change to the correct image path
    image.alt = 'Menu Image';
    image.id = 'menu-image';
    imageColumn.appendChild(image);

    // Append columns to rowContent
    rowContent.appendChild(textColumn);
    rowContent.appendChild(imageColumn);

    // Append rows to menuContent
    menuContent.appendChild(rowTitle);
    menuContent.appendChild(rowContent);

    // Add the menu content to the content div
    contentDiv.appendChild(menuContent);
}
