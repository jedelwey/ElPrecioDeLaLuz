<?php
	/**
		Pongo esta cabecera para poder realizar peticiones AJAX sin que de
	**/
	header('Access-Control-Allow-Origin: *');
	/** 
		Obtener la fecha de hoy o mañana si es las 21 horas.
	**/
	
		function lafecha(){
			$fechahoy = date("Ymd"); //Fecha de hoy
			$fechamañana = date("Ymd", strtotime("+1 day")); //fecha de mañana
			$horaActual = date("H"); //hora actual
			if ( $horaActual > 21) { $fecha = $fechamañana; } // Pongo como fecha mañana
			else { $fecha = $fechahoy; } //Pongo como fecha hoy
			return $fecha;
		}
	/**
		Extraccion de los datos de la web oficial
	**/
	function micurl(){
		$fecha = lafecha();
		//URL para obtener el precio de la luz de los tres sectores. Importante la fecha. Para eso la calculo arriba.
		$url="http://www.esios.ree.es/Solicitar?fileName=PVPC_DD_$fecha&fileType=html&idioma=es";
		//creo el curl con el cual pido el html que trae los precios.
		$c = curl_init($url); //Inicio el curl
		curl_setopt($c, CURLOPT_RETURNTRANSFER, true); //Establezco las opciones
		$page = curl_exec($c); //Ejecuto el curl donde guardo el curl en la variable Page. Es decir, guardo toda la web en esta variable
		curl_close($c); // Cierro el curl.
		return $page;
	}
	/**
		Creo el JSON de la Tárifa General
	**/	
	function general(){
		$page = micurl();
		$general = array(); //Precios de la tarifa general 
		$contador = 1;
		$i=0;
		while ($i < strlen($page)) {
			if ($page[$i] == ",") {
				$numero = $page[($i-1)].$page[$i].$page[($i+1)].$page[($i+2)].$page[($i+3)].$page[($i+4)].$page[($i+5)];
				//El precio es el tocho largo de arriba
				$contador++; // Sumo el contador
				
				if($contador==2 || $contador==5 || $contador==8 || $contador==11 || $contador==14 || $contador==17 || $contador==20 || $contador==23 || $contador==26 || $contador==29 || $contador==32 || $contador==35 || $contador==38 || $contador==41 || $contador==44
              || $contador==47 || $contador==50 || $contador==53 || $contador==56 || $contador==59 || $contador==62 || $contador==65 || $contador==68 || $contador==71 || $contador==74)	
				{
					array_push($general, $numero);//Es de la tarifa General.
				}
			}	
			$i++;
		}
		echo json_encode(array('general' => $general));
	}
	/**
		Creo el JSON de la Tárifa Nocturna
	**/	
	function nocturna(){
		$page = micurl();
		$nocturna = array(); //Precios de la tarifa general 
		$contador = 1;
		$i=0;
		while ($i < strlen($page)) {
			if ($page[$i] == ",") {
				$numero = $page[($i-1)].$page[$i].$page[($i+1)].$page[($i+2)].$page[($i+3)].$page[($i+4)].$page[($i+5)];
				//El precio es el tocho largo de arriba
				$contador++; // Sumo el contador
				if($contador==3 || $contador==6 || $contador==9 || $contador==12 || $contador==15 || $contador==18 || $contador==21 || $contador==24 || $contador==27 || $contador==30 || $contador==33 || $contador==36 || $contador==39 || $contador==42 || $contador==45
              || $contador==48 || $contador==51 || $contador==54 || $contador==57 || $contador==60 || $contador==63 || $contador==66 || $contador==69 || $contador==72 || $contador==75)	
              	{ //Si es divisible entre 3 es de la Tarifa de vehículos eléctricos
					array_push($nocturna, $numero);//Es de la tarifa General.
				}
			}
			$i++;
		}
		echo json_encode(array('nocturna' => $nocturna));
	}
/**
	Creo el JSON de la Tarifa Vehículos eléctricos
**/
	function vehiculo(){
		$page = micurl();
		$vehiculo = array(); //Precios de la tarifa general 
		$contador = 1;
		$i=0;
		while ($i < strlen($page)) {
			if ($page[$i] == ",") {
				$numero = $page[($i-1)].$page[$i].$page[($i+1)].$page[($i+2)].$page[($i+3)].$page[($i+4)].$page[($i+5)];
				//El precio es el tocho largo de arriba
				$contador++; // Sumo el contador
				if( $contador==1 || $contador==4 || $contador==7 || $contador==10 || $contador==13 || $contador==16 || $contador==19 || $contador==22 || $contador==25 || $contador==28 || $contador==31 || $contador==34 || $contador==37 || $contador==40 || $contador==43
              			  || $contador==46 || $contador== 49 || $contador==52 || $contador==55 || $contador==58 || $contador==61 || $contador==64 || $contador==67 || $contador==70 || $contador==73 || $contador==76)
				{
					array_push($vehiculo, $numero);//Es de la tarifa General.
				} //Si es divisible entre 3 es de la Tarifa de vehículos eléctricos					
			}
			$i++;
		}
		echo json_encode(array('vehiculo' => $vehiculo));
	}
?>