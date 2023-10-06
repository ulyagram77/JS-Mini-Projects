const modalWindow = document.querySelector('.modal'),
      closeModalWindow = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', function () {
    modalWindow.style.display = 'block';
});

modalWindow.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        modalWindow.style.display = 'none';
    }
});

closeModalWindow.addEventListener('click', function(event) {
    modalWindow.style.display = 'none';
});
