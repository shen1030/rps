/**
 * logic
 */
var score=0;
var playerChoice;

var readable={
    '0': 'Rock',
    '1': 'Paper',
    '2': 'Scissors'
};

var cpuChoice ={
    init: function() {
      this.store =  Math.floor(Math.random() * 3);
      this.text =readable[this.store]
    },
    store: '',
    text: '',
};  

var order=[0,1,2,0];

var chooseWinner = function(player,cpu){
    if (order[player]==order[cpu]){
        return 'The game is tie. Try again';
    }
    if (order[player]===order[cpu+1]){
        score++;
        return 'you win';
    }else{
        score--;
        return 'You lost. ;(';
    }
}

/**
 * UI
 */


 var paragrahph = document.querySelector('p');
 var assignClick = function(tag, pos){
     //assign a click listener
     tag.addEventListener('click',function(){
         playerChoice = pos;
         cpuChoice.init();
        
         paragrahph.innerText = 'The computer chose :' +cpuChoice.text;
         paragrahph.innerText += '\n' +chooseWinner(playerChoice, cpuChoice.store);
         paragrahph.innerText += '\n' +'SCORE: '+ score;
     })
 }
 var images= {
     tags:document.getElementsByTagName('img'),
     init: function() {
       for (var step = 0; step < this.tags.length; step++){
           assignClick(this.tags[step],step);
       }
     }
 }
 images.init();