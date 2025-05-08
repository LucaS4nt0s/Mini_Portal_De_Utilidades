const header = document.querySelector("header");
const main = document.querySelector("main");

main.style.paddingTop = `${header.offsetHeight}px`;

const abas = document.querySelectorAll(".abas");
const links_abas = document.querySelectorAll(".link_abas");

// fazendo aparecer as abas quando clicar no link
links_abas.forEach((link) => {
    link.addEventListener("click", function (mostrar){
        mostrar.preventDefault();

        const id = mostrar.target.getAttribute("href");
        const aba = document.querySelector(id);
        abas.forEach((x) => {
            x.classList.add("esconder");
        });
        aba.classList.remove("esconder");
    })
});

//Exercicio 1 - Criar uma função que retorna se o número é positivo, negativo ou zero

const botaoVerifica = document.querySelector("#verificarNumero");
const paragrafoResultado = document.querySelector("#resultado");
const inputNumero = document.querySelector("#numeroParaVerificar");

botaoVerifica.addEventListener("click", function (verifica) {
    verifica.preventDefault();
    const numero = Number(inputNumero.value);
    const resultado = () => {
        if (numero > 0) {
            return "O número é positivo!";
        } else if (numero < 0) {
            return "O número é negativo!";
        } else{
            return "O número é zero!";
        }
    }
    paragrafoResultado.innerHTML = resultado();
    paragrafoResultado.classList.remove("esconder");
});

//Exercicio 2 - Criar uma função que calcula a tabuada de 1 a 10 de um número 

const inputTabuada = document.querySelector("#numeroParaTabuada");
const botaoTabuada = document.querySelector("#gerarTabuada");
const ulTabuada = document.querySelector("#resultadoTabuada");


botaoTabuada.addEventListener("click", (tabuada) => {
    const numero = Number(inputTabuada.value);
    if(numero < 0){
        alert("Por favor, insira um número positivo.");
        return;
    }
    const resultadoTabuada = () => {
        let tabuada = [];
        for (let i = 1; i <= 10; i++) {
            tabuada.push(`${numero} x ${i} = ${numero * i}`);
        }
        return tabuada;
    }
    const tabuadaGerada = resultadoTabuada();
    ulTabuada.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens
    tabuadaGerada.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ulTabuada.appendChild(li);
    });
    ulTabuada.classList.remove("esconder");
});

//Exercicio 3 - Calcular o IMC de uma pessoa e retornar a classificação do IMC

const botaoIMC = document.querySelector("#calcularIMC");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const paragrafoIMC = document.querySelector("#resultadoIMC");

botaoIMC.addEventListener("click", (imc) => {
    imc.preventDefault();
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const resultadoIMC = () => {
        const imc = peso / (altura * altura);
        if (imc < 18.5) {
            return "Você está abaixo do peso ideal";
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Parabéns - Você está em seu peso normal!";
        } else if (imc >= 25 && imc <= 29.9) {
            return "Você está acima de seu peso (sobrepeso)";
        } else if( imc >= 30 && imc <= 34.9) {
            return "Obesidade grau I";
        } else if (imc >= 35 && imc <= 39.9) {
            return "Obesidade grau II";
        } else if (imc >= 40) {
            return "Obesidade grau III";
        }
    }
    paragrafoIMC.innerHTML = resultadoIMC();
    paragrafoIMC.classList.remove("esconder");
});

//Exercicio 4 - Criar uma função para calcular a média de 3 notas e retornar se o aluno foi aprovado ou reprovado

const botaoMedia = document.querySelector("#calcularMedia");
const inputNota1 = document.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
const inputNota3 = document.querySelector("#nota3");
const paragrafoMedia = document.querySelector("#resultadoMedia");

botaoMedia.addEventListener("click", (media) => {
    media.preventDefault();
    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);
    const nota3 = Number(inputNota3.value);

    if((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10) || (nota3 < 0 || nota3 > 10)){
        alert("Por favor, insira notas válidas entre 0 e 10.");
        return;
    }

    const resultadoMedia = () => {
        const media = (nota1 + nota2 + nota3) / 3;
        const mediaArredondada = media.toFixed(2);
        if (media >= 6) {
            return `Média ${mediaArredondada}: Aprovado!`;
        } else {
            return `Média ${mediaArredondada}: Reprovado!`;
        }
    }
    paragrafoMedia.innerHTML = resultadoMedia();
    paragrafoMedia.classList.remove("esconder");
});

