document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("fale_conosco-form");
  
    formulario.addEventListener("submit", function() {
      if (!formulario.checkValidity()) {
        return;
      }
      alert("E-mail enviado! Entraremos em contato em breve! 😀");
    });
  });


// Não tem como tirar o título do site sem biblioteca externa
// Deve-se decidir se mantem isso ou não