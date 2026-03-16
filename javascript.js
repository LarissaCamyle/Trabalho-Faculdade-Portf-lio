//====================================================================
//VERIFICAÇÃO DO FORMULÁRIO PARA SIMULAR UM ENVIO DE E-MAIL
//====================================================================

//button de enviar e-mail localizado no formulário na aba de contato
const botao = document.getElementById("btn_enviar_formulario");

//quando o button for clicado a função abaixo vai executar
botao.addEventListener("click", function () {
    //=========================================================
    //SELECIONA OS ELEMENTOS DO FORMULÁRIO 
    //=========================================================
    //campo do input referente ao nome
    const nome = document.querySelector("#formulario_nome");
    //campo do input referente ao e-mail
    const email = document.querySelector("#formulario_email");
    //campo do input referente a mensagem
    const mensagem = document.querySelector("#formulario_mensagem");

    //=========================================================
    //VALIDA OS DADOS INSERIDOS NO FORMULÁRIO 
    //=========================================================    
    //verifica se algum campo está vazio, se estiver finaliza a função com o return
    if (nome.value === "" || email.value === "" || mensagem.value === "") {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    //verifica se o e-mail digitado possui o @, se não possuir @ finaliza a função com o return
    if (!email.value.includes("@")) {
        alert("Digite um e-mail válido!");
        return;
    }

    //=========================================================
    //SELECIONA OS ELEMENTOS DO FORMULÁRIO 
    //=========================================================
    //mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    //limpa os campos após simular o envio de e-mail
    nome.value = "";
    email.value = "";
    mensagem.value = "";
});


//====================================================================
//FUNÇÃO QUE REALIZA A TROCA DAS IMAGENS DOS PROJETOS
//====================================================================

//lista que armazena o número do projeto, o nome do projeto
//e a quantidade de imagens que cada projeto tem, para poder realizar
//a troca de imagens da maneira correta
const listaElementosProjeto = [
    {
        numeroDoProjeto: 1,
        nome: "Estoque",
        quantidadeImagens: 2
    },
    {
        numeroDoProjeto: 2,
        nome: "Atividade Extensionista",
        quantidadeImagens: 4
    },
    {
        numeroDoProjeto: 3,
        nome: "Aplicativo Bancário",
        quantidadeImagens: 2
    },
    {
        numeroDoProjeto: 4,
        nome: "Coin Byte",
        quantidadeImagens: 3
    },
    {
        numeroDoProjeto: 5,
        nome: "MyLibrary",
        quantidadeImagens: 5
    },
    {
        numeroDoProjeto: 6,
        nome: "Cosmic Focus",
        quantidadeImagens: 4
    },
    {
        numeroDoProjeto: 7,
        nome: "Doçura Caseira",
        quantidadeImagens: 3
    },
    {
        numeroDoProjeto: 8,
        nome: "CatCoffee",
        quantidadeImagens: 3
    },
    {
        numeroDoProjeto: 9,
        nome: "PharmaConnect",
        quantidadeImagens: 5
    }
]

function TrocaImagens(){
    //O forEach percorre todos os elementos da lista de projetos e realiza a 
    //troca de imagens no site
    listaElementosProjeto.forEach(projeto =>{
        //=========================================================
        //RECEBE AS INFORMACOES DA LISTA DE PROJETOS
        //=========================================================
        //recebe o número do projeto selecionado pelo forEach
        const numeroProjeto = projeto.numeroDoProjeto;
        //recebe a quantidade de imagens do projeto selecionado pelo forEach
        const quantidadeImagens = projeto.quantidadeImagens;


        //=========================================================
        //SELECIONA O ELEMENTO HTML REFERENTE AO PROJETO
        //=========================================================
        //cria o nome para selecionar o elemento imagem no html
        const nomeElementoImagem = `#imagem_projeto_${numeroProjeto}`;
        //seleciona o elemento imagem no html
        const elementoImgProjeto = document.querySelector(nomeElementoImagem);

        //=========================================================
        //TROCA AS IMAGENS DE ACORDO COM O TOTAL DE IMAGENS 
        //=========================================================
        //variavel de contagem para realizar a troca das imagens
        let contagem = 1;

        //funcao responsavel por repetir a cada 3 segundos
        //funcao troca a imagem no html
        setInterval(() => {
            //nome do caminho da imagem de acordo com o projeto
            const nomeLocalImagem = `Imagens/portfolio/projeto${numeroProjeto}_imagem${contagem}.png`

            //a imagem antiga é trocada no projeto pela proxima imagem
            elementoImgProjeto.src = nomeLocalImagem;

            //incrementa a contagem
            contagem++;

            //se a contagem chegar no número máximo de imagens retorna a imagem 1
            if(contagem > quantidadeImagens){
                contagem = 1;
            }
        }, 3000);// troca as imagens a cada 3 segundos

    })
}

//Inicializa a função Troca de Imagens assim que a página HTML iniciar
TrocaImagens();
