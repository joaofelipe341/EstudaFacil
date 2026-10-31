"use strict";

/* =====================================
   ESTUDAFÁCIL — JAVASCRIPT
   ===================================== */

const subjects = [
  {
    id: "matematica", name: "Matemática", icon: "➗",
    description: "Números, operações e raciocínio lógico.",
    lessons: [
      ["As quatro operações", "Adição é juntar quantidades. Subtração é retirar ou comparar. Multiplicação representa uma soma repetida. Divisão é repartir em partes iguais.", "Exemplo: 5 + 3 = 8; 9 − 4 = 5; 3 × 4 = 12; 12 ÷ 3 = 4."],
      ["Frações", "Uma fração representa uma parte de um todo. O número de cima é o numerador e o de baixo é o denominador.", "Exemplo: 1/2 representa uma de duas partes iguais."],
      ["Porcentagem", "Porcentagem significa uma parte de cada cem. Para calcular, multiplique o valor pela porcentagem e divida por 100.", "Exemplo: 20% de 50 = 50 × 20 ÷ 100 = 10."],
      ["Equações", "Uma equação é uma igualdade que contém um valor desconhecido. O objetivo é encontrar esse valor mantendo a igualdade.", "Exemplo: x + 3 = 8. Então x = 8 − 3 = 5."],
      ["Geometria", "A geometria estuda formas, tamanhos, posições e medidas. O perímetro é a soma dos lados e a área mede a superfície.", "Exemplo: a área de um retângulo é base × altura."]
    ]
  },
  {
    id: "portugues", name: "Português", icon: "📝",
    description: "Leitura, escrita e gramática.",
    lessons: [
      ["Substantivos", "Substantivos são palavras que dão nome a pessoas, animais, lugares, objetos, sentimentos e ideias.", "Exemplos: escola, cachorro, alegria e professora."],
      ["Verbos", "Verbos indicam ações, estados ou fenômenos. Eles podem variar conforme o tempo e a pessoa.", "Exemplos: estudar, correr, ser e chover."],
      ["Adjetivos", "Adjetivos são palavras que caracterizam os substantivos, indicando qualidades ou características.", "Exemplos: casa bonita, aluno dedicado e dia ensolarado."],
      ["Interpretação de texto", "Interpretar um texto é compreender suas informações, identificar o assunto principal e perceber o que o autor quer comunicar.", "Dica: leia com atenção, observe o título e procure as ideias principais."],
      ["Pontuação", "A pontuação organiza as frases e ajuda a transmitir o sentido correto.", "O ponto encerra uma frase. A vírgula separa elementos. A interrogação indica pergunta."]
    ]
  },
  {
    id: "ciencias", name: "Ciências", icon: "🔬",
    description: "Natureza, ambiente e seres vivos.",
    lessons: [
      ["Seres vivos", "Os seres vivos possuem características como organização celular, metabolismo, crescimento e reprodução.", "Exemplos: animais, plantas, fungos e bactérias."],
      ["Células", "A célula é a unidade básica estrutural e funcional dos seres vivos. Alguns organismos possuem uma célula e outros possuem muitas.", "As células podem ter estruturas diferentes, como núcleo, membrana e citoplasma."],
      ["Ecossistemas", "Um ecossistema reúne os seres vivos e os elementos não vivos de um ambiente, interagindo entre si.", "Exemplos: florestas, rios, oceanos e desertos."],
      ["Sistema solar", "O sistema solar é formado pelo Sol e pelos corpos celestes que orbitam ao seu redor.", "Os oito planetas são Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."],
      ["Corpo humano", "O corpo humano possui sistemas que trabalham em conjunto para manter o organismo funcionando.", "Exemplos: sistemas digestório, respiratório, circulatório e nervoso."]
    ]
  },
  {
    id: "geografia", name: "Geografia", icon: "🌎",
    description: "Planeta, paisagens e sociedades.",
    lessons: [
      ["Continentes e oceanos", "A superfície terrestre possui grandes porções de terras chamadas continentes e grandes massas de água chamadas oceanos.", "Os continentes são geralmente classificados como América, África, Europa, Ásia, Oceania e Antártida."],
      ["Clima e tempo", "Tempo atmosférico é a condição da atmosfera em determinado momento. Clima é o padrão dessas condições observado por muitos anos.", "Temperatura, umidade, ventos e chuvas ajudam a caracterizar o clima."],
      ["Relevo", "Relevo é o conjunto das formas da superfície terrestre.", "Algumas formas são montanhas, planaltos, planícies e depressões."],
      ["População", "A população corresponde ao conjunto de pessoas que vivem em determinado território.", "A densidade demográfica compara a quantidade de habitantes com a área ocupada."],
      ["Urbanização", "Urbanização é o processo de crescimento das cidades e da população urbana.", "Ela pode trazer oportunidades e também desafios, como trânsito e necessidade de moradia."]
    ]
  },
  {
    id: "historia", name: "História", icon: "🏛️",
    description: "Sociedades, acontecimentos e culturas.",
    lessons: [
      ["Pré-História", "É o período anterior ao desenvolvimento da escrita. Os grupos humanos desenvolveram ferramentas, técnicas e diferentes formas de organização.", "É comum estudar esse período por meio de vestígios arqueológicos."],
      ["Antiguidade", "A Antiguidade reúne sociedades antigas que desenvolveram cidades, governos, comércio e conhecimentos.", "Exemplos de civilizações antigas: Egito, Mesopotâmia, Grécia e Roma."],
      ["Idade Média", "Período da história europeia tradicionalmente situado entre a queda do Império Romano do Ocidente e o início da Idade Moderna.", "O feudalismo foi uma forma importante de organização social e econômica em partes da Europa."],
      ["Brasil Colonial", "O período colonial começou com a chegada dos portugueses em 1500 e terminou com a Independência, em 1822.", "A economia envolveu atividades como extração de recursos, produção de açúcar e mineração."],
      ["Independência do Brasil", "A Independência foi declarada em 7 de setembro de 1822, separando politicamente o Brasil de Portugal.", "O processo envolveu disputas políticas e interesses de diferentes grupos."]
    ]
  },
  {
    id: "ingles", name: "Inglês", icon: "🇬🇧",
    description: "Vocabulário e comunicação em inglês.",
    lessons: [
      ["Verbo to be", "O verbo to be pode significar ser ou estar. No presente, suas formas principais são am, is e are.", "I am a student. = Eu sou estudante. She is happy. = Ela está feliz."],
      ["Pronomes pessoais", "Os pronomes pessoais indicam quem realiza ou recebe a ação.", "I = eu; you = você; he = ele; she = ela; it = ele ou ela para coisas e animais; we = nós; they = eles ou elas."],
      ["Saudações", "Saudações são expressões usadas para cumprimentar pessoas.", "Hello = olá; Good morning = bom dia; Good afternoon = boa tarde; Good night = boa noite."],
      ["Números", "Os números em inglês são usados para contar, indicar quantidades e expressar valores.", "One = um; two = dois; three = três; four = quatro; five = cinco."],
      ["Simple Present", "O Simple Present é usado para hábitos, rotinas e fatos gerais.", "I study every day. = Eu estudo todos os dias."]
    ]
  },
  {
    id: "fisica", name: "Física", icon: "⚡",
    description: "Movimento, energia e fenômenos naturais.",
    lessons: [
      ["Movimento", "A Física estuda o movimento considerando a posição de um corpo em relação a um referencial e ao longo do tempo.", "Um carro que muda de posição em relação à estrada está em movimento nesse referencial."],
      ["Velocidade média", "A velocidade média é calculada dividindo a distância percorrida pelo tempo gasto.", "Fórmula: velocidade média = distância ÷ tempo."],
      ["Força", "Força é uma interação capaz de alterar o movimento de um corpo ou provocar deformações.", "A força pode aumentar, diminuir ou mudar a direção do movimento."],
      ["Energia", "Energia é uma grandeza associada à capacidade de realizar trabalho ou provocar transformações.", "Existem formas como energia térmica, elétrica, química e cinética."],
      ["Eletricidade", "A eletricidade está relacionada à presença e ao movimento de cargas elétricas.", "Ela é utilizada em aparelhos, iluminação e diversos equipamentos."]
    ]
  },
  {
    id: "quimica", name: "Química", icon: "🧪",
    description: "Matéria, substâncias e transformações.",
    lessons: [
      ["Matéria", "Matéria é tudo aquilo que possui massa e ocupa lugar no espaço.", "Água, ar, madeira e metais são exemplos de matéria."],
      ["Estados físicos", "Os estados físicos mais conhecidos são sólido, líquido e gasoso.", "A água pode aparecer como gelo, água líquida e vapor."],
      ["Átomos", "Átomos são unidades fundamentais que formam os elementos químicos.", "Eles possuem prótons, nêutrons e elétrons."],
      ["Tabela periódica", "A tabela periódica organiza os elementos químicos de acordo com suas propriedades e números atômicos.", "Hidrogênio, oxigênio, carbono e ferro são exemplos de elementos."],
      ["Misturas", "Misturas são formadas pela união de duas ou mais substâncias.", "Água com sal é um exemplo de mistura homogênea."]
    ]
  },
  {
    id: "biologia", name: "Biologia", icon: "🧬",
    description: "Vida, organismos e evolução.",
    lessons: [
      ["Fotossíntese", "Fotossíntese é o processo pelo qual plantas, algas e alguns organismos utilizam energia luminosa para produzir matéria orgânica a partir de água e gás carbônico.", "Nesse processo ocorre liberação de oxigênio."],
      ["Cadeia alimentar", "A cadeia alimentar representa a transferência de matéria e energia entre organismos.", "Uma sequência simples pode ser: capim, gafanhoto, sapo e cobra."],
      ["Genética", "A genética estuda a hereditariedade e a variação das características dos seres vivos.", "Os genes são segmentos de DNA que participam da transmissão de características."],
      ["Evolução", "A evolução biológica corresponde às mudanças nas características hereditárias das populações ao longo das gerações.", "A seleção natural é um dos mecanismos que podem influenciar essas mudanças."],
      ["Classificação dos seres vivos", "A classificação biológica organiza os seres vivos em grupos com base em características e relações evolutivas.", "Ela facilita a identificação e o estudo da biodiversidade."]
    ]
  },
  {
    id: "filosofia", name: "Filosofia", icon: "🤔",
    description: "Pensamento crítico e grandes ideias.",
    lessons: [
      ["O que é Filosofia?", "Filosofia é uma área do conhecimento que investiga questões sobre a existência, o conhecimento, a razão, a ética e a realidade.", "Ela utiliza perguntas, argumentos e reflexão crítica."],
      ["Ética", "A ética estuda questões relacionadas ao comportamento humano, aos valores e ao que consideramos justo.", "Ela ajuda a refletir sobre nossas escolhas e responsabilidades."],
      ["Sócrates", "Sócrates foi um filósofo grego conhecido por seu método de questionamento e diálogo.", "Ele incentivava as pessoas a examinar suas próprias ideias."],
      ["Platão", "Platão foi um filósofo grego e discípulo de Sócrates. Fundou a Academia de Atenas.", "Suas obras abordam temas como justiça, conhecimento e política."],
      ["Aristóteles", "Aristóteles foi um filósofo grego que estudou lógica, natureza, política e ética.", "Suas ideias influenciaram diversas áreas do conhecimento."]
    ]
  },
  {
    id: "sociologia", name: "Sociologia", icon: "👥",
    description: "Sociedade, cultura e relações sociais.",
    lessons: [
      ["O que é Sociologia?", "Sociologia é a ciência que estuda a sociedade, as relações sociais, as instituições e os grupos humanos.", "Ela ajuda a compreender como as pessoas vivem e se organizam."],
      ["Cultura", "Cultura reúne conhecimentos, costumes, valores, crenças, práticas e formas de expressão de um grupo.", "Línguas, festas, comidas e tradições fazem parte da cultura."],
      ["Socialização", "Socialização é o processo pelo qual aprendemos normas, valores e comportamentos da sociedade.", "Família, escola e grupos sociais participam desse processo."],
      ["Desigualdade social", "Desigualdade social ocorre quando recursos, oportunidades e condições de vida são distribuídos de maneira desigual.", "A Sociologia investiga suas causas e consequências."],
      ["Instituições sociais", "Instituições sociais são estruturas organizadas que ajudam a orientar a vida coletiva.", "Família, escola, Estado e religião são exemplos de instituições."]
    ]
  }
];

