
function setData(){

var myName = document.getElementById("name").value;
var myAge = document.getElementById("age").value;
var myGender = document.getElementById("male").value;
var myBrief = document.getElementById("brief").value;
var JavaScript = document.getElementById("js").value;
var Python = document.getElementById("p").value;
var C = document.getElementById("c").value;
localStorage.setItem("Name",myName);
localStorage.setItem("Age",myAge);
localStorage.setItem("gender",myGender);
localStorage.setItem("Brief",myBrief);
localStorage.setItem("program language1 ",JavaScript);
localStorage.setItem("program language2 ",Python);
localStorage.setItem("program language3 ",C);
}
var container = document.getElementById("cont");
container.style.border="2px solid black";

// card = document.getElementById("card")
// `<div>
// <h2>About Me</h2>
// ${localStorage.key(1)}   ${iname.value}
// `
function removeData(){
    
}
function getData(){
    // document.getElementById("result").innerHTML= localStorage.getItem("Name");
    var iname = localStorage.getItem("Name");
    var iage = localStorage.getItem("Age");
    var igender = localStorage.getItem("gender");
    var ibrief = localStorage.getItem("Brief");
    var iuniversity = localStorage.getItem("Brief");
    var imajor = localStorage.getItem("Brief");
     var il1 = localStorage.getItem("program language1");
     var il2 = localStorage.getItem("program language2");
     var il3 = localStorage.getItem("program language3");
    // console.log(ibrief)
    // console.log(iname)
    document.getElementById("card").innerHTML = iname ;
     document.getElementById("card1").innerHTML = iage ;
     document.getElementById("card2").innerHTML = igender ;
     document.getElementById("card3").innerHTML = ibrief ;
     document.getElementById("card4").innerHTML = iuniversity ;
     document.getElementById("card5").innerHTML = imajor ;
     document.getElementById("card6").innerHTML = il1 ;
     document.getElementById("card7").innerHTML = il2 ;
     document.getElementById("card8").innerHTML = il3 ;
}