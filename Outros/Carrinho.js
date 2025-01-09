document.querySelectorAll('.MenuCarrinho button').forEach(button => {
    button.addEventListener('click', () => {
        const isIncrement = button.textContent.trim() === "+";
        const quantityInput = document.querySelector('.input-carrinho input');
        const priceElement = document.querySelector('.valor');
        const totalCarrinho = document.querySelector('.txtfinal2');
        const totalProducts = document.querySelector('#produtos');

        let quantity = parseInt(quantityInput.value, 10);

        if (isIncrement) {
            quantity += 1;
        } else if (quantity > 1) {
            quantity -= 1;
        }

        quantityInput.value = quantity;

        const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));

        const subtotal = (price * quantity).toFixed(2);

        totalProducts.textContent = `R$ ${subtotal.replace('.', ',')}`;

        const total = parseFloat(subtotal);
        totalCarrinho.textContent = `R$ ${(total + 30).toFixed(2).replace('.', ',')}`;
    });
});