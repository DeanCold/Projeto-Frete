function tela_login(){
    window.location="login.html";
}

window.onload=function(){
    let botaoSair = document.getElementById("btn_sair");

    botaoSair.onclick = function () {
        tela_login();
    }
}
