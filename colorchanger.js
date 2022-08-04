let color =["red","blue","black","grey"];
let btn = document.getElementById("button")

btn.addEventListener("click",function () {
    let rancolor = color[Math.floor(Math.random()*color.length)];
    let body = document.getElementById("body");
    //document.body.style.background = rancolor;
    body.style.background = rancolor;
    
    
})
