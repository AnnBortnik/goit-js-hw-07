import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const newImages = [];

const newGallery = (object) => {
    object.map(({preview, original, description}) => {
        newImages.push(`<li style='margin: 25px;' class='gallery__item'>
        <a class='gallery__link' href='${original}'>
        <img loading='lazy' class='gallery__image' data-source='${original}' src='${preview}' alt='${description}'/>
        </a>
        </li>`);
    });
    gallery.insertAdjacentHTML('beforeend', newImages.join(''));
};
newGallery(galleryItems);

gallery.addEventListener('click', modalGallery);
function modalGallery(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') return;
    const instance = basicLightbox.create(`<img src='${event.target.dataset.source}'>`, {
        onShow: () => {window.addEventListener('keydown', escClick)},
        onClose: () => {window.removeEventListener('keydown', escClick)}
    });

    function escClick (event) {
        if(event.code === 'Escape') {
            instance.close();
        }
    }
    instance.show();
}

