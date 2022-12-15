const initStore = async () => {
    store.pg = "inicio";
    store.pg_list = ["inicio", "not_found", "loading"];
}

export { initStore }