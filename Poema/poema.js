//Classe de modelo para os poemas
class Poema {
    constructor(){  //toda vez que a class é chamada o constructor cria um novo objeto
        this.title = "";
        this.image = ""; //link src
        this.date = "";
        this.text = "";
    }

    //CRUD (Create, Read, Update, Delete)

    //Adicionar poema ao armazenamento
    add(poema) {
        
        // var basePoema = []; //Vetor(Array) que recebe os dados do localstorage
        // basePoema = JSON.parse(localStorage.getItem("poemas"));
        // poema = JSON.stringify(poema); //converte os obejtos para JSON
        // basePoema.push(poema)
        try {
            var basePoema = [];  //Vetor(Array) que recebe os dados do localstorage
            basePoema = JSON.parse(localStorage.getItem('poemas'));//JSON.parse() -> pega um json e converte em objeto
            basePoema.push(poema); //Adicionando o poema na lista de poemas;

            var poemasJson = JSON.stringify(basePoema); //Criando JSON dos objetos na basePoema
                localStorage.setItem('poemas', poemasJson);
                return true;
        } catch (ex) {
            console.error(ex);
            return false;
        }
    }

    //listar poemas
    getAll() {
        return JSON.parse(localStorage.getItem('poemas'));
    }

    //atualizar poemas

    //remover poemas
}