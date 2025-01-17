async function listaCards() {
    const conex = await fetch("http://localhost:3000/produtos");
    const conexConvert = await conex.json()
    return conexConvert
}

async function addProduto(imagem, titulo, valor) {
    const conex = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            titulo: titulo,
            autor: autor,
            valor: valor
        })
    });

    const conexConvert = await conex.json();

    return conexConvert;
}

    export const conectando = {
        listaCards,
        addProduto
    }
