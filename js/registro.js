"use strict"


window.addEventListener("load", function(){

    $("#form_reg").val("");

 

    var id_user = 0;
        if (localStorage.getItem("id_user") == null){ //corrobora si no hay nada ingresado en el local storage, o sea si es el primer registro.
            localStorage.setItem("id_user",id_user); // si efectivamente no hay nada entonces guarda el primer valor en el localstorage, con key id_user y el valor 0
        }
   
    $("#form_reg").submit(function (e) { 

        var mail = $("#input_mail").val();
        var name = $("#input_name").val();
        var surname = $("#input_surname").val();
        var newpasswd = $("#input_newpasswd").val();
        var repasswd = $("#input_repasswd").val();

        //!----si newpasswd y repasswd son diferentes

        if(newpasswd != repasswd){
            alert("Las contraseñas no coinciden");
        }else{

            var alength = localStorage.length -1;

            //!----recorre el localstorage-----

            for (var i=alength; i>0; i){
                var search_user = localStorage.getItem(i);
                var string_user = JSON.parse(search_user);

                    if(string_user.mail == mail){
                        var mail_existe = 1;
                        break;
                        
                    }else mail_existe = 0;
                    i--;    
            };

            //!----si el mail no existe en el localstorage, guarda usuario-----

            if(mail_existe != 1){

                id_user = localStorage.getItem("id_user");
                id_user ++;
                localStorage.setItem("id_user",id_user); //+1 en id_user
                var user = {
                    mail:  mail,
                    name: name, 
                    surname: surname, 
                    newpasswd: newpasswd,
                    active: "1",
                    id: id_user
                };
                localStorage.setItem(id_user, JSON.stringify(user));
                alert("Usuario creado con Exito!");
                window.close();
                


            }else{
                e.preventDefault();
                var error_input_mail = $("#input_mail");
                error_input_mail.css("color", "red");
                error_input_mail.attr("placeholder", "Email no disponible");
            }

        };

    });



});


