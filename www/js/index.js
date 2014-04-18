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
        $(document).ready(function () {
            //Genero las tablas
            var fecha = mifecha();
            //Pido los JSON al servidor
            loadVehiculos();
            loadNocturna();
            loadGeneral();            
            //Creo la entrada por defecto
            $("#oculto").append("general");
            $("#oculto").hide();
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
};
//Pulsar el botón Nocturna
function botonnocturna(){
    $("#cuerpo").animate({ scrollTop: 0 }, 1);
    $("#tablaGeneral").hide();
    $("#tablaNocturna").show();
    $("#tablaVehiculos").hide();
    $("#faq").hide();
    $("#bgneral").css("border-bottom", "2px solid #fff");
    $("#bnocturna").css("border-bottom", "2px solid #f8a23b");
    $("#bvehiculos").css("border-bottom", "2px solid #fff");
    $("#bfaq").css("border-bottom", "2px solid #fff");
    $("#oculto").html("nocturna");
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
};

function mifecha() {
	var meses, diasSemana, hoy, maniana, hora;
    meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    hoy = new Date();
    maniana = hoy.setTime(hoy.getTime() + (24 * 60 * 60 * 1000));
    maniana = new Date(maniana);
    hora = hoy.getHours();
    if (hora < 21) {
        if (hoy.getMonth() < 10) {
            fecha = (hoy.getDate() + "/0" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear());
        } else {
            fecha = (hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear());
        }
    } else {
		if (maniana.getMonth() < 10) {
            fecha = (maniana.getDate() + "/0" + (maniana.getMonth() + 1) + "/" + maniana.getFullYear());
        } else {
            fecha = (maniana.getDate() + "/" + (maniana.getMonth() + 1) + "/" + maniana.getFullYear());
        }
    }
};
//Creo la tabla Tarifa General
function loadGeneral() {
    var hora, acum, copaux, copia, reverso, original, i, j, k, orgaux;
	hora = ["00-01", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24"];
    acum = "<h2 id='mediageneral'></h2>";
    acum = acum + "<table align='center'><thead><th>Hora</th><th>Tarifa General</th></thead><tbody>";
    for (i = 1; i < 25; i++) {
        acum = acum + "<tr>";
        if (i % 2 === 0) {
            acum = acum + "<td id='Ghora" + i + "' class='thoras par'></td>";
            acum = acum + "<td class='tgeneral par'  id='general" + i + "'></td>";
        } else {
            acum = acum + "<td id='Ghora" + i + "' class='thoras impar'></td>";
            acum = acum + "<td class='tgeneral impar'id='general" + i + "'></td>";
        }
        acum = acum + "</tr>";
    };
    acum = acum + "</tbody></table>";
    $("#tablaGeneral").append(acum);
    $("#tablaGeneral").hide();
    //Consigo la hora
    for (i = 0; i < hora.length; i++) {
        $("#Ghora" + (i + 1)).append(hora[i]);
    };
    //fin hora
    //consigo la tarifa general
    $.getJSON("http://www.iniris.es/luz/general", function (general) {
        $.each(general, function (key, val) {
            for (i = 0; i < 24; i++) {
                original = val[i];
                orgaux = original.substr(2, 6);
                $("#general" + (i + 1)).html("<div align='center' class='preciohora' id='preciohora" + orgaux + "'>Precio intermedio</div><br><div>" + original + " &euro; / kWh </div>");
            };
            for (i = 24; i < 25; i++) {
                original = val[i];
                $("#mediageneral").html("Fecha: "+fecha+"<br>Precio medio: "+original+" &euro;");
            };
            reverso = val.sort();
            for (var j = 0; j < 24; j++) {
                copia = reverso[j];
                copaux = copia.substr(2, 6);
                if (j < 8) {
                    $("#preciohora"+copaux).html("Precio más barato");
                    $("#preciohora"+copaux).css("background-color", "green");
                } else{
                    if (j < 16) {
                    } else{
                        $("#preciohora"+copaux).html("Precio más caro");
                        $("#preciohora"+copaux).css("background-color", "red");
                    };
                };
            };
        });
    });
};
//Creo la tabla tarifa nocturna.
function loadNocturna() {
	var hora, acum, copaux, copia, reverso, original, i, j, k, orgaux;
    hora = ["00-01", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24"];
    acum = "<h2 id='medianocturna'></h2>";
    acum = acum + "<table align='center'><thead><th>Hora</th><th>Tarifa Nocturna</th></thead><tbody>";
    for (i = 1; i < 25; i++) {
        acum = acum + "<tr>";
        if (i % 2 === 0) {
            acum = acum + "<td id='Thora" + i + "' class='thoras par'></td>";
            acum = acum + "<td class='tnocturna par' id='nocturna" + i + "' ></td>";
        } else {
            acum = acum + "<td id='Thora" + i + "' class='thoras impar'></td>";
            acum = acum + "<td class='tnocturna impar' id='nocturna" + i + "' ></td>";
        }
        acum = acum + "</tr>";
    };
    acum = acum + "</tbody></table>";
    $("#tablaNocturna").append(acum);
    $("#tablaNocturna").hide();
    //Consigo la hora
    for (i = 0; i < hora.length; i++) {
        $("#Thora" + (i + 1)).append(hora[i]);
    };
    //fin hora
    //consigo la tarifa nocturna
    $.getJSON("http://www.iniris.es/luz/nocturna", function(general) {
        $.each(general, function (key, val){   
            for (i = 0; i < 24; i++) {
                original = val[i];
                orgaux = original.substr(2, 6);
                $("#nocturna" + (i + 1)).html("<div align='center' class='preciohora' id='preciohora" + orgaux + "'>Precio intermedio</div><br><div>" + original + " &euro; / kWh </div>");
            };
            for (i = 24; i < 25; i++) {
                original = val[i];
                $("#medianocturna").html("Fecha: "+fecha+"<br>Precio medio: "+original+" &euro;");
            };
            reverso = val.sort();
            for (var j = 0; j < 24; j++) {
                copia = reverso[j];
                copaux = copia.substr(2, 6);
                if (j < 8) {
                    $("#preciohora"+copaux).html("Precio más barato");
                    $("#preciohora"+copaux).css("background-color", "green");
                } else{
                    if (j < 16) {
                    } else{
                        $("#preciohora"+copaux).html("Precio más caro");
                        $("#preciohora"+copaux).css("background-color", "red");
                    };
                };
            };
        });
    });
};
//Creo la tabla Vehículos
function loadVehiculos() {
    var hora, acum, copaux, copia, reverso, original, i, j, k, orgaux;
	hora = ["00-01", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24"];
    acum = "<h2 id='mediavehiculo'></h2>";
    acum = acum + "<table align='center'><thead><th>Hora</th><th>Tarifa Vehículos Eléctricos</th></thead><tbody>";
    for (i = 1; i < 25; i++) {
        acum = acum + "<tr>";
        if (i % 2 === 0) {    
            acum = acum + "<td id='Vhora" + i + "' class='thoras par'></td>";
            acum = acum + "<td class='tvehiculo par' id='vehiculo" + i + "'></td>";
        } else {
            acum = acum + "<td id='Vhora" + i + "' class='thoras impar'></td>";
            acum = acum + "<td class='tvehiculo impar' id='vehiculo" + i + "'></td>";
        }
        acum = acum + "</tr>";
    };
    acum = acum + "</tbody></table>";
    $("#tablaVehiculos").append(acum);
    $("#tablaVehiculos").hide();
    //Consigo la hora
    for (i = 0; i < hora.length; i++) {
        $("#Vhora" + ( i + 1)).append(hora[i]);
    };
    //fin hora
    //consigo la tarifa de vehiculo electrico
    $.getJSON("http://www.iniris.es/luz/vehiculo", function(general) {
        $.each(general, function (key, val){   
            for (i = 0; i < 24; i++) {
                original = val[i];
                orgaux = original.substr(2, 6);
                $("#vehiculo" + (i + 1)).html("<div align='center' class='preciohora' id='preciohora" + orgaux + "'>Precio intermedio</div><br><div>" + original + " &euro; / kWh </div>");
            };
            for (i = 24; i < 25; i++) {
                original = val[i];
                $("#mediavehiculo").html("Fecha: "+fecha+"<br>Precio medio: "+original+" &euro;");
            };
            reverso = val.sort();
            for (var j = 0; j < 24; j++) {
                copia = reverso[j];
                copaux = copia.substr(2, 6);
                if (j < 8) {
                    $("#preciohora"+copaux).html("Precio más barato");
                    $("#preciohora"+copaux).css("background-color", "green");
                } else{
                    if (j < 16) {
                    } else{
                        $("#preciohora"+copaux).html("Precio más caro");
                        $("#preciohora"+copaux).css("background-color", "red");
                    };
                };
            };
        });
    });
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