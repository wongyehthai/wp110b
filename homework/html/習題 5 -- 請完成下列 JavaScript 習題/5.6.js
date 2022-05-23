/*寫一個程式做因數分解。
範例：factor(45) => [3, 3, 5]*/
function factor(n) {
    var list = []
    for (var i = 2; i <= n; i++)
        if (n % i == 0) {
            n = n / i;
            list.push(i);
            i = 2;
        }
    return list;
}
var n = parseInt(Deno.args[0])
console.log('factor(', n, ')=>', factor(n))