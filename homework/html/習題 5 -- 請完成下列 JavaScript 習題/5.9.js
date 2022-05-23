/*請用遞迴寫一個函數印出費氏數列的第 n 個
範例： f(7) => 13
用文字来说，就是斐波那契数列由0和1开始，之后的斐波那契数就是由之前的两数相加而得出。首几个斐波那契数是：
1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987...
特别指出：0不是第一项，而是第零项。
*/
function Fibonacci(n) {
    var ans = 0;
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return ans = Fibonacci(n - 1) + Fibonacci(n - 2);
    /*其本身也是重複的*/
}
var n = parseInt(Deno.args);
console.log('Fibonacci(', n, ')=>', Fibonacci(n));