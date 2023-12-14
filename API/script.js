

var btnCep = document.querySelector("#btnCep");
btnCep.addEventListener("click", consultar);


function consultar(){
    
    if(cep.lenght < 8 || cep.lenght > 9){
        alert("erro! cep inválido");
    }else{
        var cep = document.querySelector('#cep').value;

        const Api = fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
            return res.json();
        }).then(dados => {
            let result = document.querySelector('#result');
            result.innerHTML =`
            <h1>informações sobre o cep</h1>
            CEP : ${dados.cep}<br>
            BAIRRO : ${dados.bairro}<br>
            LOGRADOURO : ${dados.logradouro}<br>                   
            `;
    
        });
    }
   
}