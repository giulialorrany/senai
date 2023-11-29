<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <script>
        class filme{
            constructor(nome, descricao, data, diretor e categoria){
                // criando a var dos objetos
                this.nome = nome;
                this.descricao = descricao;
                this.data = data;
                this.diretor = diretor;
                this.categoria = categoria;
            }
        }

        // salvar(filme){}

        var btnSalvar = document.querySelector('#btnSalvar');

        btnSalvar.addEventListener('click', Cadastrar);


        function Cadastrar(){
                let nomeInput = document.querySelector('#nome');
                let descricaoInput = document.querySelector('#descricao');
                let dataInput = document.querySelector('#data');
                let diretorInput = document.querySelector('#diretor');
                let categoriaInput = document.querySelector('#categoria');
                let salvo = document.querySelector('#salvo');
            
                var filme = new filme(nomeInput, descricaoInput, dataInput, diretorInput, categoriaInput);

                salvo.innerHTML = '<div class=''></div>';

        }


    </script>
</body>
</html>