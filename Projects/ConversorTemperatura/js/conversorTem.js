function convertTemperature() {
    var val = document.getElementById('input_value');
    var result = document.getElementById('result');
    var output = document.getElementById('output');
    var input = document.getElementById('input');

    val.addEventListener('keyup', convertTemperature);
    input.addEventListener('change', convertTemperature);
    output.addEventListener('change',convertTemperature);

    var inputValue = input.value;
    var outputValue = output.value;

    //conversão para celsius

    if(inputValue === "celsius" && outputValue === "fahrenheit"){
        result.innerHTML = Number((val.value)*9/5)+32;
    } else if(inputValue === "celsius" && outputValue === "kelvin"){
        result.innerHTML = Number(val.value)+ 273.15;
    }else if(inputValue === "celsius" && outputValue === "celsius"){
        result.innerHTML = val.value
    }

    //conversão para fahrenheit

    if(inputValue === "fahrenheit" && outputValue === "celsius"){
        result.innerHTML = Number((val.value -32) /1.8);
    } else if(inputValue === "fahrenheit" && outputValue === "kelvin"){
        result.innerHTML = Number((val.value - 32) * 5 / 9) + 273.15;
    }else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
        result.innerHTML = val.value
    }

      //conversão para kelvin

      if(inputValue === "kelvin" && outputValue === "celsius"){
        result.innerHTML = Number(val.value) - 273.15;
    } else if(inputValue === "kelvin" && outputValue === "fahrenheit"){
        result.innerHTML = Number((val.value - 273.15)*9/5)+32;
    }else if(inputValue === "kelvin" && outputValue === "kelvin"){
        result.innerHTML = val.value
    }
}

function reset(){
    var result = document.getElementById('result');
    result.innerHTML=" ";
}
  