import Notiflix from 'notiflix';
import { galleryCardsApi } from "./galleryCardsApi";
import { renderGalleryCards } from "./renderGalleryCards";

const refs = {
     galleryCardsForm: document.querySelector('.search-form'),
     galleryCardsBox: document.querySelector('.gallery'),
     btnLoadMore: document.querySelector('.load-more'),
}

refs.galleryCardsForm.addEventListener('submit', onGalleryCardsFormSubmit);
refs.btnLoadMore.addEventListener('click',onBtnLoadMoreClick)

let page = 1;

async function onGalleryCardsFormSubmit(e) { 
     e.preventDefault();
     
     const targetItem = e.target.elements.searchQuery.value;
        
     const response = await galleryCardsApi(targetItem);
     console.log(response);
    
     if (response.total === 0) { 
          Notiflix.Notify.success('Sorry, there are no images matching your search query. Please try again.');
     }

     refs.galleryCardsBox.insertAdjacentHTML('beforeend', renderGalleryCards(response.hits));
     refs.btnLoadMore.removeAttribute('hidden');
    
     // refs.galleryCardsBox.innerHTML = ''
     
}

  async function onBtnLoadMoreClick(e) { 
        page += 1;
        const response = await galleryCardsApi(page);
       refs.galleryCardsBox.insertAdjacentHTML('beforeend', renderGalleryCards(response.hits));
       if (response.page === response.per_page) { 
            refs.btnLoadMore.setAttribute('hidden', true);
            Notiflix.Notify.success("We're sorry, but you've reached the end of search results.");
            
       }
}

     // galleryCardsApi(targetItem).then(data => console.log(data))