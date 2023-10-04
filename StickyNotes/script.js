let createBox = document.querySelectorAll('.createBox')[0],
    notes = document.querySelectorAll('.notes')[0],
    input = document.querySelector('#input'),
    create = document.querySelector('#create'),
    i = 0;

createBox.addEventListener('keydown', content);

create.addEventListener('click', function () {
    createBox.style.display = 'block';
    input.focus();
});

function content(e) {
    if (e.keyCode == '13') {
        createNote(input.value);
        input.value = '';
        createBox.style.display = 'none';
    }
}

function color() {
    const randomColors = [
        '#FFDDC1',
        '#A0E6FF',
        '#C7CEEA',
        '#F1E4E8',
        '#FFDDD2',
        '#B5EAD7',
        '#F8CEEC',
        '#FFABAB',
        '#FFC3A0',
        '#FF677D',
        '#D4A5A5',
        '#392F5A',
        '#31A2AC',
        '#61C0BF',
        '#6B4226',
        '#D9BF77',
        '#ACD8AA',
        '#FFE156',
        '#6A0572',
        '#AB83A1',
    ];

    if (i > randomColors.length - 1) {
        i = 0;
    }
    return randomColors[i++];
}

function createNote(text) {
    let div = document.createElement('div');
    div.className = 'note';
    div.innerHTML =
        '<div class="details">' + '<h3>' + text + '</h3>' + '</div>';

    div.addEventListener('dblclick', function (event) {
        div.remove();
    });

    div.setAttribute('style', `background: ${color()}`);
    notes.appendChild(div);
}
