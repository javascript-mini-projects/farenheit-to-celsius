let tempt = (function(){
    let farenheitValue = document.querySelector('#myInput').value;

    function calculate(){

        let celsiusValue = Math.floor((farenheitValue - 32) * 5/9);
        return celsiusValue;

    }

    function printData(){
        let value = calculate();

        let spanCelsius = document.querySelector('#js-celsius');

        console.log(spanCelsius)

        spanCelsius.textContent = "Celsius: " + value;

    }

    return {
        printData

    }


});

let btnTemperature = document.querySelector('#btnTemperature');

btnTemperature.addEventListener('click', function(){
    tempt().printData()
});

