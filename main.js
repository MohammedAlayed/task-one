const submitForm = document.getElementById("submitForm");

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("websiteError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("repasswordError").textContent = "";
  document.getElementById("termError").textContent = "";

  let isValid = true;

  // Username validation
  const username = document.getElementById("username").value;
  if (!username || username.length < 3) {
    document.getElementById("usernameError").textContent =
      "Username must be at least 3 characters long.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // firstName validation
  const firstName = document.getElementById("firstName").value;
  if (!firstName | (firstName.length < 3)) {
    document.getElementById("firstNameError").textContent =
      "First name must be at least 3 characters long.";
    isValid = false;
  }

  // Website validation
  const website = document.getElementById("website").value;
  const websitePattern =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  if (!websitePattern.test(website)) {
    document.getElementById("websiteError").textContent =
      "Please enter a valid website URL.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long.";
    isValid = false;
  }

  // Confirm password validation
  const repassword = document.getElementById("rePassword").value;
  if (password !== repassword) {
    document.getElementById("repasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  // Terms and conditions validation
  const terms = document.getElementById("term").checked;
  if (!terms) {
    document.getElementById("termError").textContent =
      "You must agree to the terms and conditions.";
    isValid = false;
  }

  if (isValid) {
    // If the form is valid
    alert("Form submitted successfully!");
    submitForm.reset();
  }
});
