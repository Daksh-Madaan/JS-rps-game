var player = 'Unset';
var computer = 'Unset';
var result = 'Match yet to start';

function choice(){
    choice = ['rock', 'paper', 'scissors'];
    player = event.target.name;
    computer = choice[Math.floor(Math.random() * choice.length)];
    if (player === computer){
        result = 'Tie';
    }else if (player === 'rock' && computer === 'scissors'){
        result = 'You win';
        document.getElementById('bg').style.background = '#c3f0c2';
    }else if (player === 'scissors' && computer === 'paper'){
        result = 'You win';
        document.getElementById('bg').style.background = '#c3f0c2';
    }else if (player === 'paper' && computer === 'rock'){
        result = 'You win';
        document.getElementById('bg').style.background = '#c3f0c2';
    }else {
        result = 'You lose';
        document.getElementById('bg').style.background = '#fae4e1';
    }
    document.getElementById("player").innerHTML = player;
    document.getElementById("computer").innerHTML = computer;
    document.getElementById("result").innerHTML = result;
}
