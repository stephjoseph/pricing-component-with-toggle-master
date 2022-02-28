const checkbox = document.querySelector("#checkbox");
const prices = document.querySelectorAll(".price");

window.onload = () => {
  checkbox.checked = false;
};

checkbox.addEventListener("click", () => {
  prices.forEach((price) => {
    let newPrice = price.children[1].innerHTML;
    if (checkbox.checked) {
      price.classList.add("opacity-0");
      setTimeout(() => {
        newPrice = (newPrice * 10 + 0.09).toFixed(2);
        price.children[1].innerHTML = newPrice;
        price.classList.remove("opacity-0");
      }, 500);
    } else {
      price.classList.add("opacity-0");
      setTimeout(() => {
        newPrice = (newPrice / 10 - 0.01).toFixed(2);
        price.children[1].innerHTML = newPrice;
        price.classList.remove("opacity-0");
      }, 500);
    }
  });
});
