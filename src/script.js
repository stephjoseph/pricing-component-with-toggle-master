const checkbox = document.querySelector("#checkbox");
const prices = document.querySelectorAll(".price");

window.onload = () => {
  checkbox.checked = false;
};

checkbox.addEventListener("click", () => {
  prices.forEach((price) => {
    let newPrice = price.innerHTML;
    if (checkbox.checked) {
      newPrice = (newPrice * 10 + 0.09).toFixed(2);
      console.log(newPrice);
    } else {
      newPrice = (newPrice / 10 - 0.01).toFixed(2);
      console.log(newPrice);
    }
    price.innerHTML = newPrice;
  });
});
