const getUser = (input: string | null) =>{
    if(input){
        console.log("From DB: ", input);
    }else{
        console.log("No user found");
    }
}


getUser("Akash Riaz");
getUser(null);


const discountCalculator = (input: unknown ) =>{
    if(typeof input === "number"){
        console.log("Discount: ", input * 0.1);
    }else if(typeof input === "string"){
        const parsed = parseFloat(input);
        if(!isNaN(parsed)){
            console.log("Discount: ", parsed * 0.1);
        }
    }else{
        console.log("Invalid input for discount calculation");
    }
}