Algoritmo "semnome"

Var
   idade : inteiro
   categoria : caractere

Inicio
   escreval("Digite a idade: ")
   leia(idade)

   se (idade<5) entao
       categoria <- "nenhuma"
       senao
           se (idade<=7) entao
           categoria <- "infantil"
           senao
               se (idade<=10) entao
               categoria <- "juvenil"
               senao
                   se (idade<=15) entao
                   categoria <- "adolescente"
                   senao
                       se (idade<=30) entao
                       categoria <- "adulto"
                       senao
                         se (idade>30)  entao
                         categoria <- "sênior"
                         fimse
                  fimse
              fimse
           fimse
        fimse
   fimse

   escreval("Idade: ", idade)
   escreval("Categoria: ", categoria)

Fimalgoritmo