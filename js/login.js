"use strict"


window.addEventListener("load", function(){

    //----------link--registro-----------

    var formregistrarme_ = document.querySelector("#formregistrarme");

    formregistrarme_.addEventListener(`submit`, function(){

        console.log("hola");

            window.open("registrarse.html", "Registrarme", "width=550,height=400,resizable=NO,scrollbars=NO")
            window.close();
    });



    var mail = $("#input_mail").val();
    var passwd = $("#input_passwd").val();

    var autentication = document.querySelector("#btnlogin");

    autentication.addEventListener(`submit`, function(){

        var alength = localStorage.length -1;
        for (var i=alength; i>0; i){
            var search_user = localStorage.getItem(i);
            var string_user = JSON.parse(search_user);

                if(string_user.mail == mail){
                    var mail_existe = 1;
                    console.log("dentro del if de mail");
                    break;
                    
                }else mail_existe = 0;
                i--;    
        };

        if(mail_existe != 0 ){ //!si mail existe en localstorage, chequea contraseña

            if(string_user.newpasswd == passwd){
                var passwd_ok = 1;
                alert("inicio de sesion ok");
                
            }else passwd_ok = 0; alert("Contraseña equivocada");


        }

    });



});