$('document').ready(initializeApp);

var scoreCount = 0;

function initializeApp(){
    moveRandomMole();
}

function attachClickHandlers(moleNumber){
    $('.mole'+moleNumber).on('click', handleClickEvent);
}

function handleClickEvent(){
    $('.mole').off('click');
    if($(this).hasClass('mole') && clickCount<3){
        scoreCount++;
        $('.score-value').text(scoreCount);
    }
}

function moveRandomMole(){
    
    var randomNum = Math.floor((Math.random() * 3)+1);
    
    if(randomNum === 1){
        $('.mole1').addClass('animate');
    }else if(randomNum === 2){
        $('.mole2').addClass('animate');
    }else if(randomNum === 3){
        $('.mole3').addClass('animate');
    }

    attachClickHandlers(randomNum);
}