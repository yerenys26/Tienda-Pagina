dejar  productos  =  [ ] ;
sea  total  =  0 ;

función  agregar ( producto ,  precio )  {
	consola . log ( producto ,  precio ) ;
	productos . empujar ( producto ) ;
	total  =  total  +  precio ;
	documento . getElementById ( "pago" ) . innerHTML  =  `Pagar $ $ { total } `
}

function  pay ( )  {
	ventana . alert ( productos . join ( ", \ n" ) ) ;
}