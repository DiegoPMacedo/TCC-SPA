import { qs } from "./selector.js";

//checa se a página está na lista
const existPg = pg => store.pg_list.includes(pg);

//esconde uma página e revela outra, podendo incluir uma animação no processo
const togglePg = (ancient_pg, new_pg) => {

    qs(`[data-pg=${ancient_pg}]`).style.display = "none";
    qs(`[data-pg=${new_pg}]`).classList.add("w3-animate-opacity");
    qs(`[data-pg=${new_pg}]`).style.display = "block";

}

//busca uma página html
const getPg = pg => fetch(pg + ".html").then((response) => {
    if (!response.ok) throw (response.status);
    return response.text();
});

//carrega uma página da pasta "View" dentro da div "root" em "index.html"
//depois importa seu javascript equivalente na pasta "Presenter"
const dinamicLoad = async pg => {
    const new_pg = await getPg(`./View/${pg}`);
    qs("#root").insertAdjacentHTML("afterbegin", new_pg);
    await import(`../Presenter/${pg}/${pg}.js`);
}

//carrega as páginas, modifica a hash e as variáveis envolvidas
const loadPg = async pg => {
    try {
        if (!existPg(pg)) {
            togglePg(store.pg, "loading");
            store.pg = "loading";
            await dinamicLoad(pg);
            await store.pg_list.push(pg);
        }

        await togglePg(store.pg, pg);
        store.pg = pg;

        if (location.hash !== ("#" + pg)) location.hash = pg;

    } catch (error) {
        loadPg("not_found");
    }
}

//carrega as páginas de forma oculta
const loadHidePg = async pg => {
    try {
        if (!existPg(pg)) {
            store.pg_list.push(pg);
            await dinamicLoad(pg);
        }
    } catch (error) {
        store.pg_list = store.pg_list.filter(pag => pag !== pg);
    }
}

export {
    loadPg,
    loadHidePg
}
