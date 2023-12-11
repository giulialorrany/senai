// var iconCar = document.querySelector('.iconCar');

var adcionados = document.querySelector('#adcionados');
var adcionado = document.querySelector('.add');

var produtos = document.querySelector('.produtos');


var p1Shimeji = document.querySelector('.produtoShimeji');
var p2Portobello = document.querySelector('.produtoPortobello');
var p3Shitake = document.querySelector('.produtoShitake');
var p4Cantarelo = document.querySelector('.produtoCantarelo');
var p5Jubaleao = document.querySelector('.produtoJubaleao');
var p6Champion = document.querySelector('.produtoChampion');
var imgAll = document.querySelector('#imgAll');

var textP1 = document.querySelector('#p1');
var textP2 = document.querySelector('#p2');
var textP3 = document.querySelector('#p3');
var textP4 = document.querySelector('#p4');
var textP5 = document.querySelector('#p5');
var textP6 = document.querySelector('#p6');

p1Shimeji.addEventListener("click", cad1)
function cad1(){
    imgAll.setAttribute("src",'pictures/shimeji.jpg');
    textP1.innerHTML = 'Shimeji';
}

