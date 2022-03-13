//Classe de modelo para os poemas
class Poema {
    constructor(){  //toda vez que a class é chamada o constructor cria um novo objeto
        this.id = null,
        this.title = "",
        this.image = "", //link src
        this.date = "",
        this.textp = ""
    };

    //CRUD (Create, Read, Update, Delete)

    //ADICIONAR POEMAS AO ARMAZENAMNETO
    add() {
        try {
            this.validData();
            var basePoema = JSON.parse(localStorage.getItem('poemas'));//JSON convertido em objeto para ser manipulado no html
            if(basePoema == null) {
                basePoema = []  //Criando Vetor para receber os dados do localstorage 
            };
            this.id = Date.now(); //criando id baseado no tempo
            basePoema.push(this); //Adicionando o poema na lista de poemas

            var poemasJson = JSON.stringify(basePoema); //Criando JSON dos objetos na basePoema para ser armazenado no localstorage
            localStorage.setItem('poemas', poemasJson);
        }catch (ex) {
            console.error(ex);
            throw ex;
        }
    };

    

    //LISTAR POEMAS
    getAll() {
        var basePoema = JSON.parse(localStorage.getItem('poemas'));//JSON convertido em objeto para ser manipulado no HTML ou JS
            if(basePoema == null){
                basePoema = [] //Criando Vetor para receber os dados do localstorage 
            };
        return basePoema;
    };

    //ATUALIZAR POEMAS
    update() {
        try {
            this.validData(); //validação
            var poemas = this.getAll();
            for (var i = 0; i < poemas.length; i++) {
                if (poemas[i].id == this.id) {
                    poemas[i] = this
                }
            };
            var poemasJson = JSON.stringify(poemas); //Criando JSON dos objetos na basePoema para ser armazenado no localstorage
            localStorage.setItem('poemas', poemasJson); //poemasJson foi escrito no localStorage
        }catch (ex) {
            console.error(ex);
            throw ex;
        }
    };

    //REMOVER POEMAS
    delete(index) {
        var poemas = this.getAll();
        // for (var i = 0; i < poemas.length; i++) {
        //     if (poemas[i].id == this.id) {
        //         poemas.splice(i, 1);
        //     }
        // }
        poemas.splice(index, 1);
        var poemasJson = JSON.stringify(poemas);
        localStorage.setItem('poemas', poemasJson);
    }

    //Validação passiva de dados

    validData() {
        var erros = "";
        if(!this.title || this.title == "" ){
            erros += "Poema sem título. \n"
        }if(!this.image || this.image == "" ){
            erros += "Poema sem imagem. \n"
        }if(!this.date || this.date == "" ){
            erros += "Poema sem data. \n"
        }if(!this.textp || this.textp == "" ){
            erros += "Poema sem texto. \n"
        }
        if(erros != ""){
            throw erros;
            
        }
    };
}

