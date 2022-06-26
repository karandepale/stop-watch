
// create reference varible by using id :-
var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var start =document.getElementById('start');
var stop = document.getElementById ('stop');
var reset =document.getElementById('reset');

//declaration second and milliseconds .
var sec = 0;
var millisec = 0;
var timeInterval;



//timer function is called :-
const timer=()=>{
    millisec ++;


if(  millisec < 9  ){
    milliseconds.innerHTML = "0" + millisec ;
}

if(  millisec > 9  ){
    milliseconds.innerHTML = millisec ;
}

if( millisec > 99 ){
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
    milliseconds.innerHTML = "0" + 0;
}

if(sec > 9){
    seconds.innerHTML = sec; 
}

}


//start button process :-

start.addEventListener ('click' , ()=>{
    timeInterval = setInterval(timer , 10);  
})


//stop button process :-
stop.addEventListener('click' , ()=>{
    clearInterval(timeInterval);
})



//reset button process:-
reset.addEventListener('click' , ()=>{
    clearInterval(timeInterval);
    sec = "00" ;
    millisec = "00";

    seconds.innerHTML = sec;
    milliseconds.innerHTML = millisec ;    

})








