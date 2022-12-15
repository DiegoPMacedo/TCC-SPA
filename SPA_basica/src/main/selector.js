//seletores do index
//selecionam qualquer elemento, menos o conteúdo das pseudopáginas
const qs = el => document.querySelector(`:not(data-pg) > ${el}`);
const sa = el => document.querySelectorAll(`:not(data-pg) > ${el}`);

export { qs, sa }