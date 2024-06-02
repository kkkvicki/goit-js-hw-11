import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '44181266-af3c2b6af304225fcb13b5858';
const BASE_URL = 'https://pixabay.com/api/';

export function displayError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    backgroundColor: '#ef4040',
    messageColor: 'white',
  });
}

export async function getImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
