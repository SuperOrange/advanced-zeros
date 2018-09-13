module.exports = function getZerosCount(number, base) {
    let resultTotal = Infinity;

    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            let a = 0;

            while (base % i === 0) {
                base /= i;
                a++;
            }

            let result = 0;
            let numberCopy = number;

            while (numberCopy / i > 0) {
                result += Math.floor(numberCopy / i);
                numberCopy = Math.floor(numberCopy / i);
            }
            resultTotal = Math.min(resultTotal, Math.floor(result / a));
        }
    }

    return resultTotal;
};
