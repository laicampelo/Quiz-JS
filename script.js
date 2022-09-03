
let pg=[]; // Array de perguntas
let verdadeiro=document.getElementById('true');
let falso=document.getElementById('false');
let controle=0; //contador da qt. de perguntas


function mostrarPergunta(){
    let pergunta=document.getElementById("perguntas");

    if (pg.length>0){
        pergunta.innerHTML=pg[controle].titulo;
    }
}

function criarPergunta(pergunta, boolean){
    let pgt={
        titulo: pergunta,
        alternativa: boolean,
        

    }
    pg.push(pgt)
    console.log(pg)
}

//verifica se a resposta selecionada está correta, se não, troca a cor do botão.
function eventoBotao(boolean){
    let botao=document.querySelector('#'+boolean)

    if(pg[controle].alternativa==boolean){

        document.querySelector('#true').classList.remove('btn-danger')
        document.querySelector('#true').classList.add('btn-dark')
        
        document.querySelector('#false').classList.remove('btn-danger')
        document.querySelector('#false').classList.add('btn-dark')

    //Qt. de perguntas
        if(pg.length -1 >controle){
            controle++
            mostrarPergunta()


        }else{
            alert('Parabéns!!!!!')
            controle++
        }

    }else {
        botao.classList.remove('btn-dark')
        botao.classList.add('btn-danger')

    }update()
}

//perguntas com as respostas em boolean;
criarPergunta('O JavaScript diferencia maiúsculas de minúsculas', true)
criarPergunta('JavaScript e Java são a mesma coisa.', false)
criarPergunta('O forEach() ajuda a chamar um recurso para cada aspecto existente no intervalo', true)
criarPergunta('O JavaScript é utilizado somente  para o desenvolvimento web', false)
criarPergunta('O JavaScript é uma linguagem de script que segue os padrões sugeridos pelo ECMA Script.', true)
criarPergunta('Um valor indefinido significa que uma variável não foi declarada, mas foi atribuído um valor, já um valor nulo é um valor atribuído ou resultado de um erro que foi gerado.', false)
criarPergunta('O JavaScript possui 7 tipos de dados primitivos: String, Number, Boolean, BigInt, Null, Undefined e Symbol', true)
criarPergunta('Closures são variáveis ou funções que fazem parte do escopo de uma função, porém não possuem acesso limitado ao escopo da função a que pertencem.', false)
criarPergunta('A igualdade ampla (===) compara dois valores após converter ambos os valores para um tipo comum, já a igualdade estrita (==), Este comparador verifica se o tipo e o valor estão iguais. Geralmente é o comparador mais indicado a se utilizar.', false)
criarPergunta('Além do construtor genérico para o objeto Error existem os tipos EvalError, ReferenceError, RangeError, SyntaxError, TypeError, URIError e InternalError (não é mais recomendado).', true)


//evento para saber qual botao foi clicado.
verdadeiro.addEventListener('click',()=>{
    eventoBotao(true)
})
falso.addEventListener('click',()=>{
    eventoBotao(false)
})

//função que controla o progess-bar baseado nas perguntas e acertos.
function update() {
    let element = document.querySelector(".progress-bar.progress-bar-striped");   
    let width = 0;

    width=(100/pg.length)*controle;

            element.style.width =width + '%'; 
        }
    
//-----------------------------
//Deixa a ordem das perguntas em aleatório sem permitir com que elas se repitam.
function aleatorioDePerguntas(){
    let randomNumber;
    let tmp;
    for (let i = pg.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = pg[randomNumber];
        // troca o número aleatório pelo atual
        pg[randomNumber] = pg[i];
        // troca o atual pelo aleatório
        pg[i] = tmp;
    }
}
aleatorioDePerguntas()
mostrarPergunta()
