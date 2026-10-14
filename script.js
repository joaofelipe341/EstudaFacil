"use strict";

const $ = (seletor) => document.querySelector(seletor);

const materias = {
  "Matemática": {
    descricao: "Estude números, operações, frações, porcentagens e geometria."
  },
  "Português": {
    descricao: "Pratique leitura, interpretação de textos, gramática e escrita."
  },
  "Ciências": {
    descricao: "Aprenda sobre a natureza, os seres vivos e o ambiente."
  },
  "Geografia": {
    descricao: "Estude mapas, continentes, clima, população e paisagens."
  },
  "História": {
    descricao: "Conheça acontecimentos, sociedades e mudanças ao longo do tempo."
  },
  "Inglês": {
    descricao: "Pratique vocabulário, expressões, leitura e frases em inglês."
  },
  "Física": {
    descricao: "Conheça movimento, energia, força, luz e eletricidade."
  },
  "Química": {
    descricao: "Aprenda sobre matéria, substâncias, elementos e transformações."
  },
  "Biologia": {
    descricao: "Estude os seres vivos, células, ecossistemas e corpo humano."
  },
  "Filosofia": {
    descricao: "Explore ideias, conhecimento, ética e pensamento crítico."
  },
  "Sociologia": {
    descricao: "Estude sociedade, cultura, grupos sociais e relações humanas."
  }
};

