//Classe de modelo para os poemas
class Poema {
    constructor(){  //toda vez que a class é chamada o constructor cria um novo objeto
        this.title = "";
        this.image = ""; //link src
        this.date = "";
        this.text = "";
    }
    saveAll(poemas = []) {
        var jsonPoema = JSON.stringify(poemas);
        localStorage.setItem("poemas", jsonPoema); 
    }
}