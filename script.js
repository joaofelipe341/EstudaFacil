
document.addEventListener("DOMContentLoaded", () => {
  const $ = (seletor) => document.querySelector(seletor);
  const $$ = (seletor) => [...document.querySelectorAll(seletor)];

  // Salvamento simples no navegador
  const lerDados = () => {
    try {
      return JSON.parse(localStorage.getItem("estudafacilDados")) || {};
    } catch {
      return {};
    }
  };

  let dados = {
    contas: 0,
    materias: [],
    nome: "",
    ...lerDados()
  };

  function salvarDados() {
    try {
      localStorage.setItem("estudafacilDados", JSON.stringify(dados));
    } catch {
      // O site continua funcionando se o navegador bloquear o armazenamento.
    }
  }

  // NAVEGAÇÃO ENTRE PÁGINAS
  function abrirPagina(id) {
    const pagina = document.getElementById(id);
    if (!pagina || !pagina.classList.contains("pagina")) return;

    $$(".pagina").forEach((p) => p.classList.add("escondida"));
    pagina.classList.remove("escondida");

    $$(".nav-btn").forEach((botao) => {
      botao.classList.toggle("ativo", botao.dataset.page === id);
    });

    $("#menu")?.classList.remove("aberto");
    atualizarProgresso();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $$(".nav-btn").forEach((botao) => {
    botao.addEventListener("click", () => abrirPagina(botao.dataset.page));
  });

  $$("[data-go]").forEach((botao) => {
    botao.addEventListener("click", () => abrirPagina(botao.dataset.go));
  });

  $("#menuBtn").addEventListener("click", () => {
    $("#menu").classList.toggle("aberto");
  });

  // MATÉRIAS E EXPLICAÇÕES BÁSICAS
  const materias = [
    {
      nome: "Matemática",
      emoji: "➗",
      texto: "Estuda números, operações, medidas, formas e resolução de problemas. Exemplo: 5 + 5 = 10."
    },
    {
      nome: "Português",
      emoji: "📖",
      texto: "Estuda leitura, interpretação, escrita, gramática e ortografia. Uma boa dica é ler o texto inteiro antes de responder às perguntas."
    },
    {
      nome: "Ciências",
      emoji: "🔬",
      texto: "Investiga a natureza, os seres vivos, a matéria, a energia e o ambiente."
    },
    {
      nome: "Geografia",
      emoji: "🌎",
      texto: "Estuda os lugares, paisagens, população, clima e a relação entre as pessoas e o espaço."
    },
    {
      nome: "História",
      emoji: "🏛️",
      texto: "Estuda acontecimentos e sociedades do passado para compreender como o mundo mudou ao longo do tempo."
    },
    {
      nome: "Inglês",
      emoji: "🇬🇧",
      texto: "Aprende vocabulário, leitura, escrita e conversação. Exemplo: “Hello” significa “Olá”."
    },
    {
      nome: "Física",
      emoji: "⚡",
      texto: "Estuda fenômenos como movimento, forças, energia, luz, calor e eletricidade."
    },
    {
      nome: "Química",
      emoji: "🧪",
      texto: "Estuda a matéria, suas propriedades, sua composição e as transformações que ela sofre."
    },
    {
      nome: "Biologia",
      emoji: "🧬",
      texto: "Estuda os seres vivos, suas células, seu funcionamento, sua evolução e suas relações com o ambiente."
    },
    {
      nome: "Filosofia",
      emoji: "💭",
      texto: "Investiga perguntas sobre conhecimento, ética, justiça, existência e como pensamos."
    },
    {
      nome: "Sociologia",
      emoji: "👥",
      texto: "Estuda a sociedade, os grupos sociais, a cultura, as instituições e as relações entre as pessoas."
    }
  ];

  const listaMaterias = $("#listaMaterias");
  const detalheMateria = $("#detalheMateria");

  materias.forEach((materia) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "materia-btn";
    botao.textContent = `${materia.emoji} ${materia.nome}`;

    botao.addEventListener("click", () => {
      detalheMateria.classList.remove("escondida");
      detalheMateria.textContent = `${materia.emoji} ${materia.nome}\n\n${materia.texto}`;

      $$(".materia-btn").forEach((b) => b.classList.remove("selecionada"));
      botao.classList.add("selecionada");

      if (!dados.materias.includes(materia.nome)) {
        dados.materias.push(materia.nome);
        salvarDados();
      }

      atualizarProgresso();
    });

    listaMaterias.appendChild(botao);
  });

  // PESQUISA DE DÚVIDAS CADASTRADAS
  const respostas = [
    {
      termos: ["fotossintese", "fotossíntese"],
      resposta: "Fotossíntese é o processo pelo qual plantas, algas e alguns outros organismos usam a energia da luz para produzir açúcares a partir de água e gás carbônico. Nesse processo, geralmente há liberação de oxigênio."
    },
    {
      termos: ["gravidade"],
      resposta: "Gravidade é a interação que atrai corpos que possuem massa. Na Terra, ela nos mantém no chão e faz objetos caírem quando são soltos."
    },
    {
      termos: ["celula", "célula", "celulas", "células"],
      resposta: "A célula é a unidade básica dos seres vivos. Alguns organismos possuem uma única célula; outros, como os seres humanos, possuem muitas."
    },
    {
      termos: ["historia", "história"],
      resposta: "História é o estudo das sociedades e das ações humanas ao longo do tempo, com base em fontes como documentos, objetos, imagens e relatos."
    },
    {
      termos: ["substantivo"],
      resposta: "Substantivo é a palavra usada para nomear pessoas, animais, objetos, lugares, sentimentos e ideias. Exemplos: escola, cachorro, Brasil e alegria."
    },
    {
      termos: ["verbo"],
      resposta: "Verbo é a palavra que pode expressar ação, estado ou fenômeno da natureza. Exemplos: estudar, ser e chover."
    },
    {
      termos: ["multiplicacao", "multiplicação", "multiplicar"],
      resposta: "Multiplicação é uma forma de somar parcelas iguais. Exemplo: 3 × 4 = 12, pois 4 + 4 + 4 = 12."
    },
    {
      termos: ["divisao", "divisão", "dividir"],
      resposta: "Divisão é repartir uma quantidade em partes iguais ou descobrir quantas vezes uma quantidade cabe em outra. Exemplo: 12 ÷ 3 = 4."
    },
    {
      termos: ["revolucao francesa", "revolução francesa"],
      resposta: "A Revolução Francesa começou em 1789. Foi um período de profundas mudanças políticas e sociais na França, ligado a ideias de liberdade, igualdade e cidadania."
    },
    {
      termos: ["ingles", "inglês", "hello"],
      resposta: "Em inglês, “hello” significa “olá”. Outras palavras úteis: “good morning” = “bom dia”; “thank you” = “obrigado(a)”."
    },
    {
      termos: ["planeta", "sistema solar"],
      resposta: "O Sistema Solar é formado pelo Sol e pelos corpos que orbitam ao seu redor, incluindo oito planetas, luas, asteroides e cometas."
    },
    {
      termos: ["agua", "água"],
      resposta: "A água pura é formada por moléculas H₂O: cada molécula tem dois átomos de hidrogênio e um de oxigênio."
    }
  ];

  function normalizar(texto) {
    return texto
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function pesquisarDuvida() {
    const pergunta = $("#buscaMateria").value.trim();
    const saida = $("#respostaDuvida");

    if (!pergunta) {
      saida.textContent = "Digite uma dúvida antes de pesquisar.";
      return;
    }

    const texto = normalizar(pergunta);
    const resposta = respostas.find((item) =>
      item.termos.some((termo) => texto.includes(normalizar(termo)))
    );

    if (resposta) {
      saida.textContent = resposta.resposta;
    } else {
      saida.textContent =
        "Ainda não tenho uma explicação cadastrada para essa pergunta. Tente pesquisar por palavras como fotossíntese, gravidade, célula, substantivo, verbo ou Revolução Francesa.";
    }
  }

  $("#buscarDuvida").addEventListener("click", pesquisarDuvida);
  $("#buscaMateria").addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") pesquisarDuvida();
  });

  // CALCULADORA: interpreta apenas operações matemáticas permitidas.
  const visor = $("#visor");
  const resultadoConta = $("#resultadoConta");

  function calcularExpressao(expressao) {
    let texto = expressao
      .replace(/[×xX]/g, "*")
      .replace(/÷/g, "/")
      .replace(/[−–]/g, "-")
      .replace(/,/g, ".")
      .replace(/\s+/g, "");

    if (!texto) throw new Error("Digite uma conta.");
    if (!/^[0-9+\-*/().]+$/.test(texto)) {
      throw new Error("Use apenas números e operações matemáticas.");
    }

    const tokens = texto.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/]/g);
    if (!tokens || tokens.join("") !== texto) {
      throw new Error("Confira os números e os sinais da conta.");
    }

    let posicao = 0;

    function expressao() {
      let valor = termo();

      while (tokens[posicao] === "+" || tokens[posicao] === "-") {
        const operador = tokens[posicao++];
        const proximo = termo();
        valor = operador === "+" ? valor + proximo : valor - proximo;
      }

      return valor;
    }

    function termo() {
      let valor = fator();

      while (tokens[posicao] === "*" || tokens[posicao] === "/") {
        const operador = tokens[posicao++];
        const proximo = fator();

        if (operador === "/" && proximo === 0) {
          throw new Error("Não é possível dividir por zero.");
        }

        valor = operador === "*" ? valor * proximo : valor / proximo;
      }

      return valor;
    }

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
        const valor = expressao();

        if (tokens[posicao] !== ")") {
          throw new Error("Confira os parênteses.");
        }

        posicao++;
        return valor;
      }

      if (token !== undefined && /^\d*\.?\d+$/.test(token)) {
        posicao++;
        return Number(token);
      }

      throw new Error("Confira a conta digitada.");
    }

    const valor = expressao();

    if (posicao !== tokens.length || !Number.isFinite(valor)) {
      throw new Error("Não foi possível calcular essa conta.");
    }

    return Object.is(valor, -0)
      ? "0"
      : Number(valor.toPrecision(12)).toString();
  }

  function executarCalculo() {
    try {
      const resultado = calcularExpressao(visor.value);
      resultadoConta.textContent = `Resultado: ${resultado}`;
      dados.contas = (Number(dados.contas) || 0) + 1;
      salvarDados();
      atualizarProgresso();
    } catch (erro) {
      resultadoConta.textContent = erro.message || "Confira a conta digitada.";
    }
  }

  $$(".teclas button").forEach((botao) => {
    botao.addEventListener("click", () => {
      const tecla = botao.dataset.key;
      const acao = botao.dataset.action;

      if (tecla !== undefined) {
        visor.value += tecla;
        visor.focus();
      } else if (acao === "limpar") {
        visor.value = "";
        resultadoConta.textContent = "O resultado aparecerá aqui.";
        visor.focus();
      } else if (acao === "apagar") {
        visor.value = visor.value.slice(0, -1);
        visor.focus();
      } else if (acao === "calcular") {
        executarCalculo();
      }
    });
  });

  visor.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === "=") {
      evento.preventDefault();
      executarCalculo();
    }
  });

  // DICAS DE ESTUDO
  const dicas = [
    "Estude em blocos curtos e faça pequenas pausas entre eles.",
    "Tente explicar com suas próprias palavras aquilo que acabou de aprender.",
    "Resolva exercícios e confira onde errou para entender melhor o assunto.",
    "Afaste notificações e outras distrações durante o estudo.",
    "Anote as dúvidas para pesquisar ou perguntar depois.",
    "Revise o conteúdo em outros dias, não apenas na véspera da prova.",
    "Divida tarefas grandes em etapas pequenas e possíveis de concluir."
  ];

  let dicaAtual = 0;

  function mostrarDicas() {
    const lista = $("#listaDicas");
    lista.replaceChildren();

    [0, 1, 2].forEach((offset) => {
      const indice = (dicaAtual + offset) % dicas.length;
      const card = document.createElement("div");
      card.className = "dica";
      card.textContent = `💡 ${dicas[indice]}`;
      lista.appendChild(card);
    });
  }

  $("#novaDica").addEventListener("click", () => {
    dicaAtual = (dicaAtual + 1) % dicas.length;
    mostrarDicas();
  });

  // PROGRESSO
  function atualizarProgresso() {
    $("#totalContas").textContent = Number(dados.contas) || 0;
    $("#totalMaterias").textContent = dados.materias.length;
  }

  $("#limparProgresso").addEventListener("click", () => {
    if (confirm("Quer reiniciar seu progresso salvo neste navegador?")) {
      dados.contas = 0;
      dados.materias = [];
      salvarDados();
      atualizarProgresso();
    }
  });

  // PERFIL
  $("#nomePerfil").value = dados.nome || "";

  $("#salvarPerfil").addEventListener("click", () => {
    dados.nome = $("#nomePerfil").value.trim();
    salvarDados();
    $("#mensagemPerfil").textContent = dados.nome
      ? `Nome salvo! Olá, ${dados.nome}!`
      : "Digite um nome antes de salvar.";
  });

  // INICIALIZAÇÃO
  mostrarDicas();
  atualizarProgresso();
  abrirPagina("inicio");
});
