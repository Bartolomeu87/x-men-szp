const personagens = document.querySelectorAll(".personagem");

//adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    alterarImagemPersonagemSelecionado(personagem);
    alterarNomeDoPersonagemGrande(personagem);
    alterarDescricaoDoPersonagemGrande(personagem);
  });
});
//Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
function alterarDescricaoDoPersonagemGrande(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}
//Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
function alterarNomeDoPersonagemGrande(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}
// Alterar imagem do personagem
function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}
// veririfcar se existe personagem selecionado

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
