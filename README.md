# 🚀 Base de Conhecimento de Tecnologias

## 📋 Sobre o Projeto

A **Base de Conhecimento** é uma landing page interativa e responsiva, desenvolvida para servir como um guia de referência rápido sobre diversas tecnologias, linguagens e frameworks de programação. O projeto consome dados de um arquivo JSON local e os apresenta em uma interface limpa, moderna e com funcionalidades de busca inteligente.

🔗 **Acesse a demonstração ao vivo:** [**base-conhecimento.vercel.app**](https://base-conhecimento-blond.vercel.app/)
<!-- Substitua pelo seu link da Vercel quando tiver! -->

---

## ✨ Funcionalidades Principais

-   **Busca Dinâmica:** Os resultados são filtrados instantaneamente enquanto o usuário digita.
-   **Resultados Priorizados:** A busca prioriza correspondências no **nome** da tecnologia antes de buscar na descrição, tornando os resultados mais relevantes.
-   **Interface Intuitiva:** Cada tecnologia é apresentada em um card com seu ícone, ano de criação, descrição e um link para a documentação oficial.
-   **Design Responsivo:** A interface se adapta perfeitamente a desktops, tablets e smartphones.
-   **Tooltips Informativos:** Links externos possuem tooltips que informam o destino, melhorando a experiência do usuário.
-   **Carregamento Inicial:** A página já carrega com todos os dados visíveis, permitindo a exploração imediata.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web, sem a necessidade de frameworks complexos.

-   **HTML5:** Estruturação semântica do conteúdo.
-   **CSS:** Para estilização completa, utilizando recursos modernos como:
    -   Flexbox para layouts flexíveis.
    -   Variáveis CSS para um tema de cores consistente e de fácil manutenção.
    -   Media Queries para responsividade.
    -   Transitions e Animações para microinterações suaves.
-   **JavaScript (ES6+):** Para toda a interatividade e lógica da aplicação.
    -   **Manipulação do DOM:** Para criar e atualizar os cards dinamicamente.
    -   **Fetch API:** Para consumir os dados do arquivo `data.json` de forma assíncrona (`async/await`).
    -   **Event Listeners:** Para capturar a entrada do usuário no campo de busca em tempo real.

---

## ⚙️ Como Executar Localmente

Caso queira executar o projeto em sua máquina local, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/Ha1000tonG/base-conhecimento.git

# 2. Navegue até o diretório do projeto
cd base-conhecimento

# 3. Abra o arquivo `index.html` no seu navegador de preferência.
