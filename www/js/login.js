function verificarLogin() {
  var username = document.getElementById("UsernameCadas").value;
  var senha = document.getElementById("SenhaCadas").value;

  // Recupere os dados do usuário do localStorage
  var usuarioArmazenado = JSON.parse(localStorage.getItem("usuario"));

  if (usuarioArmazenado && usuarioArmazenado.username === username && usuarioArmazenado.senha === senha) {
    // Login bem-sucedido, redirecione para a tela inicial do site
    window.location.href = 'inicio.html';
  } else {
    // Dados de login inválidos, exiba um alerta
    alert("Dados de login inválidos. Tente novamente.");
  }
}
