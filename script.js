document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);
  
    galleryItems.forEach(item => {
      item.addEventListener('click', e => {
        lightbox.innerHTML = `<img src="${e.target.src}" alt="Enlarged Image">`;
        lightbox.style.display = 'flex';
      });
    });
  
    lightbox.addEventListener('click', e => {
      if (e.target !== e.currentTarget) return;
      lightbox.style.display = 'none';
    });
  });
  