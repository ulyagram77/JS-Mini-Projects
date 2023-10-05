const modalWindow = document.querySelector('.modal'),
      closeModalWindow = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', function () {
    // Відкриття модального вікна
    modalWindow.style.display = 'block';

});

closeModalWindow.addEventListener('click', function(event) {
    modalWindow.style.display = 'none';
});
