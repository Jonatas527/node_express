const express = require("express")
const path =require("path")

const app = express()
const caminhobase = path.join()

app.get('/', (requisicao, resposta) => {
    resposta.send("estou funcionando com express")
})
app.listen(3000, () => {
    console.log("servidor funcinando na porta 3000")
})