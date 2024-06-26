const app = require("./server");

const port = process.env.NODE_PORT || 9090;

app().listen(port, () => {
    (process.env.NODE_ENV === "development") && console.log(`Aplicação executando em: http://localhost:${port}`);
});