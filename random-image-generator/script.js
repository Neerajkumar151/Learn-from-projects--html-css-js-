const container = document.querySelector('.container');
const rows = 5;
const columns = 3;

for (let i = 0; i < rows * columns; i++) {
  const img = document.createElement('img');

  // Generate a random seed for each image (timestamp + random)
  const seed = `${Date.now()}-${Math.random()}`;

  img.src = `https://picsum.photos/seed/${seed}/300/300`;
  img.alt = 'Random Image';
  img.loading = 'lazy';

  // Fallback image if loading fails
  img.onerror = () => {
    img.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
  };

  container.appendChild(img);
}
