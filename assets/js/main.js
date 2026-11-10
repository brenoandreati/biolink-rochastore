(() => {
  "use strict";

  const C = window.ROCHA || {};
  const numero = String(C.whatsapp || "").replace(/\D/g, "");
  const temWhats = numero.length >= 12;
  const ig = (C.instagram || "rochastore027").replace(/^@/, "");
  const perfil = `https://www.instagram.com/${ig}/`;
  const saudacao = C.saudacao || "Olá! Vim pelo link da bio";

  /* ---------- links de contato ---------- */

  // Sem número configurado, tudo cai no direct do Instagram (ig.me não aceita texto pronto).
  const linkContato = (mensagem) =>
    temWhats
      ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
      : `https://ig.me/m/${ig}`;

  const mensagens = {
    geral: `${saudacao}.`,
    encomenda: `${saudacao} e quero encomendar um produto: `,
    categoria: (assunto) => `${saudacao} e quero ver as opções de ${assunto}.`
  };

  const canal = temWhats ? "WhatsApp" : "direct";

  document.querySelectorAll("[data-contato]").forEach((a) => {
    a.href = linkContato(mensagens[a.dataset.mensagem] || mensagens.geral);
  });
  document.querySelectorAll("[data-instagram]").forEach((a) => (a.href = perfil));
  document.querySelectorAll("[data-arroba]").forEach((el) => (el.textContent = `@${ig}`));

  const definir = (sel, texto) =>
    document.querySelectorAll(sel).forEach((el) => (el.textContent = texto));

  definir("[data-rotulo-contato]", `Chamar no ${canal}`);
  definir("[data-rotulo-encomenda]", `Encomendar pelo ${canal}`);
  definir("[data-rotulo-curto]", temWhats ? "WhatsApp" : "Direct");
  definir(
    "[data-ajuda-categorias]",
    temWhats
      ? "Cada cartão abre o WhatsApp com a mensagem pronta."
      : "Cada cartão abre o direct do Instagram da loja."
  );
  if (C.slogan) definir('[data-texto="slogan"]', C.slogan);

  /* ---------- ícones (traço, grade 48×48) ---------- */

  const icones = {
    caixa:
      '<rect x="14" y="7" width="20" height="34" rx="4"/><circle cx="24" cy="15.5" r="2.6"/><circle cx="24" cy="29" r="6.5"/><circle cx="24" cy="29" r="1.4" class="cheio"/><path d="M8.5 22a9 9 0 0 0 0 10M39.5 22a9 9 0 0 1 0 10"/>',
    acessorio:
      '<rect x="15" y="4" width="18" height="31" rx="4"/><path d="M21.5 8h5"/><path d="M24 35v3.5a4.5 4.5 0 0 0 4.5 4.5H37"/>',
    perfume:
      '<rect x="19.5" y="4" width="9" height="6" rx="1.5"/><path d="M22 10v5M26 10v5"/><rect x="12" y="15" width="24" height="28" rx="5.5"/><rect x="18" y="23" width="12" height="11" rx="2"/>',
    relogio:
      '<path d="M18 11.5 19.5 5h9l1.5 6.5M18 36.5l1.5 6.5h9l1.5-6.5"/><rect x="13" y="11.5" width="22" height="25" rx="6.5"/><path d="M35.5 21v6"/><path d="M24 18v6.5l4 2.5"/>',
    gamer:
      '<path d="M16 15h16a9 9 0 0 1 8.8 7.1l1.9 8.6a4.6 4.6 0 0 1-7.9 4.1L31 31H17l-3.8 3.8a4.6 4.6 0 0 1-7.9-4.1l1.9-8.6A9 9 0 0 1 16 15Z"/><path d="M15 20.5v6M12 23.5h6"/><circle cx="31.5" cy="21.5" r="1.4" class="cheio"/><circle cx="35" cy="25" r="1.4" class="cheio"/>',
    powerbank:
      '<rect x="8" y="13" width="32" height="22" rx="5"/><path d="m25.5 16.5-5.5 8h5l-2 7 6-9h-5z"/>',
    fone:
      '<circle cx="15" cy="14" r="6"/><path d="M19.5 18v17.5a2.5 2.5 0 0 1-5 0V20"/><circle cx="33" cy="14" r="6"/><path d="M28.5 18v17.5a2.5 2.5 0 0 0 5 0V20"/>',
    encomenda:
      '<path d="m24 7 15 7.5v18L24 40 9 32.5v-18Z"/><path d="m9 14.5 15 7.5 15-7.5M24 22v18M16.5 10.8l15 7.5"/>'
  };

  const ROCHA =
    "M9.3 86.1L7.2 72.9Q6 66 8.7 59.5L12.9 49.4Q16 42 21.9 36.6L32.1 27.4Q38 22 45.2 18.4L55.7 13.1Q62 10 69 10.7L75 11.3Q82 12 87.7 16.1L93.5 20.3Q100 25 104 31.9L108 39.1Q112 46 113.3 53.9L114.8 63.1Q116 70 114.6 76.9L112.8 86.1Q112 90 108 90L14 90Q10 90 9.3 86.1Z";

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const bolha = ({ icone, foto, vazia }) => {
    const miolo = foto
      ? `<image href="${esc(foto)}" x="24" y="18" width="72" height="68" preserveAspectRatio="xMidYMid meet"/>`
      : `<g class="bolha__icone" transform="translate(36 30)">${icones[icone] || icones.encomenda}</g>`;
    return `
      <svg viewBox="0 0 120 96" aria-hidden="true">
        <path class="bolha__aba" d="${ROCHA}" transform="translate(60 90) scale(1.08) translate(-60 -90)"/>
        <path class="bolha__casca" fill="url(#${vazia ? "bolha-vazia" : "bolha"})" d="${ROCHA}"/>
        ${vazia ? "" : `<g clip-path="url(#corte-bolha)"><path class="bolha__reflexo" d="M34 0h15L22 96H7Z"/></g>`}
        ${miolo}
      </svg>`;
  };

  const seta =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';

  const cartao = ({ nome, detalhe, href, conteudo, extraClasse = "", acao }, i) => `
    <li class="gancho" style="--i:${i}">
      <a class="etiqueta ${extraClasse}" href="${esc(href)}" target="_blank" rel="noopener">
        <span class="furo" aria-hidden="true"><span class="pino"></span></span>
        <span class="etiqueta__bolha">${conteudo}</span>
        <span class="etiqueta__nome">${esc(nome)}</span>
        ${detalhe ? `<span class="etiqueta__detalhe">${esc(detalhe)}</span>` : ""}
        <span class="etiqueta__acao">${esc(acao)}${seta}</span>
      </a>
    </li>`;

  /* ---------- parede de categorias ---------- */

  const lista = document.querySelector("[data-ganchos]");
  if (lista) {
    const cats = Array.isArray(C.categorias) ? C.categorias : [];
    const itens = cats.map((c, i) =>
      cartao(
        {
          nome: c.nome,
          detalhe: c.detalhe,
          href: linkContato(c.mensagem || mensagens.categoria(c.assunto || c.nome.toLowerCase())),
          conteudo: bolha({ icone: c.icone, foto: c.foto }),
          acao: "Ver opções"
        },
        i
      )
    );
    // O gancho vazio no fim: o espaço do produto que a pessoa não encontrou.
    itens.push(
      cartao(
        {
          nome: "Não achou?",
          href: linkContato(mensagens.encomenda),
          conteudo: bolha({ icone: "encomenda", vazia: true }),
          extraClasse: "etiqueta--vazia",
          acao: "Encomendar"
        },
        cats.length
      )
    );
    lista.innerHTML = itens.join("");
  }

  /* ---------- sorteio ---------- */

  const S = C.sorteio;
  const blocoSorteio = document.querySelector("[data-sorteio]");
  if (blocoSorteio && S && S.ativo) {
    const put = (sel, v) => {
      const el = blocoSorteio.querySelector(sel);
      if (el && v) el.textContent = v;
    };
    put("[data-sorteio-selo]", S.selo);
    put("[data-sorteio-titulo]", S.titulo);
    put("[data-sorteio-texto]", S.texto);
    put("[data-sorteio-botao]", S.botao);
    blocoSorteio.querySelector("[data-sorteio-link]").href = S.link || perfil;
    blocoSorteio.hidden = false;
  }

  /* ---------- rodapé ---------- */

  const pag = document.querySelector("[data-pagamento]");
  if (pag && C.pagamento) {
    pag.textContent = `Pagamento: ${C.pagamento}`;
    pag.hidden = false;
  }

  /* ---------- entrada: os cartões são pendurados quando a parede aparece ---------- */

  const parede = document.querySelector(".parede");
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (parede && !semMovimento && "IntersectionObserver" in window) {
    parede.classList.add("vai-pendurar");
    const io = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          parede.classList.add("pendurada");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(parede);
  }
})();
