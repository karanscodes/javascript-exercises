const reverseString = function(str) {
    if(str.length == 0) return "";
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
