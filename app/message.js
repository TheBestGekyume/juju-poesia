const message = {
    userName: "",
    userEmail: "",
    userTell: "",
    text: "",

    refresh:function(name = "", email = "", tell = "", text = "") {
        this.userName = name;
        this.userEmail = email;
        this.userTell = tell;
        this.text = text;
    },
    
    send: function() {
        var error = "";
        if (error != "") {
            return false;
        }
        return true;
    }
};