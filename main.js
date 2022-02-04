const btnInput = document.querySelector("#send");

btnInput.addEventListener("click", function(e) {
     e.preventDefault();
     const email = document.querySelector('#email');
     const senha = document.querySelector('#senha');

     const valueEmail = "E-mail:" + email.value;
     const valueSenha = "Senha:" + senha.value;

     console.log(valueEmail);
     console.log(valueSenha);
})