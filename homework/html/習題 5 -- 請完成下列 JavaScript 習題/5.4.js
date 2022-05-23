/*請將 a 到 b 之間無法被 3, 5, 7 整除的數字放到陣列中？
範例： filter357(5,10) = [8]
範例： filter357(5,15) = [8,11,13]*/
function filter357(x, y) {
    var list = [];
    for (var i = x; i <= y; i++) {
        if ((i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0)) list.push(i);
    }
    return list;
}
var n = parseInt(Deno.args[0]), g = parseInt(Deno.args[1])
console.log('filter357(', n, ',', g, ')=', filter357(n, g))