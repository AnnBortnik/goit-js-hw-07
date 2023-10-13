import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');
const markUp = galleryItems.map(({preview, original, desription}) => {
    return `<li class='gallery__item'>
    <a class='gallery__link' href='${original}'>
    <img loading='lazy' class='gallery__image' src='${preview} title='${desription}'/>
    </a>
    </li>`;
}).join('');

listEl.insertAdjacentHTML('beforeend', markUp);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'alt',
    captionPosition: 'bottom',
});
