//Controle conteudo do HTML para o JavaScript
const poemaController = {
    poema: new Poema, //Criado um poema. Ficar na memoria (Var Global)
    poemas:[], //um array que funciona como uma lista de poemas que armazena-os
    erros: false, //true = vedadeiro ou false = falso
    saveButton: document.getElementById("button_save"),
    
    //MANIPULAÇÃO DE FORMS
    getDataForm: function () {  //Pega as informações do formulario e manda para o objeto poema
        this.poema.title = document.getElementById("title").value;
        this.poema.image = document.getElementById("image").value;
        this.poema.date = document.getElementById("date").value;
        this.poema.textp = document.getElementById("textP").value;

    },
    updateDataForm: function (poema = new Poema) { // //Pega as informações do objeto poema e manda para o formulario
        document.getElementById("title").value = poema.title;
        document.getElementById("image").value = poema.image;
        document.getElementById("date").value = poema.date;
        document.getElementById("textP").value = poema.textp;
        
    },
    
    //CRUD Poema
    addPoema:function() {  //em poema.js -> add() & update()  // adicionar ou atualizar poema
        try {
            this.getDataForm(); //Pega as informações do formulario e manda para o objeto poema
            if (this.poema.id != null) {
                this.poema.update(this.poema, this.poema.id); //criar id do poema?
                alert("Poema Atualizado!");
            } else {
                this.poema.add(this.poema);
                alert("Poema Adicionado!");
            }
            this.newPoema();
            this.getAllPoema();
        } catch (ex) {
            alert(ex);
        }
    },

    getPoema: function (index = 0) { 
        this.poema.id = poema.id;
        this.updateDataForm(poema);
    },

    deletePoema: function (index = 0) { //em poema.js -> delete()  // apagar poema
        this.poema.delete(index);
        this.getAllPoema();
    },

    newPoema: function () { 
        this.poema = new Poema;
        this.updateDataForm();
    },
    
     getAllPoema:function () {  //em poema.js -> getAll() // listar poemas
        var poema = new Poema;
        this.poemas = poema.getAll();
        var tabela = "<table class='table'> <tr> <th>Título</th> <th>Imagem</th> <th>Data</th> <th style= width:50%>Texto</th> <td><i class='bi bi-pencil-fill'></i></td> <td><i class='bi bi-trash3-fill'></i></td> </tr>";

        for (var index = 0; index < this.poemas.length; index++) {
            tabela += "<tr> <td>" + this.poemas[index].title + "</td> <td>" + this.poemas[index].image + "</td> <td>" + 
            this.poemas[index].date + "</td> <td>" + this.poemas[index].textp + 
            "</td> <td onclick='poemaController.getPoema(" + index + ")'> <a href='#'> <i class='bi bi-pencil-fill'></i> </a></td> <td onclick='poemaController.deletePoema(" + index + ")'><a href='#listaPoemas'><i class='bi bi-trash3-fill'></i></a></td> </tr>";
        };

        tabela += "</table>";
        document.getElementById("listaPoemas").innerHTML = tabela
        },

        //Validação Reativa
        validRequired:function () {
            var campos = document.querySelectorAll(".required") ; // document.getElementsByClassName("required")
            var erros = document.querySelectorAll(".textErro");
            var contErros = 0;
            for (var index = 0; index < campos.length; index++) {
                if (campos[index].value == "") {
                    erros[index].style = "display: block";
                } else {
                    erros[index].style = "display: none";
                }
            }
            if (contErros > 0) {
                this.erros = true;
                this.saveButton.disabled = true;
            } else {
                this.erros = false;
                this.saveButton.disabled = false;
            }
        }
}


    //listar poemas
    

    //atualizr poemas

