const url = "http://localhost:3000/notas";

// Carregar notas da API
async function carregarNotas() {
    try {
        const response = await fetch(url);
        const notas = await response.json();
        document.querySelector(".carregando").classList.add("esconder");
        
        notas.forEach(nota => {
            adicionarNotaNaLista(nota.texto);
        });
    } catch (error) {
        console.error('Erro ao carregar notas:', error);
    }
}

// Adicionar nota via API
async function adicionarNotaAPI(notaTexto) {
    const novaNota = {
        texto: notaTexto,
        categoria: 'pessoal',  // Você pode ajustar a categoria conforme a lógica
        dataCriacao: new Date().toLocaleDateString(),
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novaNota),
        });

        const notaSalva = await response.json();
        adicionarNotaNaLista(notaSalva.texto);
    } catch (error) {
        console.error('Erro ao adicionar nota:', error);
    }
}

// Função auxiliar para adicionar nota na lista visual
function adicionarNotaNaLista(notaTexto) {
    const notesList = document.getElementById('notesList');
    const li = document.createElement('li');
    li.textContent = notaTexto;
    li.onclick = function () {
        visualizarNota(notaTexto);
    };
    notesList.appendChild(li);
}

// Visualizar nota
function visualizarNota(notaTexto) {
    document.getElementById('noteContent').textContent = notaTexto;
    toggleSection('view');
}