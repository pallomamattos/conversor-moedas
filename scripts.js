document.getElementById("convert").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Lógica para converter as moedas aqui
    // Você precisa buscar as taxas de câmbio e realizar o cálculo
    // Exemplo:
    const exchangeRate = 5.5; // Valor fictício, substitua pelas taxas de câmbio reais
    const result = (amount * exchangeRate).toFixed(2); // Arredonde para 2 casas decimais

    document.getElementById("result").textContent = `${amount} ${fromCurrency} é igual a ${result} ${toCurrency}`;
});

