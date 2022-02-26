const messageController = {

    send: function() {      //1º pegar os dados do message.refresh
        message.refresh(
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("tell").value,
            document.getElementById("text").value,
        );
        //2º enviar os dados 
        if (message.send()) {
            alert("Mensagem foi enviada!");
        } else {
            alert("Erro ao enviar a mensagem!");
        }
    }

};