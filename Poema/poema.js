//Classe de modelo para os poemas
class Poema {
    constructor(){  //toda vez que a class é chamada o constructor cria um novo objeto
        this.title = "";
        this.image = ""; //link src
        this.date = "";
        this.text = "";
    }

    //CRUD (Create, Read, Update, Delete)

    //ADICIONAR POEMAS AO ARMAZENAMNETO
    add(poema) {
        try {
            this.validData();
         
            // var basePoema = [];  //Vetor(Array) que recebe os dados do localstorage
            var basePoema = JSON.parse(localStorage.getItem('poemas'));//JSON.parse() -> pega um json e converte em objeto
            if(basePoema == null){
                basePoema = []
            };
            basePoema.push(poema); //Adicionando o poema na lista de poemas;

            var poemasJson = JSON.stringify(basePoema); //Criando JSON dos objetos na basePoema
                localStorage.setItem('poemas', poemasJson);
                return true;
        }  catch (ex) {
            console.error(ex);
            throw ex;
        }
    }

    

    //LISTAR POEMAS
    getAll() {
        var basePoema = JSON.parse(localStorage.getItem('poemas'));//JSON.parse() -> pega um json e converte em objeto
            if(basePoema == null){
                basePoema = [] //Criando Vetor para receber os dados do localstorage 
            }
        return basePoema;
    }

    //atualizar poemas

    //remover poemas

    //validar dados

    validData() {
        var erros = "";
        if(!this.title || this.title == "" ){
            erros += "Poema sem título. \n"
        }if(!this.image || this.image == "" ){
            erros += "Poema sem imagem. \n"
        }if(!this.date || this.date == "" ){
            erros += "Poema sem data. \n"
        }if(!this.text || this.text == "" ){
            erros += "Poema sem texto. \n"
        }
        if(erros != ""){
            throw erros;
            
        }
    }
}

