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
  console.log("Botão clicado. Direção:", direcao); // DEBUG
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