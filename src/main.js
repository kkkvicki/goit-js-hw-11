import { displayError, getImages } from './js/pixabay-api.js';
import {
  renderImages,
  showLoading,
  hideLoading,
  clearImages,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('#image-gallery');
const loader = document.querySelector('#loading-indicator');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    displayError('Please enter a request');
    return;
  }

  clearImages(gallery);
  showLoading(loader);

  try {
    const images = await getImages(query);
    if (images.length === 0) {
      displayError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(images, gallery);
    }
  } catch (error) {
    displayError('Error');
    console.error(error);
  } finally {
    hideLoading(loader);
  }
});
