import { conectando  } from "./script.js";

const lista = document.querySelector("[data-lista]");

function cardsProdutos(imagem,titulo,autor,valor){
    const listaProdutos = document.createElement("li");
    listaProdutos.className = "produtos";
    listaProdutos.innerHTML = `<img src="${imagem}">
                    <h3>${titulo}<br>${autor}</h3>
                    <strong>${valor}</strong>
                    <<div class="excluir">
                    <span class="material-symbols-outlined">
                        delete
                        </span>
                        </div>`

    return listaProdutos;
    lista.appendChild(novoCard);
}

async function listaProdutos(params) {
    const listaItens = await conectando.listaProdutos();
    listaItens.forEach(element => lista.appendChild(cardsProdutos(element.imagem,element.titulo,element.autor,element.valor)))
    }
    
    listaProdutos()


document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("[data-lista]");
    lista.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("material-symbols-outlined")) {
            const card = evento.target.closest(".produtos");
            if (card) {
                card.remove();

            }
        }
    });

    });
    
