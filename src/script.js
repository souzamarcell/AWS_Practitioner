document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recarregar a página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    sessionStorage.setItem("loggedIn", "true");
    console.log("✅ Login realizado. Valor salvo no sessionStorage:", sessionStorage.getItem("loggedIn"));

      setTimeout(() => {
          window.location.href = "index.html";
      }, 300);
  } else {
      errorMessage.innerText = "Usuário ou senha incorretos!";
  }
});
