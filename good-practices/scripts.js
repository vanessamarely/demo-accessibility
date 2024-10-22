document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  const menuButton = document.getElementById("menuButton");
  const menuList = document.getElementById("menuList");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(`${button.getAttribute("aria-label")} added to cart`);
    });
  });

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    menuList.style.display = isExpanded ? "none" : "flex";
  });
});
