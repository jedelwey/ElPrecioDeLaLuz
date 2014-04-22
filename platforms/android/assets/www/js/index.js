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
<<<<<<< HEAD
        $(document).ready(function ()
		{
=======
        $(document).ready(function () {
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
            //prueba 
            $("#tablag").hide();
            $("#tablan").hide();
            $("#tablav").hide();
<<<<<<< HEAD
			$("#medianocturna").hide();
            $("#mediageneral").hide();
=======
            $("#mediageneral").hide();
            $("#medianocturna").hide();
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
            $("#mediavehiculo").hide();

            //Genero las tablas
            var fecha = mifecha();
            //Pido los JSON al servidor
            loadGeneral();
            loadNocturna();
            loadVehiculos();
<<<<<<< HEAD
			loadNocturna();
=======
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
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
    $("#tablan").show();
    $("#medianocturna").show();
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
<<<<<<< HEAD
        $("#tablaNocturna").hide();
        $("#tablan").hide();
        $("#medianocturna").hide();
=======
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
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
function loadGeneral() {
<<<<<<< HEAD
=======
//Prueba ajax
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
    $.ajax(
    {
        type        : "GET",
        url         : "http://www.iniris.es/luz/general",
        crossDomain : true,
        beforeSend  : function()
        {
<<<<<<< HEAD
		$("#log").html("");
		$("#error").hide();
		$("#cargando").html("<div id='cargando'><div id='imagencargando'><img src='img/loading.gif'/></div><h1>Cargando...<br>Por favor espere</h1></div>");
		$("#cargando").show();
		$("#tablag").hide();
=======
            $("#log").html("");
            $("#error").hide();
            $("#cargando").html("<div id='cargando'><div id='imagencargando'><img src='img/loading.gif'/></div><h1>Cargando...<br>Por favor espere</h1></div>");
            $("#cargando").show();
            $("#tablag").hide();
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
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
<<<<<<< HEAD
			auxa = $("#tablag").html();
=======
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
        },
        error       : function(){
            $("#error").show();
            $("#log").html("error");
        }
    });
// FIN AJAX
};
function loadNocturna() {
    $.ajax(
    {
        type        : "GET",
        url         : "http://www.iniris.es/luz/nocturna",
        crossDomain : true,
<<<<<<< HEAD
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
=======
        beforeSend  : function(){
            $("#log").html("");
            $("#error").hide();
            $("#cargando").html("<div id='cargando'><div id='imagencargando'><img src='img/loading.gif'/></div><h1>Cargando...<br>Por favor espere</h1></div>");
            $("#cargando").show();
        },
        complete    : function(){$("#cargando").html("");$("#cargando").hide();},                
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
        dataType    : 'json',
        success     : function(respuestan)
        {
            $.each(respuestan, function (key, valn)
            {
<<<<<<< HEAD
                for (var i = 0; i < 50 ; i++) {
                    alert(key+" "+valn[i]);
                };
                for (i = 0; i < 24; i++)
                {

=======
                for (i = 0; i < 24; i++) 
                {
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
                    originalnocturna = valn[i];
                    noct = originalnocturna.substr(2, 6);
                    $("#nocturna" + (i + 1)).html("<div align='center' class='preciohora' id='preciohoran" + noct + "'>Precio intermedio</div><br><div>" + originalnocturna + " &euro; / kWh </div>");
                };
<<<<<<< HEAD
                for (i= 24; i < 25; i++)
                {
=======
                for (i= 24; i < 25; i++){
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
                    originalnocturna = valn[i];
                    $("#medianocturna").html("Fecha: "+fecha+"<br>Precio medio: "+originalnocturna+" &euro;");
                };
                reverson = valn.sort();
<<<<<<< HEAD
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
=======
                for (var j = 0; j < 24; j++) {
                    vueltan = reverson[j];
                    noctaux = vueltan.substr(2, 6);
                    if (j < 8) {
                        $("#preciohoran"+noctaux).html("Precio más barato");
                        $("#preciohoran"+noctaux).css("background-color", "green");
                    } else{
                        if (j < 16) {
                        } else{
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
                            $("#preciohoran"+noctaux).html("Precio más caro");
                            $("#preciohoran"+noctaux).css("background-color", "red");
                        };
                    };
                };
            });
<<<<<<< HEAD
            $("#tablan").show();
            $("#medianocturna").show();
            $("#error").hide();
			auxb = $("#tablaNocturna").html();
        },
        error       : function()
        {
=======
            $("#medianocturna").show();
            $("#tablan").show();
            $("#error").hide();
        },
        error       : function(){
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
            $("#error").show();
            $("#log").html("error");
        }
    });
// FIN AJAX
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
<<<<<<< HEAD
        complete    : function(){
            $("#cargando").html("");
            $("#cargando").hide();
        },                
=======
        complete    : function(){$("#cargando").html("");$("#cargando").hide();},                
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
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
<<<<<<< HEAD
            $("#tablaNocturna").show();
=======
>>>>>>> f55958bd179ae273b9c66137b0474e112b2498bc
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
element = document.getElementById('cuerpo');
           
hammertime = Hammer(element).on("dragleft", function(event) {
    contador = $("#oculto").html();
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
});
hammertime = Hammer(element).on("dragright", function(event) {
    contador = $("#oculto").html();
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
});