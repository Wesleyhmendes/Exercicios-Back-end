const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

function imc(weight, height) {
  const imc_result = (weight / (height**2)).toFixed(2);

  if (imc_result < 18.5) return "Abaixo do peso (magreza)"
  if (imc_result < 24.9) return "Peso normal"
  if (imc_result < 29.9) return "Acima do peso (sobrepeso)"
  if (imc_result < 34.9) return "Obesidade grau I"
  if (imc_result < 39.9) return "Obesidade grau II"
  if (imc_result >= 40)  return "Obesidade graus III e IV"
} 

function main() {
  const bmi = imc(weight, height);
  console.log(`BMI: ${bmi}`);
}

main();
