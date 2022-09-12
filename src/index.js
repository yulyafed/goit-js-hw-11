import Notiflix from 'notiflix';
import { galleryCardsApi } from "./galleryCardsApi";

const refs = {
     galleryCardsForm: document.querySelector('.search-form'),
     galleryCardsBox: document.querySelector('.gallery'),
}

refs.galleryCardsForm.addEventListener('submit', onGalleryCardsFormSubmit);

async function onGalleryCardsFormSubmit(e) { 
     e.preventDefault();
     
     const targetItem = e.target.elements.searchQuery.value;
        
     const response = await galleryCardsApi(targetItem);
     console.log(response);
    
     if (response.total === 0) { 
          Notiflix.Notify.success('Sorry, there are no images matching your search query. Please try again.');
     }
}



     // galleryCardsApi(targetItem).then(data => console.log(data))