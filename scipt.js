function picUnit(element){

var symbol = element.value;

if (symbol != '℃'){
    var array=document.querySelectorAll(".container .HighLowTemp .high h3");
    for(var i=0; i<array.length ; i++){
    array[i].innerText = (parseInt(array[i].innerText)*1.8) +32;
    array[i].innerText = Math.round(parseInt(array[i].innerText));
    }
    var array=document.querySelectorAll(".container .HighLowTemp .low h3");
    for(var i=0; i<array.length ; i++){
    array[i].innerText = Math.round((parseInt(array[i].innerText)*1.8) +32);
    }
    
}
else if (symbol == '℃'){
    var array=document.querySelectorAll(".container .HighLowTemp .high h3");
    for(var i=0; i<array.length ; i++){
    array[i].innerText = Math.round((parseInt(array[i].innerText)-32 ) *  .556);
    }
    var array=document.querySelectorAll(".container .HighLowTemp .low h3");
    for(var i=0; i<array.length ; i++){
    array[i].innerText = Math.round((parseInt(array[i].innerText)-32 ) *  .556);
    }
    
}
}


function accept(){
    document.querySelector(".cookies_container").remove();
}