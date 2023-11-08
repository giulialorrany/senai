Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 08/11/2023
Var
// Seção de Declarações das variáveis 
Nqntd, CONT,contN, mN: INTEIRO

Inicio
escreval("Informe a quantidade de números que deseja digitar:")
leia(Nqntd)

para cont de 1 ate Nqntd faca
escreval(cont,"° número:")
leia(contN)

fimpara

se contN > mN entao
mN <- contN
fimse
escreval("maior número digitado:", mN)

Fimalgoritmo