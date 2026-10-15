
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

  // ==========================================
  // 1. NAVEGAÇÃO ENTRE AS PÁGINAS
  // ==========================================

  const nomesPaginas = [
    "inicio",
    "materias",
    "calculadora",
    "duvidas",
    "dicas",
    "progresso",
    "perfil"
  ];

  function encontrarPagina(nome) {
    return (
      document.getElementById(nome) ||
      document.getElementById("page-" + nome) ||
      $('[data-page-content="' + nome + '"]')
    );
  }

  function mostrarPagina(nome) {
    if (!nomesPaginas.includes(nome)) return;

    const destino = encontrarPagina(nome);

    if (!destino) {
      console.warn("Página não encontrada:", nome);
      return;
    }

    nomesPaginas.forEach(function (paginaNome) {
      const pagina = encontrarPagina(paginaNome);
      if (pagina) {
        pagina.hidden = paginaNome !== nome;
        pagina.classList.toggle("active", paginaNome === nome);
      }
    });

    // Compatibilidade com layouts que usam .page.
    $$(".page").forEach(function (pagina) {
      if (pagina === destino) {
        pagina.hidden = false;
        pagina.classList.add("active");
      } else if (
        nomesPaginas.some(function (nomeConhecido) {
          return encontrarPagina(nomeConhecido) === pagina;
        })
      ) {
        pagina.hidden = true;
        pagina.classList.remove("active");
      }
    });

    $$("[data-page]").forEach(function (botao) {
      botao.classList.toggle(
        "active",
        botao.dataset.page === nome
      );
    });

    const sidebar = $("#sidebar");
    if (sidebar) sidebar.classList.remove("open");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $$("[data-page]").forEach(function (botao) {
    botao.addEventListener("click", function () {
      mostrarPagina(botao.dataset.page);
    });
  });

  const logoutBtn = $("#logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      mostrarPagina("inicio");
    });
  }

  const menuToggle = $("#menuToggle");
  const sidebar = $("#sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  // ==========================================
  // 2. AS 11 MATÉRIAS
  // ==========================================

  const materias = [
    {
      nome: "Matemática",
      emoji: "🧮",
      descricao: "Números, operações e problemas.",
      topicos: [
        ["Adição", "Somar é juntar quantidades. Exemplo: 5 + 3 = 8."],
        ["Subtração", "Subtrair é tirar uma quantidade de outra. Exemplo: 9 - 4 = 5."],
        ["Multiplicação", "Multiplicar é somar parcelas iguais. Exemplo: 4 × 3 = 12."],
        ["Divisão", "Dividir é repartir em partes iguais. Exemplo: 12 ÷ 3 = 4."],
        ["Frações", "Uma fração representa partes de um todo. Em 1/2, o todo foi dividido em duas partes iguais e consideramos uma."]
      ]
    },
    {
      nome: "Português",
      emoji: "📚",
      descricao: "Leitura, escrita e gramática.",
      topicos: [
        ["Substantivo", "Palavra que nomeia seres, objetos, lugares, sentimentos e ideias."],
        ["Verbo", "Palavra que pode indicar ação, estado ou fenômeno da natureza."],
        ["Adjetivo", "Palavra que caracteriza um substantivo."],
        ["Interpretação de texto", "Leia o texto com atenção, identifique o assunto e procure as informações que sustentam a resposta."],
        ["Pontuação", "Ponto, vírgula, interrogação e outros sinais ajudam a organizar o sentido do texto."]
      ]
    },
    {
      nome: "Ciências",
      emoji: "🔬",
      descricao: "Natureza, matéria e seres vivos.",
      topicos: [
        ["Seres vivos", "Organismos que apresentam características como organização celular e processos vitais."],
        ["Água", "A água é essencial à vida e pode ser encontrada nos estados sólido, líquido e gasoso."],
        ["Ecossistemas", "São formados pelos seres vivos e pelo ambiente com o qual interagem."],
        ["Corpo humano", "Os sistemas do corpo trabalham juntos para manter seu funcionamento."]
      ]
    },
    {
      nome: "Geografia",
      emoji: "🌎",
      descricao: "Lugares, população e meio ambiente.",
      topicos: [
        ["Cartografia", "Estuda mapas, plantas e outras formas de representar o espaço geográfico."],
        ["Clima e tempo", "Tempo é a condição atmosférica de um momento; clima é o padrão observado durante longos períodos."],
        ["População", "A geografia da população estuda distribuição, crescimento e deslocamentos populacionais."],
        ["Brasil", "O Brasil está na América do Sul e possui cinco grandes regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul."]
      ]
    },
    {
      nome: "História",
      emoji: "🏛️",
      descricao: "Sociedades e acontecimentos do passado.",
      topicos: [
        ["Fontes históricas", "Documentos, objetos, imagens e relatos ajudam a investigar o passado."],
        ["Antiguidade", "Estuda sociedades antigas, como Egito, Grécia e Roma."],
        ["Brasil colonial", "Período iniciado com a colonização portuguesa, marcado por disputas, exploração e resistência."],
        ["Linha do tempo", "Organiza acontecimentos em ordem cronológica."]
      ]
    },
    {
      nome: "Inglês",
      emoji: "🇬🇧",
      descricao: "Vocabulário e comunicação.",
      topicos: [
        ["Cumprimentos", "Hello = olá; good morning = bom dia; goodbye = tchau."],
        ["Pronomes", "I = eu; you = você; he = ele; she = ela; we = nós; they = eles ou elas."],
        ["Verbo to be", "Pode significar ser ou estar. Exemplos: I am, you are, he is."],
        ["Vocabulário", "Book = livro; school = escola; water = água; friend = amigo ou amiga."]
      ]
    },
    {
      nome: "Física",
      emoji: "⚡",
      descricao: "Movimento, energia e fenômenos naturais.",
      topicos: [
        ["Velocidade média", "É a distância percorrida dividida pelo tempo gasto: v = distância ÷ tempo."],
        ["Força", "Uma força pode alterar o movimento ou deformar um objeto."],
        ["Energia", "A energia pode se apresentar de várias formas, como térmica, elétrica, química e cinética."],
        ["Eletricidade", "Estuda fenômenos relacionados às cargas elétricas e à corrente elétrica."]
      ]
    },
    {
      nome: "Química",
      emoji: "⚗️",
      descricao: "Substâncias e transformações da matéria.",
      topicos: [
        ["Matéria", "É tudo aquilo que possui massa e ocupa espaço."],
        ["Átomo", "É formado por um núcleo, com prótons e nêutrons, e elétrons ao seu redor."],
        ["Tabela periódica", "Organiza os elementos químicos de acordo com seu número atômico e propriedades."],
        ["Transformações", "Mudanças físicas alteram características sem formar necessariamente outra substância; mudanças químicas formam novas substâncias."]
      ]
    },
    {
      nome: "Biologia",
      emoji: "🧬",
      descricao: "Vida, organismos e ecossistemas.",
      topicos: [
        ["Células", "São unidades básicas estruturais e funcionais dos seres vivos."],
        ["Fotossíntese", "Processo pelo qual plantas, algas e alguns organismos utilizam luz para produzir matéria orgânica."],
        ["Ecologia", "Estuda as relações entre os seres vivos e o ambiente."],
        ["Genética", "Estuda a hereditariedade e a variação dos seres vivos."]
      ]
    },
    {
      nome: "Filosofia",
      emoji: "💭",
      descricao: "Pensamento crítico e grandes perguntas.",
      topicos: [
        ["Ética", "Reflete sobre valores, escolhas e o que consideramos justo."],
        ["Conhecimento", "Investiga como conhecemos algo e como justificamos nossas crenças."],
        ["Lógica", "Estuda formas de raciocínio e a validade dos argumentos."],
        ["Pensamento crítico", "Consiste em avaliar evidências, argumentos e diferentes pontos de vista."]
      ]
    },
    {
      nome: "Sociologia",
      emoji: "👥",
      descricao: "Sociedade, cultura e relações sociais.",
      topicos: [
        ["Cultura", "Inclui práticas, valores, conhecimentos e costumes compartilhados por grupos."],
        ["Socialização", "É o processo pelo qual aprendemos normas, valores e formas de convivência."],
        ["Desigualdade social", "Refere-se a diferenças de acesso a recursos, oportunidades e direitos."],
        ["Instituições sociais", "Família, escola e Estado são exemplos de instituições que influenciam a vida social."]
      ]
    }
  ];

  const subjectsGrid = $("#subjectsGrid");
  const subjectSearch = $("#subjectSearch");
  const subjectContent = $("#subjectContent");
  const subjectDetails = $("#subjectDetails");
  const backToSubjects = $("#backToSubjects");

  let materiaAtual = null;

  function renderizarMaterias(filtro = "") {
    if (!subjectsGrid) return;

    const termo = filtro.trim().toLocaleLowerCase("pt-BR");
    subjectsGrid.replaceChildren();

    const filtradas = materias.filter(function (materia) {
      return (
        materia.nome.toLocaleLowerCase("pt-BR").includes(termo) ||
        materia.descricao.toLocaleLowerCase("pt-BR").includes(termo)
      );
    });

    if (filtradas.length === 0) {
      const mensagem = document.createElement("p");
      mensagem.textContent = "Nenhuma matéria encontrada.";
      subjectsGrid.appendChild(mensagem);
      return;
    }

    filtradas.forEach(function (materia) {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "subject-card";
      botao.dataset.subject = materia.nome;

      const titulo = document.createElement("h3");
      titulo.textContent = materia.emoji + " " + materia.nome;

      const descricao = document.createElement("p");
      descricao.textContent = materia.descricao;

      botao.append(titulo, descricao);
      botao.addEventListener("click", function () {
        abrirMateria(materia.nome);
      });

      subjectsGrid.appendChild(botao);
    });
  }

  function abrirMateria(nome) {
    const materia = materias.find(function (item) {
      return item.nome === nome;
    });

    if (!materia) return;

    materiaAtual = materia;

    if (subjectContent) subjectContent.hidden = true;
    if (subjectDetails) {
      subjectDetails.hidden = false;
      subjectDetails.replaceChildren();

      const titulo = document.createElement("h2");
      titulo.textContent = materia.emoji + " " + materia.nome;

      const descricao = document.createElement("p");
      descricao.textContent = materia.descricao;

      subjectDetails.append(titulo, descricao);

      materia.topicos.forEach(function (topico, indice) {
        const artigo = document.createElement("article");
        artigo.className = "lesson-card";

        const subtitulo = document.createElement("h3");
        subtitulo.textContent = topico[0];

        const texto = document.createElement("p");
        texto.textContent = topico[1];

        const concluir = document.createElement("button");
        concluir.type = "button";
        concluir.textContent = "Marcar como estudado";
        concluir.addEventListener("click", function () {
          marcarEstudado(materia.nome + "-" + indice);
          concluir.textContent = "✓ Estudado";
          concluir.disabled = true;
        });

        artigo.append(subtitulo, texto, concluir);
        subjectDetails.appendChild(artigo);
      });
    }
  }

  if (subjectSearch) {
    subjectSearch.addEventListener("input", function () {
      renderizarMaterias(subjectSearch.value);
    });
  }

  if (backToSubjects) {
    backToSubjects.addEventListener("click", function () {
      materiaAtual = null;
      if (subjectDetails) subjectDetails.hidden = true;
      if (subjectContent) subjectContent.hidden = false;
    });
  }

  renderizarMaterias();

  // ==========================================
  // 3. CALCULADORA
  // ==========================================

  const calcDisplay = $("#calcDisplay");
  const calcMessage = $("#calcMessage");

  function mensagemCalculadora(texto) {
    if (calcMessage) calcMessage.textContent = texto;
  }

  function calcular(expressao) {
    const tokens = expressao
      .replace(/,/g, ".")
      .replace(/[x×]/gi, "*")
      .replace(/÷/g, "/")
      .replace(/\s+/g, "")
      .match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/]/g);

    if (!tokens || tokens.join("") !== expressao
      .replace(/,/g, ".")
      .replace(/[x×]/gi, "*")
      .replace(/÷/g, "/")
      .replace(/\s+/g, "")) {
      throw new Error("Digite uma conta válida.");
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

      if (token && /^(\d+\.?\d*|\.\d+)$/.test(token)) {
        posicao++;
        return Number(token);
      }

      throw new Error("Confira a conta digitada.");
    }

    const resultado = expressao();

    if (posicao !== tokens.length || !Number.isFinite(resultado)) {
      throw new Error("Conta inválida.");
    }

    return Number(resultado.toFixed(10)).toString();
  }

  function executarConta() {
    if (!calcDisplay) return;

    try {
      calcDisplay.value = calcular(calcDisplay.value);
      mensagemCalculadora("");
    } catch (erro) {
      mensagemCalculadora(erro.message || "Não foi possível calcular.");
    }
  }

  function tratarBotaoCalculadora(botao) {
    if (!calcDisplay) return;

    const valor = (
      botao.dataset.value ||
      botao.dataset.action ||
      botao.textContent
    ).trim();

    if (valor === "=" || valor === "calcular") {
      executarConta();
    } else if (
      valor === "C" ||
      valor === "c" ||
      valor === "limpar"
    ) {
      calcDisplay.value = "";
      mensagemCalculadora("");
    } else if (
      valor === "⌫" ||
      valor === "apagar"
    ) {
      calcDisplay.value = calcDisplay.value.slice(0, -1);
      mensagemCalculadora("");
    } else if (/^[0-9()+\-*/.,x×÷]$/.test(valor)) {
      calcDisplay.value += valor;
      mensagemCalculadora("");
    }
  }

  if (calcDisplay) {
    calcDisplay.addEventListener("keydown", function (evento) {
      if (evento.key === "Enter" || evento.key === "=") {
        evento.preventDefault();
        executarConta();
      } else if (evento.key === "Escape") {
        calcDisplay.value = "";
        mensagemCalculadora("");
      }
    });
  }

  document.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button");
    if (!botao) return;

    if (
      botao.dataset.calc !== undefined ||
      botao.closest("#calculadora") ||
      botao.closest(".calculator")
    ) {
      if (
        botao.dataset.page !== undefined ||
        botao.id === "logoutBtn"
      ) return;

      tratarBotaoCalculadora(botao);
    }
  });

  // ==========================================
  // 4. SISTEMA DE DÚVIDAS SEM IA
  // ==========================================

  const doubtForm = $("#doubtForm");
  const doubtSubject = $("#doubtSubject");
  const doubtInput = $("#doubtInput");
  const doubtAnswer = $("#doubtAnswer");
  const suggestedQuestions = $("#suggestedQuestions");

  const respostas = [
    {
      termos: ["quanto é 5+5", "5 + 5", "soma"],
      resposta: "Para somar 5 + 5, junte cinco unidades com mais cinco unidades. O resultado é 10."
    },
    {
      termos: ["fotossíntese"],
      resposta: "Fotossíntese é o processo em que plantas, algas e alguns organismos usam a energia da luz para produzir matéria orgânica. Em geral, utilizam água e dióxido de carbono e liberam oxigênio."
    },
    {
      termos: ["substantivo"],
      resposta: "Substantivo é a palavra que nomeia seres, objetos, lugares, sentimentos ou ideias. Exemplos: casa, estudante, Brasil e alegria."
    },
    {
      termos: ["fração", "frações"],
      resposta: "Fração representa partes de um todo. Por exemplo, 1/2 significa uma de duas partes iguais."
    },
    {
      termos: ["segunda guerra", "segunda guerra mundial"],
      resposta: "A Segunda Guerra Mundial ocorreu de 1939 a 1945. Envolveu países de diferentes continentes e terminou com a derrota das potências do Eixo."
    },
    {
      termos: ["verbo to be", "to be"],
      resposta: "O verbo to be pode significar ser ou estar. No presente: I am, you are, he is, she is, it is, we are, they are."
    },
    {
      termos: ["velocidade média"],
      resposta: "A velocidade média é calculada dividindo a distância percorrida pelo tempo gasto: velocidade média = distância ÷ tempo."
    },
    {
      termos: ["átomo", "átomos"],
      resposta: "O átomo é formado por um núcleo com prótons e, geralmente, nêutrons, além de elétrons que ocupam a região ao redor do núcleo."
    },
    {
      termos: ["célula", "células"],
      resposta: "A célula é a unidade básica estrutural e funcional dos seres vivos. Existem organismos unicelulares e organismos formados por muitas células."
    },
    {
      termos: ["ética"],
      resposta: "Ética é a reflexão sobre valores, escolhas, responsabilidades e o que consideramos correto ou justo."
    },
    {
      termos: ["clima"],
      resposta: "Clima é o conjunto de padrões atmosféricos observados em uma região durante longos períodos. Tempo descreve as condições de um momento."
    }
  ];

  function responderDuvida(pergunta, materia) {
    const texto = pergunta.toLocaleLowerCase("pt-BR");

    const resposta = respostas.find(function (item) {
      return item.termos.some(function (termo) {
        return texto.includes(termo);
      });
    });

    if (resposta) return resposta.resposta;

    const itemMateria = materias.find(function (item) {
      return item.nome === materia;
    });

    if (itemMateria) {
      const topico = itemMateria.topicos.find(function (item) {
        return pergunta.toLocaleLowerCase("pt-BR")
          .includes(item[0].toLocaleLowerCase("pt-BR"));
      });

      if (topico) return topico[1];
    }

    return (
      "Ainda não tenho uma resposta pronta para essa pergunta. " +
      "Este sistema funciona sem inteligência artificial e usa explicações cadastradas. " +
      "Tente perguntar sobre um dos assuntos sugeridos ou consulte o conteúdo da matéria."
    );
  }

  function mostrarResposta(pergunta) {
    if (!doubtAnswer || !doubtInput) return;

    const materia = doubtSubject ? doubtSubject.value : "";
    const texto = responderDuvida(pergunta, materia);

    doubtAnswer.textContent = texto;
    doubtAnswer.hidden = false;
  }

  if (doubtForm) {
    doubtForm.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const pergunta = doubtInput ? doubtInput.value.trim() : "";

      if (!pergunta) {
        if (doubtAnswer) {
          doubtAnswer.textContent = "Escreva sua dúvida primeiro.";
          doubtAnswer.hidden = false;
        }
        return;
      }

      mostrarResposta(pergunta);
    });
  }

  if (suggestedQuestions) {
    suggestedQuestions.addEventListener("click", function (evento) {
      const botao = evento.target.closest("button");
      if (!botao) return;

      const pergunta =
        botao.dataset.question || botao.textContent.trim();

      if (doubtInput) doubtInput.value = pergunta;
      mostrarResposta(pergunta);
    });
  }

  // ==========================================
  // 5. DICAS DE ESTUDO
  // ==========================================

  const dicas = [
    "Estude em blocos curtos e faça pequenas pausas.",
    "Anote os pontos mais importantes com suas próprias palavras.",
    "Resolva exercícios para praticar o conteúdo.",
    "Revise o assunto em outros dias para ajudar a lembrar.",
    "Afaste distrações e escolha um lugar adequado para estudar.",
    "Explique o conteúdo em voz alta como se estivesse ensinando alguém.",
    "Divida tarefas grandes em metas pequenas e possíveis.",
    "Quando errar um exercício, procure entender o motivo do erro."
  ];

  const dicaAtual = $("#dicaAtual");
  const novaDica = $("#novaDica");

  function mostrarDica() {
    if (!dicaAtual) return;

    const indice = Math.floor(Math.random() * dicas.length);
    dicaAtual.textContent = dicas[indice];
  }

  if (novaDica) {
    novaDica.addEventListener("click", mostrarDica);
  }

  // ==========================================
  // 6. PROGRESSO DOS ESTUDOS
  // ==========================================

  const progressCount = $("#progressCount");
  const progressBar = $("#progressBar");
  const progressText = $("#progressText");
  const progressList = $("#progressList");
  const resetProgress = $("#resetProgress");

  const CHAVE_PROGRESSO = "estudafacil_progresso_v1";

  function lerProgresso() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || [];
    } catch {
      return [];
    }
  }

  function salvarProgresso(lista) {
    try {
      localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(lista));
    } catch {
      console.warn("Não foi possível salvar o progresso neste navegador.");
    }
  }

  function marcarEstudado(id) {
    const lista = lerProgresso();

    if (!lista.includes(id)) {
      lista.push(id);
      salvarProgresso(lista);
    }

    atualizarProgresso();
  }

  function atualizarProgresso() {
    const lista = lerProgresso();
    const total = materias.reduce(function (soma, materia) {
      return soma + materia.topicos.length;
    }, 0);

    const concluidos = lista.length;
    const percentual = total
      ? Math.min(100, Math.round((concluidos / total) * 100))
      : 0;

    if (progressCount) {
      progressCount.textContent = concluidos + " conteúdos";
    }

    if (progressBar) {
      progressBar.style.width = percentual + "%";
      progressBar.setAttribute("aria-valuenow", String(percentual));
    }

    if (progressText) {
      progressText.textContent = percentual + "% concluído";
    }

    if (progressList) {
      progressList.replaceChildren();

      if (lista.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Seu progresso aparecerá aqui quando você marcar conteúdos como estudados.";
        progressList.appendChild(mensagem);
      } else {
        lista.forEach(function (id) {
          const linha = document.createElement("p");
          linha.textContent = "✅ " + id.replace("-", " — ");
          progressList.appendChild(linha);
        });
      }
    }
  }

  if (resetProgress) {
    resetProgress.addEventListener("click", function () {
      const confirmar = window.confirm(
        "Quer realmente apagar seu progresso salvo neste navegador?"
      );

      if (!confirmar) return;

      salvarProgresso([]);
      atualizarProgresso();
    });
  }

  atualizarProgresso();

  // ==========================================
  // 7. PERFIL
  // ==========================================

  const profileForm = $("#profileForm");
  const profileName = $("#profileName");
  const profileGoal = $("#profileGoal");
  const profileMessage = $("#profileMessage");

  const CHAVE_PERFIL = "estudafacil_perfil_v1";

  function carregarPerfil() {
    try {
      const perfil = JSON.parse(localStorage.getItem(CHAVE_PERFIL));

      if (perfil) {
        if (profileName) profileName.value = perfil.nome || "";
        if (profileGoal) profileGoal.value = perfil.meta || "";
      }
    } catch {
      console.warn("Não foi possível carregar o perfil salvo.");
    }
  }

  if (profileForm) {
    profileForm.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const perfil = {
        nome: profileName ? profileName.value.trim() : "",
        meta: profileGoal ? profileGoal.value.trim() : ""
      };

      try {
        localStorage.setItem(CHAVE_PERFIL, JSON.stringify(perfil));

        if (profileMessage) {
          profileMessage.textContent = "Perfil salvo com sucesso!";
        }
      } catch {
        if (profileMessage) {
          profileMessage.textContent =
            "Não foi possível salvar. Tente novamente neste navegador.";
        }
      }
    });
  }

  carregarPerfil();

  // ==========================================
  // 8. INICIAR O SITE
  // ==========================================

  const paginaInicial = encontrarPagina("inicio");

  if (paginaInicial) {
    mostrarPagina("inicio");
  }

  console.log("EstudaFácil iniciado.");
});
