var button = document.getElementById("playButton");
var audio = document.getElementById("backgroundMusic");
var moveForwardSound=document.getElementById("moveForwardSound");
var slideSound=document.getElementById("slideSound");
var ladderSound= document.getElementById("ladderSound");
var llegadaSound= document.getElementById("llegadaSound");
var congratulations =document.getElementById("congratulations");

var videoLlegada=document.getElementById("videoLlegada");

var toggleFx = document.getElementById("activateSound");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();

    button.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    button.innerHTML = '<i class="fas fa-play"></i>';
  }
});


//Comentario V: para hacer el loop del backgroundMusic sin pausa se puede poner buffer de 13.1692 o de 2.
audio.addEventListener('timeupdate', function(){
    var buffer = 2;
    if(audio.currentTime > audio.duration - buffer){
        audio.currentTime = 0;
        audio.play()
    }
});

toggleFx.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    toggleFx.innerHTML = '<i class="fas fa-toggle-on"></i>';
  } else {
    audio.pause();
    toggleFx.innerHTML = '<i class="fas fa-toggle-off"></i>';
  }
});


(function(){ //wrap everything on a function to keep the global scope clean.
  const wheel =document.querySelector('.wheel');
  const startButton = document.querySelector('.buttonWheel');
  const dice =document.querySelector('.dice');
  const closeQuestion=document.querySelector('.closeQuestion');


  let deg=0;

  function closePopup() {
    var x = document.querySelector('.ods-popup');

      x.style.display = "none";

  }









  window.addEventListener('click', () => {

    var currentPosP1= document.querySelector('input[name="cb-player1"]:checked').value;
    var currentPosP2= document.querySelector('input[name="cb-player2"]:checked').value;
    var currentPosP3= document.querySelector('input[name="cb-player3"]:checked').value;
    var currentPosP4= document.querySelector('input[name="cb-player4"]:checked').value;
    var playerTurn= document.querySelector('input[name="turn"]:checked').value;
    var colorOption= document.querySelector('input[name="colors"]:checked').value;


    if(playerTurn == "1" && colorOption == "colors1"){

      document.getElementById("turn-player-info").src ='img/peon3-01.png';
      document.getElementById("turn-player-number").textContent ='1';





    }if(playerTurn == "2" && colorOption == "colors1"){
      document.getElementById("turn-player-info").src ='img/peon2-01.png';
      document.getElementById("turn-player-number").textContent ='2';

    }if(playerTurn == "3" && colorOption == "colors1")
    {
      document.getElementById("turn-player-info").src ='img/peon1-01.png';
      document.getElementById("turn-player-number").textContent ='3';

    }
    if(playerTurn == "4" && colorOption == "colors1")
    {
      document.getElementById("turn-player-info").src ='img/peon4-01.png';
      document.getElementById("turn-player-number").textContent ='4';

    }
  if(playerTurn == "1" && colorOption == "colors2"){
      document.getElementById("turn-player-info").src ='img/peon2-01.png';
        document.getElementById("turn-player-number").textContent ='1';
    }if(playerTurn == "2" && colorOption == "colors2"){
      document.getElementById("turn-player-info").src ='img/peon1-01.png';
        document.getElementById("turn-player-number").textContent ='2';
    }if(playerTurn == "3" && colorOption == "colors2")
    {
      document.getElementById("turn-player-info").src ='img/peon4-01.png';
        document.getElementById("turn-player-number").textContent ='3';
    }
    if(playerTurn == "4" && colorOption == "colors2")
    {
      document.getElementById("turn-player-info").src ='img/peon3-01.png';
        document.getElementById("turn-player-number").textContent ='4';
    }
    if(playerTurn == "1" && colorOption == "colors3"){
      document.getElementById("turn-player-info").src ='img/peon1-01.png';
        document.getElementById("turn-player-number").textContent ='1';
    }else if(playerTurn == "2" && colorOption == "colors3"){
      document.getElementById("turn-player-info").src ='img/peon4-01.png';
        document.getElementById("turn-player-number").textContent ='2';
    }else if(playerTurn == "3" && colorOption == "colors3")
    {
      document.getElementById("turn-player-info").src ='img/peon3-01.png';
        document.getElementById("turn-player-number").textContent ='3';
    }
    else if(playerTurn == "4" && colorOption == "colors3")
    {
      document.getElementById("turn-player-info").src ='img/peon2-01.png';
        document.getElementById("turn-player-number").textContent ='4';
    }
    else if(playerTurn == "1" && colorOption == "colors4"){
      document.getElementById("turn-player-info").src ='img/peon4-01.png';
        document.getElementById("turn-player-number").textContent ='1';
    }else if(playerTurn == "2" && colorOption == "colors4"){
      document.getElementById("turn-player-info").src ='img/peon3-01.png';
        document.getElementById("turn-player-number").textContent ='2';
    }else if(playerTurn == "3" && colorOption == "colors4")
    {
      document.getElementById("turn-player-info").src ='img/peon2-01.png';
        document.getElementById("turn-player-number").textContent ='3';
    }
    else if(playerTurn == "4" && colorOption == "colors4")
    {
      document.getElementById("turn-player-info").src ='img/peon1-01.png';
        document.getElementById("turn-player-number").textContent ='4';
    }
    // var wheelPlayer = document.getElementById("wheelPlayer");
    // wheelPlayer.style.color='transparent';
    var wheelResult = document.getElementById('wheelResult');
    wheelResult.textContent = '';


  });





  startButton.addEventListener('click', () => {
    var wheelSound= document.getElementById("wheelSound");
    startButton.style.pointerEvents = 'none'; //to disable the button until it finished so that you don;t spin again.

    deg = Math.floor(2000 + Math.random() * 2000);
    wheel.style.transition='all 10s ease-out'; //ease-out makes it slow down towards the end.
    wheel.style.transform=`rotate(${deg}deg)`;
    wheel.classList.add('blur');
    wheelSound.play();

    wheelResult.textContent = '';
    // wheelPlayer.style.color='transparent';


  });

  wheel.addEventListener('transitionend',()=>{
      var wheelResultSound=document.getElementById("wheelResultSound");

      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto'; //to activate the button again.
      wheel.style.transition='none'; //so that it starts again from 0
      const actualDeg= deg%360;
      wheel.style.transform=`rotate(${actualDeg}deg)`;
      wheelSound.pause();
      wheelResultSound.play();


      var wheelResult = document.getElementById('wheelResult');
      var dice =0;
      var newPosP1=0;
      var newPosP2=0;
      var newPosP3=0;
      var newPosP4=0;





      function ladderP1(){
          if(document.querySelector('input[name="cb-player1"]:checked').value== "9"){

            newPosP1=30;
            var sube = document.getElementById('ladder-pl1-9');
            var posSube = document.getElementById('cb-pl1-9');
            var posArriba=document.getElementById('cb-pl1-30');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "16"){

            newPosP1=36;
            var sube = document.getElementById('ladder-pl1-16');
            var posSube=document.getElementById('cb-pl1-16');
            var posArriba=document.getElementById('cb-pl1-36');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "31"){

            newPosP1=52;
            var sube = document.getElementById('ladder-pl1-31');
            var posSube=document.getElementById('cb-pl1-31');
            var posArriba=document.getElementById('cb-pl1-52');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "34"){

            newPosP1=54;
            var sube = document.getElementById('ladder-pl1-34');
            var posSube=document.getElementById('cb-pl1-34');
            var posArriba=document.getElementById('cb-pl1-54');

          }
        if(document.querySelector('input[name="cb-player1"]:checked').value== "39"){

            newPosP1=60;
            var sube = document.getElementById('ladder-pl1-39');
            var posSube = document.getElementById('cb-pl1-39');
            var posArriba=document.getElementById('cb-pl1-60');

          }


          sube.addEventListener('click',()=>{
              posArriba.setAttribute('checked', 'checked');
              posSube.removeAttribute('checked');




          });





      }

      function ladderP2(){
          if(document.querySelector('input[name="cb-player2"]:checked').value== "9"){
            newPosP2=30;
            var sube = document.getElementById('ladder-pl2-9');
            var posSube = document.getElementById('cb-pl2-9');
            var posArriba=document.getElementById('cb-pl2-30');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "16"){
            newPosP2=36;
            var sube = document.getElementById('ladder-pl2-16');
            var posSube=document.getElementById('cb-pl2-16');
            var posArriba=document.getElementById('cb-pl2-36');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "31"){
            newPosP2=52;
            var sube = document.getElementById('ladder-pl2-31');
            var posSube=document.getElementById('cb-pl2-31');
            var posArriba=document.getElementById('cb-pl2-52');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "34"){
            newPosP2=54;
            var sube = document.getElementById('ladder-pl2-34');
            var posSube=document.getElementById('cb-pl2-34');
            var posArriba=document.getElementById('cb-pl2-54');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "39"){
            newPosP2=60;
            var sube = document.getElementById('ladder-pl2-39');
            var posSube = document.getElementById('cb-pl2-39');
            var posArriba=document.getElementById('cb-pl2-60');
          }
          sube.addEventListener('click',()=>{
            posArriba.setAttribute('checked', 'checked');
            posSube.removeAttribute('checked');


          });


      }

      function ladderP3(){
          if(document.querySelector('input[name="cb-player3"]:checked').value== "9"){
            newPosP3=30;
            var sube = document.getElementById('ladder-pl3-9');
            var posSube = document.getElementById('cb-pl3-9');
            var posArriba=document.getElementById('cb-pl3-30');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "16"){
            newPosP3=36;
            var sube = document.getElementById('ladder-pl3-16');
            var posSube=document.getElementById('cb-pl3-16');
            var posArriba=document.getElementById('cb-pl3-36');

          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "31"){
            newPosP3=52;
            var sube = document.getElementById('ladder-pl3-31');
            var posSube=document.getElementById('cb-pl3-31');
            var posArriba=document.getElementById('cb-pl3-52');

          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "34"){
            newPosP3=54;
            var sube = document.getElementById('ladder-pl3-34');
            var posSube=document.getElementById('cb-pl3-34');
            var posArriba=document.getElementById('cb-pl3-54');

          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "39"){
            newPosP3=60;
            var sube = document.getElementById('ladder-pl3-39');
            var posSube = document.getElementById('cb-pl3-39');
            var posArriba=document.getElementById('cb-pl3-60');

          }
          sube.addEventListener('click',()=>{
            posArriba.setAttribute('checked', 'checked');
            posSube.removeAttribute('checked');


          });


      }

      function ladderP4(){
          if(document.querySelector('input[name="cb-player4"]:checked').value== "9"){
            newPosP4=30;
            var sube = document.getElementById('ladder-pl4-9');
            var posSube = document.getElementById('cb-pl4-9');
            var posArriba=document.getElementById('cb-pl4-30');

          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "16"){
            newPosP4=36;
            var sube = document.getElementById('ladder-pl4-16');
            var posSube=document.getElementById('cb-pl4-16');
            var posArriba=document.getElementById('cb-pl4-36');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "31"){
            newPosP4=52;
            var sube = document.getElementById('ladder-pl4-31');
            var posSube=document.getElementById('cb-pl4-31');
            var posArriba=document.getElementById('cb-pl4-52');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "34"){
            newPosP4=54;
            var sube = document.getElementById('ladder-pl4-34');
            var posSube=document.getElementById('cb-pl4-34');
            var posArriba=document.getElementById('cb-pl4-54');

          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "39"){
            newPosP4=60;
            var sube = document.getElementById('ladder-pl4-39');
            var posSube = document.getElementById('cb-pl4-39');
            var posArriba=document.getElementById('cb-pl4-60');
          }
          sube.addEventListener('click',()=>{
            posArriba.setAttribute('checked', 'checked');
            posSube.removeAttribute('checked');


          });


      }

      function slideP1(){
          if(document.querySelector('input[name="cb-player1"]:checked').value== "23"){
            newPosP1=4;
            var baja = document.getElementById('slide-pl1-23');
            var posBaja = document.getElementById('cb-pl1-23');
            var posAbajo = document.getElementById('cb-pl1-4');

          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "48"){
            newPosP1=29;
            var baja = document.getElementById('slide-pl1-48');
            var posBaja = document.getElementById('cb-pl1-48');
            var posAbajo = document.getElementById('cb-pl1-29');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "63"){
            newPosP1=44;
            var baja = document.getElementById('slide-pl1-63');
            var posBaja = document.getElementById('cb-pl1-63');
            var posAbajo = document.getElementById('cb-pl1-44');
          }

          baja.addEventListener('click',()=>{
            posAbajo.setAttribute('checked', 'checked');
            posBaja.removeAttribute('checked');

          });


          }

      function slideP2(){

          if(document.querySelector('input[name="cb-player2"]:checked').value== "23"){
            newPosP2=4;
            var baja = document.getElementById('slide-pl2-23');
            var posBaja = document.getElementById('cb-pl2-23');
            var posAbajo = document.getElementById('cb-pl2-4');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "48"){
            newPosP2=29;
            var baja = document.getElementById('slide-pl2-48');
            var posBaja = document.getElementById('cb-pl2-48');
            var posAbajo = document.getElementById('cb-pl2-29');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "63"){
            newPosP2=44;
            var baja = document.getElementById('slide-pl2-63');
            var posBaja = document.getElementById('cb-pl2-63');
            var posAbajo = document.getElementById('cb-pl2-44');
          }

          baja.addEventListener('click',()=>{
            posAbajo.setAttribute('checked', 'checked');
            posBaja.removeAttribute('checked');

          });


      }

      function slideP3(){

          if(document.querySelector('input[name="cb-player3"]:checked').value== "23"){
            newPosP3=4;
            var baja = document.getElementById('slide-pl3-23');
            var posBaja = document.getElementById('cb-pl3-23');
            var posAbajo = document.getElementById('cb-pl3-4');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "48"){
            newPosP3=29;
            var baja = document.getElementById('slide-pl3-48');
            var posBaja = document.getElementById('cb-pl3-48');
            var posAbajo = document.getElementById('cb-pl3-29');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "63"){
            newPosP3=44;
            var baja = document.getElementById('slide-pl3-63');
            var posBaja = document.getElementById('cb-pl3-63');
            var posAbajo = document.getElementById('cb-pl3-44');
          }

            baja.addEventListener('click',()=>{
              posAbajo.setAttribute('checked', 'checked');
              posBaja.removeAttribute('checked');


            });


      }

      function slideP4(){
          if(document.querySelector('input[name="cb-player4"]:checked').value== "23"){
            newPosP4=4;
            var baja = document.getElementById('slide-pl4-23');
            var posBaja = document.getElementById('cb-pl4-23');
            var posAbajo = document.getElementById('cb-pl4-4');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "48"){
            newPosP4=29;
            var baja = document.getElementById('slide-pl4-48');
            var posBaja = document.getElementById('cb-pl4-48');
            var posAbajo = document.getElementById('cb-pl4-29');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "63"){
            newPosP4=44;
            var baja = document.getElementById('slide-pl4-63');
            var posBaja = document.getElementById('cb-pl4-63');
            var posAbajo = document.getElementById('cb-pl4-44');
          }

            baja.addEventListener('click',()=>{
              posAbajo.setAttribute('checked', 'checked');
              posBaja.removeAttribute('checked');

            });


            }

      function returnP1(){
          if(document.querySelector('input[name="cb-player1"]:checked').value== "65"){
            newPosP1=63;
            var retroceder = document.getElementById('home-pl1-65');
            var posRetrocede = document.getElementById('cb-pl1-65');
            var posAtras = document.getElementById('cb-pl1-63');

          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "66"){
            newPosP1=62;
            var retroceder = document.getElementById('home-pl1-66');
            var posRetrocede = document.getElementById('cb-pl1-66');
            var posAtras = document.getElementById('cb-pl1-62');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "67"){
            newPosP1=61;
            var retroceder = document.getElementById('home-pl1-67');
            var posRetrocede = document.getElementById('cb-pl1-67');
            var posAtras = document.getElementById('cb-pl1-61');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "68"){
            newPosP1=60;
            var retroceder = document.getElementById('home-pl1-68');
            var posRetrocede = document.getElementById('cb-pl1-68');
            var posAtras = document.getElementById('cb-pl1-60');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "69"){
            newPosP1=59;
            var retroceder = document.getElementById('home-pl1-69');
            var posRetrocede = document.getElementById('cb-pl1-69');
            var posAtras = document.getElementById('cb-pl1-59');
          }
          if(document.querySelector('input[name="cb-player1"]:checked').value== "70"){
            newPosP1=58;
            var retroceder = document.getElementById('home-pl1-70');
            var posRetrocede = document.getElementById('cb-pl1-70');
            var posAtras = document.getElementById('cb-pl1-58');
          }

            retroceder.addEventListener('click',()=>{
              posAtras.setAttribute('checked', 'checked');
              posRetrocede.removeAttribute('checked');


            if(newPosP1==63){
              slideP1();
            }
            });


      }

      function returnP2(){

          if(document.querySelector('input[name="cb-player2"]:checked').value== "65"){
            newPosP2=63;
            var retroceder = document.getElementById('home-pl2-65');
            var posRetrocede = document.getElementById('cb-pl2-65');
            var posAtras = document.getElementById('cb-pl2-63');

          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "66"){
            newPosP2=62;
            var retroceder = document.getElementById('home-pl2-66');
            var posRetrocede = document.getElementById('cb-pl2-66');
            var posAtras = document.getElementById('cb-pl2-62');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "67"){
            newPosP2=61;
            var retroceder = document.getElementById('home-pl2-67');
            var posRetrocede = document.getElementById('cb-pl2-67');
            var posAtras = document.getElementById('cb-pl2-61');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "68"){
            newPosP2=60;
            var retroceder = document.getElementById('home-pl2-68');
            var posRetrocede = document.getElementById('cb-pl2-68');
            var posAtras = document.getElementById('cb-pl2-60');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "69"){
            newPosP2=59;
            var retroceder = document.getElementById('home-pl2-69');
            var posRetrocede = document.getElementById('cb-pl2-69');
            var posAtras = document.getElementById('cb-pl2-59');
          }
          if(document.querySelector('input[name="cb-player2"]:checked').value== "70"){
            newPosP2=58;
            var retroceder = document.getElementById('home-pl2-70');
            var posRetrocede = document.getElementById('cb-pl2-70');
            var posAtras = document.getElementById('cb-pl2-58');
          }

            retroceder.addEventListener('click',()=>{
              posAtras.setAttribute('checked', 'checked');
              posRetrocede.removeAttribute('checked');

            if(newPosP2==63){
              slideP2();
            }
            });


      }

      function returnP3(){

          if(document.querySelector('input[name="cb-player3"]:checked').value== "65"){
            newPosP3=63;
            var retroceder = document.getElementById('home-pl3-65');
            var posRetrocede = document.getElementById('cb-pl3-65');
            var posAtras = document.getElementById('cb-pl3-63');

          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "66"){
            newPosP3=62;
            var retroceder = document.getElementById('home-pl3-66');
            var posRetrocede = document.getElementById('cb-pl3-66');
            var posAtras = document.getElementById('cb-pl3-62');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "67"){
            newPosP3=61;
            var retroceder = document.getElementById('home-pl3-67');
            var posRetrocede = document.getElementById('cb-pl3-67');
            var posAtras = document.getElementById('cb-pl3-61');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "68"){
            newPosP3=60;
            var retroceder = document.getElementById('home-pl3-68');
            var posRetrocede = document.getElementById('cb-pl3-68');
            var posAtras = document.getElementById('cb-pl3-60');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "69"){
            newPosP3=59;
            var retroceder = document.getElementById('home-pl3-69');
            var posRetrocede = document.getElementById('cb-pl3-69');
            var posAtras = document.getElementById('cb-pl3-59');
          }
          if(document.querySelector('input[name="cb-player3"]:checked').value== "70"){
            newPosP3=58;
            var retroceder = document.getElementById('home-pl3-70');
            var posRetrocede = document.getElementById('cb-pl3-70');
            var posAtras = document.getElementById('cb-pl3-58');
          }

            retroceder.addEventListener('click',()=>{
              posAtras.setAttribute('checked', 'checked');
              posRetrocede.removeAttribute('checked');


            if(newPosP3==63){
              slideP3();
            }
            });


      }

      function returnP4(){

          if(document.querySelector('input[name="cb-player4"]:checked').value== "65"){
            newPosP4=63;
            var retroceder = document.getElementById('home-pl4-65');
            var posRetrocede = document.getElementById('cb-pl4-65');
            var posAtras = document.getElementById('cb-pl4-63');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "66"){
            newPosP4=62;
            var retroceder = document.getElementById('home-pl4-66');
            var posRetrocede = document.getElementById('cb-pl4-66');
            var posAtras = document.getElementById('cb-pl4-62');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "67"){
            newPosP4=61;
            var retroceder = document.getElementById('home-pl4-67');
            var posRetrocede = document.getElementById('cb-pl4-67');
            var posAtras = document.getElementById('cb-pl4-61');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "68"){
            newPosP4=60;
            var retroceder = document.getElementById('home-pl4-68');
            var posRetrocede = document.getElementById('cb-pl4-68');
            var posAtras = document.getElementById('cb-pl4-60');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "69"){
            newPosP4=59;
            var retroceder = document.getElementById('home-pl4-69');
            var posRetrocede = document.getElementById('cb-pl4-69');
            var posAtras = document.getElementById('cb-pl4-59');
          }
          if(document.querySelector('input[name="cb-player4"]:checked').value== "70"){
            newPosP4=58;
            var retroceder = document.getElementById('home-pl4-70');
            var posRetrocede = document.getElementById('cb-pl4-70');
            var posAtras = document.getElementById('cb-pl4-58');
          }

            retroceder.addEventListener('click',()=>{
              posAtras.setAttribute('checked', 'checked');
              posRetrocede.removeAttribute('checked');


            if(newPosP4==63){
              slideP4();
            }
            });


      }


      const div = document.getElementById('app');
      var currentPosP1= document.querySelector('input[name="cb-player1"]:checked').value;
      var posAnteriorP1=document.querySelector('input[name="cb-player1"]:checked');
      var currentPosP1Int=parseInt(currentPosP1,10);
      var currentPosP2= document.querySelector('input[name="cb-player2"]:checked').value;
      var posAnteriorP2=document.querySelector('input[name="cb-player2"]:checked');
      var currentPosP2Int=parseInt(currentPosP2,10);
      var currentPosP3= document.querySelector('input[name="cb-player3"]:checked').value;
      var posAnteriorP3=document.querySelector('input[name="cb-player3"]:checked');
      var currentPosP3Int=parseInt(currentPosP3,10);
      var currentPosP4= document.querySelector('input[name="cb-player4"]:checked').value;
      var posAnteriorP4=document.querySelector('input[name="cb-player4"]:checked');
      var currentPosP4Int=parseInt(currentPosP4,10);

      var playerTurn= document.querySelector('input[name="turn"]:checked').value;

      //Comentario V: Para imprimir el numero correspondiente al grado de rotación de la rueda
      if(`${actualDeg}`>0 && `${actualDeg}`<=60){
          wheelResult.textContent = ' 6';
          dice = 6;
        }else if(`${actualDeg}`>60 && `${actualDeg}`<=120){
          wheelResult.textContent = ' 5';
          dice = 5;
        }else if(`${actualDeg}`>120 && `${actualDeg}`<=180){
          wheelResult.textContent = ' 4';
          dice = 4;
        }else if(`${actualDeg}`>180 && `${actualDeg}`<=240){
          wheelResult.textContent = ' 3';
          dice = 3;
        }else if(`${actualDeg}`>240 && `${actualDeg}`<=300){
          wheelResult.textContent = ' 2';
          dice = 2;
        }else{
            wheelResult.textContent = ' 1';
            dice = 1;
          }
      //para mover a los jugadores
      if(playerTurn==1){

        newPosP1=currentPosP1Int+dice;



          $("input[name=cb-player1][value=" + newPosP1 + "]").attr('checked', 'checked');
          posAnteriorP1.removeAttribute('checked');


          if(document.querySelector('input[name="cb-player1"]:checked').classList.contains("cbOds")){
            odsSound.play();
            
          }
          else if(document.querySelector('input[name="cb-player1"]:checked').classList.contains("cbLadder")){
            ladderSound.play();
            ladderP1();
          }
          else if(document.querySelector('input[name="cb-player1"]:checked').classList.contains("cbSlide")){
            slideSound.play();
            slideP1();
          }
          else if(document.querySelector('input[name="cb-player1"]:checked').classList.contains("cbReturn")){
            returnSound.play();
            returnP1();
          }
          else if(document.querySelector('input[name="cb-player1"]:checked').classList.contains("cbLlegada")){
            congratulations.style.display="contents";
            videoLlegada.play();

          }
          player1Input= document.querySelectorAll('input[name="cb-player1"]');
          console.log(player1Input);


      }
      if(playerTurn==2){
        newPosP2=currentPosP2Int+dice;
          $("input[name=cb-player2][value=" + newPosP2 + "]").attr('checked', 'checked');
          posAnteriorP2.removeAttribute('checked');
          if(document.querySelector('input[name="cb-player2"]:checked').classList.contains("cbOds")){
            odsSound.play();
          }
          if(document.querySelector('input[name="cb-player2"]:checked').classList.contains("cbLadder")){
            ladderSound.play();
            ladderP2();
          }
          if(document.querySelector('input[name="cb-player2"]:checked').classList.contains("cbSlide")){
            slideSound.play();
            slideP2();
          }
          if(document.querySelector('input[name="cb-player2"]:checked').classList.contains("cbReturn")){
            returnSound.play();
            returnP2();
          }
          if(document.querySelector('input[name="cb-player2"]:checked').classList.contains("cbLlegada")){
              videoLlegada.play();

          }

      }
      if(playerTurn==3){
        newPosP3=currentPosP3Int+dice;
          $("input[name=cb-player3][value=" + newPosP3 + "]").attr('checked', 'checked');
          posAnteriorP3.removeAttribute('checked');
          if(document.querySelector('input[name="cb-player3"]:checked').classList.contains("cbOds")){
            odsSound.play();
          }
          if(document.querySelector('input[name="cb-player3"]:checked').classList.contains("cbLadder")){
            ladderSound.play();
            ladderP3();
          }
          if(document.querySelector('input[name="cb-player3"]:checked').classList.contains("cbSlide")){
            slideSound.play();
            slideP3();
          }
          if(document.querySelector('input[name="cb-player3"]:checked').classList.contains("cbReturn")){
            returnSound.play();
            returnP3();
          }
          if(document.querySelector('input[name="cb-player3"]:checked').classList.contains("cbLlegada")){
            videoLlegada.play();

          }

      }
      if(playerTurn==4){
        newPosP4=currentPosP4Int+dice;
          $("input[name=cb-player4][value=" + newPosP4 + "]").attr('checked', 'checked');
          posAnteriorP4.removeAttribute('checked');
          if(document.querySelector('input[name="cb-player4"]:checked').classList.contains("cbOds")){
            odsSound.play();
          }
          if(document.querySelector('input[name="cb-player4"]:checked').classList.contains("cbLadder")){
            ladderSound.play();
            ladderP4();
          }
          if(document.querySelector('input[name="cb-player4"]:checked').classList.contains("cbSlide")){
            slideSound.play();
            slideP4();
          }
          if(document.querySelector('input[name="cb-player4"]:checked').classList.contains("cbReturn")){
            returnSound.play();
            returnP4();
          }
          if(document.querySelector('input[name="cb-player4"]:checked').classList.contains("cbLlegada")){
              videoLlegada.play();

          }

      }









    });

})();
