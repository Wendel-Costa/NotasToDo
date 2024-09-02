
// Inicializa as notas do localStorage
document.addEventListener('DOMContentLoaded', loadNotes);

function addNote() {
    const noteInput = document.getElementById('noteInput').value.trim();
    if (noteInput === '') {
        alert('Por favor, escreva algo antes de salvar.');
        return;
    }

    const notesList = document.getElementById('notesList');
    const li = document.createElement('li');
    li.textContent = noteInput;
    li.onclick = function() {
        viewNote(noteInput);
    };

    notesList.appendChild(li);
    saveNotes();
    document.getElementById('noteInput').value = '';
    toggleSection('view');
}

function saveNotes() {
    const notes = [];
    document.querySelectorAll('#notesList li').forEach(li => {
        notes.push(li.textContent);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.forEach(note => {
        const notesList = document.getElementById('notesList');
        const li = document.createElement('li');
        li.textContent = note;
        li.onclick = function() {
            viewNote(note);
        };
        notesList.appendChild(li);
    });
}

function viewNote(note) {
    document.getElementById('noteContent').textContent = note;
    toggleSection('view');
}

function toggleSection(section) {
    const createSection = document.getElementById('createSection');
    const viewSection = document.getElementById('viewSection');
    const toggleCreateButton = document.getElementById('toggleCreate');
    const toggleViewButton = document.getElementById('toggleView');

    if (section === 'create') {
        createSection.style.display = 'block';
        viewSection.style.display = 'none';
        toggleCreateButton.style.display = 'none';
        toggleViewButton.style.display = 'block';
    } else {
        createSection.style.display = 'none';
        viewSection.style.display = 'block';
        toggleCreateButton.style.display = 'block';
        toggleViewButton.style.display = 'none';
    }
}

document.getElementById('toggleCreate').addEventListener('click', function() {
    toggleSection('create');
});

document.getElementById('toggleView').addEventListener('click', function() {
    toggleSection('view');
});