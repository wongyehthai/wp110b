/*(物件導向) 請寫一個有理數物件，包含 toString() 函數
範例： var r1 = new Ratio(1,3); console.log(r1.toString()); 會印出 1/3*/
class Ratio {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    toString() {
        if (this.a < 0 && this.b < 0) return -1 * this.a + '/' + -1 * this.b;
        else if (this.a > 0 && this.b < 0) return -1 * this.a + '/' + -1 * this.b;
        else if (this.a == 0) return 0;
        else if (this.b == 0) return NaN;
        else return this.a + '/' + this.b;
    }
}
var ratio1 = new Ratio(1, -3), ratio2 = new Ratio(-8, -2);
console.log('var ratio1 = new Ratio(-1,3),ratio2 = new Ratio(-8,-2)\n', 'ratio1.toString()=>', ratio1.toString(), ',', 'ratio1.toString()=>', ratio2.toString());