const repeatString = function(s, num) {
    if(num < 0) return "ERROR";
    if(num == 0) return "";
    let str = "";
    for(let i = 0; i < num; i++){
        str += s;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
