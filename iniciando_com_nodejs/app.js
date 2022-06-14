const express = require("express");
const { randomUUID } = require("crypto")

const app = express();

app.use(express.json())

const products = [];

/**
 * POST => Inserir um dado
 * GET => Buscar um/mais dados
 * PUT => Alterar um dado
 * DELETE => Remover um dado
 */

/**
 * Body => Sempre que eu quiser enviar dados para minha aplicação
 * Params => /product/253456468463254
 * Query => /product?id=253456468463254&value=253456468463254
 */

app.post("/products", (request, response) => {
    // Nome e preço

    const {name, price} = request.body;

    const product = {
        name,
        price,
        id: randomUUID(),
    }

    products.push(product);

    return response.json(product)
})

app.get("/products", (request, response) => {
    return response.json(products);
})

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product)
})

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));