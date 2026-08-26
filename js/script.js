// Config do negócio — edite aqui se o número do WhatsApp mudar.
const WHATSAPP_NUMERO = "5562991691678";

function linkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

function formatarPreco(preco) {
  return preco == null
    ? "Sob consulta"
    : preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mensagemPedido(produto, cor) {
  const partes = [`Oi! Vi o site da Connecta3D e quero pedir o ${produto.nome}`];
  if (cor) partes.push(`na cor ${cor}`);
  return partes.join(" ") + ".";
}

function renderProdutos() {
  const grid = document.getElementById("catalogo-grid");
  if (!grid) return;

  grid.innerHTML = PRODUTOS.map((produto, index) => {
    const temCores = produto.variantes.some((v) => v.cor);
    const variantePadrao = produto.variantes[0];

    const swatches = temCores
      ? `<div class="swatches" data-produto-index="${index}">
          ${produto.variantes
            .map(
              (v, vIndex) =>
                `<button type="button" class="swatch ${vIndex === 0 ? "ativo" : ""}"
                  data-imagem="${v.imagem}" data-cor="${v.cor}" data-vindex="${vIndex}">${v.cor}</button>`
            )
            .join("")}
        </div>`
      : "";

    return `
      <article class="card-produto" data-produto-index="${index}">
        <div class="card-imagem">
          <img src="${variantePadrao.imagem}" alt="${produto.nome}" id="img-produto-${index}" loading="lazy" />
        </div>
        <div class="card-corpo">
          <h3>${produto.nome}</h3>
          <p class="preco">${formatarPreco(produto.preco)}</p>
          <p class="descricao">${produto.descricao}</p>
          <p class="aplicacao"><strong>Uso:</strong> ${produto.aplicacao}</p>
          ${swatches}
          <a class="btn-whatsapp" id="btn-pedido-${index}"
             href="${linkWhatsapp(mensagemPedido(produto, variantePadrao.cor))}"
             target="_blank" rel="noopener">
            Pedir no WhatsApp
          </a>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".swatches").forEach((container) => {
    const produtoIndex = Number(container.dataset.produtoIndex);
    const produto = PRODUTOS[produtoIndex];

    container.querySelectorAll(".swatch").forEach((botao) => {
      botao.addEventListener("click", () => {
        container.querySelectorAll(".swatch").forEach((b) => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        const imagem = document.getElementById(`img-produto-${produtoIndex}`);
        imagem.src = botao.dataset.imagem;

        const botaoPedido = document.getElementById(`btn-pedido-${produtoIndex}`);
        botaoPedido.href = linkWhatsapp(mensagemPedido(produto, botao.dataset.cor));
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProdutos();

  const anoEl = document.getElementById("ano-atual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  const btnHeroWhatsapp = document.getElementById("btn-hero-whatsapp");
  if (btnHeroWhatsapp) {
    btnHeroWhatsapp.href = linkWhatsapp("Oi! Vi o site da Connecta3D e quero saber mais sobre os produtos.");
  }

  const btnFooterWhatsapp = document.getElementById("btn-footer-whatsapp");
  if (btnFooterWhatsapp) {
    btnFooterWhatsapp.href = linkWhatsapp("Oi! Vi o site da Connecta3D e quero saber mais sobre os produtos.");
  }
});
