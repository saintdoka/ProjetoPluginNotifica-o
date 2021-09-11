// This is a JavaScript file

window.onload = function(){
  document.querySelector("#alerta1").addEventListener('click',function(){
    function retorno(){}
    navigator.notification.alert("Alerta de Teste",retorno,"Titulo do Alerta","SIM");
   
  });

  document.querySelector("#alerta2").addEventListener('click',function(){

    function verifica(buttonIndex){
      if(buttonIndex == 1){
        navigator.notification.alert("Escolheu a opção B");
      }else{
        navigator.notification.alert("Escolheu a Opção A");
      }
    }

    navigator.notification.confirm("Escolha A ou B",verifica,"Opções de Escolha",['B','A']);

  });

  document.querySelector("#alerta3").addEventListener('click',function(){

    navigator.notification.beep(1);

  });

  document.querySelector("#alerta4").addEventListener('click',function(){

    navigator.vibrate(250);

  });

  document.querySelector("#code").addEventListener('click',function(){
      
      cordova.plugins.barcodeScanner.scan(
      function (result) {
          function retorno(){}
          document.querySelector("#resultado").textContent = result.text;

          if(result.cancelled){
            navigator.notification.alert("Scan Cancelado pelo usuário!");
          }else{
            navigator.notification.alert("Resultado: "+result.text,retorno,"Scan Concluído","SIM");
          } 
         
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : false, // iOS and Android
          showTorchButton : false, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Coloque um QrCode na area de scan", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );


  });

}