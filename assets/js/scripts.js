// Funcção que faz o envio dos dados do formulario
function envioDoFormulario() {
    const form_afiliacao = document.getElementById('formularioAfiliacao');

    form_afiliacao.addEventListener('submit', function (e) {
        e.preventDefault();
        let inputNome = document.querySelector('#nome');
        let verificarNomeComposto = inputNome.value.split(" ");
        console.log(verificarNomeComposto);
        if (verificarNomeComposto.length > 1) {
            const formData = new FormData(this);

            // No teste não foi apresentadpo nenhuma URL pro fetch
            fetch('', {
                method: 'post',
                body: formData
            }).then(function (response) {
    
                return response.text();
    
            }).then(function (text) {
    
                console.log(text)
            }).catch(function (error) {
                console.error(error);
            })
            alert('Enviado com sucesso!');
            window.location.reload()
        } else {
               alert('Insira um nome e um sobrenome')
        }
    });
    
}

envioDoFormulario();
