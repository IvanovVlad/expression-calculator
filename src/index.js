function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let result = 0;
    expr = expr.replace(/\s/g, '');
    function findAndCalc(op1, op2, operand) {
        op1 = Number(op1)
        op2 = Number(op2)
        switch (operand) {
            case '+':
                return op1 + op2;
                break;
            case '-':
                return op1 - op2;
                break;
            case '*':
                return op1 * op2;
                break;
            case '/':
                return op1 / op2;
                break;
        }
    }
    let exprArr = expr.split('');
    let operators = ['+', '-', '*', '/']
    for (let i = 0; i < exprArr.length; i++) {
        if (operators.includes(exprArr[i])) {
            if (exprArr[i] == '/' && exprArr[i + 1] == 0) {
                throw "divide by zero";
            }
            else {
                result = findAndCalc(exprArr[i - 1], exprArr[i + 1], exprArr[i]);
            }
        }
    }
    return result;
}
module.exports = {
    expressionCalculator
}