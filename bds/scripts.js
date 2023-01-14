function reset(){
    for (var i=0 ; i<arguments.length ; i++){
        document.getElementById(arguments[i]).value = "";
    }
}
            
function copy(field){
    const text = document.getElementById(field).value;
    navigator.clipboard.writeText(text)
}
