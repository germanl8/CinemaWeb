'use strict'

window.addEventListener("load", function(){

    var login = document.querySelector("#login");
    var config_window = "width=600,height=450,resizable=no,titlebar=no,scrollbars=no"

    login.addEventListener(`click`, function(){
        console.log("dentro de la funcion click");
        window.open("login.html", "Login", config_window);
        

    });

    var active = 0;

    var alength = localStorage.length -1;
    for (var i=alength; i>0; i){
        var search_user = localStorage.getItem(i);
        var string_user = JSON.parse(search_user);

            if(string_user.active == 1){
                alert("usuario logeado"+string_user.mail);
                active = 1;
                var user_active = string_user;
                break;
            };
            i--;    
    };

    if(active == "1"){
      
        console.log(user_active);

        $("#login").hide();
        $("#activar").hide();
        var encabezado = $("#encabezado");
        encabezado.append(`<li><a class="activar">`+user_active.name+ " " +user_active.surname+`</a></li>`);
        encabezado.append(`<li><a id="salir" href="" class="activar" style="margin-right: 140px;">Salir</a></li>`);
        
    }

    $("#salir").click(function (e) { 
        console.log(user_active.id);
        e.preventDefault();
        user_active.active = 0;
        localStorage.setItem(user_active.id, JSON.stringify(user_active));
        location.reload();

        
    });

    



});