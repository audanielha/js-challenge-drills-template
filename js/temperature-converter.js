let celsius = 5;

// Fahrenheit = (Celsius * 9/5) + 32


let celsiusToFahrenheit = (celsius) =>{
    return ((celsius * 9/5) + 32); 
}

let fahrenheitToCelsius = (fahrenheit) =>{
    return ((fahrenheit - 32) * 5/9); 
}


celsiusToFahrenheit()

console.log(celsiusToFahrenheit(celsius))
console.log(fahrenheitToCelsius(celsius))


console.log(`${celsius}°C is equivalent to ${celsiusToFahrenheit(celsius)}°F and ${celsiusToFahrenheit(celsius)}°F is equivalent to ${fahrenheitToCelsius(celsius)}°C`);