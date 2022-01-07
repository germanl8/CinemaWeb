"use strict"


window.addEventListener("load", function(){

    //----------link--registro-----------

    var formregistrarme_ = document.querySelector("#formregistrarme");

    formregistrarme_.addEventListener(`submit`, function(){

        console.log("hola");

            window.open("registrarse.html", "Registrarme", "width=550,height=400,resizable=NO,scrollbars=NO")
            window.close();
    });



    

    var formautentication_ = document.querySelector("#formautentication");

    formautentication_.addEventListener(`submit`, function(){

        console.log("dentro de la funcion");
        var mail = $("#input_mail").val();
        var passwd = $("#input_passwd").val();
        var string_user;
        var mail_existe = 0;

        var alength = localStorage.length -1;
        for (var i=alength; i>0; i){
            var search_user = localStorage.getItem(i);
            string_user = JSON.parse(search_user);
            console.log("entro al for");

                if(string_user.mail == mail){
                    alert("dentro del if de mail");
                    console.log("paswwd del string"+string_user.newpasswd+"password:"+passwd);
                    mail_existe = 1;

                    if(string_user.newpasswd == passwd){
                        console.log(string_user);
                       
                        alert("inicio de sesion ok");
                        
                    }else alert("Contraseña equivocada");

                    break;
                
                }

                i--;
        };
        if(mail_existe != 1){
            alert("mail no existe");
        }
        

        /*if(mail_existe != 0 ){ //!si mail existe en localstorage, chequea contraseña

            if(string_user.newpasswd == passwd){
                console.log(string_user);
                var passwd_ok = 1;
                alert("inicio de sesion ok");
                
            }else passwd_ok = 0; alert("Contraseña equivocada");


        }*/

    });



});