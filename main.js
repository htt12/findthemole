$('document').ready(initializeApp);

var scoreCount = 0;

function initializeApp(){
    attachClickHandlers();
}

function attachClickHandlers(){
    $('.mole').on('click', handleClickEvent);        
}

function handleClickEvent(){

    if($(this).hasClass('mole')){
        scoreCount++;
        $('.score-value').text(scoreCount);
    }
    
}