//Exercicio 5 - Criar uma função que retorna o combustivel mais econômico entre álcool e gasolina

const inputAlcool = document.querySelector("#precoAlcool");
const inputGasolina = document.querySelector("#precoGasolina");
const botaoCombustivel = document.querySelector("#calcularCombustivel");   
const paragrafoCombustivel = document.querySelector("#resultadoCombustivel");

paragrafoCombustivel.innerHTML = "<img src='./Assets/imgs/imagens/neutro.png' alt='Neutro'>";

botaoCombustivel.addEventListener("click", (calcularCombustivelViavel) => {
    const precoAlcool = Number(inputAlcool.value);
    const precoGasolina = Number(inputGasolina.value);
    
    if(precoAlcool <= 0 || precoGasolina <= 0){
        alert("Por favor, insira preços válidos.");
        return;
    }
    const calcularPorcentagem = () => {
        if (precoAlcool / precoGasolina <= 0.7) {
            paragrafoCombustivel.innerHTML = "<img src='./Assets/imgs/imagens/etanol.png' alt='Etanol'> <br> <p>Etanol é o combustível mais econômico!</p>";
        }
        else {
            paragrafoCombustivel.innerHTML = "<img src='./Assets/imgs/imagens/gasolina.png' alt='Gasolina'> <br> <p>Gasolina é o combustível mais econômico!</p>";
        }
    }
    calcularPorcentagem();
});

// Exercicio 6 - Exibir uma face aleatoria do dado quando reiniciar a pagina
const dado = document.querySelector("#resultadoDado");
const linkDado = document.querySelector(".link_abas:nth-child(6)");

// Adicionando o evento DOMContentLoaded para garantir que o dado seja exibido após o carregamento da página
document.addEventListener("DOMContentLoaded", function() {
    var sorteio = Math.floor(Math.random() * 6 + 1);
    switch (sorteio) {
        case 1:
            dado.innerHTML = `<img src='./Assets/dado/dado/face1.png' alt='Dado'>`;
            break;
        case 2:
            dado.innerHTML = `<img src='./Assets/dado/dado/face2.png' alt='Dado'>`;
            break;
        case 3:
            dado.innerHTML = `<img src='./Assets/dado/dado/face3.png' alt='Dado'>`;
            break;
        case 4:
            dado.innerHTML = `<img src='./Assets/dado/dado/face4.png' alt='Dado'>`;
            break;
        case 5:
            dado.innerHTML = `<img src='./Assets/dado/dado/face5.png' alt='Dado'>`;
            break;
        case 6:
            dado.innerHTML = `<img src='./Assets/dado/dado/face6.png' alt='Dado'>`;
            break;
    }
});

// Exercicio 7 - Cadastrar um usuário e exibir os dados cadastrados em uma tabela

const botaoCadastrar = document.querySelector("#cadastrar");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const paragrafoCadastro = document.querySelector("#resultadoCadastro");

botaoCadastrar.addEventListener("click", (cadastrar) => {
    cadastrar.preventDefault();
    const nome = inputNome.value;
    const email = inputEmail.value;
    const telefone = inputTelefone.value;

    if(nome === "" || email === "" || telefone === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    paragrafoCadastro.innerHTML = `<p>Nome: ${nome}</p><br><p>Email: ${email}</p><br><p>Telefone: ${telefone}</p>`;
});

// - Fibonacci - Criar uma função que retorna os 150 primeiros números da sequência de Fibonacci
const fibonnacci = maxValor => {
    let num1 = 0;
    let num2 = 1;
    let numeros = [];
    for (let i = 1; i <= maxValor; i++) {
    numeros.push(num1);
    let soma = num1 + num2;
    num1 = num2;
    num2 = soma;
    }
    return numeros;
}
