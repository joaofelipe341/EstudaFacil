
document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const navButtons = document.querySelectorAll(".nav");
  const subjectGrid = document.getElementById("subjectGrid");

  const subjects = [
    { name: "Matemática", icon: "🧮", description: "Aprenda números, operações e problemas." },
    { name: "Português", icon: "📚", description: "Estude gramática, leitura e interpretação." },
    { name: "Ciências", icon: "🔬", description: "Descubra como funciona o mundo." },
    { name: "Geografia", icon: "🌎", description: "Conheça países, mapas e lugares." },
    { name: "História", icon: "🏛️", description: "Aprenda sobre acontecimentos do passado." },
    { name: "Inglês", icon: "🇬🇧", description: "Pratique palavras e frases em inglês." },
    { name: "Física", icon: "⚡", description: "Explore energia, movimento e forças." },
    { name: "Química", icon: "⚗️", description: "Conheça elementos e transformações." },
    { name: "Biologia", icon: "🌱", description: "Estude os seres vivos e a natureza." },
    { name: "Filosofia", icon: "💭", description: "Reflita sobre ideias e perguntas." },
    { name: "Sociologia", icon: "👥", description: "Entenda a sociedade e as relações humanas." }
  ];

  let currentSubject = "Matemática";
  let studied = JSON.parse(localStorage.getItem("estudafacil_estudadas") || "[]");

  function showPage(pageId) {
    pages.forEach(function (page) {
      page.classList.toggle("active", page.id === pageId);
    });

    navButtons.forEach(function (button) {
      button.classList.toggle("active", button.dataset.page === pageId);
    });
  }

  navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const pageId = button.dataset.page;
      if (pageId) showPage(pageId);
    });
  });

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      showPage("inicio");
    });
  }

  function openSubject(subject) {
    currentSubject = subject.name;

    const title = document.getElementById("subjectTitle");
    const description = document.getElementById("subjectDescription");

    if (title) title.textContent = subject.icon + " " + subject.name;
    if (description) description.textContent = subject.description;

    showPage("estudo");
  }

  if (subjectGrid) {
    subjectGrid.innerHTML = "";

    subjects.forEach(function (subject) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "subject-card";
      card.innerHTML =
        "<h3>" + subject.icon + " " + subject.name + "</h3>" +
        "<p>" + subject.description + "</p>";

      card.addEventListener("click", function () {
        openSubject(subject);
      });

      subjectGrid.appendChild(card);
    });
  }

  const markStudied = document.getElementById("markStudied");
  if (markStudied) {
    markStudied.addEventListener("click", function () {
      if (!studied.includes(currentSubject)) {
        studied.push(currentSubject);
        localStorage.setItem("estudafacil_estudadas", JSON.stringify(studied));
      }

      updateProgress();

      const message = document.getElementById("studyMessage");
      if (message) message.textContent = "Parabéns! Você marcou " + currentSubject + " como estudada!";
    });
  }

  function updateProgress() {
    const count = document.getElementById("progressCount");
    const bar = document.getElementById("progressBar");
    const text = document.getElementById("progressText");

    if (count) count.textContent = studied.length;

    if (bar) {
      const inner = bar.querySelector("div");
      const percentage = Math.round((studied.length / subjects.length) * 100);

      if (inner) {
        inner.style.width = percentage + "%";
      } else {
        bar.style.width = "100%";
        bar.style.background =
          "linear-gradient(to right, #6c3de8 " + percentage + "%, #e8e0f7 " + percentage + "%)";
      }
    }

    if (text) {
      text.textContent = Math.round((studied.length / subjects.length) * 100) +
        "% das matérias marcadas como estudadas.";
    }
  }

  const resetProgress = document.getElementById("resetProgress");
  if (resetProgress) {
    resetProgress.addEventListener("click", function () {
      studied = [];
      localStorage.removeItem("estudafacil_estudadas");
      updateProgress();
    });
  }

  const display = document.getElementById("display");

  function calculate() {
    if (!display) return;

    let expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/,/g, ".")
      .replace(/\s+/g, "");

    if (!expression || !/^[0-9+\-*/().]+$/.test(expression)) {
      display.value = "Conta inválida";
      return;
    }

    try {
      const result = Function('"use strict"; return (' + expression + ')')();

      if (typeof result !== "number" || !Number.isFinite(result)) {
        display.value = "Conta inválida";
      } else {
        display.value = String(Number(result.toFixed(10)));
      }
    } catch (error) {
      display.value = "Conta inválida";
    }
  }

  document.querySelectorAll("[data-value]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (!display) return;

      if (display.value === "Conta inválida") display.value = "";

      display.value += button.dataset.value;
    });
  });

  document.querySelectorAll("[data-calc]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (!display) return;

      const action = button.dataset.calc;

      if (action === "clear") {
        display.value = "";
      } else if (action === "back") {
        display.value = display.value.slice(0, -1);
      } else if (action === "equals") {
        calculate();
      }
    });
  });

  const askButton = document.getElementById("askButton");
  if (askButton) {
    askButton.addEventListener("click", function () {
      const subjectSelect = document.getElementById("questionSubject");
      const questionInput = document.getElementById("questionInput");
      const answer = document.getElementById("answer");

      if (!questionInput || !answer) return;

      const question = questionInput.value.trim().toLowerCase();
      const subject = subjectSelect ? subjectSelect.value : "Geral";

      if (!question) {
        answer.textContent = "Digite sua dúvida primeiro.";
        return;
      }

      let response = "Ainda não tenho uma resposta pronta para essa pergunta. Tente perguntar de outro jeito ou consulte seu professor.";

      if (question.includes("capital do brasil")) {
        response = "A capital do Brasil é Brasília.";
      } else if (question.includes("quanto é") || question.includes("soma")) {
        response = "Para resolver uma soma, junte as quantidades. Exemplo: 5 + 5 = 10.";
      } else if (question.includes("fotossíntese")) {
        response = "Fotossíntese é o processo pelo qual plantas usam luz, água e gás carbônico para produzir seu alimento.";
      } else if (question.includes("planeta") && question.includes("maior")) {
        response = "O maior planeta do Sistema Solar é Júpiter.";
      } else if (question.includes("verbo")) {
        response = "Verbo é uma palavra que pode indicar ação, estado ou fenômeno da natureza. Exemplo: correr, estar, chover.";
      } else if (question.includes("inglês") || question.includes("hello")) {
        response = "Em inglês, “hello” significa “olá”.";
      } else if (question.includes("segunda guerra")) {
        response = "A Segunda Guerra Mundial ocorreu de 1939 a 1945.";
      } else if (question.includes("água") && question.includes("fórmula")) {
        response = "A fórmula química da água é H₂O: duas partes de hidrogênio para uma de oxigênio.";
      }

      answer.textContent = "Matéria: " + subject + ". " + response;
    });
  }

  const saveProfile = document.getElementById("saveProfile");
  if (saveProfile) {
    saveProfile.addEventListener("click", function () {
      const studentName = document.getElementById("studentName");
      const profileMessage = document.getElementById("profileMessage");

      if (!studentName || !profileMessage) return;

      const name = studentName.value.trim();

      if (!name) {
        profileMessage.textContent = "Digite seu nome antes de salvar.";
        return;
      }

      localStorage.setItem("estudafacil_nome", name);
      profileMessage.textContent = "Nome salvo! Olá, " + name + "!";
    });
  }

  const studentName = document.getElementById("studentName");
  if (studentName) {
    studentName.value = localStorage.getItem("estudafacil_nome") || "";
  }

  updateProgress();
});
