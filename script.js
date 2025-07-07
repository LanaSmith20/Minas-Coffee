let carrinho = [];

let addCartButtons = document.querySelectorAll('.add-button');

addCartButtons.forEach(function(button){
    button.addEventListener('click', function(){
        let itemName = this.getAttribute('data-name');
        carrinho.push(itemName)
        alert('item add ao carrinho');
        let quantityItems = document.getElementById('cart-quant');
       let currentQuantity = parseInt(quantityItems.innerText);
        quantityItems.innerText = currentQuantity + 1

    })
})

