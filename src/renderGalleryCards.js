
export function renderGalleryCards(arr) { 
    const markup = arr.reduce((acc,obj) => acc + `
    <div class="photo-card">
<img src="${obj.webformatURL}" alt="${obj.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes<br/><span>${obj.likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views<br/><span>${obj.views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments<br/><span>${obj.comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads<br/><span>${obj.downloads}</span></b>
    </p>
  </div>
</div>`, '');
    return markup;
  }
