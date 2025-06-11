const imagens = [
  'images/foto1.jpg',
  'images/foto2.jpg',
  'images/foto3.jpg',
  'images/foto4.jpg',
  // Adicione mais se quiser
];

let indiceAtual = 0;

function mostrarTela2() {
  document.getElementById('tela1').style.display = 'none';
  document.getElementById('tela2').style.display = 'flex';
  atualizarImagem();
  iniciarContador();
}

function mudarImagem(direcao) {
  indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
  atualizarImagem();
}

function atualizarImagem() {
  document.getElementById('imagemCarrossel').src = imagens[indiceAtual];
}

// Contador
function iniciarContador() {
  const inicio = new Date('2022-12-19T13:00:00'); // <-- Edite a data aqui

  function atualizarContador() {
    const agora = new Date();
    let diffMs = agora - inicio;

    // Dias totais
    let diasTotais = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let anos = Math.floor(diasTotais / 365);
    let meses = Math.floor((diasTotais % 365) / 30);
    let dias = diasTotais % 30;

    // Tempo (horas, minutos, segundos)
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Formatando para 2 dígitos
    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    document.getElementById('contador-anos-numero').innerHTML = `${anos}`;
    document.getElementById("contador-meses-numero").innerHTML = `${meses}`;
    document.getElementById("contador-dias-numero").innerHTML = `${dias}`;
    document.getElementById("contador-horas-numero").innerHTML = `${horas}`;
    document.getElementById("contador-minutos-numero").innerHTML = `${minutos}`;
    document.getElementById("contador-segundos-numero").innerHTML = `${segundos}`;
  }

  atualizarContador(); // chama uma vez para mostrar logo
  setInterval(atualizarContador, 1000); // atualiza a cada segundo
}

// Estrelas
// Seleciona o canvas e o contexto
const canvas = document.getElementById('fundo-estrelado');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para preencher a tela
function ajustarTamanhoCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
ajustarTamanhoCanvas();
window.addEventListener('resize', ajustarTamanhoCanvas);

// Cria e popula o array de estrelas
const estrelas = [];
const NUM_ESTRELAS = 100;

for (let i = 0; i < NUM_ESTRELAS; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 100
  });
}

let angulo = 0;

// Função que desenha as estrelas no canvas
function desenharEstrelas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  for (let i = 0; i < estrelas.length; i++) {
    const e = estrelas[i];
    ctx.moveTo(e.x, e.y);
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moverEstrelas();
}

// Função que atualiza a posição das estrelas para animar
function moverEstrelas() {
  angulo += 0.01;
  for (let i = 0; i < estrelas.length; i++) {
    estrelas[i].y += Math.cos(angulo + estrelas[i].d) + 1 + estrelas[i].r / 2;
    estrelas[i].x += Math.sin(angulo) * 0.5;

    if (estrelas[i].y > canvas.height) {
      estrelas[i].y = 0;
      estrelas[i].x = Math.random() * canvas.width;
    }
    if (estrelas[i].x > canvas.width) {
      estrelas[i].x = 0;
    }
    if (estrelas[i].x < 0) {
      estrelas[i].x = canvas.width;
    }
  }
}

// Inicia a animação
setInterval(desenharEstrelas, 50);

// --- Seu código de carrossel, contador e funções adicionais devem ficar aqui ---