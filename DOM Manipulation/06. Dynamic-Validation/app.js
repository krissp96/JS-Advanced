function validate() {
  function validateEmail(email) {
    // Regular expression for validating email
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    return emailRegex.test(email);
  }
  const emailInput = document.getElementById("email");

  emailInput.addEventListener("change", function () {
    const email = emailInput.value.trim(); // Trim whitespace from input

    if (validateEmail(email)) {
      // If email is valid, remove error class
      emailInput.classList.remove("error");
    } else {
      // If email is invalid, add error class
      emailInput.classList.add("error");
    }
  });
}
