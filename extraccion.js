var tope = 1000;
function extraccion(num1){
    if(num1 < tope){
         tope -= num1;
        console.log(num1);
        console.log ("Resto $"+ tope);
    }else{
        console.log("0")
        console.log("No queda más dinero para extraer");
    };
};