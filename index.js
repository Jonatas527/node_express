const express = require("express")
const path =require("path")

const app = express()
const caminhobase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.sendFile("${caminho}/index.html")
})
app.listen(3000, () => {
    console.log("servidor funcinando na porta 3000")
})