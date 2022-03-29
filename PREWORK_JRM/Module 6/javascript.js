//Resize box
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";

});

//Turn box blue
document.getElementById("button2").addEventListener("click", function(){

   document.getElementById("box").style.backgroundColor = "blue";
    
    });
//Change box opacity
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity="0.5";
     
     });

//Reset
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px";
});