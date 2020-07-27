
let FarenheitToCelsius = (()=>{

    let calculateFarenheit = (farenheit) => {
        return ((farenheit - 32) * 5/9).toFixed();
    }

    let printCelsius = () => {
        console.log(calculateFarenheit(100));
    }

    return {
        printCelsius
    }

});



FarenheitToCelsius().printCelsius();

