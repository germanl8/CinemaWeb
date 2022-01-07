'use strict'

window.addEventListener("load", function(){

    var login = document.querySelector("#login");

    login.addEventListener(`submit`, function(){

        console.log("hola");

            window.open("login.html", "Login", "width=550,height=400,resizable=NO,scrollbars=NO")
            window.close();

    });



});