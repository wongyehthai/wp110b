function Prime(n) {
    {

        var primea = 0;
        for (var i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                primea++;
                break;
            }
        }

        if (primea == 0 && n != 1) { return 'true' }
        else return 'false'


    }
}
var n = parseInt(Deno.args[0])
console.log('isPrime(', n, ')=>', Prime(n))
/*請寫一個函數檢查某數是否為質數？ 範例： isPrime(17) => true*/