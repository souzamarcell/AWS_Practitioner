document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recarregar a página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // 🔹 Lista de usuários válidos
  const users = [
      { username: "admin", password: "admin", role: "admin" },
      { username: "marcell", password: "JesusSalvador#12", role: "admin" },
      { username: "hadassa", password: "431", role: "user" },
      { username: "guest", password: "0000", role: "guest" }
  ];

  // 🔹 Verifica se o usuário e senha estão corretos
  const validUser = users.find(user => user.username === username && user.password === password);

  if (validUser) {
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("username", validUser.username);
      sessionStorage.setItem("role", validUser.role); // Salva o tipo de usuário

      console.log("✅ Login realizado como:", validUser.username, "| Role:", validUser.role);

      // 🔹 Redireciona para index.html
      setTimeout(() => {
          window.location.href = "index.html";
      }, 300);
  } else {
      errorMessage.innerText = "⚠️ Usuário ou senha incorretos!";
  }
});
