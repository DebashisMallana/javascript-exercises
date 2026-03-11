const repeatString = function(s,n) {
    if (n<0) return "Error";
    else
    {
        let str="";
        for(let i=0;i<n;i++)
            str=str+s;
        return str;

    }

};

// Do not edit below this line
module.exports = repeatString;
