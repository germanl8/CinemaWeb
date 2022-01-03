"use strict"


window.addEventListener("load", function(){

//----------link--registro-----------

    var formregistrarme_ = document.querySelector("#formregistrarme");

    formregistrarme_.addEventListener(`submit`, function(){

        console.log("hola");

            window.open("registrarse.html", "Registrarme", "width=550,height=400,resizable=NO,scrollbars=NO")
            window.close();
    });



var user = document.querySelector("#input_user").value;
var passwd = document.querySelector("#input_passwd").value;


});