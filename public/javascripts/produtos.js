const checkboxes = document.querySelectorAll('input[type=checkbox][name=modelo]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    const selectedModelos = Array.from(checkboxes)
      .filter((c) => c.checked)
      .map((c) => c.value);

    const produtos = document.querySelectorAll('.products-card');

    if (selectedModelos.length === 0) {
      // Se nenhuma caixa de seleção estiver selecionada, exiba todos os produtos
      produtos.forEach((produto) => {
        produto.classList.remove('hidden');
      });
    } else {
      // Filtra os produtos com base nas caixas de seleção selecionadas
      produtos.forEach((produto) => {
        produto.classList.toggle('hidden', !selectedModelos.includes(produto.classList[1]));
      });
    }
  });
});




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