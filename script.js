var game = {
      reset: function (playerType) {
            var divZonePlayer = document.getElementById(playerType);
            while (divZonePlayer.firstChild) {
              divZonePlayer.removeChild(divZonePlayer.firstChild);
            }                     
          },
  userName: function () {
              return prompt('Quel est votre pseudo ?');
          },
  nbrRandom: function (min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return  Math.floor(Math.random() * (max - min)) + min;
        },
  nbrDice: function () {
           return game.nbrRandom(1,7);            
        },
  generateDice: function (playerType) {
          var faceDice = this.nbrDice();
          var backgroundPositionFaceDice = (( faceDice - 1 ) * -100);
          var divDice = document.createElement('div');
          var target = document.getElementById(playerType);
          divDice.style.backgroundPositionX = backgroundPositionFaceDice + 'px'; 
          divDice.className = 'dice';
          target.appendChild(divDice);
        },          
  generateNumberDiceForPlay: function (nbrDice, playerType) {
            for (i= 0; i < nbrDice; i++) {
              this.generateDice(playerType);
          }   
        },
  launch: function (message) {
          var numberDice = parseInt(prompt(message), 10);          
          game.generateNumberDiceForPlay(numberDice, 'player');
          game.generateNumberDiceForPlay(numberDice, 'dealer');
        },
    
 //result: {
 //pseudo: ,
 //resultDice: ,
};


document.addEventListener('DOMContentLoaded', function() {
    btn.addEventListener('click', function(){
      game.reset('player');
      game.reset('dealer');
      game.launch('Combien de dés souhaitez vous utiliser ?');
     })
 });












































//
// // On génère un chiffre aléatoire
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// // On créé la fonction pour lancer le dé
// function launchDice() {
//    return getRandomInt(1, 7);
// }



 //On créé la fonction pour générer le dé
// function generateDice(playerType) {

// var target = document.getElementById(playerType);

// var dice = document.createElement('div');
// dice.className = ('dice');
// dice.style.width = '100px';
// dice.style.height = '100px';

// target.appendChild(dice);

// // On récupère la face du dé
// var faceDice = launchDice();
// // Avec la face du dé on récupère la position du background
// var faceDicePosition = (faceDice - 1) * -100; 
// // On déplace la position du background
// dice.style.backgroundPositionX = faceDicePosition + 'px';
// }


// function generateNumberDice (nbDice, playerType) {
//   for(var index = 0; index < nbDice; index++) {
//     generateDice(playerType);
//   }
// }



// function launchGame() {
//   // On demande le nom du joueur 
//   titleNamePlayer = prompt('Avant de commencer il me faut votre nom ?');
//   titleNamePlayer.textContent = titleNamePlayer
//   // On demande le nombre de dés
  
//   var numberDice = parseInt(prompt('Avec combien de dés souhaitez vous jouer ? '), 10);  
  

//   generateNumberDice(numberDice , 'player');
//   generateNumberDice(numberDice , 'dealer');

//   generateTable(tableauResult.results);
// }



// document.addEventListener('DOMContentLoaded', function() {
//   btn.addEventListener('click', function(){
//       launchGame();
//   })
// });

