const header = document.querySelector("header");
const main = document.querySelector("main");

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

    paragrafoCadastro.classList.remove("esconder");
    paragrafoCadastro.innerHTML = `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Telefone: ${telefone}</p>`;
});

// Exercicio 8 - Analisar um vetor de numeros 

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
const numero4 = document.querySelector("#numero4");
const numero5 = document.querySelector("#numero5");
const numero6 = document.querySelector("#numero6");
const numero7 = document.querySelector("#numero7");
const numero8 = document.querySelector("#numero8");
const numero9 = document.querySelector("#numero9");
const numero10 = document.querySelector("#numero10");
const botaoAnalisar = document.querySelector("#analisarVetores");
const paragrafoVetor1 = document.querySelector("#resultadoAnalise");
const paragrafoVetor2 = document.querySelector("#resultadoAnalise2");
const paragrafoVetor3 = document.querySelector("#resultadoAnalise3");
const paragrafoVetor4 = document.querySelector("#resultadoAnalise4");
const paragrafoVetor5 = document.querySelector("#resultadoAnalise5");

botaoAnalisar.addEventListener("click", (analisar) => {
    analisar.preventDefault();
    var numNegativos = 0;
    var numPositivos = 0;
    var numPares = 0;
    var numImpares = 0;
    var numOrdemInversa = [];

    const vetor = [
        Number(numero1.value),
        Number(numero2.value),
        Number(numero3.value),
        Number(numero4.value),
        Number(numero5.value),
        Number(numero6.value),
        Number(numero7.value),
        Number(numero8.value),
        Number(numero9.value),
        Number(numero10.value)
    ];

    const negativos = () => {
        for (const num of vetor) {
            if (num < 0) {
                numNegativos++;
            }
        }
    }
    const positivos = () => {
        for (const num of vetor) {
            if (num > 0) {
                numPositivos++;
            }
        }
    }
    const pares = () => {
        for (const num of vetor) {
            if (num % 2 === 0) {
                numPares++;
            }
        }
    }
    const impares = () => {
        for (const num of vetor) {
            if (num % 2 !== 0) {
                numImpares++;
            }
        }
    }
    const ordemInversa = () => {
        for (let i = vetor.length - 1; i >= 0; i--) {
            numOrdemInversa.push(vetor[i]);
        }
        return numOrdemInversa;
    }
    negativos();
    positivos();
    pares();
    impares();

    paragrafoVetor1.innerHTML = `Quantidade de números negativos: ${numNegativos}`;
    paragrafoVetor2.innerHTML = `Quantidade de números positivos: ${numPositivos}`;
    paragrafoVetor3.innerHTML = `Quantidade de números pares: ${numPares}`;
    paragrafoVetor4.innerHTML = `Quantidade de números ímpares: ${numImpares}`;
    paragrafoVetor5.innerHTML = `Ordem inversa: ${ordemInversa().join(", ")}`;
    paragrafoVetor1.classList.remove("esconder");
    paragrafoVetor2.classList.remove("esconder");   
    paragrafoVetor3.classList.remove("esconder");
    paragrafoVetor4.classList.remove("esconder");
    paragrafoVetor5.classList.remove("esconder");
}
);

// Exercicio 9 - Analisar um vetor com 10 pessoas

const pessoas = document.querySelectorAll(".cadastroDasPessoas");
const botaoPessoas = document.querySelector("#cadastrarPessoas");
const paragrafoPessoas = document.querySelector("#resultadoCadastroPessoas");

