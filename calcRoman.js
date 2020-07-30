const calculator = (string)=> {
    const convertToArabic = (romNumber) =>{
        let romanianNumbers = ['','I','II','III','IV','V','VI','VII','VIII','IX','X']
        let i = 0;
        while (i <= romanianNumbers.length) {
            if (romNumber === romanianNumbers[i]) {
                return i;
            }
            i += 1;
        }
        return 'Error'
    };

    const convertToRomanian = (arabicNumber) => {
        let romanianNumbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']
        let result = '';
        let romanianRowIndex = 0;
        if (arabicNumber <= 0){
            result = result;
        } else if (arabicNumber <= 10){
            result = romanianNumbers[arabicNumber];
        } else {
            romanianRowIndex = Math.floor(arabicNumber/10) + 9;
            result = `${romanianNumbers[romanianRowIndex]}${romanianNumbers[arabicNumber%10]}`
        }
        return result
    };

    const stringParcingToArray = (string) =>{
        let result = [];
        let l = string.length;
        let i = 0 ;
        let a = '';
        let b = '';
        let c = '';
        while ((i < l) && (string[i] !== ' ')){
            a = `${a}${string[i]}`;
            i += 1;
        }
        i += 1;
        while ((i < l) && (string[i] !== ' ')){
            b = `${b}${string[i]}`;
            i += 1;
        }
        i += 1;
        while (i < l) {
            c = `${c}${string[i]}`;
            i += 1;
        }
        result = [a,b,c];
        return result
    };

    const calculateArray = (convertedArray) => {
        if (convertedArray[1] === '+') {
            return (convertedArray[0] + convertedArray[2])
        } else if (convertedArray[1] === '-') {
            return (convertedArray[0] - convertedArray[2])
        } else if (convertedArray[1] === '*') {
            return (convertedArray[0] * convertedArray[2])
        }
        else{
            return Math.floor(convertedArray[0]/convertedArray[2])
        }
    };

    const ckeckIntegrityAndCompute = (convertedString) =>{
        let romanianNumbers = ['I','II','III','IV','V','VI','VII','VIII','IX','X']
        let arabianNumbers = ['1','2','3','4','5','6','7','8','9','10']
        let operations = ['+','-','*','/']
        checkedArray = []
        if (romanianNumbers.includes(convertedString[0]) && romanianNumbers.includes(convertedString[2]) && operations.includes(convertedString[1])) {
            checkedArray[0] = Number(convertToArabic(convertedString[0]));
            checkedArray[1] = convertedString[1];
            checkedArray[2] = Number(convertToArabic(convertedString[2]));
            return convertToRomanian(calculateArray(checkedArray));
        } else if (arabianNumbers.includes(convertedString[0]) && arabianNumbers.includes(convertedString[2]) && operations.includes(convertedString[1])) {
            checkedArray[0] = Number(convertedString[0]);
            checkedArray[1] = convertedString[1];
            checkedArray[2] = Number(convertedString[2]);
            return String(calculateArray(checkedArray));
        }
        else {
            throw 'Error'
        }
    };
    let dataInProcess = stringParcingToArray(string);
    return ckeckIntegrityAndCompute(dataInProcess);
};
alert(calculator('VII + X'));
