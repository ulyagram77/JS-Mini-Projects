let createBox = document.querySelectorAll('.create__box')[0],
    notes = document.querySelectorAll('.notes')[0],
    textareaUserInput = document.querySelector('#input'),
    create = document.querySelector('#create'),
    i = 0;

createBox.addEventListener('keydown', pasteContentToNote);
create.addEventListener('click', showUserTextInput);
notes.addEventListener('dblclick', deleteNote);

function showUserTextInput() {
    createBox.style.display = 'block';
    textareaUserInput.focus();
}

function deleteNote(e) {
    if (e.target.classList.contains('note')) {
        // Удаляем элемент
        e.target.remove();
    }
}

function pasteContentToNote(e) {
    if (e.keyCode == '13') {
        createNote(textareaUserInput.value);
        textareaUserInput.value = '';
        createBox.style.display = 'none';
    }
}

function setRandomNoteColor() {
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
    let newNote = document.createElement('div');
    newNote.className = 'note';
    newNote.innerHTML = `<div class="note__text"><h3>${text}</h3></div>`;

    newNote.setAttribute('style', `background: ${setRandomNoteColor()}`);
    notes.appendChild(newNote);
}
