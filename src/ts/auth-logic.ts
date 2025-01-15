const loginForm = document.getElementById("login-form") as HTMLFormElement;

const userEmail = "user@example.com";
const userPassword = "password123";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  if (
    enteredEmail === userEmail &&
    enteredPassword === userPassword
  ) {
    sessionStorage.setItem('userTodo', JSON.stringify({
      email: enteredEmail,
      isLoggedIn: true,
    }))

    window.location.href = "/todolist.html";
  } else {
    alert("Email ou mot de passe incorrect.");
  }
});
