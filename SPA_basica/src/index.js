var store = {};

const index = async ()=>{

    const { loadPg } = await import("./main/_indexSharedModules.js");
    const { initIndex } = await import("./main/_indexModules.js");

    initIndex();

    window.addEventListener("hashchange", async function () {
        //capturar a hash e eliminar o # no início da palavra
        const pg = location.hash.slice(1);
        loadPg(pg);
    });

}

window.onload = function(){
    index();
}