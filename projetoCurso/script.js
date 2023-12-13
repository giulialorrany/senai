// var iconCar = document.querySelector('.iconCar');

var adcionados = document.querySelector('#selecionados');

var produtos = document.querySelector('.produtos');


var p1Shimeji = document.querySelector('.produtoShimeji');
var p2Portobello = document.querySelector('.produtoPortobello');
var p3Shitake = document.querySelector('.produtoShitake');
var p4Cantarelo = document.querySelector('.produtoCantarelo');
var p5Jubaleao = document.querySelector('.produtoJubaleao');
var p6Champion = document.querySelector('.produtoChampion');

var imgP1 = document.querySelector('#imgP1');
var textP2 = document.querySelector('#p2')



var textP1 = document.querySelector('#p1');
var textP2 = document.querySelector('#p2');
var textP3 = document.querySelector('#p3');
var textP4 = document.querySelector('#p4');
var textP5 = document.querySelector('#p5');
var textP6 = document.querySelector('#p6');

p1Shimeji.addEventListener("click", item1)
function item1(){
    imgP1.setAttribute("src",'pictures/shimeji.jpg');
    textP1.innerHTML = 'Shimeji';
}





p2Portobello.addEventListener("click", item2)
function item2(){
    imgP2.setAttribute("src",'pictures/portobello.jpg');
    textP2.innerHTML = 'Portobello';
}

p3Shitake.addEventListener("click", item3)
function item3(){
    imgP3.setAttribute("src",'pictures/shitake.jpg');
    textP3.innerHTML = 'Shitake';
}

p4Cantarelo.addEventListener("click", item4)
function item4(){
    imgP4.setAttribute("src",'pictures/cantarelo.jpg');
    textP4.innerHTML = 'Cantarelo';
}

p5Jubaleao.addEventListener("click", item5)
function item5(){
    imgP5.setAttribute("src",'pictures/jubadeleao.webp');
    textP5.innerHTML = 'Juba de Leão';
}

p6Champion.addEventListener("click", item6)
function item6(){
    imgP6.setAttribute("src",'pictures/champion2.jpg');
    textP6.innerHTML = 'Champion';
}










//PAGE CARRINHO

var adcionados = document.querySelector('#adcionados');
var add1 = document.querySelector('.add1');
var add2 = document.querySelector('.add2');
var add3 = document.querySelector('.add3');
var add4 = document.querySelector('.add4');
var add5 = document.querySelector('.add5');
var add6 = document.querySelector('.add6');
                                                                                                                                              

var addShimeji = document.querySelector('.addShimeji');
var addPortobello = document.querySelector('.addPortobello');
var addShitake = document.querySelector('.addShitake');
var addCantarelo = document.querySelector('.addCantarelo');
var addJubaleao = document.querySelector('.addJubaleao');
var addChampion = document.querySelector('.addChampion');

var addImgP1 = document.querySelector('#addImgP1');
var addImgP2 = document.querySelector('#addImgP2');
var addImgP3 = document.querySelector('#addImgP3');
var addImgP4 = document.querySelector('#addImgP4');
var addImgP5 = document.querySelector('#addImgP5');
var addImgP6 = document.querySelector('#addImgP6');

var addP1 = document.querySelector('#addP1');
var addP2 = document.querySelector('#addP2');
var addP3 = document.querySelector('#addP3');
var addP4 = document.querySelector('#addP4');
var addP5 = document.querySelector('#addP5');
var addP6 = document.querySelector('#addP6');


addShimeji.addEventListener("click",addItem1 )
function addItem1(){
    addImgP1.setAttribute("src",'pictures/shimeji.jpg');
    addP1.innerHTML = 'Cogumelo Shimeji';
}

addPortobello.addEventListener("click", addItem2)
function addItem2(){
    addImgP2.setAttribute("src",'pictures/portobello.jpg');
    addP2.innerHTML = 'Cogumelo Portobello';
}

addShitake.addEventListener("click", addItem3)
function addItem3(){
    addImgP3.setAttribute("src",'pictures/shitake.jpg');
    addP3.innerHTML = 'Cogumelo Shitake';
}

addCantarelo.addEventListener("click", addItem4)
function addItem4(){
    addImgP4.setAttribute("src",'pictures/cantarelo.jpg');
    addP4.innerHTML = 'Cogumelo Cantarelo';
}

addJubaleao.addEventListener("click", addItem5)
function addItem5(){
    addImgP5.setAttribute("src",'pictures/jubadeleao.webp');
    addP5.innerHTML = 'Cogumelo Juba de Leão';
}

addChampion.addEventListener("click", addItem6)
function addItem6(){
    addImgP6.setAttribute("src",'pictures/champion2.jpg');
    addP6.innerHTML = 'Cogumelo Champion';
}









// 1-FAZER CAROUSEL CARRINHO COM  ADCIçaõ AO CARRINHO
// 2-TERMINAR PAGE BLOG SIMPLES-CONTEUDO
//3-linkar pagina de login 

