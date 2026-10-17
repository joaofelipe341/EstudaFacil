/* =========================================
   NAVEGAÇÃO
========================================= */

window.abrirPagina = function(id) {

  var paginas = document.querySelectorAll(".pagina");

  paginas.forEach(function(pagina) {
    pagina.classList.remove("ativa");
  });

  var paginaEscolhida = document.getElementById(id);

  if (paginaEscolhida) {
    paginaEscolhida.classList.add("ativa");
  }

  window.scrollTo(0, 0);
};


/* =========================================
   MATÉRIAS
========================================= */

var materias = {

  matematica: {
    nome: "🧮 Matemática",
    descricao: "Aprenda matemática de maneira simples.",
    estudo: "Aqui você poderá estudar operações, frações, equações, geometria e outros conteúdos.",
    dica: "Organize os números e faça a conta passo a passo."
  },

  portugues: {
    nome: "📚 Português",
    descricao: "Estude a língua portuguesa.",
    estudo: "Aqui você poderá estudar gramática, interpretação de textos, ortografia e literatura.",
    dica: "Leia o texto com calma e procure entender sua ideia principal."
  },

  ciencias: {
    nome: "🔬 Ciências",
    descricao: "Conheça melhor a natureza e o mundo.",
    estudo: "Aqui você poderá estudar corpo humano, animais, plantas, matéria, energia e meio ambiente.",
    dica: "Tente relacionar o conteúdo com coisas que acontecem no seu dia a dia."
  },

  geografia: {
    nome: "🌎 Geografia",
    descricao: "Estude o planeta e os diferentes lugares.",
    estudo: "Aqui você poderá estudar países, continentes, clima, relevo, população e mapas.",
    dica: "Use mapas para visualizar melhor os lugares estudados."
  },

  historia: {
    nome: "🏛️ História",
    descricao: "Conheça acontecimentos importantes do passado.",
    estudo: "Aqui você poderá estudar períodos históricos, povos, guerras, descobrimentos e sociedades.",
    dica: "Uma linha do tempo pode ajudar a organizar os acontecimentos."
  },

  ingles: {
    nome: "🇺🇸 Inglês",
    descricao: "Aprenda inglês passo a passo.",
    estudo: "Aqui você poderá estudar vocabulário, frases, verbos e expressões básicas.",
    dica: "Aprenda algumas palavras novas e tente usá-las em frases."
  },

  fisica: {
    nome: "⚡ Física",
    descricao: "Aprenda como funcionam forças e movimentos.",
    estudo: "Aqui você poderá estudar movimento, força, energia, velocidade, eletricidade e outros assuntos.",
    dica: "Identifique primeiro o que cada número representa antes de usar uma fórmula."
  },

  quimica: {
    nome: "⚗️ Química",
    descricao: "Conheça a matéria e suas transformações.",
    estudo: "Aqui você poderá estudar átomos, elementos, substâncias, misturas e reações.",
    dica: "Relacione as transformações químicas com exemplos do cotidiano."
  },

  biologia: {
    nome: "🧬 Biologia",
    descricao: "Estude os seres vivos.",
    estudo: "Aqui você poderá estudar células, corpo humano, animais, plantas, genética e ecologia.",
    dica: "Faça desenhos e esquemas para memorizar estruturas."
  },

  filosofia: {
    nome: "🤔 Filosofia",
    descricao: "Conheça diferentes ideias e pensamentos.",
    estudo: "Aqui você poderá conhecer conceitos e pensamentos de diferentes filósofos.",
    dica: "Procure entender o motivo por trás de cada ideia."
  },

  sociologia: {
    nome: "👥 Sociologia",
    descricao: "Estude a sociedade e suas relações.",
    estudo: "Aqui você poderá estudar cultura, sociedade, relações sociais e formas de organização.",
    dica: "Relacione os conceitos com situações da sociedade."
  }

};


/* =========================================
   ABRIR UMA MATÉRIA
========================================= */

window.abrirMateria = function(chave) {

  var materia = materias[chave];

  if (!materia) {
    return;
  }

  document.getElementById("nomeMateria").textContent = materia.nome;

  document.getElementById("descricaoMateria").textContent =
    materia.descricao;

  document.getElementById("textoEstudo").textContent =
    materia.estudo;

  document.getElementById("dicaMateria").textContent =
    materia.dica;

  document.getElementById("pergunta").value = "";

  document.getElementById("resposta").style.display = "none";

  document.getElementById("resposta").textContent = "";

  abrirPagina("materia");
};


/* =========================================
   DÚVIDAS
   (SEM IA)
========================================= */

window.responderDuvida = function() {

  var pergunta =
    document.getElementById("pergunta").value.trim().toLowerCase();

  var resposta =
    document.getElementById("resposta");

  if (pergunta === "") {

    resposta.textContent =
      "Digite uma dúvida primeiro.";

    resposta.style.display = "block";

    return;
  }


  var texto =
    "Ainda não temos uma IA conectada. " +
    "Por enquanto, esta área funciona como um sistema básico " +
    "de estudo. Em uma próxima versão poderemos adicionar uma IA.";


  if (
    pergunta.includes("2+2") ||
    pergunta.includes("quanto é 2 + 2") ||
    pergunta.includes("quanto é 2+2")
  ) {

    texto = "2 + 2 = 4.";

  }


  if (
    pergunta.includes("capital do brasil")
  ) {

    texto = "A capital do Brasil é Brasília.";

  }


  if (
    pergunta.includes("segunda guerra")
  ) {

    texto =
      "A Segunda Guerra Mundial aconteceu entre 1939 e 1945.";

  }


  if (
    pergunta.includes("átomo") ||
    pergunta.includes("atomo")
  ) {

    texto =
      "O átomo é uma unidade básica da matéria.";

  }


  resposta.textContent = "📘 " + texto;

  resposta.style.display = "block";
};


/* =========================================
   CALCULADORA
========================================= */

window.adicionar = function(valor) {

  var display =
    document.getElementById("display");

  display.value += valor;
};


window.limpar = function() {

  document.getElementById("display").value = "";

  document.getElementById("resultadoCalculadora").textContent = "";
};


window.calcular = function() {

  var display =
    document.getElementById("display");

  var resultado =
    document.getElementById("resultadoCalculadora");

  var conta = display.value;

  if (conta === "") {
    return;
  }


  /* Permite somente números e operações básicas */

  if (!/^[0-9+\-*/.() ]+$/.test(conta)) {

    resultado.textContent = "Conta inválida.";

    return;
  }


  try {

    var valor =
      Function(
        '"use strict"; return (' + conta + ')'
      )();

    if (!Number.isFinite(valor)) {

      resultado.textContent =
        "Conta inválida.";

      return;
    }

    display.value = valor;

    resultado.textContent =
      "Resultado: " + valor;

  } catch (erro) {

    resultado.textContent =
      "Conta inválida.";

  }

};


/* =========================================
   GARANTE QUE O SITE COMECE NO INÍCIO
========================================= */

window.addEventListener("load", function() {

  abrirPagina("inicio");

});
