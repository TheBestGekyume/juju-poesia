//Controle conteudo do HTML para o JavaScript
const poemaController = {
    poemas:[], //um array que funciona como uma lista de poemas que armazena-os
    adicionar:function() {
        try {
            var poema = new Poema(); // new Poema executa o constructor do poema.js
            poema.title = document.getElementById("title").value;
            poema.image = document.getElementById("image").value;
            poema.date = document.getElementById("date").value;
            poema.text = document.getElementById("textP").value;
            poema.add(poema);
            alert("Poema Adicionado!");
            this.getAllPoema();
        } catch (ex) {
            alert(ex);
        }
    },

    
    getAllPoema:function () {
        var poema = new Poema;
        this.poemas = poema.getAll();
        var tabela = "<table class='table'> <tr> <th>Título</th> <th>Imagem</th> <th>Data</th> <th style= width:50%>Texto</th> </tr>";

        for (var index = 0; index < this.poemas.length; index++) {
            tabela += "<tr> <td>" + this.poemas[index].title + "</td> <td>" + this.poemas[index].image + "</td> <td>" + 
            this.poemas[index].date + "</td> <td>" + this.poemas[index].text + "</td> </tr>";
        }

        tabela += "</table>";
        document.getElementById("listaPoemas").innerHTML = tabela
        },

    validRequired:function () {
        var campos = document.getElementsByClassName("required") ; //document.querySelectorAll(".required")
        var erros = document.getElementsByClassName("textErro");
        
        for (var index = 0; index < campos.length; index++) {
            if (campos[index].value == "") {
                erros[index].style = "display: block";
            } else {
                erros[index].style = "display: none";
            }
        }
    }
}


    //listar poemas
    

    //atualizr poemas

    //remover poemas