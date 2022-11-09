
function setData(){

    var sub = document.getElementById("subject").value;
    var des = document.getElementById("Description").value;
    var ut = document.getElementById("User Types").value;
    var tech = document.getElementById("Technology used").value;

    sessionStorage.setItem("subject",sub);
    sessionStorage.setItem("Description",des);
    sessionStorage.setItem("User Types",ut);
    sessionStorage.setItem("Technology used",tech);

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