$('document').ready(initializeApp);

var scoreCount = 0;
var moleArray = [0, 1, 2];

function initializeApp(){
    setTimeout(moveRandomMoleUp, 1500);
}

function attachClickHandlers(moleNumber){
    $('.mole'+moleNumber).on('click', handleClickEvent);
}

function handleClickEvent(){
    $('.mole').off('click');
    if($(this).hasClass('mole')){
        scoreCount++;
        $('.score-value').text(scoreCount);
    }
}

function moveRandomMoleUp(){
    
    var randomNum = Math.floor((Math.random() * 3)+1);
    
    if(randomNum === 1){
        $('.mole1').addClass('animateUp');
        setTimeout(function(){
            $('.mole1').removeClass('animateUp');
            $('.mole1').addClass('animateDown');
        }, 500);
    }else if(randomNum === 2){
        $('.mole2').addClass('animateUp');
        setTimeout(function(){
            $('.mole2').removeClass('animateUp');
            $('.mole2').addClass('animateDown');
        }, 500);
    }else if(randomNum === 3){
        $('.mole3').addClass('animateUp');
        setTimeout(function(){
            $('.mole3').removeClass('animateUp');
            $('.mole3').addClass('animateDown');
        }, 500);
    }

    attachClickHandlers(randomNum);
    setTimeout(checkMoleForClass, 500);
}

function moveMoleDown(){
    
    $().addClass('animateDown');
}