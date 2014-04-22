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
		$contador = 0;
		$i=0;
		while ($i < strlen($page) && contador < 73) {
			if ($page[$i] == ",") {
				$numero = $page[($i-1)].$page[$i].$page[($i+1)].$page[($i+2)].$page[($i+3)].$page[($i+4)].$page[($i+5)];
				//El precio es el tocho largo de arriba
				$contador++; // Sumo el contador
				if($contador%3 == 0){} //Si es divisible entre 3 es de la Tarifa de vehículos eléctricos
				else
				{
					if ($contador%2 == 0) {} // Si es divisible entre 2 es de la tarifa nocturna
					else{
						array_push($general, $numero);//Es de la tarifa General.
					} 
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
		$contador = 0;
		$i=0;
		while ($i < strlen($page) && contador < 73) {
			if ($page[$i] == ",") {
				$numero = $page[($i-1)].$page[$i].$page[($i+1)].$page[($i+2)].$page[($i+3)].$page[($i+4)].$page[($i+5)];
				//El precio es el tocho largo de arriba
				$contador++; // Sumo el contador
				if($contador%3 == 0){} //Si es divisible entre 3 es de la Tarifa de vehículos eléctricos
				else
				{
					if ($contador%2 == 0) {
						array_push($nocturna, $numero);//Es de la tarifa General.
					} 
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
		$contador = 0;
		$i=0;
		while ($i < strlen($page) && contador < 73) {
			if ($page[$i] == ",") {
				$numero = $page[($i-1)].$page[$i].$page[($i+1)].$page[($i+2)].$page[($i+3)].$page[($i+4)].$page[($i+5)];
				//El precio es el tocho largo de arriba
				$contador++; // Sumo el contador
				if($contador%3 == 0){
					array_push($vehiculo, $numero);//Es de la tarifa General.
				} //Si es divisible entre 3 es de la Tarifa de vehículos eléctricos					
			}
			$i++;
		}
		echo json_encode(array('vehiculo' => $vehiculo));
	}
?>