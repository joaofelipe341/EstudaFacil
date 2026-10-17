
const subjects = [
  {
    id: "matematica",
    name: "Matemática",
    emoji: "🧮",
    description: "Números, cálculos e problemas.",
    content: `
      <h3>O que estudar</h3>
      <p>A Matemática ajuda a resolver problemas usando números, operações e raciocínio lógico.</p>
      <h3>Operações básicas</h3>
      <ul>
        <li><strong>Adição:</strong> 5 + 3 = 8.</li>
        <li><strong>Subtração:</strong> 9 - 4 = 5.</li>
        <li><strong>Multiplicação:</strong> 6 × 3 = 18.</li>
        <li><strong>Divisão:</strong> 12 ÷ 4 = 3.</li>
      </ul>
      <h3>Frações</h3>
      <p>Uma fração representa partes de um todo. Em 1/2, temos uma de duas partes iguais.</p>
      <h3>Pratique</h3>
      <p>Quanto é 7 × 8? Resposta: 56.</p>`
  },
  {
    id: "portugues",
    name: "Português",
    emoji: "📖",
    description: "Leitura, gramática e escrita.",
    content: `
      <h3>Interpretação de texto</h3>
      <p>Leia com atenção e identifique o tema, a ideia principal e a intenção do autor.</p>
      <h3>Classes de palavras</h3>
      <ul>
        <li><strong>Substantivo:</strong> nomeia seres, lugares e coisas.</li>
        <li><strong>Adjetivo:</strong> caracteriza um substantivo.</li>
        <li><strong>Verbo:</strong> indica ação, estado ou fenômeno.</li>
        <li><strong>Advérbio:</strong> modifica o sentido de um verbo, adjetivo ou outro advérbio.</li>
      </ul>
      <h3>Exemplo</h3>
      <p>Em “A menina estudiosa leu”, menina é substantivo, estudiosa é adjetivo e leu é verbo.</p>`
  },
  {
    id: "ciencias",
    name: "Ciências",
    emoji: "🔬",
    description: "Natureza, matéria e seres vivos.",
    content: `
      <h3>O método científico</h3>
      <p>A ciência investiga fenômenos por meio de observações, perguntas, hipóteses, testes e análise de resultados.</p>
      <h3>Ecossistemas</h3>
      <p>Um ecossistema reúne seres vivos e elementos não vivos que interagem, como plantas, animais, água, ar e solo.</p>
      <h3>Corpo humano</h3>
      <p>Os sistemas do corpo trabalham juntos para manter o organismo funcionando.</p>`
  },
  {
    id: "geografia",
    name: "Geografia",
    emoji: "🌎",
    description: "Espaço geográfico, mapas e clima.",
    content: `
      <h3>Espaço geográfico</h3>
      <p>É o espaço transformado e utilizado pelas sociedades ao longo do tempo.</p>
      <h3>Mapas</h3>
      <p>Mapas representam lugares. A legenda explica símbolos, a escala relaciona distâncias e a orientação indica direções.</p>
      <h3>Clima e tempo</h3>
      <p>Tempo atmosférico descreve as condições de um momento. Clima é o padrão observado durante longos períodos.</p>`
  },
  {
    id: "historia",
    name: "História",
    emoji: "🏛️",
    description: "Sociedades e acontecimentos do passado.",
    content: `
      <h3>Fontes históricas</h3>
      <p>Documentos, fotografias, objetos, construções e relatos ajudam a estudar o passado.</p>
      <h3>Brasil</h3>
      <p>A história do Brasil inclui povos indígenas, colonização portuguesa, escravidão, independência, formação da República e muitas transformações sociais.</p>
      <h3>Como estudar</h3>
      <p>Organize os acontecimentos em uma linha do tempo e observe suas causas e consequências.</p>`
  },
  {
    id: "ingles",
    name: "Inglês",
    emoji: "🌐",
    description: "Vocabulário e expressões.",
    content: `
      <h3>Saudações</h3>
      <ul>
        <li>Hello = Olá.</li>
        <li>Good morning = Bom dia.</li>
        <li>Good afternoon = Boa tarde.</li>
        <li>Good night = Boa noite.</li>
        <li>Thank you = Obrigado(a).</li>
      </ul>
      <h3>Verbo to be</h3>
      <p>I am = eu sou/estou; you are = você é/está; he is = ele é/está; she is = ela é/está.</p>
      <h3>Dica</h3>
      <p>Aprenda palavras em frases curtas e pratique a pronúncia regularmente.</p>`
  },
  {
    id: "fisica",
    name: "Física",
    emoji: "⚡",
    description: "Movimento, energia e forças.",
    content: `
      <h3>Movimento</h3>
      <p>A velocidade média pode ser calculada dividindo a distância percorrida pelo tempo gasto.</p>
      <p><strong>Fórmula:</strong> velocidade média = distância ÷ tempo.</p>
      <h3>Forças</h3>
      <p>Forças podem alterar o movimento ou deformar objetos. A gravidade atrai os corpos uns em direção aos outros.</p>
      <h3>Energia</h3>
      <p>A energia pode se apresentar em diferentes formas, como térmica, elétrica, química e cinética.</p>`
  },
  {
    id: "quimica",
    name: "Química",
    emoji: "⚗️",
    description: "Matéria, átomos e transformações.",
    content: `
      <h3>Matéria</h3>
      <p>Matéria é aquilo que possui massa e ocupa espaço.</p>
      <h3>Átomos</h3>
      <p>Átomos possuem núcleo com prótons e nêutrons e elétrons ao redor. Prótons têm carga positiva, elétrons negativa e nêutrons não têm carga elétrica.</p>
      <h3>Transformações</h3>
      <p>Uma transformação física altera características como estado ou forma. Uma transformação química forma substâncias diferentes.</p>`
  },
  {
    id: "biologia",
    name: "Biologia",
    emoji: "🧬",
    description: "Vida, células e organismos.",
    content: `
      <h3>Células</h3>
      <p>A célula é a unidade básica estrutural e funcional dos seres vivos.</p>
      <h3>Ecologia</h3>
      <p>A ecologia estuda as relações entre os organismos e o ambiente.</p>
      <h3>Fotossíntese</h3>
      <p>Plantas usam energia luminosa para produzir açúcares a partir de água e dióxido de carbono, liberando oxigênio no processo.</p>`
  },
  {
    id: "filosofia",
    name: "Filosofia",
    emoji: "💭",
    description: "Pensamento crítico e grandes perguntas.",
    content: `
      <h3>O que é Filosofia?</h3>
      <p>É a investigação crítica de questões sobre conhecimento, realidade, ética e existência.</p>
      <h3>Argumentação</h3>
      <p>Um argumento apresenta razões para sustentar uma conclusão. Avalie se as razões realmente apoiam a conclusão.</p>
      <h3>Ética</h3>
      <p>A ética reflete sobre ações, valores, responsabilidades e o que consideramos justo.</p>`
  },
  {
    id: "sociologia",
    name: "Sociologia",
    emoji: "👥",
    description: "Sociedade, cultura e relações sociais.",
    content: `
      <h3>Sociedade</h3>
      <p>A Sociologia estuda as relações sociais, os grupos, as instituições e as mudanças na sociedade.</p>
      <h3>Cultura</h3>
      <p>Cultura inclui conhecimentos, costumes, valores, práticas e símbolos compartilhados e transformados pelas pessoas.</p>
      <h3>Desigualdade social</h3>
      <p>É a distribuição desigual de recursos, oportunidades e condições de vida entre grupos sociais.</p>`
  }
];