function mostrarPagina(id) {
  const destino = document.getElementById(id);
  if (!destino) return;

  document.querySelectorAll(".pagina").forEach((pagina) => {
    pagina.classList.remove("ativa");
  });

  destino.classList.add("ativa");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach((botao) => {
  botao.addEventListener("click", () => {
    mostrarPagina(botao.dataset.page);
  });
});

$("#sairBtn").addEventListener("click", () => {
  mostrarPagina("inicio");
});

function criarListaMaterias() {
  const lista = $("#listaMaterias");

  Object.keys(materias).forEach((nome) => {
    const botao = document.createElement("button");
    botao.textContent = nome;
    botao.addEventListener("click", () => abrirMateria(nome));
    lista.appendChild(botao);
  });
}

function abrirMateria(nome) {
  const materia = materias[nome];
  if (!materia) return;

  $("#tituloMateria").textContent = nome;
  $("#descricaoMateria").textContent = materia.descricao;
  $("#pergunta").value = "";
  $("#respostaDuvida").textContent = "";
  $("#areaMateria").hidden = false;
  $("#areaMateria").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

$("#voltarMaterias").addEventListener("click", () => {
  $("#areaMateria").hidden = true;
  $("#respostaDuvida").textContent = "";
  $("#listaMaterias").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/*
  Sistema básico de explicações por palavras-chave.
  Não é uma IA e não consegue responder a todas as perguntas.
*/
$("#formDuvida").addEventListener("submit", (evento) => {
  evento.preventDefault();

  const pergunta = $("#pergunta").value.trim().toLocaleLowerCase("pt-BR");
  const materia = $("#tituloMateria").textContent;
  let resposta = "";

  if (!pergunta) {
    resposta = "Escreva sua dúvida primeiro.";
  } else if (
    pergunta.includes("fração") ||
    pergunta.includes("fracao")
  ) {
    resposta = "Uma fração representa partes de um todo. Em 1/2, por exemplo, o 1 indica uma parte e o 2 indica duas partes iguais no total.";
  } else if (
    pergunta.includes("porcentagem") ||
    pergunta.includes("por cento")
  ) {
    resposta = "Porcentagem é uma parte de cada 100. Por exemplo, 50% representa 50 de cada 100, ou metade.";
  } else if (
    pergunta.includes("substantivo")
  ) {
    resposta = "Substantivo é a palavra que nomeia pessoas, lugares, objetos, sentimentos ou ideias. Exemplos: casa, Brasil e alegria.";
  } else if (
    pergunta.includes("verbo")
  ) {
    resposta = "Verbo é uma palavra que pode expressar ação, estado ou fenômeno da natureza. Exemplos: estudar, estar e chover.";
  } else if (
    pergunta.includes("fotossíntese") ||
    pergunta.includes("fotossintese")
  ) {
    resposta = "Fotossíntese é o processo pelo qual plantas, algas e alguns organismos usam energia da luz para produzir matéria orgânica a partir de água e dióxido de carbono.";
  } else if (
    pergunta.includes("capital do brasil")
  ) {
    resposta = "A capital do Brasil é Brasília, localizada no Distrito Federal.";
  } else if (
    pergunta.includes("segunda guerra")
  ) {
    resposta = "A Segunda Guerra Mundial ocorreu de 1939 a 1945 e envolveu países de diferentes partes do mundo.";
  } else if (
    pergunta.includes("força") ||
    pergunta.includes("forca")
  ) {
    resposta = "Em Física, força é uma interação capaz de alterar o movimento de um objeto ou deformá-lo.";
  } else if (
    pergunta.includes("átomo") ||
    pergunta.includes("atomo")
  ) {
    resposta = "Um átomo é formado por um núcleo, que contém prótons e nêutrons, e elétrons ao redor dele.";
  } else if (
    pergunta.includes("célula") ||
    pergunta.includes("celula")
  ) {
    resposta = "A célula é a unidade básica estrutural e funcional dos seres vivos.";
  } else if (
    pergunta.includes("inglês") ||
    pergunta.includes("ingles") ||
    pergunta.includes("hello")
  ) {
    resposta = 'Em inglês, "hello" significa "olá". Para aprender mais, experimente perguntar sobre uma palavra específica.';
  } else {
    resposta = "Ainda não tenho uma explicação pronta para essa pergunta. Tente escrever de outra forma ou procure o assunto no material da matéria: " + materia + ".";
  }

  $("#respostaDuvida").textContent = resposta;
});

/* Calculadora com operações básicas e parênteses. */

function calcularExpressao(expressao) {
  const tokens = expressao.match(
    /\d+(?:\.\d+)?|[()+\-*/]/g
  );

  if (!tokens || tokens.join("") !== expressao.replace(/\s/g, "")) {
    throw new Error("Expressão inválida");
  }

  let posicao = 0;

  function fator() {
    const token = tokens[posicao];

    if (token === "+") {
      posicao++;
      return fator();
    }

    if (token === "-") {
      posicao++;
      return -fator();
    }

    if (token === "(") {
      posicao++;
      const valor = expressaoSoma();

      if (tokens[posicao] !== ")") {
        throw new Error("Falta fechar parênteses");
      }

      posicao++;
      return valor;
    }

    if (token && /^\d+(?:\.\d+)?$/.test(token)) {
      posicao++;
      return Number(token);
    }

    throw new Error("Número inválido");
  }

  function expressaoMultiplicacao() {
    let valor = fator();

    while (
      tokens[posicao] === "*" ||
      tokens[posicao] === "/"
    ) {
      const operador = tokens[posicao++];
      const proximo = fator();

      if (operador === "/" && proximo === 0) {
        throw new Error("Não é possível dividir por zero");
      }

      valor = operador === "*" ? valor * proximo : valor / proximo;
    }

    return valor;
  }

  function expressaoSoma() {
    let valor = expressaoMultiplicacao();

    while (
      tokens[posicao] === "+" ||
      tokens[posicao] === "-"
    ) {
      const operador = tokens[posicao++];
      const proximo = expressaoMultiplicacao();

      valor = operador === "+" ? valor + proximo : valor - proximo;
    }

    return valor;
  }

  const resultado = expressaoSoma();

  if (posicao !== tokens.length || !Number.isFinite(resultado)) {
    throw new Error("Expressão inválida");
  }

  return resultado;
}

const visor = $("#visor");

document.querySelectorAll("[data-value]").forEach((botao) => {
  botao.addEventListener("click", () => {
    visor.value += botao.dataset.value;
    $("#resultadoConta").textContent = "";
  });
});

$("#limparBtn").addEventListener("click", () => {
  visor.value = "";
  $("#resultadoConta").textContent = "";
});

$("#apagarBtn").addEventListener("click", () => {
  visor.value = visor.value.slice(0, -1);
  $("#resultadoConta").textContent = "";
});

function executarCalculo() {
  try {
    const expressao = visor.value.trim();

    if (!expressao) {
      $("#resultadoConta").textContent = "Digite uma conta primeiro.";
      return;
    }

    const resultado = calcularExpressao(expressao);
    $("#resultadoConta").textContent = "Resultado: " + resultado;
  } catch (erro) {
    $("#resultadoConta").textContent =
      erro.message === "Não é possível dividir por zero"
        ? erro.message
        : "Conta inválida. Confira os números e os sinais.";
  }
}

$("#calcularBtn").addEventListener("click", executarCalculo);

visor.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    executarCalculo();
  }
});

/* Progresso guardado neste navegador. */

function lerSessoes() {
  try {
    return Math.max(
      0,
      Number.parseInt(localStorage.getItem("estudaFacilSessoes"), 10) || 0
    );
  } catch {
    return 0;
  }
}

let sessoes = lerSessoes();

function atualizarProgresso() {
  $("#totalProgresso").textContent = "Sessões concluídas: " + sessoes;

  try {
    localStorage.setItem("estudaFacilSessoes", String(sessoes));
  } catch {
    // O site continua funcionando mesmo se o navegador bloquear o armazenamento.
  }
}

$("#concluirSessao").addEventListener("click", () => {
  sessoes++;
  atualizarProgresso();
});

$("#desfazerSessao").addEventListener("click", () => {
  sessoes = Math.max(0, sessoes - 1);
  atualizarProgresso();
});

/* Perfil salvo neste navegador. */

$("#formPerfil").addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = $("#nome").value.trim();

  if (!nome) {
    $("#mensagemPerfil").textContent = "Digite seu nome primeiro.";
    return;
  }

  $("#mensagemPerfil").textContent = "Nome salvo! Olá, " + nome + "! 💜";
  $("#boasVindas").textContent = "Olá, " + nome + "! 👋";

  try {
    localStorage.setItem("estudaFacilNome", nome);
  } catch {
    // O perfil funciona durante esta visita, mesmo sem armazenamento.
  }
});

function iniciarSite() {
  criarListaMaterias();
  atualizarProgresso();

  try {
    const nomeSalvo = localStorage.getItem("estudaFacilNome");

    if (nomeSalvo) {
      $("#nome").value = nomeSalvo;
      $("#boasVindas").textContent = "Olá, " + nomeSalvo + "! 👋";
      $("#mensagemPerfil").textContent = "Seu nome está salvo.";
    }
  } catch {
    // O site pode ser usado mesmo sem armazenamento local.
  }

  mostrarPagina("inicio");
}

iniciarSite();
