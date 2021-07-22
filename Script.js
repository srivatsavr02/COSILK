var i=0;
function menu(){
    i++;
    if(i%2===1) {
        document.getElementById("menu").style.fontSize="20px";
        document.getElementById("inn").style.display = "block";
    }
    else{
        document.getElementById("menu").style.fontSize="22px";
        document.getElementById("inn").style.display = "none";
    }
}
var j=0;
function display() {
    j++;
    if(j%2===1){
        document.getElementById("content").style.display="block";
    }
    else{
        document.getElementById("content").style.display="none";
    }
}
