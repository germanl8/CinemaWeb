"use strict"


window.addEventListener("load", function(){

    
    $("#form_reg").submit(function () { 
        var mail = $("#input_mail").val();
        var name = $("#input_name").val();
        var surname = $("#input_surname").val();
        var newpasswd = $("#input_newpasswd").val();
        var repasswd = $("#input_repasswd").val();

        if(newpasswd == repasswd){

            localStorage.setItem("input_mail", mail);
            localStorage.setItem("input_name", name);
            localStorage.setItem("input_surname", surname);
            localStorage.setItem("input_newpasswd", newpasswd);

        }else alert("Las contraseñas no coinciden");

      });
    
        var name = localStorage.getItem("name");
        if(name != null && name != "undefined"){
          var about_p = $("#about p");
    
          about_p.html("<strong>Bienvenido, "+name+"</strong>");
          about_p.append("<a href='#' id='logout'> Cerrar Sesión</a>");
    
          $("#login").hide();
          $("#about hr").show();
          $("#logout").click(function () { 
            localStorage.clear();
            location.reload();
            
          });
        }
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


