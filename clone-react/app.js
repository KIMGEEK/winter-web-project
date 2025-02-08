const calculator = {
    plus: function(a, b) {
        return(a+b);
    },
    minus: function(a, b) {
        return(a-b);
    },
    multiply: function(a, b) {
        return(a*b);
    },
    divide: function(a, b) {
        return(a/b);
    },
    mod: function(a, b) {
        return(a%b);
    },
    pow: function(a, b) {
        return(a**b);
    },
}

const powResult = calculator.pow(2, 3);
const divideResult = calculator.divide(powResult , 2);
const modResult = calculator.mod(divideResult, 3);

console.log(powResult);