import { loadPg } from "../../main/_indexSharedModules.js";

import { mensagemUpperCase } from "../../Model/Mensagem.js";

const paginaDinamica = (() => {

   let contador = 0;

    const qs = el => document.querySelector("[data-pg=pagina_dinamica]").querySelector(el);


    const count = () => ++contador;

    const toHome = cont => {
        if(cont < 10) return;
        alert("O contador excedeu seu limite, volte ao início");
        loadPg("inicio");
    }
    
    const setHTML = () =>{
        qs("#texto").value = mensagemUpperCase("A página foi atualizada");
        qs("#contador").innerHTML = "Contador de atualizações: " + count();
    }

    //para atualizar o conteúdo, é necessário acompanhar a mudança de hash
    window.addEventListener("hashchange", function () {
        if (store.pg === "pagina_dinamica") {
            setHTML();
            toHome(contador);
        }
    });
    
})();