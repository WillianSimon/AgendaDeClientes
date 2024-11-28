// Função para formatar a data sem domingos
function getDataFutura(dias) {
    let data = new Date();
    data.setDate(data.getDate() + dias);
    
    while (data.getDay() === 0) {  // Se for domingo, avança mais um dia
      data.setDate(data.getDate() + 1);
    }
  
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '');
    const diaMes = data.getDate();
    const diaSemanaMaiusculo = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
  
    return `${diaSemanaMaiusculo}<br><strong>${diaMes}</strong>`;
  }
  
  // Preenche cada botão com os dias
  function preencherBotoes() {
    let diasAdicionados = 0;
    let i = 0;
    const botoesIDs = ['diaPrimeiro', 'diaSegundo', 'diaTerceiro', 'diaQuarto', 'diaQuinto', 'diaSexto'];
  
    while (diasAdicionados < botoesIDs.length) {
      let dataFutura = new Date();
      dataFutura.setDate(dataFutura.getDate() + i);
  
      if (dataFutura.getDay() !== 0) {  // Ignora domingos
        let botao = document.getElementById(botoesIDs[diasAdicionados]);
        botao.innerHTML = getDataFutura(i);
        diasAdicionados++;
      }
      i++;
    }
  }
  
  // Carrega mês e ano
  function carregar() {
    const data = new Date();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const tituloMeseAno = document.querySelector('.títuloMês');
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    tituloMeseAno.innerHTML = `${meses[mes]} de ${ano}`;
  }

  function Manhã() {
    var hoje = new Date()
    var horaAtual = hoje.getHours()
    var minutos = hoje.getMinutes()
    const horarios = [
        "10:00", "11:00", "11:15", "10:30", "10:45", // horários entre 10:00 e 11:00
        "11:00", "11:15", "11:30", "11:45", // horários entre 11:00 e 12:00
        "12:00"
    ];

    // Seleciona todos os botões com a classe 'horas'
    const botoesHoras = document.querySelectorAll('.horas');
    
    // Preenche os botões com os horários
    botoesHoras.forEach((botao, index) => {
        if (index < horarios.length) {  // Verifica se há horários suficientes para os botões
            botao.innerText = horarios[index];
        }
    });
}

function Tarde() {
  const horarios = [
      "14:00", "14:15", "14:30", "14:45", // horários entre 10:00 e 11:00
      "15:00", "15:15", "15:30", "15:45", // horários entre 11:00 e 12:00
      "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45"
  ];

  // Seleciona todos os botões com a classe 'horas'
  const botoesHoras = document.querySelectorAll('.horas');
  
  // Preenche os botões com os horários
  botoesHoras.forEach((botao, index) => {
      if (index < horarios.length) {  // Verifica se há horários suficientes para os botões
          botao.innerText = horarios[index];
      }
  });
}


function Noite(){
  const horarios = [
    "18:00", "18:15", "18:30", "18:45", // horários entre 10:00 e 11:00
    "19:00", "19:15",  // horários entre 11:00 e 12:00
  ];
  
  // Seleciona todos os botões com a classe 'horas'
  const botoesHoras = document.querySelectorAll('.horas');
  
  // Preenche os botões com os horários
  botoesHoras.forEach((botao, index) => {
    if (index < horarios.length) {  // Verifica se há horários suficientes para os botões
        botao.innerText = horarios[index];
    }
  });
}

// Função principal que chama todas
  function carregarTudo() {
    carregar(); 
    preencherBotoes(); 
    Manhã();
  }


  // Variável para armazenar o botão anterior
let botãoAnterior = null;


function Selecionar(botãoClicado) {

  // Obter todos os botões
  var botoes = document.querySelectorAll('.período-btn');
  
  // Se houver um botão anterior, restaurar a cor original e remover a transparência
  if (botãoAnterior !== null) {
    botãoAnterior.style.backgroundColor = ''; // Volta para a cor original (ou remova o estilo se preferir)
    botãoAnterior.classList.remove('transparent');
  }

  // Alterar a cor do botão clicado
  botãoClicado.style.backgroundColor = '#ea30db';
  
  
  // Tornar todos os outros botões um pouco transparentes
  botoes.forEach(b => {
      if (b !== botãoClicado) {
          b.classList.add('transparent');
      } else {
          b.classList.remove('transparent');
      }
  });
  
  // Atualizar o botãoAnterior para o botão clicado
  botãoAnterior = botãoClicado;

}

// Variável para armazenar o botão clicado anteriormente
let botãoSelecionado = null;

function mudarCor(botãoClicado) {
    // Se houver um botão clicado anteriormente, restaurar sua cor original
    if (botãoSelecionado !== null) {
        botãoSelecionado.style.backgroundColor = ''; // Volta à cor original (ou remova o estilo se preferir)
    }

    // Alterar a cor do botão clicado
    botãoClicado.style.backgroundColor = '#ea30db'; // Defina a cor que você deseja

    // Atualizar o botãoSelecionado para o botão clicado
    botãoSelecionado = botãoClicado;
}

// Variável para armazenar o botão selecionado anteriormente
let botaoSelecionado = null;

function selecionarHora(botaoClicado) {
    // Restaurar a cor do botão anteriormente selecionado, se houver
    if (botaoSelecionado !== null) {
        botaoSelecionado.style.backgroundColor = ''; // Volta à cor original
    }

    // Definir a nova cor para o botão clicado
    botaoClicado.style.backgroundColor = '#ea30db'; // Cor desejada

    // Atualizar o botão selecionado
    botaoSelecionado = botaoClicado;
}

// Executa ao carregar a página
  window.onload = carregarTudo;