const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const textResult = document.getElementById('textoResultado');
let isPal = false;

function comprobar() {
  if (input.value==="") {
    alert("Please input a value");
    return;
  }
  input.innerText = "";
  textResult.style.display = "none";
  const junto = limpiarInput(input.value);
  esPalindromo(junto);
}

function limpiarInput(str) {
  const regex = /[^A-Za-z0-9]/gi;
  return str.replace(regex, '').toLowerCase();
}

function esPalindromo(str) {
  let principio = 0;
  let final = str.length-1;
  let letraInicio = str.charAt(principio);
  let letraFin = str.charAt(final);
  
  while (letraInicio===letraFin && principio <= final) {
    principio++;
    final--;
    letraInicio = str.charAt(principio);
    letraFin = str.charAt(final);
  }

  if (final<principio) {
    textResult.style.display = "block";
    textResult.innerText = `${input.value} is a palindrome`;
    
    input.value = "";
    return true;
  } else {
    textResult.style.display = "block";
    textResult.innerText = `${input.value} is not a palindrome`;
    input.value = "";
    return false;
  }

}

button.addEventListener("click", comprobar);