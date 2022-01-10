'use strict'

window.addEventListener("load", function(){

     //? funciones---------------------------------------------

     //! habilitacion de inputs de compra
     function habilitar_input_entradas(input1, input2){
        input1.click(function(){
            if(input1.val() != `default`){
                input2.prop("disabled", false);
            }else input2.prop(`disabled`, true);
        });    
    }

    //! Chequeo si usuario es activo --- texto de error 

    function active_user(){
        if(active == 0){
            console.log("no hay usuario iniciado");
            alert("Debe iniciar sesion para realizar la compra!");
            window.open("login.html", "Login", config_window);
            $("#mensaje").css("display", "");
            
        }
    }
    




    //?--------------------------------------------------------








    var config_window = "width=600,height=450,resizable=no,titlebar=no,scrollbars=no";
    
    $("#login").click(function () { 
        
        window.open("login.html", "Login", config_window);
        
    });

   
    //!----users------
      

    var active = 0;
    var alength = localStorage.length -1;
    for (var i=alength; i>0; i){
        var search_user = localStorage.getItem(i);
        var string_user = JSON.parse(search_user);
        console.log(string_user);
        console.log(search_user);

            if(string_user.active == 1){
                active = 1;
                var user_active = string_user;
                break;
            }
            i--;    
    };

    if(active == "1"){
        console.log(user_active);
        $("#login").hide();
        $("#activar").hide();
        var encabezado = $("#encabezado");
        encabezado.append(`<li><a class="user">Bienvenido/a: `+user_active.name+ " " +user_active.surname+`</a></li>`);
        encabezado.append(`<li><a id="salir" href="" class="activar">Salir</a></li>`);
    };

        

    $("#salir").click(function (e) { 
        console.log(user_active.id);
        e.preventDefault();
        user_active.active = 0;
        localStorage.setItem(user_active.id, JSON.stringify(user_active));
        location.reload();
    });


    //!-----movies------

    var add_pelicula = $("#addpelicula");
    var add_cine = $("#addcine");
    var add_fecha = $("#addfecha");
    var add_hora = $("#addhora");
    var add_pago = $("#addpago");
    var input_comprar = $("#input_comprar");

    var buy_pelicula = $("#addpelicula option:selected").val();
    var buy_cine = $("#addcine").val();
    var buy_fecha = $("#addfecha").val();
    var buy_hora = $("#addhora").val();
    var buy_pago = $("#addpago").val();
    

    habilitar_input_entradas(add_pelicula, add_cine);
    habilitar_input_entradas(add_cine, add_fecha);
    habilitar_input_entradas(add_fecha, add_hora);
    habilitar_input_entradas(add_hora, add_pago);      
    //habilitar_input_entradas(add_pago, input_comprar);
    
    $("#input_comprar").click(function (e) { 
        e.preventDefault();

        var movie_buy_ticket = {
            movie:  buy_pelicula,
            cine: buy_cine, 
            fecha: buy_fecha, 
            hora: buy_hora,
            pago: buy_pago,
            id: user_active.id,
            user_name: user_active.name,
            user_surname: user_active.surname
        }; 

        console.log(movie_buy_ticket);
        active_user();
        
    });
        
     


});