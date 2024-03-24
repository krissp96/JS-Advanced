function solve() {
  const addButtons = document.querySelectorAll(".add-product");
  const textArea = document.querySelector("textarea");
  const checkOutBtn = document.querySelector(".checkout");

  let checkOutArea = [];
  let productTitles = "";
  let total = 0;
  let final;
  for (let i = 0; i < addButtons.length; i++) {
    const button = addButtons[i];
    button.addEventListener("click", function (event) {
      checkOutBtn.addEventListener("click", checkOut);
      const buttonClicked = event.target;
      const product = buttonClicked.closest(".product");
      const productTitle = product.querySelector(".product-title").textContent;
      productTitles = productTitle;
      console.log(addButtons.length);
      const productPrice = product.querySelector(
        ".product-line-price"
      ).textContent;
      total += Number(productPrice);

      checkOutArea.push(
        `Added ${productTitle} for ${productPrice} to the cart.`
      );
      textArea.value = checkOutArea.join(`\n`);
      console.log(productTitles);
      console.log(total);

      let finalCheckout = `You bought ${productTitles} for ${total.toFixed(2)}`;
      final = finalCheckout;
    });
  }

  function checkOut(event) {
    checkOutArea.push(final);
    textArea.value = checkOutArea.join("\n");
    console.log(textArea.value);
  }
}

// function solve() {
//   // get add buttons
//   const addButtons = document.querySelectorAll(".add-product");
//   const textArea = document.querySelector("textarea");
//   const checkOutBtn = document.querySelector(".checkout");

//   let products = []; // Array to store added products
//   let total = 0;

//   // Define the checkout function
//   function checkOut() {
//     const productTitles = products.map((product) => product.title).join(", ");
//     textArea.value = `You bought ${productTitles} for ${total.toFixed(2)}`;
//   }

//   for (let i = 0; i < addButtons.length; i++) {
//     const button = addButtons[i];
//     button.addEventListener("click", function (event) {
//       const buttonClicked = event.target;
//       const product = buttonClicked.closest(".product");
//       const productTitle = product.querySelector(".product-title").textContent;
//       const productPrice = parseFloat(
//         product.querySelector(".product-line-price").textContent
//       );

//       total += productPrice;

//       // Check if the product already exists
//       const existingProductIndex = products.findIndex(
//         (item) => item.title === productTitle
//       );
//       if (existingProductIndex !== -1) {
//         // If the product exists, increase its quantity
//         products[existingProductIndex].quantity++;
//       } else {
//         // If the product is new, add it to the array
//         products.push({
//           title: productTitle,
//           price: productPrice,
//         });
//       }

//       updateTextArea();
//     });
//   }

//   // Update the textarea to display the added products and total
//   function updateTextArea() {
//     let checkoutMessage = "";
//     products.forEach((product) => {
//       checkoutMessage += `Added ${product.title} `;
//       if (product.quantity > 1) {
//         checkoutMessage += `(${product.quantity} times) `;
//       }
//       checkoutMessage += `for ${product.price.toFixed(2)} to the cart.\n`;
//     });
//     textArea.value = checkoutMessage;
//   }

//   // Add event listener to checkout button
//   checkOutBtn.addEventListener("click", checkOut);
// }
