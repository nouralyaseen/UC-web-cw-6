
let score = 0
let scoreHTML = document.getElementById("score")
let nameHTML = document.getElementById("title")
function increase(){
score= score + 1
scoreHTML.innerHTML = score
}
function welcome(){
nameHTML.innerText = prompt("enter name")
}
