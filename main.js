$('document').ready(initializeApp);


function initializeApp(){
    attachClickHandlers();
}

function attachClickHandlers(){
    $('.mole').on('click', handleClickEvent);  
}

function handleClickEvent(){
    console.log('handClickEvent was called.')
    moveRandomMole();
}

function moveRandomMole(){
    
    var randomNum = Math.floor(Math.random() * 3);
    
    // if(randomNum === 0){
    //     $('.box1').addClass('animate');
    // }else if(randomNum === 1){
    //     $('.box2').addClass('animate');
    // }else if(randomNum === 2){
    //     $('.box3').addClass('animate');
    // }
}