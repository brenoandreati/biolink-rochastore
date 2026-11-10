# Instruções do projeto

## Prévia sempre disponível

O dono deste projeto quer sempre **ver e usar a página dentro do app, como num navegador**.
Em toda sessão em que a página for criada ou alterada:

1. Suba um servidor local na raiz do repositório, rodando em segundo plano:
   `python3 -m http.server 8765`
2. Informe a porta ao app com a ferramenta `report_preview_port` (porta `8765`, nome `biolink`),
   para que a prévia apareça no painel.
3. Se o servidor já estiver rodando, não suba outro. Basta informar a porta de novo.

Depois de qualquer mudança visual, a prévia deve continuar no ar com a versão nova
(como o servidor é estático, recarregar a página já basta).

## Sobre o projeto

- Site estático: HTML, CSS e JS puro, sem build. Os detalhes estão no `README.md`.
- O que muda com frequência (WhatsApp, categorias, sorteio) fica em `assets/js/config.js`.
- Textos da interface em português do Brasil.