const tips = [
  "Estude em períodos curtos e faça pequenas pausas.",
  "Explique o conteúdo com suas próprias palavras.",
  "Faça exercícios para verificar o que aprendeu.",
  "Revise o assunto depois de um tempo, em vez de estudar tudo de uma vez.",
  "Deixe o celular longe quando precisar de concentração.",
  "Durma bem e organize um horário de estudo realista."
];

const completedKey = "estudafacil_completed";
const nameKey = "estudafacil_name";

let completed = loadCompleted();
let currentSubject = null;

function loadCompleted() {
  try {
    const value = JSON.parse(localStorage.getItem(completedKey) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveCompleted() {
  try {
    localStorage.setItem(completedKey, JSON.stringify(completed));
  } catch {}
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function goToPage(page) {
  document.querySelectorAll(".page").forEach(section => {
    section.classList.toggle("active", section.id === `page-${page}`);
  });

  document.querySelectorAll(".nav-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  if (page === "materias") renderSubjects();
  if (page === "progresso") renderProgress();
  if (page === "perfil") renderProfile();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSubjects() {
  const grid = document.getElementById("subjectGrid");
  if (!grid) return;

  const search = (document.getElementById("subjectSearch")?.value || "")
    .trim().toLocaleLowerCase("pt-BR");

  const filtered = subjects.filter(subject =>
    subject.name.toLocaleLowerCase("pt-BR").includes(search)
  );

  grid.innerHTML = filtered.length
    ? filtered.map(subject => `
      <button class="subject-card" data-subject="${subject.id}">
        <span class="emoji">${subject.emoji}</span>
        <h3>${subject.name}</h3>
        <p>${subject.description}</p>
      </button>
    `).join("")
    : "<p>Nenhuma matéria encontrada.</p>";
}

function openSubject(id) {
  const subject = subjects.find(item => item.id === id);
  if (!subject) return;

  currentSubject = subject;
  const title = document.getElementById("subjectTitle");
  const content = document.getElementById("subjectContent");
  const doneButton = document.getElementById("completeSubjectBtn");

  if (title) title.textContent = `${subject.emoji} ${subject.name}`;
  if (content) content.innerHTML = subject.content;
  if (doneButton) {
    doneButton.textContent = completed.includes(id)
      ? "✓ Matéria concluída"
      : "Marcar como concluída";
  }

  goToPage("materia");
}

function toggleCompleted() {
  if (!currentSubject) return;

  const id = currentSubject.id;
  if (completed.includes(id)) {
    completed = completed.filter(item => item !== id);
  } else {
    completed.push(id);
  }

  saveCompleted();
  const button = document.getElementById("completeSubjectBtn");
  if (button) {
    button.textContent = completed.includes(id)
      ? "✓ Matéria concluída"
      : "Marcar como concluída";
  }
}

function renderProgress() {
  const count = document.getElementById("completedCount");
  const total = document.getElementById("totalCount");
  const percent = document.getElementById("progressPercent");
  const fill = document.getElementById("progressFill");
  const list = document.getElementById("completedList");

  const amount = completed.length;
  const percentage = Math.round(amount / subjects.length * 100);

  if (count) count.textContent = amount;
  if (total) total.textContent = subjects.length;
  if (percent) percent.textContent = `${percentage}%`;
  if (fill) fill.style.width = `${percentage}%`;

  if (list) {
    list.innerHTML = completed.length
      ? completed.map(id => {
          const subject = subjects.find(item => item.id === id);
          return subject ? `<li>${subject.emoji} ${subject.name}</li>` : "";
        }).join("")
      : "<li>Você ainda não concluiu nenhuma matéria.</li>";
  }
}

function renderProfile() {
  const nameInput = document.getElementById("profileName");
  if (!nameInput) return;

  try {
    nameInput.value = localStorage.getItem(nameKey) || "";
  } catch {
    nameInput.value = "";
  }
}

function saveProfile(event) {
  event?.preventDefault();

  const input = document.getElementById("profileName");
  const message = document.getElementById("profileMessage");
  if (!input) return;

  const name = input.value.trim();

  try {
    if (name) localStorage.setItem(nameKey, name);
    else localStorage.removeItem(nameKey);

    if (message) message.textContent = name
      ? `Perfil salvo! Olá, ${name}.`
      : "Nome removido do perfil.";
  } catch {
    if (message) message.textContent = "Não foi possível salvar neste navegador.";
  }

  updateWelcome();
}

function updateWelcome() {
  const welcome = document.getElementById("welcomeName");
  if (!welcome) return;

  try {
    const name = localStorage.getItem(nameKey);
    welcome.textContent = name ? `Olá, ${name}! 👋` : "Olá! 👋";
  } catch {
    welcome.textContent = "Olá! 👋";
  }
}

function askDoubt(event) {
  event?.preventDefault();

  const input = document.getElementById("doubtInput");
  const answer = document.getElementById("doubtAnswer");
  if (!input || !answer) return;

  const question = input.value.trim().toLocaleLowerCase("pt-BR");
  if (!question) {
    answer.textContent = "Digite sua dúvida primeiro.";
    return;
  }

  const rules = [
    {
      words: ["fração", "frações"],
      response: "Uma fração representa partes de um todo. O número de cima é o numerador e o de baixo é o denominador. Exemplo: 1/2 representa uma de duas partes iguais."
    },
    {
      words: ["multiplicação", "multiplicar", "vezes", "tabuada"],
      response: "Multiplicar é somar parcelas iguais. Exemplo: 4 × 3 = 4 + 4 + 4 = 12."
    },
    {
      words: ["divisão", "dividir"],
      response: "Dividir é repartir em partes iguais. Exemplo: 12 ÷ 3 = 4, porque cada uma das três partes recebe quatro."
    },
    {
      words: ["substantivo", "verbo", "adjetivo", "português", "gramática"],
      response: "Substantivo nomeia; verbo indica ação, estado ou fenômeno; adjetivo caracteriza. Exemplo: “A menina alegre corre”: menina é substantivo, alegre é adjetivo e corre é verbo."
    },
    {
      words: ["inglês", "english", "to be"],
      response: "O verbo to be significa ser ou estar. Formas comuns: I am, you are, he is, she is, it is, we are e they are."
    },
    {
      words: ["fotossíntese"],
      response: "Na fotossíntese, plantas usam energia luminosa para produzir açúcares a partir de água e dióxido de carbono. O processo libera oxigênio."
    },
    {
      words: ["velocidade", "física"],
      response: "A velocidade média é calculada dividindo a distância percorrida pelo tempo gasto. Exemplo: 100 km em 2 horas = 50 km/h."
    },
    {
      words: ["átomo", "átomos", "química"],
      response: "Um átomo tem um núcleo com prótons e nêutrons, e elétrons ao redor. Prótons têm carga positiva, elétrons negativa e nêutrons não têm carga elétrica."
    },
    {
      words: ["história"],
      response: "Para estudar História, organize os acontecimentos em uma linha do tempo e observe suas causas, consequências e diferentes fontes históricas."
    },
    {
      words: ["geografia", "clima", "mapa"],
      response: "Geografia estuda o espaço geográfico e a relação entre sociedade e natureza. Mapas representam lugares, e a legenda explica os símbolos."
    },
    {
      words: ["filosofia", "ética"],
      response: "Filosofia investiga questões sobre conhecimento, realidade e existência. Ética é a reflexão sobre ações, valores, responsabilidades e justiça."
    },
    {
      words: ["sociologia", "sociedade"],
      response: "Sociologia estuda as relações sociais, os grupos, as instituições, a cultura e as mudanças da sociedade."
    },
    {
      words: ["biologia", "célula", "células"],
      response: "A célula é a unidade básica estrutural e funcional dos seres vivos. Alguns organismos têm uma célula e outros possuem muitas."
    },
    {
      words: ["ciências", "ecossistema"],
      response: "Um ecossistema reúne seres vivos e elementos não vivos que interagem, como plantas, animais, água, ar e solo."
    },
    {
      words: ["estudar", "concentração", "prova", "memoriz"],
      response: "Tente estudar em blocos curtos, afastar distrações, explicar o conteúdo com suas palavras e resolver exercícios. Faça pausas e revise depois."
    }
  ];

  const found = rules.find(rule =>
    rule.words.some(word => question.includes(word))
  );

  answer.textContent = found
    ? found.response
    : "Ainda não tenho uma resposta específica para essa pergunta. Experimente perguntar sobre frações, multiplicação, Português, Inglês, Ciências, História ou outra matéria usando palavras-chave.";
}

function renderTips() {
  const list = document.getElementById("tipsList");
  if (!list) return;

  list.innerHTML = tips.map((tip, index) => `
    <div class="tip-item">
      <strong>Dica ${index + 1}</strong>
      <p>${tip}</p>
    </div>
  `).join("");
}

function normalizeExpression(expression) {
  return expression
    .replace(/,/g, ".")
    .replace(/[×x]/gi, "*")
    .replace(/÷/g, "/")
    .replace(/\s+/g, "");
}

function calculateExpression(expression) {
  const input = normalizeExpression(expression);
  let position = 0;

  function parseExpression() {
    let value = parseTerm();

    while (position < input.length) {
      const operator = input[position];
      if (operator !== "+" && operator !== "-") break;
      position++;
      const right = parseTerm();
      value = operator === "+" ? value + right : value - right;
    }

    return value;
  }

  function parseTerm() {
    let value = parseFactor();

    while (position < input.length) {
      const operator = input[position];
      if (operator !== "*" && operator !== "/") break;
      position++;
      const right = parseFactor();

      if (operator === "/" && right === 0) {
        throw new Error("Não é possível dividir por zero.");
      }

      value = operator === "*" ? value * right : value / right;
    }

    return value;
  }

  function parseFactor() {
    if (input[position] === "+") {
      position++;
      return parseFactor();
    }

    if (input[position] === "-") {
      position++;
      return -parseFactor();
    }

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

    while (position < input.length && /[\d.]/.test(input[position])) {
      if (input[position] === ".") dots++;
      position++;
    }

    if (start === position || dots > 1) {
      throw new Error("Confira a expressão.");
    }

    const value = Number(input.slice(start, position));
    if (!Number.isFinite(value)) throw new Error("Número inválido.");
    return value;
  }

  if (!input) throw new Error("Digite uma conta.");

  const result = parseExpression();
  if (position !== input.length) throw new Error("Confira a expressão.");
  if (!Number.isFinite(result)) throw new Error("Resultado inválido.");

  return Number(result.toPrecision(12));
}

function calculatorAction(action) {
  const display = document.getElementById("calcDisplay");
  if (!display) return;

  if (action === "C") {
    display.value = "";
    return;
  }

  if (action === "=") {
    try {
      display.value = String(calculateExpression(display.value));
    } catch (error) {
      display.value = error.message || "Erro";
    }
    return;
  }

  display.value += action;
}

document.addEventListener("click", event => {
  const navButton = event.target.closest(".nav-btn");
  if (navButton) {
    goToPage(navButton.dataset.page);
    return;
  }

  const subjectCard = event.target.closest("[data-subject]");
  if (subjectCard) {
    openSubject(subjectCard.dataset.subject);
    return;
  }

  const calcButton = event.target.closest("[data-calc]");
  if (calcButton) {
    calculatorAction(calcButton.dataset.calc);
    return;
  }

  if (event.target.closest("#completeSubjectBtn")) {
    toggleCompleted();
    return;
  }

  if (event.target.closest("#logoutBtn")) {
    goToPage("inicio");
    return;
  }

  if (event.target.closest("#randomTipBtn")) {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    const randomTip = document.getElementById("randomTip");
    if (randomTip) randomTip.textContent = tip;
  }

  if (event.target.closest("#backToSubjectsBtn")) {
    goToPage("materias");
  }
});

document.addEventListener("input", event => {
  if (event.target.id === "subjectSearch") renderSubjects();
});

document.addEventListener("submit", event => {
  if (event.target.id === "doubtForm") askDoubt(event);
  if (event.target.id === "profileForm") saveProfile(event);
});

document.addEventListener("DOMContentLoaded", () => {
  renderSubjects();
  renderTips();
  updateWelcome();
  renderProgress();
});
