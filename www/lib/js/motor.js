// This is a JavaScript file

window.onload = function(){
  document.querySelector("#alerta1").addEventListener('click',function(){
    function retorno(){

    }
    navigator.notification.alert("Alerta de Teste",retorno,"Titulo do Alerta","SIM");
   
  });

  document.querySelector("#alerta2").addEventListener('click',function(){

    function verifica(buttonIndex){
      if(buttonIndex == 1){
        navigator.notification.alert("Escolheu a opção A");
      }else{
        navigator.notification.alert("Escolheu a Opção B");
      }
    }

    navigator.notification.confirm("Escolha A ou B",verifica,"Opções de Escolha",['A','B']);

  });

  document.querySelector("#alerta3").addEventListener('click',function(){

    navigator.notification.beep(3);

  });

}