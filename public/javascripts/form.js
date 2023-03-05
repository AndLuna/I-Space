const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input-cadastro')
const pass = document.getElementById('pass')
const passConfirm = document.getElementById('confirmPass')

form.addEventListener('submit', function(e){
    e.preventDefault();
    validaInputs();
});

function validaInputs(){
    const errorMessage = document.querySelectorAll('.paragrafo-error')

    if(validaPassword(pass, passConfirm)){
        for(var i = 0; i < inputs.length ; i++){
            if(inputs[i].value.length < 1){
                inputs[i].style.border = '2px solid red'
                errorMessage[i].innerHTML = '<p> Preencha o campo </p>'

            } 
            
            if (inputs[i].value.length > 3 && inputs[i].style.border == '2px solid red'){
                inputs[i].style.border = '2px solid green'
                if(errorMessage[i].innerHTML == '<p> Preencha o campo </p>'){
                    errorMessage[i].innerHTML = ''
                }
            } 
        
    }
}
}

function validaPassword(password, confirmPassword){
    if(password.value == confirmPassword.value){
        return true
    } else {
       alert('Suas senhas precisam ser iguais')
    }
}




