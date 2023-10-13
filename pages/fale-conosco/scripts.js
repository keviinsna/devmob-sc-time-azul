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

const checkbox = document.getElementById("check");
const titulo = document.getElementById("inicio-titulo-fale_conosco");

checkbox.addEventListener("click", function() {
  if (checkbox.checked) {
    titulo.style.marginTop = "40%";
  } else {
    titulo.style.marginTop = "7.5%";
  }
}) 

