```javascript
function mostrarPagina(id) {
  document.querySelectorAll(".pagina").forEach(function(pagina) {
    pagina.classList.remove("ativa");
  });

  const destino = document.getElementById(id);

  if (destino) {
    destino.classList.add("ativa");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function abrirMateria(nome) {
  const area = document.getElementById("detalheMateria");

  area.innerHTML = "";

  const titulo = document.createElement("h3");
  titulo.textContent = "📚 " + nome;

  const texto = document.createElement("p");
  texto.textContent =
    "Você escolheu " + nome +
    ". Aqui você pode revisar conteúdos e anotar suas dúvidas.";

  const voltar = document.createElement("button");
  voltar.textContent = "← Voltar às matérias";
  voltar.onclick = function() {
    mostrarPagina("materias");
  };

  area.appendChild(titulo);
  area.appendChild(texto);
  area.appendChild(voltar);
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function adicionar(valor) {
  const visor = document.getElementById("visor");
  visor.value += valor;
}

function limpar() {
  document.getElementById("visor").value = "";
  document.getElementById("resultado").textContent = "";
}

function calcular() {
  const visor = document.getElementById("visor");
  const resultado = document.getElementById("resultado");
  const conta = visor.value.trim();

  if (!conta) {
    resultado.textContent = "Digite uma conta primeiro.";
    return;
  }

  if (!/^[0-9+\-*/().\s]+$/.test(conta)) {
    resultado.textContent = "Use apenas números e operações matemáticas.";
    return;
  }

  try {
    const valor = Function('"use strict"; return (' + conta + ')')();

    if (typeof valor !== "number" || !Number.isFinite(valor)) {
      throw new Error("Conta inválida");
    }

    resultado.textContent = "Resultado: " + valor;
  } catch (erro) {
    resultado.textContent = "Conta inválida. Confira os números e sinais.";
  }
}

let sessoesConcluidas = 0;

function marcarProgresso() {
  sessoesConcluidas++;

  document.getElementById("totalProgresso").textContent =
    "Sessões concluídas: " + sessoesConcluidas;
}

function salvarNome() {
  const nome = document.getElementById("nome").value.trim();
  const saudacao = document.getElementById("saudacao");

  if (!nome) {
    saudacao.textContent = "Digite seu nome primeiro.";
    return;
  }

  saudacao.textContent = "Olá, " + nome + "! Bons estudos! 💜";
}
```
