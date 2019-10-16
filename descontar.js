/*Primero creamos la funcion que se va a repetir varias vecs, descontar dinero*/
function descontarDinero(dinero){
    if(saldoCuenta >= dinero){
      saldoCuenta -= dinero;
    }else{
      saldoCuenta = 0;
      alert("Te has quedado sin dinero en la cuenta");
    }
  };
  
//luego las funciones que necesitamos segun la pregunta
  function comprarMateriaPrima(){
    var precio = prompt("Ingrese costo de materia prima");
    descontarDinero(precio);
  };

  function pagarSueldo(){
    var sueldo = prompt("Ingrese el sueldo a pagar");
    descontarDinero(sueldo);
  };

  function pagarTraslado(){
    var precio = prompt("Ingrese el costo del traslado");
    descontarDinero(precio);
  };