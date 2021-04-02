var cartaPaulo = {
    nome: "Seiya de Pegaso",
    atributos: {
      ataque:80,
      defesa:60,
      magia:90
    }
  }
  var cartaRafa = {
    nome: "Bulbasauro",
    atributos: {
        ataque:70,
        defesa:65,
        magia:85
    }
  }
  var cartaGui = {
    nome: "Lorde Darth Vader",
    atributos: {
       ataque:88,
       defesa:62,
       magia:90 
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaPaulo, cartaRafa, cartaGui]
  
  
  function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = parseInt(Math.random() * 3)
      //break
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    
    document.getElementById('btnSortear').disabled = true // Desabilitando o botão Sortear carta, depois de nós e a maquina ter sorteados as cartas.
    
    document.getElementById('btnJogar').disabled = false // habitando o botão Jogar
    exibirOpcoes()
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' value ='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
  }
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++){
      if(radioAtributo[i].checked){
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      alert('Você venceu a carta da maquina!')
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      alert('Você Perdeu! A carta da maquina é maior')
    } else {
      alert('Empatou')
    }
      console.log(cartaMaquina)
    }
    