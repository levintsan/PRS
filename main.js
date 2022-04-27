    let userScore = 0;
let compScore= 0;
const userScore_span = document.getElementById ("user-score");
const compScore_span = document.getElementById ("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ("paper");
const scrissors_div = document.getElementById ("scrissors");


function getCompChoise() {
    const choises = ['paper', 'rock', 'scrissors'];
    const randomNr = Math.floor(Math.random()*3);
    return choises[randomNr];
}

function win (user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML ='User wins!' ;

}

function loss (user, comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = 'Computer wins!';
    
}

function draw (user, comp){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = 'Draw!';

}

function game (userChoise) {
    const compChoise = getCompChoise();
    switch (userChoise + compChoise) {
        case "rockscrissors":
        case "scrissorspaper":
        case "paperrock":
            win(userChoise, compChoise); 
            break;
        case "paperscrissors":
        case "scrisorsrock":
        case "rockpaper":
            loss(userChoise, compChoise);
            break;
        case "scrissorsscrissors":
        case "rockrock":
        case "paperpaper":
            draw(userChoise, compChoise);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game ('rock');
    })
    scrissors_div.addEventListener('click', function() {
        game('scrissors');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
}
main();
