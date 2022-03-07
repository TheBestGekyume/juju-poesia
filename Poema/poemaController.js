//Controle conteudo do HTML para o JavaScript
const poemaController = {
    poemas:[], //um array que funciona como uma lista de poemas que armazena-os
    adicionar:function() {
        var poema = new Poema(); // new Poema executa o constructor do poema.js
        poema.title = document.getElementById("title").value;
        poema.image = document.getElementById("image").value;
        poema.date = document.getElementById("date").value;
        poema.text = document.getElementById("text").value;
        // this.poemas.push(poema); //manda o poema que foi cadastrado para poemas
        if (poema.add(poema)){
            alert("Poema registrado!");
        }
        this.getAllPoema();
    },
    getAllPoema: function () {
        var poema = new Poema;
        this.poemas = poema.getAll();
        var tabela = "<table class='table'> <tr> <th>Título</th> <th>imagem</th> <th>Data</th> <th>Texto</th> </tr>";

        for (var index = 0; index < this.poemas.length; index++) {
            tabela += "<tr> <td>" + this.poemas[index].nome + "</td> <td>" + this.poemas[index].descricao + "</td> <td>" + 
             this.poemas[index].quant + "</td> <td> R$" + this.poema[index].valor.toFixed(2) + "</td> </tr>";
        }

        tabela += "</table>";
        document.getElementById("listaPoemas").innerHTML = tabela
    },
    }

  


    //listar poemas

    //atualizr poemas

    //remover poemas