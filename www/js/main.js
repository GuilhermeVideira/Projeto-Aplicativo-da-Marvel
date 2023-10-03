function cadastrar() {
  var username = document.getElementById("UsernameCadas").value;
  var senha = document.getElementById("Senha").value;
  var erroMensagem = document.getElementById("erroMensagem");
  var senhaInput = document.getElementById("Senha");

  if (senha.length < 6) {
    erroMensagem.innerHTML = "A senha deve conter no mínimo 6 caracteres!";
    erroMensagem.style.color = "red";
    senhaInput.style.borderColor = "red";
    return;
  }
  erroMensagem.innerHTML = "";
  senhaInput.style.borderColor = "green";

  var usuario = {
    username: username,
    senha: senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro bem-sucedido!");

  window.location.href = 'Entrar.html';
}
