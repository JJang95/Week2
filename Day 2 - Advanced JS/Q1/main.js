function add2(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

//test_case

console.log(add2(2)(3)(4)); //9
console.log(add2(12)(17)(6)); //35
console.log(add2(7)(11)(8)); //26


