import { qs, sa } from "./selector.js";
import { loadPg, loadHidePg } from "./nav.js";
import { initStore } from "./store.js";

const initIndex = () => {
    initStore();
    if (location.hash !== "") loadPg(location.hash.slice(1));
    const initial_pgs = ["pagina_estatica"];
    initial_pgs.forEach(pg => loadHidePg(pg));
}

export {
    qs,
    sa,
    initIndex
}