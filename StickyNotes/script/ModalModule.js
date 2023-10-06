const modalWindow = document.querySelector('.modal'),
      closeModalWindow = document.querySelector('.modal__close'),
      settingsButton = document.querySelector('.settings');

document.addEventListener('DOMContentLoaded', function () {
    modalWindow.style.display = 'block';
});

modalWindow.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        modal.style.opacity = '0';
        setTimeout(function () {
            modalWindow.style.display = 'none';
        }, 300);
    }
});

closeModalWindow.addEventListener('click', function (event) {
    modal.style.opacity = '0';
    setTimeout(function () {
        modalWindow.style.display = 'none';
    }, 300);
});

settingsButton.addEventListener('click', function(event) {
    modalWindow.style.display = 'block';
    setTimeout(function () {
        modal.style.opacity = '1';
    }, 20);
    
});
