import { galleryCardsApi } from "./galleryCardsApi"

const refs = {
     galleryCardsForm: document.querySelector('.search-form'),
}
refs.galleryCardsForm.addEventListener('submit', onGalleryCardsFormSubmit);

// galleryCardsApi().then(data => console.log(data))

function onGalleryCardsFormSubmit(e) { 
    e.preventDefault();
    console.log(e)
}