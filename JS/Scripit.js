
function submeter(){

            var data = new Date()
            var nome = document.getElementById("nome").value
            var email = document.getElementById("email").value
            var nascimento = document.getElementById("nascimento").value
            var telefone = document.getElementById("telefone").value

            if(nome == '' || email == '' || nascimento == '' || telefone == ''){
                swal("ERRO!", "Verifique os campos e se assegure de preencher todos corretamente", "error")
            }

             else if(nascimento < 1940 || nascimento > 2002) {
                swal("idade invalida!", "verifique se o ano escolhido foi menor que 1940 ou maior que 2002", "error")

            }

            else {
                swal("Dados salvos com sucesso", "Obrigado por preencher nosso formulário, Em breve retornaremos o contato", "success");
            }

        } 