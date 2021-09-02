let strategy = {
    S: function(salary){
        return salary * 3;
    },
    A: function(salary){
        return salary * 2;
    },
    B: function(salary){
        return salary * 1;
    }
}

function calculateMoney(salary, level) {
    return strategy[level](salary)
}

console.log(calculateMoney(1000, 'S'))
console.log(calculateMoney(2000, 'A'))
