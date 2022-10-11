function cadastrar(){
    var cad_user = document.getElementById(cad_user);
    var senha = document.getElementById(senha);
    var confirmarsenha = document.getElementById(confirmarsenha);

    user_cad.focus();
    if(cad_user.value == ""){
        alert("Usuário não informado");
        cad_user.focus();
        return;
    }
    if(senha.value!=confirmarsenha.value){
        alert("Senhas não são idênticas!");
        return;
    }
}

function val_login (){
    var user = document.getElementById(user);
    var password = document.getElementById(password);
    var resultado =document.getElementById(resultado);
    
    resultado.text = "teste";

    if(user.value!="Admin"||user.value!=cad_user.value){
        alert("Usuário incorreto");
        return;
    }
    if(password.value!="Admin"||password.value!=senha.value){
        alert("Senha incorreta");
        return;
    }else{
        resultado.text = "CERTINHO";
    }
    
    

}