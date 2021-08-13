

var head=document.getElementById("head");
var para=document.getElementById("para");

function classrandom(){

    var randm=Math.floor(Math.random()*13)+1;

    head.classList.add("color"+randm);
    para.classList.add("color"+randm);

}
classrandom();


