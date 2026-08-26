// Catálogo da Connecta3D — edite este arquivo pra adicionar, remover ou atualizar produtos.
// Cada objeto "variantes" é opcional: use quando o produto tiver cores diferentes com foto própria.
// Produtos sem preço/prazo definido usam "Sob consulta" e mandam o cliente direto pro WhatsApp.

const PRODUTOS = [
  {
    id: "porta-latas-monster",
    nome: "Porta-latas Monster",
    preco: 48.0,
    descricao:
      "Porta-latas impresso em 3D com o logo da Monster em relevo. Acabamento fosco, alça reforçada — aguenta o dia a dia sem lascar.",
    aplicacao: "Uso diário em casa, presente pra quem manja de energético, ou peça de coleção na estante.",
    variantes: [
      { cor: "Azul", imagem: "assets/img/monster-azul.jpeg" },
      { cor: "Vermelho", imagem: "assets/img/monster-vermelho.jpeg" },
      { cor: "Cinza", imagem: "assets/img/monster-cinza.jpeg" },
      { cor: "Rosa", imagem: "assets/img/monster-rosa.jpeg" },
      { cor: "Branco", imagem: "assets/img/monster-branco.jpeg" },
      { cor: "Dourado", imagem: "assets/img/monster-dourado.jpeg" },
    ],
  },
  {
    id: "porta-chaves-porsche-gt3",
    nome: "Porta-chaves Porsche GT3",
    preco: 89.9,
    descricao:
      "Suporte de parede com o traseiro do Porsche GT3 RS impresso em 3D — aerofólio, escapamento duplo e placa \"GT3\" no detalhe. 5 ganchos pra chave, guizo ou o que precisar pendurar.",
    aplicacao: "Organizador de chaves na entrada de casa, ou presente pra fã de carro.",
    variantes: [
      { cor: "Cinza", imagem: "assets/img/porsche-preto.jpeg" },
      { cor: "Azul", imagem: "assets/img/porsche-azul.jpeg" },
    ],
  },
  {
    id: "mini-goku",
    nome: "Mini Goku",
    preco: null,
    descricao:
      "Miniatura do Goku criança impressa em 3D e pintada à mão, pose de referência clássica do Dragon Ball.",
    aplicacao: "Peça de coleção pra estante, mesa ou presente pra fã de Dragon Ball.",
    variantes: [{ cor: null, imagem: "assets/img/mini-goku.jpeg" }],
  },
  {
    id: "tio-patinhas",
    nome: "Tio Patinhas",
    preco: null,
    descricao:
      "Miniatura do Tio Patinhas impressa em 3D e pintada à mão, com direito a sacos de dinheiro do lado.",
    aplicacao: "Peça de coleção pra estante, mesa ou presente pra fã de Disney.",
    variantes: [{ cor: null, imagem: "assets/img/tio-patinhas.jpeg" }],
  },
];
