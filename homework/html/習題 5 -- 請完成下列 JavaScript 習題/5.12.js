/*(物件導向) 請擴充上一題，加入 add, sub 兩個函數
範例： var r1 = new Ratio(1,3), r2 = new Ratio(2,4); var r3 = r1.add(r2); console.log(r3.toString()); 會印出 10/12*/
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
    add(ratio2) {
        return new Ratio(this.a * ratio2.b + ratio2.a * this.b, this.b * ratio2.b)
    }
    sub(ratio2) {
        return new Ratio(this.a * ratio2.b - ratio2.a * this.b, this.b * ratio2.b)
    }
}
var ratio1 = new Ratio(1, 6), ratio2 = new Ratio(2, 1), ratio4 = new Ratio(1, -7);
var ratio3 = ratio1.add(ratio2);
console.log(ratio1.toString(), '+', ratio2.toString(), '=', ratio3.toString());
var ratio3 = ratio1.sub(ratio2);
console.log(ratio1.toString(), '-', ratio2.toString(), '=', ratio3.toString());
var ratio3 = ratio1.add(ratio4);
console.log(ratio1.toString(), '+', ratio4.toString(), '=', ratio3.toString());