botaoPessoas.addEventListener("click", (cadastrarPessoas) => {
    cadastrarPessoas.preventDefault();
    const vetorPessoas = [];

    // pegar os valores dos inputs e adicionar no vetorPessoas
    for (let i = 0; i < pessoas.length; i++) {
        let nome = pessoas[i].querySelector(".nome").value;
        let cidade = pessoas[i].querySelector(".cidade").value;
        let idade = Number(pessoas[i].querySelector(".idade").value);
        let sexo = pessoas[i].querySelector(".sexo").value;

        if(nome === "" || isNaN(idade) || cidade === "" || sexo === ""){
            alert("Por favor, preencha todos os campos.");
            return;
        }

        vetorPessoas.push({ nome, cidade, idade, sexo });
    }

    paragrafoPessoas.innerHTML = "";
    for (const pessoa of vetorPessoas) {
        paragrafoPessoas.innerHTML += `<p>Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
    }
    paragrafoPessoas.innerHTML += `<p>Pessoas que moram em Santos:</p>`;
    for (const pessoa of vetorPessoas) {
        if (pessoa.cidade === "Santos") {
            paragrafoPessoas.innerHTML += `<p>Nome: ${pessoa.nome}</p>`;
        }
    }
    paragrafoPessoas.innerHTML += `<p>Pessoas que são maiores de 18 anos:</p>`;
    for (const pessoa of vetorPessoas) {
        if (pessoa.idade >= 18) {
            paragrafoPessoas.innerHTML += `<p>Nome: ${pessoa.nome}</p>`;
        }
    }
    var somaIdade = 0;
    for (const pessoa of vetorPessoas) {
        if (pessoa.sexo === "M") {
            somaIdade ++;
        }
    }
    paragrafoPessoas.innerHTML += `<p>Quantidade de pessoas do sexo masculino: ${somaIdade}</p>`;

    paragrafoPessoas.classList.remove("esconder");
});

// Exercicio 10 - Fibonacci - Criar uma função que retorna os 150 primeiros números da sequência de Fibonacci
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

const botaoFibonacci = document.querySelector("#gerarFibonacci");
const paragrafoFibonacci = document.querySelector("#resultadoFibonacci");

botaoFibonacci.addEventListener("click", (fibonacciConta) => {
    fibonacciConta.preventDefault();
    const maxValor = 150;
    const resultadoFibonacci = fibonnacci(maxValor);
    paragrafoFibonacci.innerHTML = `<p>Os 150 primeiros números da sequência de Fibonacci são: </p>`;
    paragrafoFibonacci.innerHTML += `<p>${resultadoFibonacci.join(", ")}</p>`;
    paragrafoFibonacci.classList.remove("esconder");
}
);

// Exercicio 11 - Verifica se o número é primo ou não
const inputPrimo = document.querySelector("#numeroPrimo");
const botaoPrimo = document.querySelector("#verificarPrimo");
const paragrafoPrimo = document.querySelector("#resultadoPrimo");

botaoPrimo.addEventListener("click", (verificaPrimo) => {
    verificaPrimo.preventDefault();
    const numero = Number(inputPrimo.value);
    const resultadoPrimo = () => {
        if (numero < 2) {
            return "O número não é primo!";
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return "O número não é primo!";
            }
        }
        return "O número é primo!";
    }
    paragrafoPrimo.innerHTML = resultadoPrimo();
    paragrafoPrimo.classList.remove("esconder");
});

// Exercicio 12 - Mês por número
const inputMes = document.querySelector("#numeroMes");
const botaoMes = document.querySelector("#converterMes");
const paragrafoMes = document.querySelector("#resultadoMes");

botaoMes.addEventListener("click", (converterMes) => {
    converterMes.preventDefault();
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const numero = Number(inputMes.value);
    const resultadoMes = () => {
        if (numero < 1 || numero > 12) {
            return "Não existe mês com este número.";
        } else {
            return `O mês é ${mes[numero - 1]}`;
        }
    }
    paragrafoMes.innerHTML = resultadoMes();
    paragrafoMes.classList.remove("esconder");
}
);

// Exercicio 13 - Data por extenso
const inputData = document.querySelector("#dataExtenso");
const botaoData = document.querySelector("#converterData"); 
const paragrafoData = document.querySelector("#resultadoData");

function anoPorExtenso(ano) {
    const milhar = Math.floor(ano / 1000); // 1
    const centena = Math.floor((ano % 1000) / 100); // 9
    const resto = ano % 100; // 88

    let partes = [];

    if (ano === 1000) return "mil";
    if (ano === 2000) return "dois mil";

    if (milhar === 1) partes.push("mil");
    else partes.push(numeroPorExtenso(milhar) + " mil");

    if (centena > 0) {
        const centenas = ["", "cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
        partes.push(centena === 1 && resto === 0 ? "cem" : numeroPorExtenso(centena * 100));
    }

    if (resto > 0) partes.push(numeroPorExtenso(resto));

    return partes.join(" e ");
}


function numeroPorExtenso(n) {
    const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    const especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    const dezenas = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

    if (n === 0) return "zero";
    if (n < 10) return unidades[n];
    if (n < 20) return especiais[n - 10];
    if (n < 100) {
        const dez = Math.floor(n / 10);
        const uni = n % 10;
        return dezenas[dez] + (uni ? " e " + unidades[uni] : "");
    }
    if (n < 1000) {
        const cen = Math.floor(n / 100);
        const resto = n % 100;
        if (n === 100) return "cem";
        return centenas[cen] + (resto ? " e " + numeroPorExtenso(resto) : "");
    }
    if (n < 10000) {
        const milhar = Math.floor(n / 1000);
        const resto = n % 1000;
        let milharExt = "";

        if (milhar === 1) {
            milharExt = "mil";
        } else {
            milharExt = numeroPorExtenso(milhar) + " mil";
        }

        return milharExt + (resto ? " e " + numeroPorExtenso(resto) : "");
    }

    return "número fora do alcance";
}


function dataPorExtensoCompleta(dataStr) {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const partes = dataStr.split("-");
    const ano = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const dia = parseInt(partes[2], 10);

    const diaExt = numeroPorExtenso(dia);
    const mesExt = meses[mes - 1];
    const anoExt = anoPorExtenso(ano);

    return `${diaExt} de ${mesExt} de ${anoExt}`;
}

botaoData.addEventListener("click", (evento) => {
    evento.preventDefault();
    const data = inputData.value;
    const resultado = dataPorExtensoCompleta(data);
    paragrafoData.innerHTML = resultado;
    paragrafoData.classList.remove("esconder");
});

// Exercicio 14 - Criar um contador de cliques
const botaoContador = document.querySelector("#contarCliques");
const paragrafoContador = document.querySelector("#resultadoCliques");
const botaoReiniciar = document.querySelector("#reiniciarCliques");
var contador = 0;

botaoContador.addEventListener("click", (contar) => {
    contar.preventDefault();
    contador++;
    paragrafoContador.innerHTML = `Você clicou ${contador} vezes!`;
});

botaoReiniciar.addEventListener("click", (reiniciar) => {
    reiniciar.preventDefault();
    contador = 0;
    paragrafoContador.innerHTML = `Você clicou ${contador} vezes!`;
});

//Exercicio 15 - To-do-List
const inputTarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#adicionarTarefa");
const listaTarefas = document.querySelector("#listaDeTarefas");

botaoAdicionar.addEventListener("click", (adicionar) => {
    adicionar.preventDefault();
    const tarefaNova = inputTarefa.value.trim();

    if (tarefaNova === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Criação do item com botão
    const li = document.createElement("li");
    li.className = "liTarefas";
    li.innerHTML = `
        <span class="marcarTarefa">${tarefaNova}</span>
        <button class="removerTarefa"><i class="fa-solid fa-trash"></i></button>
    `;

    listaTarefas.appendChild(li);
    inputTarefa.value = "";
});


listaTarefas.addEventListener("click", (event) => {
    if (event.target.closest(".removerTarefa")) {
        const li = event.target.closest("li");
        li.remove();
    }
});

listaTarefas.addEventListener("click", (event) => {
    const span = event.target.closest("span.marcarTarefa");
    if (span) {
        span.style.textDecoration = 
            span.style.textDecoration === "line-through" ? "none" : "line-through";
    }
});