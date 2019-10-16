function comprarTckt (num1){
    if(num1 <= 500){
        console.log("Ticket Normal");
    }
    else if (num1 >= 501 && num1 <= 1000 ){
        console.log("Ticket Gold");
    }
    else{
        console.log("Ticket VIP");
    };
};