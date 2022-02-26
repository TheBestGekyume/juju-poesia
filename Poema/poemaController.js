const poemaController = {
    poemas:[],
    adicionar: function(){
        var poema = new Poema(); // new Poema executa o constructor do poema.js
        poema.name = document.getElementById("name").value;
        poema.image = document.getElementById("image").value;
        poema.date = document.getElementById("date").value;
        poema.text = document.getElementById("text").value;
        this.poemas.push(poema); //manda o poema que foi cadastrado para poemas, um array que funciona como uma lista de poemas que armazena-os localmente
    }
}