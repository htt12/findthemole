
$('document').ready(initializeApp);


function initializeApp(){
    attachClickHandlers();
}

function attachClickHandlers(){
    $('.mole').on('click', handleClickEvent);        
}

function handleClickEvent(){
    console.log('handClickEvent was called.')

}