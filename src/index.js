import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryCardsApi } from "./galleryCardsApi";
import { renderGalleryCards } from "./renderGalleryCards";

const refs = {
     galleryCardsForm: document.querySelector('.search-form'),
     galleryCardsBox: document.querySelector('.gallery'),
     btnLoadMore: document.querySelector('.load-more'),
}

refs.galleryCardsForm.addEventListener('submit', onGalleryCardsFormSubmit);
refs.btnLoadMore.addEventListener('click', onBtnLoadMoreClick);

let page = 1;
let query = ""

async function onGalleryCardsFormSubmit(e) {
     e.preventDefault();

     query = e.target.elements.searchQuery.value;

     refs.btnLoadMore.setAttribute('hidden', true);

     refs.galleryCardsBox.innerHTML = '';

     page = 1;

     const response = await galleryCardsApi(query);

     if (response.total === 0) {
          Notiflix.Notify.success('Sorry, there are no images matching your search query. Please try again.');
     }

     refs.galleryCardsBox.insertAdjacentHTML('beforeend', renderGalleryCards(response.hits));
     Notiflix.Notify.info(`Hooray! We found ${response.totalHits} images.`);
     var lightbox = $('.gallery a').simpleLightbox({ });
     const { height: cardHeight } = document
          .querySelector(".gallery")
          .firstElementChild.getBoundingClientRect();

     window.scrollBy({
          top: cardHeight * 2,
          behavior: "smooth",
     });
     refs.btnLoadMore.removeAttribute('hidden');
}

async function onBtnLoadMoreClick(e) {
     page += 1;
     const response = await galleryCardsApi(query, page);
     
     if (response.hits.length > 0) {
          refs.galleryCardsBox.insertAdjacentHTML('beforeend', renderGalleryCards(response.hits));
                  
     } else {
          refs.btnLoadMore.setAttribute('hidden', true);
          Notiflix.Notify.success("We're sorry, but you've reached the end of search results.");
     }
}

     // galleryCardsApi(targetItem).then(data => console.log(data))