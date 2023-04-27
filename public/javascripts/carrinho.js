HTMLFormControlsCollection.log("ola")

const removerProdutosCarrinho = document.getElementsByClassName("prodRemove")
for(var i = 0; i < removerProdutosCarrinho.length; i++){
    removerProdutosCarrinho[i].addEventListener("click",function(event){
        console.log("clicou")
        event.target.parentElement.parentElement.remove()
    })
}