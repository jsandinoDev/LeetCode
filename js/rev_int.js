/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let arr = x.toString().split('').reverse();
    let tempchar = '';

    
    arr.forEach((e,i) => {
        if (e == '-' || e == '+' || e == '\\'|| e == '%' || e == '*') {
            tempchar = e;
            arr.pop(e);
        }
    });


    arr.forEach((e,i) => {
        if (arr[i] == '0' && arr[i + 1] != '0'  || arr[i+1] == '0') {
            arr.splice(i, 1);
        }
    });

    arr.unshift(tempchar)


    

    console.log(arr)
    
};



reverse(-12300);