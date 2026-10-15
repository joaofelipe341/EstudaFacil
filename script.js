
"use strict";

/* =========================================
   ESTUDAFÁCIL — SCRIPT PRINCIPAL
   Funciona com index.html e estilo.css
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const $ = (id) => document.getElementById(id);

  // Salva os dados com segurança neste navegador.
  function readStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  // =========================================
  // 1. NAVEGAÇÃO ENTRE AS PÁGINAS
  // =========================================

  const pages = Array.from(document.querySelectorAll(".page"));
  const navButtons = Array.from(
    document.querySelectorAll("[data-page]")
  );
  const sidebar = $("sidebar");
  const menuToggle = $("menuToggle");

  function openPage(pageId) {
    const target = $(pageId);

    if (!target || !target.classList.contains("page")) {
      return;
    }

    pages.forEach((page) => {
      page.classList.toggle("active", page.id === pageId);
    });

    navButtons.forEach((button) => {
      const isActive = button.dataset.page === pageId;

      if (button.classList.contains("nav-button")) {
        button.classList.toggle("active", isActive);

        if (isActive) {
          button.setAttribute("aria-current", "page");
        } else {
          button.removeAttribute("aria-current");
        }
      }
    });

    if (sidebar) sidebar.classList.remove("open");

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      openPage(button.dataset.page);
    });
  });

  if (menuToggle && sidebar) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", function () {
      const isOpen = sidebar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && sidebar) {
      sidebar.classList.remove("open");

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  const logoutBtn = $("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      openPage("inicio");
    });
  }

  // =========================================
  // 2. AS 11 MATÉRIAS E SEUS CONTEÚDOS
  // =========================================

  const subjects = [
    {
      name: "Matemática",
      icon: "🔢",
      description: "Números, operações e geometria.",
      lessons: [
        {
          title: "Operações básicas",
          text: `Adição: junta quantidades. Exemplo: 5 + 3 = 8.

Subtração: calcula a diferença. Exemplo: 9 - 4 = 5.

Multiplicação: soma parcelas iguais. Exemplo: 4 × 3 = 12.

Divisão: reparte em partes iguais. Exemplo: 12 ÷ 3 = 4.`
        },
        {
          title: "Frações",
          text: `Uma fração representa partes de um todo.

Em 3/4, o 3 é o numerador e o 4 é o denominador.

Exemplo: 1/2 + 1/2 = 1 inteiro.

Para somar frações com denominadores iguais, somamos os numeradores e mantemos o denominador.`
        },
        {
          title: "Porcentagem",
          text: `Porcentagem significa uma quantidade em cada 100.

10% de 200 = 20, porque 200 × 10 ÷ 100 = 20.

50% corresponde à metade. 25% corresponde à quarta parte.`
        },
        {
          title: "Geometria básica",
          text: `Quadrado: quatro lados iguais.

Retângulo: lados opostos iguais.

Triângulo: três lados.

A área do retângulo é base × altura.

A área do triângulo é (base × altura) ÷ 2.`
        }
      ]
    },
    {
      name: "Português",
      icon: "✍️",
      description: "Leitura, gramática e escrita.",
      lessons: [
        {
          title: "Classes de palavras",
          text: `Substantivo: nomeia seres, lugares e coisas.

Adjetivo: caracteriza um substantivo.

Verbo: expressa ação, estado ou fenômeno.

Advérbio: modifica um verbo, adjetivo ou outro advérbio.

Exemplo: "A menina alegre correu rapidamente."`
        },
        {
          title: "Interpretação de texto",
          text: `Leia o texto com atenção.

Identifique o tema, a ideia principal e as informações de apoio.

Diferencie aquilo que está explicitamente escrito das conclusões que você pode tirar do texto.

Volte ao texto para conferir suas respostas.`
        },
        {
          title: "Pontuação",
          text: `Ponto final: encerra uma declaração.

Vírgula: separa elementos e organiza partes de uma frase, conforme as regras gramaticais.

Ponto de interrogação: indica pergunta.

Ponto de exclamação: expressa emoção ou ênfase.`
        }
      ]
    },
    {
      name: "Ciências",
      icon: "🔬",
      description: "Natureza, matéria e meio ambiente.",
      lessons: [
        {
          title: "Seres vivos",
          text: `Os seres vivos possuem organização celular e realizam processos como metabolismo.

Muitos crescem, reproduzem-se e respondem ao ambiente.

Animais, plantas, fungos e bactérias apresentam características próprias.`
        },
        {
          title: "Ecossistemas",
          text: `Um ecossistema reúne seres vivos e elementos não vivos que interagem.

Produtores, como plantas, fabricam seu próprio alimento.

Consumidores obtêm energia ao se alimentar de outros organismos.

Decompositores participam da reciclagem de nutrientes.`
        },
        {
          title: "Água e meio ambiente",
          text: `O ciclo da água inclui evaporação, condensação e precipitação.

A água é essencial para a vida.

Evitar desperdício e poluição ajuda a preservar os recursos hídricos.`
        }
      ]
    },
    {
      name: "Geografia",
      icon: "🌍",
      description: "Espaço geográfico e paisagens.",
      lessons: [
        {
          title: "Continentes e oceanos",
          text: `Uma divisão comum considera seis continentes: África, América, Antártida, Ásia, Europa e Oceania.

Os cinco oceanos são Pacífico, Atlântico, Índico, Ártico e Antártico.

As classificações podem variar conforme a convenção adotada.`
        },
        {
          title: "Clima e tempo",
          text: `Tempo atmosférico descreve condições momentâneas, como chuva e temperatura.

Clima corresponde aos padrões atmosféricos observados durante longos períodos.

Latitude, altitude, relevo e distância do mar influenciam o clima.`
        },
        {
          title: "População e cidades",
          text: `A população é distribuída de maneira desigual pelo território.

Urbanização é o crescimento da população que vive em cidades.

Transporte, moradia, saneamento e serviços são temas importantes no planejamento urbano.`
        }
      ]
    },
    {
      name: "História",
      icon: "🏛️",
      description: "Sociedades e acontecimentos históricos.",
      lessons: [
        {
          title: "Fontes históricas",
          text: `Fontes históricas ajudam a estudar o passado.

Podem ser documentos escritos, fotografias, objetos, construções, relatos orais e registros digitais.

Historiadores analisam as fontes considerando seu contexto e suas limitações.`
        },
        {
          title: "Brasil colonial",
          text: `A colonização portuguesa começou no século XVI.

O período foi marcado pela exploração econômica, pela escravização de povos indígenas e africanos e por diferentes formas de resistência.

Esses processos deixaram marcas profundas na sociedade brasileira.`
        },
        {
          title: "Independência do Brasil",
          text: `A Independência do Brasil foi proclamada em 7 de setembro de 1822.

O processo envolveu disputas políticas e econômicas.

A independência não acabou imediatamente com a escravidão nem garantiu direitos iguais para toda a população.`
        }
      ]
    },
    {
      name: "Inglês",
      icon: "🇬🇧",
      description: "Vocabulário e gramática inglesa.",
      lessons: [
        {
          title: "Cumprimentos",
          text: `Hello = Olá.

Good morning = Bom dia.

Good afternoon = Boa tarde.

Good evening = Boa noite, ao cumprimentar alguém.

Goodbye = Tchau.

Thank you = Obrigado ou obrigada.

Please = Por favor.`
        },
        {
          title: "Verbo to be",
          text: `O verbo to be pode significar ser ou estar.

I am = Eu sou/estou.

You are = Você é/está.

He is = Ele é/está.

She is = Ela é/está.

We are = Nós somos/estamos.

They are = Eles são/estão.`
        },
        {
          title: "Pronomes pessoais",
          text: `I = eu.

You = você ou vocês.

He = ele.

She = ela.

It = ele ou ela para coisas e animais, conforme o contexto.

We = nós.

They = eles ou elas.`
        }
      ]
    },
    {
      name: "Física",
      icon: "⚡",
      description: "Movimento, energia e forças.",
      lessons: [
        {
          title: "Velocidade média",
          text: `Velocidade média escalar = distância percorrida ÷ tempo gasto.

Exemplo: se uma pessoa percorre 100 metros em 20 segundos, a velocidade média escalar é 5 m/s.

As unidades precisam ser compatíveis.`
        },
        {
          title: "Força e movimento",
          text: `Uma força pode alterar o movimento ou deformar um objeto.

A segunda lei de Newton relaciona força resultante, massa e aceleração:

F = m × a.

A força é medida em newtons (N).`
        },
        {
          title: "Energia",
          text: `Energia pode ser transferida e transformada.

Energia cinética está associada ao movimento.

Energia potencial depende da posição ou configuração de um sistema.

A energia é medida em joules (J).`
        }
      ]
    },
    {
      name: "Química",
      icon: "🧪",
      description: "Átomos, substâncias e reações.",
      lessons: [
        {
          title: "Átomos e elementos",
          text: `A matéria é constituída por átomos.

Um átomo possui núcleo com prótons e nêutrons, além de elétrons.

O número de prótons identifica o elemento químico.

Elementos estão organizados na tabela periódica.`
        },
        {
          title: "Estados físicos",
          text: `Os estados físicos mais estudados são sólido, líquido e gasoso.

Fusão: sólido para líquido.

Solidificação: líquido para sólido.

Vaporização: líquido para gasoso.

Condensação: gasoso para líquido.

Sublimação: passagem direta entre sólido e gasoso.`
        },
        {
          title: "Misturas",
          text: `Mistura é a combinação de duas ou mais substâncias.

Mistura homogênea apresenta uma única fase visível.

Mistura heterogênea apresenta duas ou mais fases.

Filtração e decantação são exemplos de métodos de separação.`
        }
      ]
    },
    {
      name: "Biologia",
      icon: "🧬",
      description: "Células, organismos e vida.",
      lessons: [
        {
          title: "A célula",
          text: `A célula é a unidade básica estrutural e funcional dos seres vivos.

A membrana plasmática delimita a célula.

O citoplasma contém estruturas celulares.

Nas células eucarióticas, o núcleo abriga a maior parte do material genético.`
        },
        {
          title: "Fotossíntese",
          text: `Na fotossíntese, organismos como plantas utilizam energia luminosa para produzir substâncias orgânicas.

Em termos gerais, plantas utilizam água e dióxido de carbono e liberam oxigênio.

Esse processo é importante para muitos ecossistemas.`
        },
        {
          title: "Corpo humano",
          text: `O corpo humano possui sistemas que trabalham em conjunto.

O sistema digestório processa alimentos.

O sistema respiratório participa das trocas gasosas.

O sistema circulatório transporta substâncias pelo corpo.

O sistema nervoso coordena muitas funções.`
        }
      ]
    },
    {
      name: "Filosofia",
      icon: "🤔",
      description: "Pensamento crítico e ética.",
      lessons: [
        {
          title: "O que é Filosofia?",
          text: `A Filosofia investiga questões sobre conhecimento, realidade, ética, política e existência.

Ela utiliza perguntas, argumentos e análise crítica.

Filosofar envolve examinar ideias e justificar conclusões.`
        },
        {
          title: "Ética",
          text: `A ética estuda questões relacionadas à ação, aos valores e ao que consideramos justo.

Ela ajuda a refletir sobre consequências, responsabilidades e conflitos morais.

Nem todo dilema ético tem uma resposta simples.`
        },
        {
          title: "Pensamento crítico",
          text: `Pensamento crítico envolve avaliar argumentos e evidências.

Pergunte: qual é a afirmação? Quais razões a apoiam? As fontes são confiáveis? Existem outras explicações?

Uma opinião não se transforma em fato apenas porque muitas pessoas a repetem.`
        }
      ]
    },
    {
      name: "Sociologia",
      icon: "👥",
      description: "Sociedade, cultura e relações sociais.",
      lessons: [
        {
          title: "Cultura e sociedade",
          text: `Cultura envolve práticas, conhecimentos, valores, símbolos e costumes compartilhados.

A cultura é aprendida e transformada ao longo do tempo.

Sociedades podem reunir diferentes culturas e formas de organização.`
        },
        {
          title: "Socialização",
          text: `Socialização é o processo pelo qual aprendemos normas, valores e formas de convivência.

Família, escola, grupos sociais e meios de comunicação podem participar desse processo.

A socialização continua ao longo da vida.`
        },
        {
          title: "Desigualdade social",
          text: `Desigualdade social envolve diferenças no acesso a recursos, oportunidades e direitos.

Renda, educação, moradia, saúde e trabalho são dimensões que podem ser estudadas.

A Sociologia investiga como essas desigualdades surgem e se mantêm.`
        }
      ]
    }
  ];

  const subjectsGrid = $("subjectsGrid");
  const subjectSearch = $("subjectSearch");
  const subjectContent = $("subjectContent");
  const subjectDetails = $("subjectDetails");
  const backToSubjects = $("backToSubjects");

  let currentSubject = null;

  const completed = readStorage("estudafacil_completed_v1", []);
  const completedSet = new Set(
    Array.isArray(completed) ? completed : []
  );

  function lessonId(subjectName, lessonTitle) {
    return subjectName + "::" + lessonTitle;
  }

  function renderSubjects(filter = "") {
    if (!subjectsGrid) return;

    const query = filter.trim().toLocaleLowerCase("pt-BR");

    const filtered = subjects.filter((subject) => {
      const text = (
        subject.name + " " + subject.description
      ).toLocaleLowerCase("pt-BR");

      return text.includes(query);
    });

    subjectsGrid.replaceChildren();

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.textContent = "Nenhuma matéria encontrada.";
      subjectsGrid.appendChild(empty);
      return;
    }

    filtered.forEach((subject) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "subject-card";

      const icon = document.createElement("span");
      icon.className = "subject-icon";
      icon.textContent = subject.icon;

      const title = document.createElement("strong");
      title.textContent = subject.name;

      const description = document.createElement("p");
      description.textContent = subject.description;

      const openText = document.createElement("span");
      openText.className = "subject-open";
      openText.textContent =
        subject.lessons.length + " conteúdos · Abrir →";

      button.append(icon, title, description, openText);

      button.addEventListener("click", function () {
        renderSubject(subject);
      });

      subjectsGrid.appendChild(button);
    });
  }

  function renderSubject(subject) {
    if (!subjectContent || !subjectDetails || !subjectsGrid) {
      return;
    }

    currentSubject = subject;
    subjectsGrid.hidden = true;
    if (subjectSearch) subjectSearch.hidden = true;
    subjectContent.hidden = false;
    subjectDetails.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = subject.icon + " " + subject.name;

    const description = document.createElement("p");
    description.textContent = subject.description;

    subjectDetails.append(title, description);

    subject.lessons.forEach((lesson) => {
      const article = document.createElement("article");
      article.className = "subject-lesson";

      const heading = document.createElement("h2");
      heading.textContent = lesson.title;

      const text = document.createElement("p");
      text.className = "lesson-text";
      text.textContent = lesson.text;

      const label = document.createElement("label");
      label.className = "lesson-complete";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const id = lessonId(subject.name, lesson.title);
      checkbox.checked = completedSet.has(id);

      const labelText = document.createElement("span");
      labelText.textContent = "Conteúdo concluído";

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          completedSet.add(id);
        } else {
          completedSet.delete(id);
        }

        saveProgress();
        renderProgress();
      });

      label.append(checkbox, labelText);
      article.append(heading, text, label);
      subjectDetails.appendChild(article);
    });

    openPage("materias");
  }

  function showSubjects() {
    currentSubject = null;

    if (subjectsGrid) subjectsGrid.hidden = false;
    if (subjectSearch) subjectSearch.hidden = false;
    if (subjectContent) subjectContent.hidden = true;

    renderSubjects(subjectSearch ? subjectSearch.value : "");
  }

  if (subjectSearch) {
    subjectSearch.addEventListener("input", function () {
      renderSubjects(subjectSearch.value);
    });
  }

  if (backToSubjects) {
    backToSubjects.addEventListener("click", showSubjects);
  }

  // =========================================
  // 3. PROGRESSO DE ESTUDOS
  // =========================================

  function saveProgress() {
    return writeStorage(
      "estudafacil_completed_v1",
      Array.from(completedSet)
    );
  }

  function renderProgress() {
    const count = $("progressCount");
    const bar = $("progressBar");
    const text = $("progressText");
    const list = $("progressList");

    const allLessons = subjects.flatMap((subject) =>
      subject.lessons.map((lesson) => ({
        subject: subject.name,
        title: lesson.title,
        id: lessonId(subject.name, lesson.title)
      }))
    );

    // Considera somente os conteúdos que existem.
    const validIds = new Set(allLessons.map((lesson) => lesson.id));

    Array.from(completedSet).forEach((id) => {
      if (!validIds.has(id)) completedSet.delete(id);
    });

    const done = allLessons.filter((lesson) =>
      completedSet.has(lesson.id)
    ).length;

    const percentage = allLessons.length
      ? Math.round((done / allLessons.length) * 100)
      : 0;

    if (count) count.textContent = String(done);

    if (bar) {
      bar.style.width = percentage + "%";
      bar.setAttribute("role", "progressbar");
      bar.setAttribute("aria-valuemin", "0");
      bar.setAttribute("aria-valuemax", "100");
      bar.setAttribute("aria-valuenow", String(percentage));
    }

    if (text) {
      text.textContent =
        done === 0
          ? "Você ainda não concluiu nenhum conteúdo."
          : done === allLessons.length
          ? "Parabéns! Você concluiu todos os conteúdos cadastrados."
          : "Você concluiu " + percentage + "% dos conteúdos cadastrados.";
    }

    if (list) {
      list.replaceChildren();

      allLessons.forEach((lesson) => {
        const label = document.createElement("label");
        label.className = "progress-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = completedSet.has(lesson.id);

        const info = document.createElement("span");
        const title = document.createElement("strong");
        title.textContent = lesson.title;

        const subject = document.createElement("small");
        subject.textContent = lesson.subject;

        info.append(title, subject);
        label.append(checkbox, info);

        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            completedSet.add(lesson.id);
          } else {
            completedSet.delete(lesson.id);
          }

          saveProgress();
          renderProgress();

          // Atualiza a matéria aberta, se houver.
          if (currentSubject) {
            renderSubject(currentSubject);
          }
        });

        list.appendChild(label);
      });
    }

    saveProgress();
  }

  const resetProgress = $("resetProgress");

  if (resetProgress) {
    resetProgress.addEventListener("click", function () {
      const confirmed = window.confirm(
        "Deseja realmente reiniciar todo o seu progresso?"
      );

      if (!confirmed) return;

      completedSet.clear();
      saveProgress();
      renderProgress();

      if (currentSubject) {
        renderSubject(currentSubject);
      }
    });
  }

  // =========================================
  // 4. CALCULADORA
  // =========================================

  const calcDisplay = $("calcDisplay");
  const calcMessage = $("calcMessage");

  function showCalcMessage(message) {
    if (calcMessage) calcMessage.textContent = message;
  }

  function calculate(expression) {
    // Parser matemático: não utiliza eval() nem executa código.
    const input = expression.replace(/,/g, ".").replace(/\s+/g, "");

    if (!input || input.length > 150) {
      throw new Error("Digite uma conta válida.");
    }

    if (!/^[0-9+\-*/().]+$/.test(input)) {
      throw new Error("Use somente números e operações básicas.");
    }

    let position = 0;

    function parseExpression() {
      let value = parseTerm();

      while (position < input.length) {
        const op = input[position];

        if (op !== "+" && op !== "-") break;

        position++;
        const right = parseTerm();

        value = op === "+" ? value + right : value - right;
      }

      return value;
    }

    function parseTerm() {
      let value = parseUnary();

      while (position < input.length) {
        const op = input[position];

        if (op !== "*" && op !== "/") break;

        position++;
        const right = parseUnary();

        if (op === "/") {
          if (right === 0) {
            throw new Error("Não é possível dividir por zero.");
          }

          value /= right;
        } else {
          value *= right;
        }
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

      const remaining = input.slice(position);
      const match = remaining.match(/^(?:\d+\.?\d*|\.\d+)/);

      if (!match) {
        throw new Error("Confira os números e operadores.");
      }

      position += match[0].length;
      return Number(match[0]);
    }

    const result = parseExpression();

    if (position !== input.length || !Number.isFinite(result)) {
      throw new Error("Conta inválida.");
    }

    return Number(result.toPrecision(12));
  }

  function appendToCalculator(value) {
    if (!calcDisplay) return;

    const current = calcDisplay.value;

    if (current.length >= 150) return;

    if (value === "clear") {
      calcDisplay.value = "";
      showCalcMessage("");
      return;
    }

    if (value === "delete") {
      calcDisplay.value = current.slice(0, -1);
      showCalcMessage("");
      return;
    }

    if (value === "equals") {
      try {
        const result = calculate(calcDisplay.value);
        calcDisplay.value = String(result);
        showCalcMessage("Resultado: " + result);
      } catch (error) {
        showCalcMessage(error.message || "Não foi possível calcular.");
      }

      return;
    }

    if (!/^[0-9+\-*/().]$/.test(value)) return;

    calcDisplay.value += value;
    showCalcMessage("");
  }

  document.querySelectorAll("[data-calc]").forEach((button) => {
    button.addEventListener("click", function () {
      appendToCalculator(button.dataset.calc);
    });
  });

  if (calcDisplay) {
    calcDisplay.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        appendToCalculator("equals");
      }

      if (event.key === "Escape") {
        event.preventDefault();
        appendToCalculator("clear");
      }
    });

    calcDisplay.addEventListener("input", function () {
      showCalcMessage("");
    });
  }

  // =========================================
  // 5. SISTEMA DE DÚVIDAS
  // =========================================

  const questions = [
    {
      subject: "Matemática",
      keywords: ["porcentagem", "percentagem", "%"],
      question: "Como calcular porcentagem?",
      answer: "Multiplique o número pela porcentagem e divida por 100. Exemplo: 20% de 100 = 100 × 20 ÷ 100 = 20."
    },
    {
      subject: "Matemática",
      keywords: ["fração", "frações"],
      question: "O que é uma fração?",
      answer: "Uma fração representa partes de um todo. O numerador fica acima da barra e o denominador abaixo dela."
    },
    {
      subject: "Matemática",
      keywords: ["equação", "equações"],
      question: "O que é uma equação?",
      answer: "É uma igualdade que contém valores desconhecidos. Exemplo: x + 3 = 7. Subtraindo 3 dos dois lados, encontramos x = 4."
    },
    {
      subject: "Português",
      keywords: ["substantivo"],
      question: "O que é um substantivo?",
      answer: "É a classe de palavras que nomeia seres, objetos, lugares, sentimentos e ideias. Exemplos: casa, cidade e alegria."
    },
    {
      subject: "Português",
      keywords: ["adjetivo"],
      question: "O que é um adjetivo?",
      answer: "É a palavra que caracteriza um substantivo. Em 'casa bonita', bonita é o adjetivo."
    },
    {
      subject: "Português",
      keywords: ["verbo"],
      question: "O que é um verbo?",
      answer: "É uma palavra que pode expressar ação, estado ou fenômeno. Exemplos: estudar, estar e chover."
    },
    {
      subject: "Ciências",
      keywords: ["ecossistema", "ecossistemas"],
      question: "O que é um ecossistema?",
      answer: "É o conjunto dos seres vivos e dos elementos não vivos de um ambiente, incluindo as interações entre eles."
    },
    {
      subject: "Ciências",
      keywords: ["ciclo da água", "água"],
      question: "Como funciona o ciclo da água?",
      answer: "A água circula pelo ambiente por processos como evaporação, condensação, precipitação e infiltração."
    },
    {
      subject: "Geografia",
      keywords: ["continente", "continentes", "oceanos"],
      question: "Quais são os continentes?",
      answer: "Uma classificação comum considera África, América, Antártida, Ásia, Europa e Oceania."
    },
    {
      subject: "Geografia",
      keywords: ["clima", "tempo atmosférico"],
      question: "Qual é a diferença entre clima e tempo?",
      answer: "Tempo é a condição atmosférica em um momento. Clima é o padrão observado durante longos períodos."
    },
    {
      subject: "História",
      keywords: ["independência do brasil", "independência"],
      question: "Quando ocorreu a Independência do Brasil?",
      answer: "A Independência do Brasil foi proclamada em 7 de setembro de 1822."
    },
    {
      subject: "História",
      keywords: ["fontes históricas", "fonte histórica"],
      question: "O que são fontes históricas?",
      answer: "São vestígios e registros utilizados para investigar o passado, como documentos, objetos, imagens e relatos orais."
    },
    {
      subject: "Inglês",
      keywords: ["to be", "verbo to be"],
      question: "O que significa o verbo to be?",
      answer: "O verbo to be pode significar ser ou estar. Exemplos: I am (eu sou/estou), you are (você é/está) e she is (ela é/está)."
    },
    {
      subject: "Inglês",
      keywords: ["hello", "cumprimentos", "saudação"],
      question: "Como se diz olá em inglês?",
      answer: "Você pode dizer Hello ou Hi. Good morning significa bom dia."
    },
    {
      subject: "Física",
      keywords: ["velocidade média", "velocidade"],
      question: "Como calcular a velocidade média?",
      answer: "A velocidade média escalar é a distância percorrida dividida pelo tempo gasto. Exemplo: 100 m ÷ 20 s = 5 m/s."
    },
    {
      subject: "Física",
      keywords: ["newton", "força"],
      question: "Qual é a fórmula da força resultante?",
      answer: "A segunda lei de Newton é F = m × a. A força resultante é a massa multiplicada pela aceleração."
    },
    {
      subject: "Química",
      keywords: ["átomo", "átomos"],
      question: "O que é um átomo?",
      answer: "É uma unidade básica de um elemento químico. Possui núcleo com prótons e, normalmente, nêutrons, além de elétrons ao redor."
    },
    {
      subject: "Química",
      keywords: ["mistura", "misturas"],
      question: "Qual é a diferença entre misturas homogêneas e heterogêneas?",
      answer: "Uma mistura homogênea apresenta uma única fase visível. Uma heterogênea apresenta duas ou mais fases."
    },
    {
      subject: "Biologia",
      keywords: ["fotossíntese"],
      question: "O que é fotossíntese?",
      answer: "É o processo em que organismos como as plantas usam energia luminosa para produzir substâncias orgânicas a partir de água e dióxido de carbono."
    },
    {
      subject: "Biologia",
      keywords: ["célula", "células"],
      question: "O que é uma célula?",
      answer: "A célula é a unidade básica estrutural e funcional dos seres vivos."
    },
    {
      subject: "Filosofia",
      keywords: ["ética"],
      question: "O que é ética?",
      answer: "É uma área da Filosofia que estuda ações, valores, responsabilidades e questões sobre o que é justo ou correto."
    },
    {
      subject: "Filosofia",
      keywords: ["filosofia"],
      question: "O que é Filosofia?",
      answer: "É uma área de investigação que questiona e analisa temas como conhecimento, realidade, existência, ética e política."
    },
    {
      subject: "Sociologia",
      keywords: ["cultura"],
      question: "O que é cultura?",
      answer: "Cultura envolve práticas, conhecimentos, valores, costumes e símbolos aprendidos e compartilhados por grupos sociais."
    },
    {
      subject: "Sociologia",
      keywords: ["desigualdade social", "desigualdade"],
      question: "O que é desigualdade social?",
      answer: "É a distribuição desigual de recursos, oportunidades e direitos entre pessoas e grupos sociais."
    }
  ];

  function normalize(text) {
    return text
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\p{L}\p{N}\s%]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const doubtForm = $("doubtForm");
  const doubtSubject = $("doubtSubject");
  const doubtInput = $("doubtInput");
  const doubtAnswer = $("doubtAnswer");
  const suggestedQuestions = $("suggestedQuestions");

  function findAnswer(question, subject) {
    const query = normalize(question);

    if (!query) return null;

    // Reconhece contas simples digitadas pelo estudante.
    const mathMatch = query.match(
      /^(-?\d+(?:[.,]\d+)?)\s*([+\-*/x])\s*(-?\d+(?:[.,]\d+)?)$/
    );

    if (mathMatch && (subject === "todas" || subject === "Matemática")) {
      const a = Number(mathMatch[1].replace(",", "."));
      const b = Number(mathMatch[3].replace(",", "."));
      const op = mathMatch[2] === "x" ? "*" : mathMatch[2];

      if (op === "/" && b === 0) {
        return {
          subject: "Matemática",
          answer: "Não é possível dividir por zero."
        };
      }

      const result =
        op === "+" ? a + b :
        op === "-" ? a - b :
        op === "*" ? a * b : a / b;

      return {
        subject: "Matemática",
        answer: "O resultado é " + result + "."
      };
    }

    const words = query.split(" ").filter((word) => word.length > 2);

    let best = null;
    let bestScore = 0;

    questions.forEach((item) => {
      if (subject !== "todas" && item.subject !== subject) {
        return;
      }

      const keywords = item.keywords.map(normalize);
      let score = 0;

      keywords.forEach((keyword) => {
        if (query.includes(keyword)) {
          score += keyword.length > 5 ? 5 : 3;
        }
      });

      const normalizedQuestion = normalize(item.question);

      if (normalizedQuestion === query) score += 10;

      words.forEach((word) => {
        if (normalizedQuestion.includes(word)) score += 1;
      });

      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });

    if (!best || bestScore < 3) return null;

    return {
      subject: best.subject,
      answer: best.answer
    };
  }

  function displayAnswer(result, question) {
    if (!doubtAnswer) return;

    doubtAnswer.replaceChildren();
    doubtAnswer.hidden = false;

    const heading = document.createElement("h2");
    heading.textContent = result
      ? "📖 Resposta encontrada"
      : "🔎 Não encontramos uma resposta cadastrada";

    const paragraph = document.createElement("p");

    if (result) {
      paragraph.textContent = result.answer;

      const subject = document.createElement("p");
      subject.className = "helper-text";
      subject.textContent = "Matéria: " + result.subject;

      doubtAnswer.append(heading, paragraph, subject);
    } else {
      paragraph.textContent =
        "Ainda não temos uma resposta para essa pergunta. Experimente usar palavras como 'fotossíntese', 'fração', 'ética' ou 'Independência do Brasil', ou abra a matéria correspondente para estudar o conteúdo.";

      doubtAnswer.append(heading, paragraph);
    }

    if (question) {
      const searched = document.createElement("p");
      searched.className = "helper-text";
      searched.textContent = "Sua pergunta: " + question;
      doubtAnswer.appendChild(searched);
    }
  }

  function searchDoubt(question) {
    const subject = doubtSubject ? doubtSubject.value : "todas";
    const result = findAnswer(question, subject);
    displayAnswer(result, question);
  }

  if (doubtForm) {
    doubtForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const question = doubtInput ? doubtInput.value.trim() : "";

      if (!question) {
        if (doubtInput) doubtInput.focus();
        return;
      }

      searchDoubt(question);
    });
  }

  function renderSuggestedQuestions() {
    if (!suggestedQuestions) return;

    suggestedQuestions.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Experimente perguntar";
    suggestedQuestions.appendChild(heading);

    [
      "Como calcular porcentagem?",
      "O que é um substantivo?",
      "O que é fotossíntese?",
      "Quando ocorreu a Independência do Brasil?",
      "O que significa o verbo to be?",
      "O que é ética?"
    ].forEach((question) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = question;

      button.addEventListener("click", function () {
        if (doubtInput) doubtInput.value = question;
        searchDoubt(question);
        openPage("duvidas");
      });

      suggestedQuestions.appendChild(button);
    });
  }

  // =========================================
  // 6. PERFIL DO ESTUDANTE
  // =========================================

  const profileForm = $("profileForm");
  const profileName = $("profileName");
  const profileGoal = $("profileGoal");
  const profileMessage = $("profileMessage");

  const savedProfile = readStorage("estudafacil_profile_v1", {});

  function loadProfile() {
    if (
      savedProfile &&
      typeof savedProfile.name === "string" &&
      profileName
    ) {
      profileName.value = savedProfile.name;
    }

    if (profileGoal && savedProfile && savedProfile.goal) {
      const allowedGoals = ["15", "30", "45", "60"];

      if (allowedGoals.includes(String(savedProfile.goal))) {
        profileGoal.value = String(savedProfile.goal);
      }
    }
  }

  if (profileForm) {
    profileForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const profile = {
        name: profileName ? profileName.value.trim().slice(0, 40) : "",
        goal: profileGoal ? profileGoal.value : "15"
      };

      const saved = writeStorage("estudafacil_profile_v1", profile);

      if (profileMessage) {
        profileMessage.textContent = saved
          ? "Perfil salvo com sucesso neste dispositivo! ✅"
          : "Não foi possível salvar. Verifique as configurações do navegador.";
      }
    });
  }

  // =========================================
  // 7. INICIALIZAÇÃO
  // =========================================

  renderSubjects();
  renderProgress();
  renderSuggestedQuestions();
  loadProfile();
  openPage("inicio");

});
