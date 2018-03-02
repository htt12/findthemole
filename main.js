$('document').ready(initializeApp);

var scoreCount = 0;

function initializeApp(){
    attachClickHandlers();
    setTimeout(moveRandomMoleUp, 1500);
}

function attachClickHandlers(){
    $('.mole').on('click', handleClickEvent);  
}

function handleClickEvent(){
    console.log('handClickEvent was called.')

    if($(this).hasClass('mole')){
        scoreCount++;
        $('.score-value').text(scoreCount);
    }
}

function moveRandomMoleUp(){
    
    var randomNum = Math.floor(Math.random() * 3);
    
    if(randomNum === 0){
        $('.mole1').addClass('animate');
    }else if(randomNum === 1){
        $('.mole2').addClass('animate');
    }else if(randomNum === 2){
        $('.mole3').addClass('animate');
    }

}