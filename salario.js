// Aqui estamos usando o método readline do Node.js para ler a entrada de dados do usuário
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o salário bruto: ', (salarioBrutoInput) => {
  rl.question('Digite o valor dos benefícios: ', (beneficiosInput) => {
    // Convertendo entrada de string para número
    let salarioBruto =  parseFloat(salarioBrutoInput)
    let beneficios = parseFloat(beneficiosInput)
    let salarioLiquido

    if (salarioBruto <= 1100.00) {
        // Aqui atribuímos a aliquita de 5% sobre o salário
        let imposto = (5/100)*salarioBruto
        salarioLiquido = (salarioBruto-imposto) + beneficios
        console.log(`O salário líquido do funcionário é: R$${salarioLiquido}`)
    }else if (salarioBruto >= 1100.01 && salarioBruto <= 2500.00) {
        // Aqui atribuímos a aliquita de 10% sobre o salário
        let imposto = (10/100)*salarioBruto
        salarioLiquido = (salarioBruto-imposto) + beneficios
        console.log(`O salário líquido do funcionário é: R$${salarioLiquido}`)
    }else {
        // Aqui atribuímos a aliquita de 15% sobre o salário        
        let imposto = (15/100)*salarioBruto
        salarioLiquido = (salarioBruto-imposto) + beneficios
        console.log(`O salário líquido do funcionário é: R$${salarioLiquidoo}`)
    }
    rl.close();
  });
});

// node salario.js 