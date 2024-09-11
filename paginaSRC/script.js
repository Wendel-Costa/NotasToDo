// Aguarda o carregamento do DOM e carrega as notas
document.addEventListener('DOMContentLoaded', carregarNotas);

// Event listener para o botão de adicionar nota
document.querySelector("#adicionarNota").addEventListener('click', function () {
    const noteInput = document.getElementById('noteInput').value.trim();
    if (noteInput === '') {
        alert('Por favor, escreva algo antes de salvar.');
        return;
    }

    adicionarNotaAPI(noteInput);
    document.getElementById('noteInput').value = '';
    toggleSection('view');
});

// Event listeners para os botões de alternância
document.getElementById('toggleCreate').addEventListener('click', function() {
    toggleSection('create');
});

document.getElementById('toggleView').addEventListener('click', function() {
    toggleSection('view');
});

// Função para alternar entre as seções de criar e visualizar
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