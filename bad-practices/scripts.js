document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  const menuButton = document.getElementById("menuButton");
  const menuList = document.getElementById("menuList");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Product added to cart");
    });
  });

  menuButton.addEventListener("click", () => {
    menuList.style.display =
      menuList.style.display === "none" ? "flex" : "none";
  });
});
