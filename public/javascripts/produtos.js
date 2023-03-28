const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    const selectedModelos = Array.from(document.querySelectorAll('input[name=modelo]:checked'))
      .map((c) => c.value);
    const selectedCores = Array.from(document.querySelectorAll('input[name=cor]:checked'))
      .map((c) => c.value);
      const selectedStorage = Array.from(document.querySelectorAll('input[name=armazenamento]:checked'))
      .map((c) => c.value);

    const produtos = document.querySelectorAll('.products-card');

    produtos.forEach((produto) => {
      produto.classList.remove('hidden');
    });

    if (selectedModelos.length > 0 || selectedCores.length > 0 || selectedStorage.length > 0) {
      produtos.forEach((produto) => {
        const isModeloSelected = selectedModelos.includes(produto.getAttribute('data-modelo'));
        const isCorSelected = selectedCores.includes(produto.getAttribute('data-cor'));
        const isStorageSelected = selectedStorage.includes(produto.getAttribute('data-storage'));
        produto.classList.toggle('hidden', !(isModeloSelected || isCorSelected || isStorageSelected));
      });
    }
  });
});










// const tipoProduto = "iPad";

// const produtosFiltrados = produtos.filter((produto) => {
//   return produto.type === tipoProduto && produto.modeloValidoParaIpad;
// });


// // Agora você pode exibir os produtos filtrados na página
// produtosFiltrados.forEach((produto) => {
//   // Exibe o produto na página
// });















// function filterItems() {
//     // Obter todos os checkboxes marcados
//     var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
//     // Se não houver nenhum checkbox marcado, mostrar todos os itens da section
//     if (checkedCheckboxes.length === 0) {
//       var items = document.querySelectorAll('.watch-products .products-container a');
//       for (var i = 0; i < items.length; i++) {
//         items[i].style.display = 'block';
//       }
//     } else {
//       // Caso contrário, esconder todos os itens da section
//       var items = document.querySelectorAll('.watch-products .products-container a');
//       for (var i = 0; i < items.length; i++) {
//         items[i].style.display = 'none';
//       }
  
//       // Mostrar os itens da section correspondentes aos checkboxes marcados
//       for (var i = 0; i < checkedCheckboxes.length; i++) {
//         var className = checkedCheckboxes[i].id.replace('item', 'modelo-');
//         var filteredItems = document.querySelectorAll('.watch-products .products-container a.' + className);
//         for (var j = 0; j < filteredItems.length; j++) {
//           filteredItems[j].style.display = 'block';
//         }
//       }
//     }
//   }
  
//   // Executar a função de filtragem quando os checkboxes forem clicados
//   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   for (var i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener('click', filterItems);
//   }




// // cores


// const toggleButton = document.querySelector('#toggle-button');
// const aside = document.querySelector('aside');
// const itensList = document.querySelector('ul.itens-list');
// const itemAside = document.querySelectorAll('li.item-aside');

// toggleButton.addEventListener('click', () => {
//   itensList.classList.toggle('hidden');
//   itemAside.forEach(item => item.classList.toggle('hidden'));

//   aside.classList.toggle('collapsed');
//   aside.classList.toggle('expanded');
// });