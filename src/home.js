export default function loadHomeContent() {
    const content = document.querySelector('.content'); // Use querySelector to select the first element with class 'content'

    // Clear any existing content
    content.innerHTML = '';

    // Create the title row
    const rowTitle = document.createElement('div');
    rowTitle.classList.add('row', 'row-title');
    const title = document.createElement('h1');
    title.textContent = "Jenny's Diner";
    rowTitle.appendChild(title);

    // Create the content row
    const rowContent = document.createElement('div');
    rowContent.classList.add('row', 'row-content');

    // Column A: Text
    const textColumn = document.createElement('div');
    textColumn.classList.add('column', 'text-column');
    const text = document.createElement('p');
    text.innerHTML = "This is Jenny<br>We make food & coffee";
    textColumn.appendChild(text);

    // Column B: Image
    const imageColumn = document.createElement('div');
    imageColumn.classList.add('column', 'image-column');
    const image = document.createElement('img');
    image.src = "https://media.istockphoto.com/id/1440711227/photo/vintage-american-ice-cream-parlour-with-black-and-white-checked-floor-and-pink-stools-at-the.jpg?s=2048x2048&w=is&k=20&c=NdWf4_4F8NtylP4wTU_RESN_J_IIg7vj6Z58Hv0zh0Q=";
    image.alt = "Jenny's Diner Image";
    image.id = "diner-image";
    imageColumn.appendChild(image);

    // Append columns to rowContent
    rowContent.appendChild(textColumn);
    rowContent.appendChild(imageColumn);

    // Append rows to content
    content.appendChild(rowTitle);
    content.appendChild(rowContent);
}
