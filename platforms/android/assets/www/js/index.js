var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        //Llamamos la función de FastClick para todos los elementos que esten en el body
        FastClick.attach(document.body);
        $(document).ready(function ()
		{
            //Estado que tiene por defecto la app al entrar. 
			//Oculto los div "las paginas"
            $("#tablag").hide();
            $("#tablan").hide();
            $("#tablav").hide();
			//Oculto los h2 de las fechas y media del día
			$("#medianocturna").hide();
            $("#mediageneral").hide();
            $("#mediavehiculo").hide();
			//Oculto las tablas
            $("#tablaGeneral").hide();
            $("#tablaNocturna").hide();
            $("#tablaVehiculos").hide();
            //Genero las tablas
            var fecha = mifecha();
            //Pido los JSON al servidor
            loadGeneral();
            loadNocturna();
            loadVehiculos();
            //Creo la entrada por defecto
            $("#oculto").append("general");
            $("#oculto").hide();
            $("#faq").hide();
            botongeneral();
        });
    },
};
//Pulsar el botón General
function botongeneral(){
    $("#cuerpo").animate({ scrollTop: 0 }, 1);
    $("#tablaGeneral").show();
    $("#tablaNocturna").hide();
    $("#tablaVehiculos").hide();
    $("#faq").hide();
    $("#bgneral").css("border-bottom", "2px solid #f8a23b");
    $("#bnocturna").css("border-bottom", "2px solid #fff");
    $("#bvehiculos").css("border-bottom", "2px solid #fff");
    $("#bfaq").css("border-bottom", "2px solid #fff");
    $("#oculto").html("general");
    $("#cargando").show();
    error = $("#log").html();
    if(error == "error"){
        $("#error").show();
    }
};
//Pulsar el botón Nocturna
function botonnocturna(){
    $("#cuerpo").animate({ scrollTop: 0 }, 1);
    $("#tablaGeneral").hide();
    $("#tablaNocturna").show();
    // $("#tablan").show();
    // $("#medianocturna").show();
    $("#tablaVehiculos").hide();
    $("#faq").hide();
    $("#bgneral").css("border-bottom", "2px solid #fff");
    $("#bnocturna").css("border-bottom", "2px solid #f8a23b");
    $("#bvehiculos").css("border-bottom", "2px solid #fff");
    $("#bfaq").css("border-bottom", "2px solid #fff");
    $("#oculto").html("nocturna");
    $("#cargando").show();
    error = $("#log").html();
    if(error == "error"){
        $("#error").show();
        $("#tablaNocturna").hide();
        $("#tablan").hide();
        $("#medianocturna").hide();
    }
};
//Pulsar el botón Vehículos
function botonvehiculos() {
    $("#cuerpo").animate({ scrollTop: 0 }, 1);
    $("#tablaGeneral").hide();
    $("#tablaNocturna").hide();
    $("#tablaVehiculos").show();
    $("#faq").hide();
    $("#bgneral").css("border-bottom", "2px solid #fff");
    $("#bnocturna").css("border-bottom", "2px solid #fff");
    $("#bvehiculos").css("border-bottom", "2px solid #f8a23b");
    $("#bfaq").css("border-bottom", "2px solid #fff");
    $("#oculto").html("vehiculos");
    $("#cargando").show();
    error = $("#log").html();
    if(error == "error"){
        $("#error").show();
    }
};
//Pulsar el botón FAQ
function botonfaq() {
    $("#cuerpo").animate({ scrollTop: 0 }, 1);
    $("#tablaGeneral").hide();
    $("#tablaNocturna").hide();
    $("#tablaVehiculos").hide();
    $("#faq").show();
    $("#bgneral").css("border-bottom", "2px solid #fff");
    $("#bnocturna").css("border-bottom", "2px solid #fff");
    $("#bvehiculos").css("border-bottom", "2px solid #fff");
    $("#bfaq").css("border-bottom", "2px solid #f8a23b");
    $("#oculto").html("faq");
    $("#cargando").hide();
    $("#error").hide();
};
//Funcion mi fecha. Para tener la fecha en dd/mm/yyyy
function mifecha() {
	var meses, diasSemana, hoy, maniana, hora;
    meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    hoy = new Date();
    hora = hoy.getHours();
    if (hora < 21) {
        if (hoy.getMonth() < 10) {
            fecha = (hoy.getDate()+ "/0" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear());
        } else {
            fecha = (hoy.getDate()+ "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear());
        }
    } else {
        maniana = hoy.setTime(hoy.getTime() + (24 * 60 * 60 * 1000));
        maniana = new Date(maniana);
		if (maniana.getMonth() < 10) {
            fecha = (maniana.getDate() + "/0" + (maniana.getMonth() + 1) + "/" + maniana.getFullYear());
        } else {
            fecha = (maniana.getDate() + "/" + (maniana.getMonth() + 1) + "/" + maniana.getFullYear());
        }
    }
};
//Creo la tabla General
function loadGeneral() {
    $.ajax(
    {
        type        : "GET",
        url         : "http://www.iniris.es/luz/general",
        crossDomain : true,
        beforeSend  : function()
        {
		$("#log").html("");
		$("#error").hide();
		$("#cargando").html("<div id='cargando'><div id='imagencargando'><img src='img/loading.gif'/></div><h1>Cargando...<br>Por favor espere</h1></div>");
		$("#cargando").show();
		$("#tablag").hide();
        },
        complete    : function(){
            $("#cargando").html("");
            $("#cargando").hide();
        },                
        dataType    : 'json',
        success     : function(respuestag)
        {
            $.each(respuestag, function (key, valg)
            {
                for (i = 0; i < 24; i++) 
                {
                    originalgeneral = valg[i];
                    orgauxg = originalgeneral.substr(2, 6);
                    $("#general" + (i + 1)).html("<div align='center' class='preciohora' id='preciohorag" + orgauxg + "'>Precio intermedio</div><br><div>" + originalgeneral + " &euro; / kWh </div>");
                };
                for (i= 24; i < 25; i++){
                    originalgeneral = valg[i];
                    $("#mediageneral").html("Fecha: "+fecha+"<br>Precio medio: "+originalgeneral+" &euro;");
                };
                reversog = valg.sort();
                for (var j = 0; j < 24; j++) {
                    copiag = reversog[j];
                    copauxg = copiag.substr(2, 6);
                    if (j < 8) {
                        $("#preciohorag"+copauxg).html("Precio más barato");
                        $("#preciohorag"+copauxg).css("background-color", "green");
                    } else{
                        if (j < 16) {
                        } else{
                            $("#preciohorag"+copauxg).html("Precio más caro");
                            $("#preciohorag"+copauxg).css("background-color", "red");
                        };
                    };
                };
            });
            $("#tablag").show();
            $("#mediageneral").show();
            $("#error").hide();
			auxa = $("#tablag").html();
        },
        error       : function(){
            $("#error").show();
            $("#log").html("error");
        }
    });
};
//Creo la tabla Nocturna
function loadNocturna() {
    $.ajax(
    {
        type        : "GET",
        url         : "http://www.iniris.es/luz/nocturna",
        crossDomain : true,
        beforeSend  : function()
        {
		$("#log").html("");
		$("#error").hide();
		$("#cargando").html("<div id='cargando'><div id='imagencargando'><img src='img/loading.gif'/></div><h1>Cargando...<br>Por favor espere</h1></div>");
		$("#cargando").show();
		$("#tablan").hide();
        },
        complete    : function(){
            $("#cargando").html("");
            $("#cargando").hide();
        },                
        dataType    : 'json',
        success     : function(respuestan)
        {
            $.each(respuestan, function (key, valn)
            {
                for (i = 0; i < 24; i++)
                {

                    originalnocturna = valn[i];
                    noct = originalnocturna.substr(2, 6);
                    $("#nocturna" + (i + 1)).html("<div align='center' class='preciohora' id='preciohoran" + noct + "'>Precio intermedio</div><br><div>" + originalnocturna + " &euro; / kWh </div>");
                };
                for (i= 24; i < 25; i++)
                {
                    originalnocturna = valn[i];
                    $("#medianocturna").html("Fecha: "+fecha+"<br>Precio medio: "+originalnocturna+" &euro;");
                };
                reverson = valn.sort();
                for (var j = 0; j < 24; j++)
                {
                    vueltan = reverson[j];
                    noctaux = vueltan.substr(2, 6);
                    if (j < 8) 
                    {
                        $("#preciohoran"+noctaux).html("Precio más barato");
                        $("#preciohoran"+noctaux).css("background-color", "green");
                    }
                    else
                    {
                        if (j < 16) 
                        {
                        }
                        else
                        {
                            $("#preciohoran"+noctaux).html("Precio más caro");
                            $("#preciohoran"+noctaux).css("background-color", "red");
                        };
                    };
                };
            });
            $("#tablan").show();
            $("#medianocturna").show();
            $("#error").hide();
			auxb = $("#tablaNocturna").html();
        },
        error       : function()
        {
            $("#error").show();
            $("#log").html("error");
        }
    });
};
//Creo la tabla Vehículos
function loadVehiculos() {
    $.ajax(
    {
        type        : "GET",
        url         : "http://www.iniris.es/luz/vehiculo",
        crossDomain : true,
        beforeSend  : function(){
            $("#log").html("");
            $("#error").hide();
            $("#cargando").html("<div id='cargando'><div id='imagencargando'><img src='img/loading.gif'/></div><h1>Cargando...<br>Por favor espere</h1></div>");
            $("#cargando").show();
        },
        complete    : function(){
            $("#cargando").html("");
            $("#cargando").hide();
        },                
        dataType    : 'json',
        success     : function(response)
        {
            $.each(response, function (key, val)
            {
                for (i = 0; i < 24; i++) 
                {
                    original = val[i];
                    orgaux = original.substr(2, 6);
                    $("#vehiculo" + (i + 1)).html("<div align='center' class='preciohora' id='preciohorav" + orgaux + "'>Precio intermedio</div><br><div>" + original + " &euro; / kWh </div>");
                };
                for (i= 24; i < 25; i++){
                    original = val[i];
                    $("#mediavehiculo").html("Fecha: "+fecha+"<br>Precio medio: "+original+" &euro;");
                };
                reverso = val.sort();
                for (var j = 0; j < 24; j++) {
                    copia = reverso[j];
                    copaux = copia.substr(2, 6);
                    if (j < 8) {
                        $("#preciohorav"+copaux).html("Precio más barato");
                        $("#preciohorav"+copaux).css("background-color", "green");
                    } else{
                        if (j < 16) {
                        } else{
                            $("#preciohorav"+copaux).html("Precio más caro");
                            $("#preciohorav"+copaux).css("background-color", "red");
                        };
                    };
                };
            });
            $("#mediavehiculo").show();
            $("#tablav").show();
            $("#error").hide();
        },
        error       : function(){
            $("#error").show();
            $("#log").html("error");
        }
    });
// FIN AJAX
};
//*************************************************//
//        IMPLEMENTAR GESTOS TACTILES CON HAMMER   //
//*************************************************//
// element = document.getElementById('cuerpo');
           
// hammertime = Hammer(element).on("dragleft", function(event) {
//     contador = $("#oculto").html();
//     if(contador == "general"){
//         botonnocturna();
//     }
//     if(contador == "nocturna"){
//         botonvehiculos();
//     }
//     if(contador == "vehiculos"){
//         botonfaq();
//     }
//     if(contador == "faq"){

//     }
// });
// hammertime = Hammer(element).on("dragright", function(event) {
//     contador = $("#oculto").html();
//     if(contador == "general"){

//     }
//     if(contador == "nocturna"){
//         botongeneral();
//     }
//     if(contador == "vehiculos"){
//         botonnocturna();
//     }
//     if(contador == "faq"){
//         botonvehiculos();
//     }
// });


element = document.getElementById('cuerpo');
var direccion = "";
Hammer(element).on("dragstart",function(event) {
    direccion = event.gesture.direction;
});
Hammer(element).on("dragend",function(event) {
    contador = $("#oculto").html();
    switch (direccion) {
        case "left":
            if(contador == "general"){
                botonnocturna();
            }
            if(contador == "nocturna"){
                botonvehiculos();
            }
            if(contador == "vehiculos"){
                botonfaq();
            }
            if(contador == "faq"){
            } 
        break;
        case "right":
            if(contador == "general"){
            }
            if(contador == "nocturna"){
                botongeneral();
            }
            if(contador == "vehiculos"){
                botonnocturna();
            }
            if(contador == "faq"){
                botonvehiculos();
            } 
        break;
    }
    direccion = "";
});