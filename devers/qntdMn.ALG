Algoritmo "semnome"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/11/2023
Var
// Se��o de Declara��es das vari�veis 
Nqntd, CONT,contN, mN: INTEIRO

Inicio
escreval("Informe a quantidade de n�meros que deseja digitar:")
leia(Nqntd)

para cont de 1 ate Nqntd faca
escreval(cont,"� n�mero:")
leia(contN)

fimpara

se contN > mN entao
mN <- contN
fimse
escreval("maior n�mero digitado:", mN)

Fimalgoritmo