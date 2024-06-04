const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const description = document.getElementById("description");
const result = document.getElementById("result");
const footer = document.querySelector("main footer");
const form = document.querySelector("form");

const USD = 4.87;
const EUR = 5.32;
const GBP = 6;

//
amount.addEventListener("input", () => {
  const hasCaractersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCaractersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    let valor = String(amount * price).replace(".", ",");
    
    description.textContent = `${symbol} 1 = ${formatCurrentBRL(price)}`;
    
    result.textContent = `${valor} Reais`;
    
    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    alert("deu não");
  }
}

function formatCurrentBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