const STORAGE = {
  completed: "estudafacil_completed",
  name: "estudafacil_name",
  goal: "estudafacil_goal"
};

const tips = [
  "Organize seu tempo e comece com uma meta pequena.",
  "Faça pequenas revisões depois de estudar um assunto.",
  "Tente explicar o conteúdo com suas próprias palavras.",
  "Resolva exercícios para praticar o que aprendeu.",
  "Separe um local tranquilo para estudar.",
  "Faça pausas curtas para descansar a atenção.",
  "Anote suas dúvidas para pesquisar depois.",
  "Divida assuntos grandes em partes menores.",
  "Revise seus erros para aprender com eles.",
  "Celebre cada conteúdo que conseguir compreender."
];

const answers = [
  {
    terms: ["fotossintese", "fotossíntese"],
    title: "O que é fotossíntese?",
    subject: "Biologia / Ciências",
    answer: "A fotossíntese é o processo pelo qual plantas, algas e alguns organismos usam a energia da luz para produzir matéria orgânica a partir de água e gás carbônico. Nesse processo, geralmente ocorre liberação de oxigênio."
  },
  {
    terms: ["substantivo"],
    title: "O que é um substantivo?",
    subject: "Português",
    answer: "Substantivo é a palavra que dá nome a pessoas, animais, lugares, objetos, sentimentos e ideias. Exemplos: menino, cachorro, escola, mesa, amor e felicidade."
  },
  {
    terms: ["fracao", "fração", "fracoes", "frações"],
    title: "Como calcular frações?",
    subject: "Matemática",
    answer: "Para somar ou subtrair frações com o mesmo denominador, mantenha o denominador e some ou subtraia os numeradores. Para multiplicar, multiplique os numeradores entre si e os denominadores entre si. Para dividir, multiplique a primeira fração pelo inverso da segunda."
  },
  {
    terms: ["velocidade media", "velocidade média"],
    title: "O que é velocidade média?",
    subject: "Física",
    answer: "Velocidade média é a razão entre a distância percorrida e o tempo gasto. Fórmula: Vm = distância ÷ tempo. Por exemplo, percorrer 100 km em 2 horas corresponde a uma velocidade média de 50 km/h."
  },
  {
    terms: ["segunda guerra", "guerra mundial"],
    title: "O que foi a Segunda Guerra Mundial?",
    subject: "História",
    answer: "A Segunda Guerra Mundial foi um conflito de escala global ocorrido entre 1939 e 1945. Envolveu diversos países e alianças militares. Terminou em 1945 e provocou profundas mudanças políticas, sociais e econômicas."
  },
  {
    terms: ["to be", "verbo be"],
    title: "Como funciona o verbo to be?",
    subject: "Inglês",
    answer: "O verbo to be significa ser ou estar. No presente, suas formas são am, is e are. Exemplos: I am happy (Eu estou feliz); She is a student (Ela é estudante); They are friends (Eles são amigos)."
  },
  {
    terms: ["porcentagem", "por cento"],
    title: "Como calcular porcentagem?",
    subject: "Matemática",
    answer: "Para calcular uma porcentagem de um valor, multiplique o valor pela porcentagem e divida por 100. Exemplo: 20% de 50 = 50 × 20 ÷ 100 = 10."
  },
  {
    terms: ["equacao", "equação", "incognita", "incógnita"],
    title: "O que é uma equação?",
    subject: "Matemática",
    answer: "Equação é uma igualdade matemática que possui um ou mais valores desconhecidos. Exemplo: x + 3 = 8. Para descobrir x, subtraímos 3 dos dois lados: x = 5."
  },
  {
    terms: ["atomo", "átomo", "atomos", "átomos"],
    title: "O que é um átomo?",
    subject: "Química",
    answer: "O átomo é uma unidade fundamental da matéria. Ele possui um núcleo com prótons e, normalmente, nêutrons, além de elétrons que ocupam regiões ao redor do núcleo."
  },
  {
    terms: ["celula", "célula", "celulas", "células"],
    title: "O que é uma célula?",
    subject: "Ciências / Biologia",
    answer: "A célula é a unidade básica estrutural e funcional dos seres vivos. Existem organismos formados por uma única célula e organismos formados por muitas células."
  },
  {
    terms: ["clima"],
    title: "Qual é a diferença entre clima e tempo?",
    subject: "Geografia",
    answer: "Tempo é a condição momentânea da atmosfera, como chuva ou sol em determinado dia. Clima é o padrão das condições atmosféricas de uma região observado durante muitos anos."
  },
  {
    terms: ["adjetivo", "adjetivos"],
    title: "O que é um adjetivo?",
    subject: "Português",
    answer: "Adjetivo é a palavra que caracteriza um substantivo. Exemplos: casa bonita, aluno dedicado e dia ensolarado."
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let currentSubject = null;
let completed = loadCompleted();

function loadCompleted() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE.completed) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveCompleted() {
  try {
    localStorage.setItem(STORAGE.completed, JSON.stringify(completed));
  } catch (error) {
    console.warn("Não foi possível salvar o progresso.", error);
  }
}

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function goToPage(pageName) {
  const validPages = ["inicio", "materias", "materia", "calculadora", "duvidas", "dicas", "progresso", "perfil"];
  const destination = validPages.includes(pageName) ? pageName : "inicio";

  $$(".page").forEach(page => {
    const active = page.dataset.pageContent === destination;
    page.hidden = !active;
    page.classList.toggle("active", active);
  });

  $$(".nav-link[data-page]").forEach(button => {
    button.classList.toggle("active", button.dataset.page === destination);
  });

  const titles = {
    inicio: "Início",
    materias: "Matérias",
    materia: currentSubject ? currentSubject.name : "Aula",
    calculadora: "Calculadora",
    duvidas: "Tirar dúvidas",
    dicas: "Dicas de estudo",
    progresso: "Progresso",
    perfil: "Perfil"
  };

  $("#pageTitle").textContent = titles[destination];

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (destination === "progresso") renderProgress();
  if (destination === "inicio") updateHomeProgress();
}

function openSubject(id) {
  const subject = subjects.find(item => item.id === id);
  if (!subject) return;

  currentSubject = subject;
  $("#subjectDetailIcon").textContent = subject.icon;
  $("#subjectDetailTitle").textContent = subject.name;
  $("#subjectDetailDescription").textContent = subject.description;

  $("#subjectDetails").innerHTML = subject.lessons.map((lesson, index) => {
    const lessonId = `${subject.id}-${index}`;
    const done = completed.includes(lessonId);

    return `
      <article class="lesson-card">
        <div class="lesson-top">
          <div>
            <span class="lesson-number">CONTEÚDO ${index + 1}</span>
            <h3>${safeText(lesson[0])}</h3>
          </div>
          <span>${done ? "✅" : "📖"}</span>
        </div>
        <p>${safeText(lesson[1])}</p>
        <p><strong>Exemplo:</strong> ${safeText(lesson[2])}</p>
        <div class="lesson-actions">
          <button class="mark-button ${done ? "done" : ""}" type="button" data-complete="${lessonId}">
            ${done ? "✓ Estudado" : "Marcar como estudado"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  goToPage("materia");
}

function renderSubjects(filter = "") {
  const grid = $("#subjectsGrid");
  if (!grid) return;

  const normalized = normalizeText(filter);
  const filtered = subjects.filter(subject =>
    normalizeText(subject.name).includes(normalized)
  );

  grid.innerHTML = filtered.map(subject => `
    <button class="subject-card" type="button" data-subject="${subject.id}">
      <span class="subject-icon">${subject.icon}</span>
      <span>
        <strong>${safeText(subject.name)}</strong>
        <small>${safeText(subject.description)}</small>
      </span>
      <span class="subject-arrow">→</span>
    </button>
  `).join("");

  $("#subjectEmpty").hidden = filtered.length !== 0;
}

function normalizeText(value) {
  return String(value)
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function toggleCompleted(id) {
  if (completed.includes(id)) {
    completed = completed.filter(item => item !== id);
  } else {
    completed.push(id);
  }

  saveCompleted();

  if (currentSubject) openSubject(currentSubject.id);
  updateHomeProgress();
  renderProgress();
}

function updateHomeProgress() {
  const total = subjects.reduce((sum, subject) => sum + subject.lessons.length, 0);
  const count = completed.length;
  const percentage = total ? Math.min(100, Math.round(count / total * 100)) : 0;

  $("#homeProgressCount").textContent = `${count} conteúdos estudados`;
  $("#homeProgressBar").style.width = `${percentage}%`;
  $("#homeProgressText").textContent = count
    ? `Você já concluiu ${percentage}% dos conteúdos disponíveis. Continue assim!`
    : "Comece por uma matéria para registrar seu progresso.";
}

function renderProgress() {
  const total = subjects.reduce((sum, subject) => sum + subject.lessons.length, 0);
  const count = completed.length;
  const percentage = total ? Math.min(100, Math.round(count / total * 100)) : 0;

  $("#progressCount").textContent = `${count} de ${total} conteúdos`;
  $("#progressText").textContent = `${percentage}% concluído`;
  $("#progressBar").style.width = `${percentage}%`;

  const list = $("#progressList");

  if (!count) {
    list.innerHTML = "<p>Seu progresso aparecerá aqui quando você marcar conteúdos como estudados.</p>";
    return;
  }

  const entries = [];

  subjects.forEach(subject => {
    subject.lessons.forEach((lesson, index) => {
      const id = `${subject.id}-${index}`;
      if (completed.includes(id)) {
        entries.push({ subject: subject.name, lesson: lesson[0] });
      }
    });
  });

  list.innerHTML = entries.map(entry => `
    <div class="progress-item">
      <span>${safeText(entry.subject)} — ${safeText(entry.lesson)}</span>
      <span>✓ Concluído</span>
    </div>
  `).join("");
}

function calculateExpression(expression) {
  let source = String(expression)
    .replace(/,/g, ".")
    .replace(/[×x]/gi, "*")
    .replace(/÷/g, "/")
    .replace(/\s+/g, "");

  if (!source) throw new Error("Digite uma conta.");

  if (!/^[0-9+\-*/().]+$/.test(source)) {
    throw new Error("Use apenas números e operações.");
  }

  if (source.length > 100) {
    throw new Error("Conta muito longa.");
  }

  let position = 0;

  function parseExpression() {
    let value = parseTerm();

    while (source[position] === "+" || source[position] === "-") {
      const operator = source[position++];
      const next = parseTerm();
      value = operator === "+" ? value + next : value - next;
    }

    return value;
  }

  function parseTerm() {
    let value = parseFactor();

    while (source[position] === "*" || source[position] === "/") {
      const operator = source[position++];
      const next = parseFactor();

      if (operator === "/" && next === 0) {
        throw new Error("Não é possível dividir por zero.");
      }

      value = operator === "*" ? value * next : value / next;
    }

    return value;
  }

  function parseFactor() {
    if (source[position] === "+") {
      position++;
      return parseFactor();
    }

    if (source[position] === "-") {
      position++;
      return -parseFactor();
    }

    if (source[position] === "(") {
      position++;
      const value = parseExpression();

      if (source[position] !== ")") {
        throw new Error("Confira os parênteses.");
      }

      position++;
      return value;
    }

    const start = position;

    while (/[0-9.]/.test(source[position] || "")) {
      position++;
    }

    if (start === position) {
      throw new Error("Conta inválida.");
    }

    const numberText = source.slice(start, position);

    if ((numberText.match(/\./g) || []).length > 1) {
      throw new Error("Número inválido.");
    }

    return Number(numberText);
  }

  const result = parseExpression();

  if (position !== source.length) {
    throw new Error("Confira a conta digitada.");
  }

  if (!Number.isFinite(result)) {
    throw new Error("Resultado inválido.");
  }

  return Number(result.toPrecision(12));
}

function showCalcMessage(message, isError = false) {
  const element = $("#calcMessage");
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function calculate() {
  const display = $("#calcDisplay");

  try {
    const result = calculateExpression(display.value);
    display.value = String(result);
    showCalcMessage("Resultado calculado com sucesso.");
  } catch (error) {
    showCalcMessage(error.message || "Não foi possível calcular.", true);
  }
}

function handleCalcButton(value) {
  const display = $("#calcDisplay");

  if (value === "C") {
    display.value = "";
    showCalcMessage("Calculadora limpa.");
    display.focus();
    return;
  }

  if (value === "⌫") {
    display.value = display.value.slice(0, -1);
    showCalcMessage("Último caractere apagado.");
    display.focus();
    return;
  }

  if (value === "=") {
    calculate();
    return;
  }

  display.value += value;
  showCalcMessage("Digite uma conta ou pressione igual.");
  display.focus();
}

function searchDoubt(question, selectedSubject = "") {
  const normalized = normalizeText(question);
  const answerBox = $("#doubtAnswer");

  if (!normalized) {
    answerBox.hidden = false;
    answerBox.textContent = "Digite sua dúvida para pesquisar.";
    return;
  }

  const found = answers.find(item =>
    item.terms.some(term => normalized.includes(normalizeText(term))) &&
    (!selectedSubject || normalizeText(item.subject).includes(normalizeText(selectedSubject)) ||
      normalizeText(selectedSubject).includes(normalizeText(item.subject)))
  ) || answers.find(item =>
    item.terms.some(term => normalized.includes(normalizeText(term)))
  );

  answerBox.hidden = false;

  if (found) {
    answerBox.innerHTML = `
      <strong>${safeText(found.title)}</strong>
      <p>${safeText(found.answer)}</p>
      <small>Matéria: ${safeText(found.subject)}</small>
    `;
  } else {
    answerBox.innerHTML = `
      <strong>Não encontramos uma resposta cadastrada.</strong>
      <p>Esta busca funciona com perguntas e assuntos que já possuem explicações no site. Tente usar palavras como fotossíntese, fração, porcentagem, substantivo, velocidade média, átomo ou verbo to be.</p>
    `;
  }
}

function populateDoubtSubjects() {
  const select = $("#doubtSubject");
  subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject.name;
    option.textContent = subject.name;
    select.appendChild(option);
  });
}

function showRandomTip() {
  const index = Math.floor(Math.random() * tips.length);
  $("#dicaAtual").textContent = tips[index];
}

function loadProfile() {
  const name = localStorage.getItem(STORAGE.name) || "";
  const goal = localStorage.getItem(STORAGE.goal) || "";

  $("#profileName").value = name;
  $("#profileGoal").value = goal;

  $("#welcomeTitle").textContent = name ? `Olá, ${name}! 👋` : "Olá! 👋";
}

function saveProfile(event) {
  event.preventDefault();

  const name = $("#profileName").value.trim();
  const goal = $("#profileGoal").value.trim();

  try {
    localStorage.setItem(STORAGE.name, name);
    localStorage.setItem(STORAGE.goal, goal);
    $("#welcomeTitle").textContent = name ? `Olá, ${name}! 👋` : "Olá! 👋";
    $("#profileMessage").textContent = "Perfil salvo neste navegador!";
  } catch {
    $("#profileMessage").textContent = "Não foi possível salvar. Verifique o navegador.";
  }
}

function openMobileMenu() {
  $("#sidebar").classList.add("open");
  $("#mobileOverlay").classList.add("show");
  $("#mobileOverlay").hidden = false;
  $("#mobileMenuBtn").setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  $("#sidebar").classList.remove("open");
  $("#mobileOverlay").classList.remove("show");
  $("#mobileOverlay").hidden = true;
  $("#mobileMenuBtn").setAttribute("aria-expanded", "false");
}

function initializeApp() {
  $("#todayLabel").textContent = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date());

  $("#yearNow").textContent = new Date().getFullYear();

  renderSubjects();
  populateDoubtSubjects();
  loadProfile();
  updateHomeProgress();

  document.addEventListener("click", event => {
    const pageButton = event.target.closest("[data-page]");

    if (pageButton) {
      event.preventDefault();
      goToPage(pageButton.dataset.page);
      return;
    }

    const subjectButton = event.target.closest("[data-subject]");

    if (subjectButton) {
      openSubject(subjectButton.dataset.subject);
      return;
    }

    const completeButton = event.target.closest("[data-complete]");

    if (completeButton) {
      toggleCompleted(completeButton.dataset.complete);
      return;
    }

    const calcButton = event.target.closest("[data-value]");

    if (calcButton && $("#calcKeypad").contains(calcButton)) {
      handleCalcButton(calcButton.dataset.value);
      return;
    }

    const questionButton = event.target.closest("[data-question]");

    if (questionButton) {
      $("#doubtInput").value = questionButton.dataset.question;
      searchDoubt(questionButton.dataset.question, $("#doubtSubject").value);
      goToPage("duvidas");
    }
  });

  $("#subjectSearch").addEventListener("input", event => {
    renderSubjects(event.target.value);
  });

  $("#backToSubjects").addEventListener("click", () => {
    goToPage("materias");
  });

  $("#calcDisplay").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      calculate();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      handleCalcButton("C");
    }
  });

  $("#doubtForm").addEventListener("submit", event => {
    event.preventDefault();
    searchDoubt($("#doubtInput").value, $("#doubtSubject").value);
  });

  $("#novaDica").addEventListener("click", showRandomTip);
  $("#novaDicaSecondary").addEventListener("click", showRandomTip);

  $("#profileForm").addEventListener("submit", saveProfile);

  $("#resetProgress").addEventListener("click", () => {
    const confirmed = window.confirm("Tem certeza de que deseja apagar todo o progresso?");
    if (!confirmed) return;

    completed = [];
    saveCompleted();
    renderProgress();
    updateHomeProgress();

    if (currentSubject) openSubject(currentSubject.id);
  });

  $("#mobileMenuBtn").addEventListener("click", () => {
    if ($("#sidebar").classList.contains("open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  $("#mobileOverlay").addEventListener("click", closeMobileMenu);

  $("#logoutBtn").addEventListener("click", () => {
    goToPage("inicio");
  });
}

document.addEventListener("DOMContentLoaded", initializeApp);
