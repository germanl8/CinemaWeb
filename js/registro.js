"use strict"


window.addEventListener("load", function(){


    var form_reg_ = document.querySelector("#form_reg");

    form_reg_.addEventListener("submit", function(){

        var mail = document.querySelector("#input_mail");
        var name = document.querySelector("#input_name");
        var surname = document.querySelector("#input_surname");
        var passwd = document.querySelector("#input_passwd");
        
        alert(usuario);
        
        
        if(localStorage.getItem(mail) == null){

            var usuario = [
                {name, surname, passwd,},
            ];
            

        localStorage.setItem(mail, JSON.stringify(usuario));



        }

    });

});


