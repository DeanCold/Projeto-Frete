
function tela_inicial()
{
    window.location="inicial.html";

}


function tela_cadastro()
{
    window.location="cadastro.html";
}


window.onload=function(){
    let botaoInicio = document.getElementById("btn_entrar");
    let botaoCadastro = document.getElementById("btn_cadastro");
    botaoInicio.onclick = function () {
        tela_inicial();
    }

    botaoCadastro.onclick = function () {
        tela_cadastro();
    }
}

