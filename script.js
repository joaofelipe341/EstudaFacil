
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const materias = [
    {
      nome: "Matemática", icone: "🧮",
      descricao: "Números, operações e problemas.",
      conteudos: [
        ["Adição", "A adição junta quantidades. Exemplo: 5 + 3 = 8."],
        ["Subtração", "A subtração encontra a diferença. Exemplo: 9 - 4 = 5."],
        ["Multiplicação", "A multiplicação representa somas repetidas. Exemplo: 4 × 3 = 12."],
        ["Divisão", "A divisão reparte quantidades. Exemplo: 12 ÷ 3 = 4."],
        ["Frações", "Uma fração representa partes de um todo. Em 1/2, consideramos uma de duas partes iguais."]
      ]
    },
    {
      nome: "Português", icone: "📖",
      descricao: "Leitura, escrita e gramática.",
      conteudos: [
        ["Substantivo", "Palavra que nomeia pessoas, lugares, objetos, sentimentos e ideias."],
        ["Verbo", "Expressa ação, estado ou fenômeno. Exemplos: correr, estar e chover."],
        ["Adjetivo", "Caracteriza um substantivo. Exemplo: livro interessante."],
        ["Interpretação de texto", "Leia com atenção, encontre a ideia principal e procure as informações que justificam sua resposta."],
        ["Pontuação", "O ponto final encerra uma frase; a interrogação indica pergunta; a exclamação pode indicar emoção."]
      ]
    },
    {
      nome: "Ciências", icone: "🔬",
      descricao: "Natureza, matéria e energia.",
      conteudos: [
        ["Matéria", "É tudo aquilo que tem massa e ocupa espaço."],
        ["Ecossistema", "Conjunto dos seres vivos e dos fatores não vivos que interagem em um ambiente."],
        ["Água", "É essencial à vida e pode ser encontrada nos estados sólido, líquido e gasoso."],
        ["Energia", "Pode se manifestar como luz, calor, movimento e eletricidade."],
        ["Meio ambiente", "Preservar o ambiente envolve reduzir desperdícios, evitar poluição e proteger a biodiversidade."]
      ]
    },
    {
      nome: "Geografia", icone: "🌎",
      descricao: "Mapas, população, clima e território.",
      conteudos: [
        ["Cartografia", "Área que estuda e produz mapas e outras representações da superfície terrestre."],
        ["Clima", "Padrão das condições atmosféricas observado durante longos períodos."],
        ["Relevo", "Formas da superfície terrestre, como montanhas, planaltos e planícies."],
        ["População", "Conjunto de pessoas que vivem em determinado território."],
        ["Urbanização", "Processo de crescimento da população urbana em relação à população rural."]
      ]
    },
    {
      nome: "História", icone: "🏛️",
      descricao: "Sociedades e acontecimentos do passado.",
      conteudos: [
        ["Fontes históricas", "Vestígios usados para estudar o passado, como documentos, fotografias, objetos e relatos."],
        ["Antiguidade", "Período que inclui civilizações como Egito, Grécia e Roma antigas."],
        ["Idade Média", "Período histórico tradicionalmente situado entre a Antiguidade e a Idade Moderna."],
        ["Brasil colonial", "Período em que o território brasileiro esteve sob domínio português, iniciado no século XVI."],
        ["Independência do Brasil", "Foi proclamada em 7 de setembro de 1822."]
      ]
    },
    {
      nome: "Inglês", icone: "🇬🇧",
      descricao: "Vocabulário e expressões em inglês.",
      conteudos: [
        ["Saudações", "Hello = olá; Good morning = bom dia; Good night = boa noite."],
        ["Pronomes", "I = eu; You = você; He = ele; She = ela; We = nós; They = eles ou elas."],
        ["Verbo to be", "Pode significar ser ou estar. Exemplos: I am, You are, She is."],
        ["Números", "One = um; Two = dois; Three = três; Four = quatro; Five = cinco."],
        ["Cores", "Red = vermelho; Blue = azul; Green = verde; Yellow = amarelo; Black = preto."]
      ]
    },
    {
      nome: "Física", icone: "⚡",
      descricao: "Movimento, forças e energia.",
      conteudos: [
        ["Movimento", "Acontece quando a posição de um objeto muda em relação a um referencial."],
        ["Velocidade média", "É calculada dividindo a distância percorrida pelo tempo gasto."],
        ["Força", "Pode alterar o movimento ou deformar um objeto."],
        ["Energia", "Pode ser transferida e transformada, por exemplo, de elétrica em luminosa."],
        ["Eletricidade", "A corrente elétrica é o movimento ordenado de cargas elétricas."]
      ]
    },
    {
      nome: "Química", icone: "⚗️",
      descricao: "Átomos, substâncias e transformações.",
      conteudos: [
        ["Átomo", "Unidade básica da matéria, formada por núcleo e elétrons."],
        ["Elemento químico", "É definido pelo número de prótons no núcleo de seus átomos."],
        ["Molécula", "Conjunto de átomos ligados quimicamente."],
        ["Misturas", "A combinação de substâncias pode formar misturas homogêneas ou heterogêneas."],
        ["Reação química", "Transformação em que substâncias são convertidas em outras."]
      ]
    },
    {
      nome: "Biologia", icone: "🧬",
      descricao: "Vida, células e seres vivos.",
      conteudos: [
        ["Célula", "Unidade estrutural e funcional básica dos seres vivos."],
        ["Fotossíntese", "Processo pelo qual plantas, algas e alguns organismos usam luz para produzir matéria orgânica."],
        ["Ecologia", "Estuda as relações dos seres vivos entre si e com o ambiente."],
        ["DNA", "Molécula que armazena informações genéticas."],
        ["Corpo humano", "Possui sistemas que trabalham em conjunto, como os sistemas digestório, respiratório e circulatório."]
      ]
    },
    {
      nome: "Filosofia", icone: "💭",
      descricao: "Pensamento crítico, ética e conhecimento.",
      conteudos: [
        ["Filosofia", "Investiga questões sobre existência, conhecimento, razão e valores."],
        ["Ética", "Reflete sobre ações humanas, responsabilidades e o que consideramos correto ou justo."],
        ["Lógica", "Estuda princípios do raciocínio válido e da argumentação."],
        ["Sócrates", "Filósofo grego conhecido pelo diálogo e por questionar ideias."],
        ["Conhecimento", "Pode ser investigado por meio da experiência, da razão e da observação."]
      ]
    },
    {
      nome: "Sociologia", icone: "👥",
      descricao: "Sociedade, cultura e relações sociais.",
      conteudos: [
        ["Sociedade", "Pessoas que convivem e estabelecem relações, regras e instituições."],
        ["Cultura", "Inclui costumes, valores, conhecimentos, crenças e práticas compartilhadas."],
        ["Socialização", "Processo pelo qual aprendemos normas, valores e formas de convivência."],
        ["Desigualdade social", "Diferenças no acesso a recursos, oportunidades e direitos."],
        ["Instituições sociais", "Família, escola e Estado organizam aspectos da vida coletiva."]
      ]
    }
  ];

  let materiaAtual = null;
  let conta = "";
  let calculado = false;

  function aviso(texto) {
    const el = $("#notice");
    if (!el) return;
    el.textContent = texto;
    el.hidden = false;
    clearTimeout(aviso.timer);
    aviso.timer = setTimeout(() => {
      el.hidden = true;
    }, 3000);
  }

  function abrirPagina(nome) {
    const pagina = $("#page-" + nome);
    if (!pagina) {
      aviso("Página não encontrada. Confira os arquivos HTML.");
      return;
    }

    $$(".page").forEach((p) => p.classList.remove("active"));
    pagina.classList.add("active");

    $$(".nav-btn[data-page]").forEach((b) => {
      b.classList.toggle("active", b.dataset.page === nome);
    });

    $("#sidebar")?.classList.remove("open");
    $("#menuToggle")?.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", (event) => {
    const botao = event.target.closest("[data-page]");
    if (botao) abrirPagina(botao.dataset.page);
  });

  const menuToggle = $("#menuToggle");
  const sidebar = $("#sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      const aberto = sidebar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(aberto));
    });
  }

  function mostrarMaterias(filtro = "") {
    const grade = $("#subjectGrid");
    const vazio = $("#noSubjects");
    if (!grade) return;

    const termo = filtro.trim().toLocaleLowerCase("pt-BR");
    const lista = materias.filter((m) =>
      m.nome.toLocaleLowerCase("pt-BR").includes(termo)
    );

    grade.replaceChildren();

    lista.forEach((m) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "subject-card";

      const icone = document.createElement("span");
      icone.className = "subject-icon";
      icone.textContent = m.icone;

      const titulo = document.createElement("strong");
      titulo.textContent = m.nome;

      const descricao = document.createElement("span");
      descricao.textContent = m.descricao;

      botao.append(icone, titulo, descricao);
      botao.addEventListener("click", () => abrirMateria(m.nome));
      grade.appendChild(botao);
    });

    if (vazio) vazio.hidden = lista.length > 0;
  }

  function abrirMateria(nome) {
    materiaAtual = materias.find((m) => m.nome === nome);
    if (!materiaAtual) return;

    $("#subjectTitle").textContent = materiaAtual.icone + " " + materiaAtual.nome;
    $("#subjectDescription").textContent = materiaAtual.descricao;

    const conteudo = $("#subjectContent");
    if (conteudo) {
      conteudo.replaceChildren();

      materiaAtual.conteudos.forEach(([titulo, texto]) => {
        const artigo = document.createElement("article");
        artigo.className = "topic";

        const h3 = document.createElement("h3");
        h3.textContent = titulo;

        const p = document.createElement("p");
        p.textContent = texto;

        artigo.append(h3, p);
        conteudo.appendChild(artigo);
      });
    }

    const pergunta = $("#doubtInput");
    const resposta = $("#doubtAnswer");
    if (pergunta) pergunta.value = "";
    if (resposta) {
      resposta.textContent = "";
      resposta.hidden = true;
    }

    abrirPagina("materia");
  }

  $("#subjectSearch")?.addEventListener("input", (event) => {
    mostrarMaterias(event.target.value);
  });

  $("#doubtForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const campo = $("#doubtInput");
    const resposta = $("#doubtAnswer");
    if (!campo || !resposta || !materiaAtual) return;

    const pergunta = campo.value.trim().toLocaleLowerCase("pt-BR");
    if (!pergunta) {
      resposta.textContent = "Digite sua dúvida primeiro.";
      resposta.hidden = false;
      return;
    }

    const palavras = pergunta.split(/\s+/).filter((p) => p.length > 2);
    const encontrados = materiaAtual.conteudos.filter(([titulo, texto]) => {
      const conteudo = (titulo + " " + texto).toLocaleLowerCase("pt-BR");
      return conteudo.includes(pergunta) ||
        palavras.some((palavra) => conteudo.includes(palavra));
    });

    resposta.textContent = encontrados.length
      ? encontrados.map(([titulo, texto]) => titulo + ": " + texto).join("\n\n")
      : "Não encontrei essa dúvida nos resumos desta matéria. Experimente usar uma palavra do conteúdo. Esta pesquisa funciona com os textos disponíveis e não usa inteligência artificial.";

    resposta.hidden = false;
  });

  function lerProgresso() {
    try {
      const dados = JSON.parse(localStorage.getItem("estudafacil_completed") || "[]");
      return Array.isArray(dados) ? dados : [];
    } catch {
      return [];
    }
  }

  function guardarProgresso(lista) {
    try {
      localStorage.setItem("estudafacil_completed", JSON.stringify(lista));
    } catch {
      aviso("Não foi possível guardar o progresso neste navegador.");
    }
  }

  function atualizarProgresso() {
    const concluidas = lerProgresso();
    const quantidade = materias.filter((m) => concluidas.includes(m.nome)).length;
    const porcentagem = Math.round(quantidade / materias.length * 100);

    if ($("#progressCount")) {
      $("#progressCount").textContent = quantidade + " de " + materias.length + " matérias";
    }
    if ($("#progressPercent")) {
      $("#progressPercent").textContent = porcentagem + "%";
    }
    if ($("#progressBar")) {
      $("#progressBar").style.width = porcentagem + "%";
    }
    if ($("#progressMessage")) {
      $("#progressMessage").textContent = quantidade === materias.length
        ? "Parabéns! Você estudou todas as matérias."
        : quantidade === 0
          ? "Comece estudando qualquer matéria."
          : "Muito bem! Continue no seu ritmo.";
    }
    if ($("#homeProgress")) {
      $("#homeProgress").textContent =
        quantidade + " de " + materias.length + " matérias concluídas (" + porcentagem + "%).";
    }

    const lista = $("#progressList");
    if (lista) {
      lista.replaceChildren();
      materias.forEach((m) => {
        const item = document.createElement("p");
        item.textContent = (concluidas.includes(m.nome) ? "✅ " : "⬜ ") + m.nome;
        lista.appendChild(item);
      });
    }
  }

  $("#finishSubject")?.addEventListener("click", () => {
    if (!materiaAtual) {
      aviso("Abra uma matéria primeiro.");
      return;
    }

    const concluidas = lerProgresso();
    if (!concluidas.includes(materiaAtual.nome)) {
      concluidas.push(materiaAtual.nome);
      guardarProgresso(concluidas);
    }

    atualizarProgresso();
    aviso("Matéria marcada como estudada!");
  });

  $("#resetProgress")?.addEventListener("click", () => {
    if (confirm("Deseja zerar seu progresso?")) {
      guardarProgresso([]);
      atualizarProgresso();
      aviso("Progresso zerado.");
    }
  });

  function atualizarBoasVindas(nome) {
    if ($("#welcomeTitle")) {
      $("#welcomeTitle").textContent = nome ? "Olá, " + nome + "! 👋" : "Olá! 👋";
    }
  }

  try {
    const nome = localStorage.getItem("estudafacil_name") || "";
    if ($("#studentName")) $("#studentName").value = nome;
    atualizarBoasVindas(nome);
  } catch {
    atualizarBoasVindas("");
  }

  $("#profileForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const campo = $("#studentName");
    if (!campo) return;

    const nome = campo.value.trim().slice(0, 50);
    try {
      localStorage.setItem("estudafacil_name", nome);
      atualizarBoasVindas(nome);
      if ($("#profileMessage")) {
        $("#profileMessage").textContent = "Perfil salvo neste navegador!";
      }
    } catch {
      aviso("Não foi possível salvar o perfil neste navegador.");
    }
  });

  $("#logoutBtn")?.addEventListener("click", () => abrirPagina("inicio"));

  // Calculadora: analisa operações sem executar código arbitrário.
  function calcular(expressao) {
    if (!expressao || !/^[0-9+\-*/().\s]+$/.test(expressao)) {
      throw new Error("Conta inválida.");
    }

    let posicao = 0;

    function espacos() {
      while (expressao[posicao] === " ") posicao++;
    }

    function fator() {
      espacos();

      if (expressao[posicao] === "+") {
        posicao++;
        return fator();
      }
      if (expressao[posicao] === "-") {
        posicao++;
        return -fator();
      }
      if (expressao[posicao] === "(") {
        posicao++;
        const valor = soma();
        espacos();
        if (expressao[posicao] !== ")") throw new Error("Parênteses incompletos.");
        posicao++;
        return valor;
      }

      const trecho = expressao.slice(posicao).match(/^(?:\d+\.?\d*|\.\d+)/);
      if (!trecho) throw new Error("Conta inválida.");
      posicao += trecho[0].length;
      return Number(trecho[0]);
    }

    function produto() {
      let valor = fator();
      espacos();

      while (expressao[posicao] === "*" || expressao[posicao] === "/") {
        const operador = expressao[posicao++];
        const direito = fator();

        if (operador === "/" && direito === 0) {
          throw new Error("Não é possível dividir por zero.");
        }

        valor = operador === "*" ? valor * direito : valor / direito;
        espacos();
      }
      return valor;
    }

    function soma() {
      let valor = produto();
      espacos();

      while (expressao[posicao] === "+" || expressao[posicao] === "-") {
        const operador = expressao[posicao++];
        const direito = produto();
        valor = operador === "+" ? valor + direito : valor - direito;
        espacos();
      }
      return valor;
    }

    const resultado = soma();
    espacos();

    if (posicao !== expressao.length || !Number.isFinite(resultado)) {
      throw new Error("Conta inválida.");
    }
    return Number(resultado.toPrecision(12));
  }

  function atualizarVisor() {
    if ($("#calcDisplay")) $("#calcDisplay").value = conta || "0";
  }

  $$(".calc-grid button").forEach((botao) => {
    botao.addEventListener("click", () => {
      const acao = botao.dataset.calc;
      const valor = botao.dataset.value;
      const mensagem = $("#calcMessage");

      if (acao === "clear") {
        conta = "";
        calculado = false;
        if (mensagem) mensagem.textContent = "Digite uma conta.";
        atualizarVisor();
        return;
      }

      if (acao === "backspace") {
        conta = conta.slice(0, -1);
        calculado = false;
        atualizarVisor();
        return;
      }

      if (acao === "equals") {
        try {
          const resultado = calcular(conta);
          conta = String(resultado);
          calculado = true;
          if (mensagem) mensagem.textContent = "Resultado calculado.";
          atualizarVisor();
        } catch (erro) {
          if (mensagem) mensagem.textContent = erro.message || "Conta inválida.";
        }
        return;
      }

      if (valor !== undefined) {
        const operador = ["+", "-", "*", "/"].includes(valor);

        if (calculado && !operador && valor !== ")") conta = "";
        if (calculado && operador) calculado = false;

        conta += valor;
        calculado = false;
        if (mensagem) mensagem.textContent = "Digite uma conta e aperte =.";
        atualizarVisor();
      }
    });
  });

  mostrarMaterias();
  atualizarProgresso();
  atualizarVisor();
});
