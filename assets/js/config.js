/*
 * ROCHA STORE — configuração do biolink
 * ------------------------------------------------------------
 * Tudo o que muda com frequência fica aqui. Edite os textos entre
 * aspas e salve. Não precisa mexer no HTML nem no CSS.
 */
window.ROCHA = {
  loja: "Rocha Store",
  slogan: "Tecnologia que combina com você.",
  instagram: "rochastore027",

  /*
   * WhatsApp da loja: só números, com 55 + DDD + número.
   * Exemplo: "5527999998888"
   * Enquanto estiver vazio, todos os botões abrem o direct do Instagram.
   */
  whatsapp: "",

  // Primeira linha de toda mensagem enviada pelo biolink.
  saudacao: "Olá, Rocha Store! Vim pelo link da bio",

  // Aparece no rodapé. Deixe "" para esconder.
  pagamento: "Pix e cartão",

  /*
   * Categorias penduradas na parede (mesma ordem dos destaques do Instagram).
   * icone: caixa | acessorio | perfume | relogio | gamer | powerbank | fone
   * assunto: completa a frase "...e quero ver as opções de ____."
   * detalhe (opcional): linha curta embaixo do nome.
   * foto (opcional): caminho de um PNG sem fundo, ex. "assets/img/jbl.png".
   *   Quando existir, a foto entra na bolha no lugar do ícone.
   */
  categorias: [
    { nome: "Caixas de som",   icone: "caixa",     assunto: "caixas de som" },
    { nome: "Acessórios",      icone: "acessorio", assunto: "acessórios", detalhe: "Capinhas e mais" },
    { nome: "Perfumes",        icone: "perfume",   assunto: "perfumes" },
    { nome: "Smartwatch",      icone: "relogio",   assunto: "smartwatches" },
    { nome: "Gamer",           icone: "gamer",     assunto: "produtos gamer" },
    { nome: "Power bank",      icone: "powerbank", assunto: "power banks" },
    { nome: "Fones Bluetooth", icone: "fone",      assunto: "fones Bluetooth" }
  ],

  // Cartão largo do sorteio. Troque ativo para false quando acabar.
  sorteio: {
    ativo: false,
    selo: "Sorteio no Instagram",
    titulo: "Concorra a um carregador portátil",
    texto: "Participando, você também ganha 10% off na primeira compra. As regras estão na legenda do post.",
    botao: "Ver post do sorteio",
    // Cole aqui o link do post do sorteio. Vazio = abre o perfil.
    link: ""
  }
};
