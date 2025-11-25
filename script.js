
let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = [];

// Adiciona um "ouvinte" para o evento de digitação no campo de busca.
campoBusca.addEventListener('input', iniciarBusca);
carregarDadosIniciais(); // Chama a função para carregar os dados ao abrir a página.

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            return; // Interrompe a execução se houver erro
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();

    // Se o campo de busca estiver vazio, renderiza todos os cards e encerra a função.
    if (!termoBusca) {
        renderizarCards(dados);
        return;
    }

    // Filtra primeiro por correspondência no nome.
    const matchesNome = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca)
    );

    // Filtra por correspondência na descrição, excluindo os que já foram encontrados no nome.
    const matchesDescricao = dados.filter(dado =>
        !dado.nome.toLowerCase().includes(termoBusca) && dado.descricao.toLowerCase().includes(termoBusca)
    );

    // Concatena os resultados, dando prioridade aos nomes.
    const dadosFiltrados = [...matchesNome, ...matchesDescricao];

    renderizarCards(dadosFiltrados);
}

async function carregarDadosIniciais() {
    // Garante que os dados sejam buscados apenas uma vez.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            return;
        }
    }
    renderizarCards(dados); // Renderiza todos os dados na tela.
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <div class="card-header">
            <img src="${dado.imagem_url}" alt="Logo de ${dado.nome}" class="card-logo">
            <h2>${dado.nome}</h2>
        </div>
        <p><strong>Ano de criação:</strong> ${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link_oficial}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}
