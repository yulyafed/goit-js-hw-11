import { galleryCardsApi } from "./galleryCardsApi"

const refs = {
     galleryCardsForm: document.querySelector('.search-form'),
}
refs.galleryCardsForm.addEventListener('submit', onGalleryCardsFormSubmit);

async function onGalleryCardsFormSubmit(e) { 
    e.preventDefault();
     const targetName = e.target.elements.searchQuery.value
     console.log(targetName)
     // galleryCardsApi(targetName).then(data => console.log(data))
     const responce = await galleryCardsApi(targetName)
     console.log(responce)
}