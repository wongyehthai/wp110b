/*(函數參數 callback) 請寫一個函數可以做任意函數的定積分
範例： integral((x)=>x*x, 0, 1) => 0.333...*/
function integral(func, lower, upper) {
    var area = 0;
    for (lower; lower < upper; lower += 0.000001) {
        area = area + func(lower) * 0.000001;
    }
    return area;
}
console.log(integral((k) => k * k * k, 0, 1))
console.log(integral((y) => y * y, 0, 1))
console.log(integral((e) => e, 0, 1))
console.log(integral((e) => e, 8, 9))
console.log(integral((e) => Math.pow(e, 1 / 3), 0, 1))