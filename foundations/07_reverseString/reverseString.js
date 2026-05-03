const reverseString = function(string) {
    let newString = '';

    let i = string.length - 1; 
    while(i >= 0){
        newString += string[i--];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
