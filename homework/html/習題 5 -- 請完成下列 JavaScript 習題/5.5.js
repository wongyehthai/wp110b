/*請算出某陣列的平均值？
範例： mean([1,2,3,4,5]) => 3*/
var list = [];
list = Deno.args;
function mean(list) {
    var ans = 0;
    for (var i = 0; i < list.length; i++) {
        var change = parseInt(list[i]);
        ans += change;
    }
    return ans / list.length;

}
console.log('數字總量=', list.length);
console.log('mean(', list, ')=>', mean(list));
console.log(typeof list[2]);
console.log(Number.isInteger(list[2]));