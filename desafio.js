const vin = '1HGCM82633A004352';

//Function para encriptar o vin recebido
function encriptar(vin) {
  const chassi = vin.split('');
  let cripted = '';

  for (let l of chassi) {
    //Para andar caracteres 2 casas para frente
    if (l.charCodeAt() >= 65 && l.charCodeAt() <= 88) {
      let caractere = l.charCodeAt() + 2;
      cripted += String.fromCharCode(caractere);
    }
    if (l.charCodeAt() === 89) cripted += String.fromCharCode(65);
    if (l.charCodeAt() === 90) cripted += String.fromCharCode(66);

    //Para andar números 2 casas para frente
    if (l.charCodeAt() >= 48 && l.charCodeAt() <= 55) {
      let caractere = l.charCodeAt() + 2;
      cripted += String.fromCharCode(caractere);
    }
    if (l.charCodeAt() === 56) cripted += String.fromCharCode(48);
    if (l.charCodeAt() === 57) cripted += String.fromCharCode(49);
  }
  // Reverter o resultado
  const criptReversed = cripted.split('').reverse();

  return criptReversed.join('');
}

// Retonando o resultado da função no console
const encripted = encriptar(vin)
console.log(`Valor do vin inicial: ${vin}`);
console.log(`Resultado da encriptação: ${encripted}`);

//Function para decriptar o vin encriptado
function decriptar(cript) {
  const chassi = cript.split('');
  let decripted = '';

  for (let c of chassi) {
    //Para andar caracteres 2 casas para trás
    if (c.charCodeAt() >= 67 && c.charCodeAt() <= 90) {
      let caractere = c.charCodeAt() - 2;
      decripted += String.fromCharCode(caractere);
    }
    if (c.charCodeAt() === 66) decripted += String.fromCharCode(90);
    if (c.charCodeAt() === 65) decripted += String.fromCharCode(89);

    //Para andar números 2 casas para trás
    if (c.charCodeAt() >= 50 && c.charCodeAt() <= 57) {
      let caractere = c.charCodeAt() -2;
      decripted += String.fromCharCode(caractere);
    }
    if (c.charCodeAt() === 49) decripted += String.fromCharCode(57);
    if (c.charCodeAt() === 48) decripted += String.fromCharCode(56);
  }

  // Reverter o resultado
  const decriptReversed = decripted.split('').reverse();

  return decriptReversed.join('');
}

//Apresentando o resultado da função decriptar no console
let decripted = decriptar(encripted);
console.log(`Resultado da decriptação: ${decripted}`);