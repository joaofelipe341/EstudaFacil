
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const subjects = [
    {
      id: "matematica", name: "Matemática", emoji: "➗",
      description: "Números, operações e resolução de problemas.",
      topics: [
        ["Operações básicas", "Adição soma valores; subtração calcula a diferença; multiplicação representa somas repetidas; divisão reparte em partes iguais."],
        ["Frações", "Uma fração representa partes de um todo. Em 3/4, o 3 é o numerador e o 4 é o denominador."],
        ["Porcentagem", "Porcentagem é uma razão sobre 100. Por exemplo, 25% de 200 é 50."]
      ]
    },
    {
      id: "portugues", name: "Português", emoji: "📖",
      description: "Leitura, escrita, gramática e interpretação.",
      topics: [
        ["Classes de palavras", "Substantivos nomeiam seres e coisas; verbos indicam ações ou estados; adjetivos caracterizam os substantivos."],
        ["Interpretação de texto", "Identifique o assunto, a ideia principal, as informações explícitas e o sentido das palavras no contexto."],
        ["Pontuação", "Ponto final encerra uma frase; vírgula organiza elementos e pausas; interrogação marca perguntas."]
      ]
    },
    {
      id: "ciencias", name: "Ciências", emoji: "🔬",
      description: "Natureza, matéria, energia e seres vivos.",
      topics: [
        ["Método científico", "Observar, formular uma pergunta, propor uma hipótese, testar e analisar resultados são etapas comuns de uma investigação."],
        ["Ecossistemas", "Um ecossistema reúne os seres vivos e os fatores não vivos de um ambiente e suas interações."],
        ["Corpo humano", "O corpo possui sistemas que trabalham juntos, como os sistemas digestório, respiratório e circulatório."]
      ]
    },
    {
      id: "geografia", name: "Geografia", emoji: "🌍",
      description: "Lugares, mapas, população e meio ambiente.",
      topics: [
        ["Mapas", "Mapas representam espaços geográficos. Legenda, escala, orientação e título ajudam na leitura."],
        ["Clima e tempo", "Tempo é a condição atmosférica em um momento. Clima corresponde aos padrões observados durante longos períodos."],
        ["População", "A geografia da população estuda distribuição, crescimento, migrações e características demográficas."]
      ]
    },
    {
      id: "historia", name: "História", emoji: "🏛️",
      description: "Sociedades, acontecimentos e transformações ao longo do tempo.",
      topics: [
        ["Fontes históricas", "Documentos, fotografias, objetos, relatos e construções ajudam a investigar o passado."],
        ["Linha do tempo", "Uma linha do tempo organiza acontecimentos em ordem cronológica."],
        ["Brasil", "A história do Brasil envolve povos indígenas, colonização portuguesa, escravidão, independência e muitas transformações sociais."]
      ]
    },
    {
      id: "ingles", name: "Inglês", emoji: "🔤",
      description: "Vocabulário, leitura e expressões em inglês.",
      topics: [
        ["Cumprimentos", "Hello significa olá; good morning significa bom dia; goodbye significa tchau."],
        ["Verbo to be", "O verbo to be pode significar ser ou estar. Exemplos: I am, you are, he is."],
        ["Vocabulário", "Aprenda palavras em frases e revise com frequência para entender seu uso."]
      ]
    },
    {
      id: "fisica", name: "Física", emoji: "⚡",
      description: "Movimento, forças, energia e fenômenos físicos.",
      topics: [
        ["Movimento", "Velocidade média é a distância percorrida dividida pelo tempo gasto, quando expressa nessa forma simples."],
        ["Força", "Forças podem mudar o movimento ou deformar objetos. São medidas em newtons."],
        ["Energia", "A energia aparece em formas como cinética, potencial, térmica, elétrica e química."]
      ]
    },
    {
      id: "quimica", name: "Química", emoji: "🧪",
      description: "Matéria, átomos, substâncias e reações.",
      topics: [
        ["Átomos", "Átomos possuem um núcleo com prótons e nêutrons e elétrons ao redor."],
        ["Tabela periódica", "A tabela periódica organiza os elementos químicos pelo número atômico e por propriedades."],
        ["Transformações", "Transformações físicas alteram estado ou forma; transformações químicas produzem substâncias diferentes."]
      ]
    },
    {
      id: "biologia", name: "Biologia", emoji: "🧬",
      description: "Vida, células, organismos e ecossistemas.",
      topics: [
        ["Células", "A célula é a unidade básica dos seres vivos. Alguns organismos possuem uma célula; outros, muitas."],
        ["Genética", "A genética estuda a hereditariedade e a variação. O DNA contém informações genéticas."],
        ["Ecologia", "A ecologia investiga as relações dos seres vivos entre si e com o ambiente."]
      ]
    },
    {
      id: "filosofia", name: "Filosofia", emoji: "🤔",
      description: "Pensamento crítico, conhecimento, ética e existência.",
      topics: [
        ["Pensamento crítico", "Analisar razões, verificar pressupostos e comparar argumentos ajuda a avaliar ideias."],
        ["Ética", "A ética reflete sobre ações, valores, deveres e o que consideramos justo ou correto."],
        ["Conhecimento", "A epistemologia investiga questões como o que podemos conhecer e como justificamos nossas crenças."]
      ]
    },
    {
      id: "sociologia", name: "Sociologia", emoji: "👥",
      description: "Sociedade, cultura, instituições e relações sociais.",
      topics: [
        ["Cultura", "Cultura inclui valores, práticas, conhecimentos, símbolos e costumes aprendidos socialmente."],
        ["Socialização", "Socialização é o processo pelo qual aprendemos normas e práticas da vida em sociedade."],
        ["Instituições sociais", "Família, escola, Estado e outras instituições influenciam a organização da vida coletiva."]
      ]
    }
  ];

  const readStore = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  };

  const saveStore = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  };

  let completed = readStore("estudafacil_completed", []);
  if (!Array.isArray(completed)) completed = [];
  completed = completed.filter(id => subjects.some(s => s.id === id));

  let studentName = readStore("estudafacil_name", "");
  if (typeof studentName !== "string") studentName = "";
  let currentSubject = null;
  let currentPage = "inicio";

  const notice = $("#notice");

  function showNotice(message) {
    notice.textContent = message;
    notice.hidden = false;
  }

  function goToPage(page) {
    const allowed = [
      "inicio", "materias", "materia", "calculadora",
      "dicas", "progresso", "perfil"
    ];
    if (!allowed.includes(page)) page = "inicio";
    if (page === "materia" && !currentSubject) page = "materias";

    currentPage = page;
    $$(".page").forEach(section => {
      section.classList.toggle("active", section.id === "page-" + page);
    });

    $$(".nav-btn[data-page]").forEach(button => {
      const target = button.dataset.page;
      button.classList.toggle(
        "active",
        target === page || (page === "materia" && target === "materias")
      );
    });

    $("#sidebar").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").setAttribute("aria-label", "Abrir menu");
    notice.hidden = true;

    if (page === "progresso") renderProgress();
    if (page === "perfil") updateProfile();
    if (page === "inicio") updateHome();

    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // Navegação: todos os botões com data-page abrem a página correspondente.
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (!button) return;

    event.preventDefault();
    const page = button.dataset.page;

    if (page === "materia") return;
    goToPage(page);
  });

  $("#menuToggle").addEventListener("click", () => {
    const open = $("#sidebar").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
    $("#menuToggle").setAttribute(
      "aria-label", open ? "Fechar menu" : "Abrir menu"
    );
  });

  function renderSubjects(filter = "") {
    const grid = $("#subjectGrid");
    const term = filter.trim().toLocaleLowerCase("pt-BR");
    const filtered = subjects.filter(s =>
      (s.name + " " + s.description).toLocaleLowerCase("pt-BR").includes(term)
    );

    grid.replaceChildren();
    $("#noSubjects").hidden = filtered.length !== 0;

    filtered.forEach(subject => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "subject-card";

      const emoji = document.createElement("span");
      emoji.className = "subject-emoji";
      emoji.textContent = subject.emoji;

      const title = document.createElement("strong");
      title.textContent = subject.name;

      const description = document.createElement("p");
      description.textContent = subject.description;

      const status = document.createElement("p");
      status.textContent = completed.includes(subject.id)
        ? "✓ Matéria estudada"
        : "Toque para estudar →";

      button.append(emoji, title, description, status);
      button.addEventListener("click", () => openSubject(subject.id));
      grid.append(button);
    });
  }

  function openSubject(id) {
    const subject = subjects.find(s => s.id === id);
    if (!subject) {
      showNotice("Não foi possível encontrar essa matéria.");
      return;
    }

    currentSubject = subject;
    $("#subjectTitle").textContent = subject.emoji + " " + subject.name;
    $("#subjectDescription").textContent = subject.description;

    const content = $("#subjectContent");
    content.replaceChildren();

    subject.topics.forEach(([title, explanation]) => {
      const article = document.createElement("article");
      article.className = "topic";

      const heading = document.createElement("h3");
      heading.textContent = title;

      const paragraph = document.createElement("p");
      paragraph.textContent = explanation;

      article.append(heading, paragraph);
      content.append(article);
    });

    $("#doubtInput").value = "";
    $("#doubtAnswer").textContent = "";
    $("#doubtAnswer").hidden = true;

    $("#finishSubject").textContent = completed.includes(id)
      ? "✓ Matéria já estudada — desmarcar"
      : "✓ Marcar como estudada";

    goToPage("materia");
  }

  $("#subjectSearch").addEventListener("input", event => {
    renderSubjects(event.target.value);
  });

  // Pesquisa respostas nos conteúdos educativos disponíveis.
  $("#doubtForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!currentSubject) return;

    const question = $("#doubtInput").value.trim().toLocaleLowerCase("pt-BR");
    const answer = $("#doubtAnswer");
    if (!question) return;

    const topic = currentSubject.topics.find(([title, explanation]) =>
      (title + " " + explanation).toLocaleLowerCase("pt-BR")
        .split(/[.,;:!?()\s]+/)
        .filter(word => word.length > 3)
        .some(word => question.includes(word))
    );

    const fallback = currentSubject.topics.find(([title]) =>
      question.includes(title.toLocaleLowerCase("pt-BR"))
    );

    const result = topic || fallback;

    answer.textContent = result
      ? result[0] + "\n\n" + result[1]
      : "Ainda não encontrei uma resposta para essa pergunta nos conteúdos desta matéria. Tente pesquisar uma palavra do resumo ou consulte seu professor ou material didático.";
    answer.hidden = false;
  });

  // Progresso das matérias.
  function renderProgress() {
    const count = completed.length;
    const percent = Math.round(count / subjects.length * 100);

    $("#progressCount").textContent = count + " de " + subjects.length + " matérias";
    $("#progressPercent").textContent = percent + "%";
    $("#progressBar").style.width = percent + "%";
    $("#progressMessage").textContent = count === subjects.length
      ? "Parabéns! Você marcou todas as matérias como estudadas."
      : count === 0
        ? "Comece estudando qualquer matéria."
        : "Continue assim! Você já marcou " + count + " matéria(s).";

    const list = $("#progressList");
    list.replaceChildren();

    subjects.forEach(subject => {
      const row = document.createElement("div");
      row.className = "progress-item";

      const label = document.createElement("span");
      label.textContent = subject.emoji + " " + subject.name +
        (completed.includes(subject.id) ? " — Concluída" : " — Pendente");

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = completed.includes(subject.id) ? "Desmarcar" : "Marcar";
      button.addEventListener("click", () => toggleCompleted(subject.id));

      row.append(label, button);
      list.append(row);
    });
  }

  function toggleCompleted(id) {
    if (completed.includes(id)) {
      completed = completed.filter(item => item !== id);
    } else {
      completed.push(id);
    }

    const saved = saveStore("estudafacil_completed", completed);
    renderProgress();
    renderSubjects($("#subjectSearch").value);
    updateHome();

    if (currentSubject && currentSubject.id === id) {
      $("#finishSubject").textContent = completed.includes(id)
        ? "✓ Matéria já estudada — desmarcar"
        : "✓ Marcar como estudada";
    }

    showNotice(saved
      ? "Progresso atualizado!"
      : "Progresso atualizado nesta sessão, mas não foi possível salvá-lo no navegador.");
  }

  $("#finishSubject").addEventListener("click", () => {
    if (currentSubject) toggleCompleted(currentSubject.id);
  });

  $("#resetProgress").addEventListener("click", () => {
    if (completed.length === 0) {
      showNotice("Seu progresso já está zerado.");
      return;
    }

    if (!window.confirm("Quer mesmo zerar o progresso de todas as matérias?")) {
      return;
    }

    completed = [];
    const saved = saveStore("estudafacil_completed", completed);
    renderProgress();
    renderSubjects($("#subjectSearch").value);
    updateHome();
    showNotice(saved
      ? "Seu progresso foi zerado."
      : "O progresso foi zerado nesta sessão, mas não pôde ser salvo.");
  });

  // Perfil do estudante.
  function updateProfile() {
    $("#studentName").value = studentName;
  }

  function updateHome() {
    $("#welcomeTitle").textContent = studentName
      ? "Olá, " + studentName + "! 👋"
      : "Olá! 👋";

    $("#homeProgress").textContent = completed.length === 0
      ? "Você ainda não marcou matérias como estudadas. Escolha uma para começar!"
      : "Você já marcou " + completed.length + " de " + subjects.length +
        " matérias como estudadas. Continue aprendendo!";
  }

  $("#profileForm").addEventListener("submit", event => {
    event.preventDefault();
    studentName = $("#studentName").value.trim().slice(0, 50);

    const saved = saveStore("estudafacil_name", studentName);
    updateHome();

    $("#profileMessage").textContent = saved
      ? "Perfil salvo neste navegador!"
      : "Não foi possível salvar o perfil neste navegador.";

    showNotice(saved ? "Perfil atualizado!" : "Não foi possível salvar o perfil.");
  });

  $("#logoutBtn").addEventListener("click", () => {
    goToPage("inicio");
    showNotice("Você voltou ao menu principal. Seus dados salvos foram mantidos.");
  });

  // Calculadora com análise segura de expressões; não usa eval().
  const display = $("#calcDisplay");
  const calcMessage = $("#calcMessage");
  let expression = "";
  let justCalculated = false;

  function updateDisplay() {
    display.value = expression
      .replace(/\*/g, "×")
      .replace(/\//g, "÷") || "0";
  }

  function calculate(source) {
    const input = source.replace(/\s/g, "");
    if (!input || !/^[0-9+\-*/().]+$/.test(input)) {
      throw new Error("Conta inválida.");
    }

    let position = 0;

    function parseExpression() {
      let value = parseTerm();
      while (input[position] === "+" || input[position] === "-") {
        const operator = input[position++];
        const next = parseTerm();
        value = operator === "+" ? value + next : value - next;
      }
      return value;
    }

    function parseTerm() {
      let value = parseUnary();
      while (input[position] === "*" || input[position] === "/") {
        const operator = input[position++];
        const next = parseUnary();
        if (operator === "/" && next === 0) {
          throw new Error("Não é possível dividir por zero.");
        }
        value = operator === "*" ? value * next : value / next;
      }
      return value;
    }

    function parseUnary() {
      if (input[position] === "+") {
        position++;
        return parseUnary();
      }
      if (input[position] === "-") {
        position++;
        return -parseUnary();
      }
      return parsePrimary();
    }

    function parsePrimary() {
      if (input[position] === "(") {
        position++;
        const value = parseExpression();
        if (input[position] !== ")") {
          throw new Error("Confira os parênteses.");
        }
        position++;
        return value;
      }

      const start = position;
      let dots = 0;
      while (/[0-9.]/.test(input[position] || "")) {
        if (input[position] === ".") dots++;
        if (dots > 1) throw new Error("Número inválido.");
        position++;
      }

      if (position === start) throw new Error("Confira a conta.");
      const number = Number(input.slice(start, position));
      if (!Number.isFinite(number)) throw new Error("Número inválido.");
      return number;
    }

    const result = parseExpression();
    if (position !== input.length || !Number.isFinite(result)) {
      throw new Error("Confira a conta.");
    }
    if (Math.abs(result) > 1e15) throw new Error("Resultado muito grande.");
    return Number(result.toPrecision(12));
  }

  function calculateAction() {
    try {
      const result = calculate(expression);
      expression = String(result);
      justCalculated = true;
      updateDisplay();
      calcMessage.textContent = "Resultado: " + expression;
    } catch (error) {
      calcMessage.textContent = error.message || "Conta inválida.";
    }
  }

  $$(".calc-grid button").forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.calc;

      if (action === "clear") {
        expression = "";
        justCalculated = false;
        calcMessage.textContent = "Calculadora limpa.";
        updateDisplay();
        return;
      }

      if (action === "backspace") {
        expression = expression.slice(0, -1);
        justCalculated = false;
        updateDisplay();
        return;
      }

      if (action === "equals") {
        calculateAction();
        return;
      }

      const value = button.dataset.value;
      if (!value) return;

      if (justCalculated && /[0-9.(]/.test(value)) {
        expression = "";
      }
      justCalculated = false;

      if (expression.length >= 100) {
        calcMessage.textContent = "Conta muito longa. Limpe a calculadora para continuar.";
        return;
      }

      expression += value;
      updateDisplay();
      calcMessage.textContent = "Use = para ver o resultado.";
    });
  });

  // Inicialização.
  renderSubjects();
  renderProgress();
  updateProfile();
  updateHome();
  goToPage("inicio");
});
