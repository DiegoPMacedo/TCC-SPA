import { mensagemUpperCase } from "../../Model/Mensagem.js";

const paginaEstatica = (() => {

    const qs = el => document.querySelector("[data-pg=pagina_estatica]").querySelector(el);


    const hello = msg =>{
        qs("#texto").value = mensagemUpperCase(msg);
    }

    hello("Meu texto não muda quando você atualiza a página");
    
})();