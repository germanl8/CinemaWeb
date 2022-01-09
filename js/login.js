"use strict"


window.addEventListener("load", function(){

    $("#cinem").click(function () { 
        window.reload();
        
    });

    //!----------link--registro-----------

   
    
    $("#btnregistrar").click(function(){

        console.log("hola");

            $("#div_autentication").hide();
            $("#formautentication").hide();
            $("#div_registrar").show();
    });


    $("#btnlogin").click(function () { 

        console.log("dentro de la funcion");
        var mail = $("#input_mail_login").val();
        var passwd = $("#input_passwd").val();
        var string_user;
        var mail_existe = 0;

        var alength = localStorage.length -1;
        for (var i=alength; i>0; i){
            var search_user = localStorage.getItem(i);
            string_user = JSON.parse(search_user);
            console.log("entro al for");

                if(string_user.mail == mail){
                   
                    console.log("paswwd del string"+string_user.newpasswd+"password:"+passwd);
                    mail_existe = 1;
                    var user_active = string_user;

                    if(string_user.newpasswd == passwd){
                        console.log(string_user);
                        user_active.active = 1;
                        localStorage.setItem(user_active.id, JSON.stringify(user_active));
                        window.opener.location.reload();
                        window.close();
                        
                    }else alert("Contraseña equivocada");

                    break;
                
                }

                i--;
        };
        if(mail_existe != 1){
            alert("mail no existe");
        }
        
 

     

    });

    //!---------------------registrar-------------------

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

            

            //!----recorre el localstorage-----
    
            var alength = localStorage.length -1;
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
                window.opener.location.reload();
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