"use strict"


window.addEventListener("load", function(){


    var id_user = 0;
        if (localStorage.getItem("id_user") == null){ //corrobora si no hay nada ingresado en el local storage, o sea si es el primer registro.
            localStorage.setItem("id_user",id_user); // si efectivamente no hay nada entonces guarda el primer valor en el localstorage, con key contador y el valor 0
        }else 
            id_user ++;
            localStorage.setItem()


    function search_users(){

        var alength = localStorage.length;
        for (var i=alength; i>0; i){
            var search_user = localStorage.getItem(i);
            alert("dentro del for");
            
            console.log("valor indice:" +i+ "datos:"+search_user);

            i--;

        };

    }
   
    

    $("#form_reg").submit(function () { 

        //search_users();


        var mail = $("#input_mail").val();
        var name = $("#input_name").val();
        var surname = $("#input_surname").val();
        var newpasswd = $("#input_newpasswd").val();
        var repasswd = $("#input_repasswd").val();

        

        if(newpasswd == repasswd){

            var user = [
                {mail, name, surname, newpasswd},

            ];

            localStorage.setItem(id_user, JSON.stringify(user));
            alert("Usuario creado con Exito!");

            

        }else alert("Las contraseñas no coinciden");


    });
      
    
        
/*

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

    }); */

});


