Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 18/10/2023
Var
// Se��o de Declara��es das vari�veis
 golstime1, golstime2:inteiro
 nometime1, nometime2 :caracter

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreval("Digite o nome do time 1")
leia(nometime1)
escreval("Digite o numero de gols feitos (time 1)")
leia(golstime1)

escreval("Digite o nome do time 2")
leia(nometime2)
escreval("Digite o numero de gols feitos (time 2)")
leia(golstime2)

se (golstime1 > golstime2) entao
escreval(nometime1," ganhou")
fimse

se (golstime1 < golstime2) entao
escreval(nometime2," ganhou")
fimse

se (golstime1 = golstime2) entao
escreval("empate")
fimse
Fimalgoritmo