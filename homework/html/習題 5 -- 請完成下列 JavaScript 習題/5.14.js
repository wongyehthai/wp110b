/*(物件導向) 請擴充上一題，加入 reduce 函數 (約分）
    範例： var r1 = new Ratio(6,9); console.log(r1.toString()); 會印出 2/3*/
/*(物件導向) 請擴充上一題，加入 mul, div 兩個函數
範例： var r1 = new Ratio(1,3), r2 = new Ratio(2,4); var r3 = r1.mul(r2); console.log(r3.toString()); 會印出 2/12*/
function gcd(a,b){
    if(a%b==0) return Math.abs(b);//math.abs絕對值
    else return gcd(b,a%b);
}
class Ratio {
    constructor(a, b) {
        this.a = a;
        this.b = b;

    }
    gcd(){
        if(this.a%this.b==0) return Math.abs(this.b);//math.abs絕對值
        else return this.gcd(this.b,this.a%this.b);
    }
    toString() {
        if (this.a == 0&&this.a==-0) return 0;
        else if (this.b == 1) return this.a;
        else if(this.b==-1) return -1*this.a;
        else if(this.b < 0) return -1 * this.a + '/' + -1 * this.b;
        else if (this.b == 0) return NaN;
        else return this.a + '/' + this.b;
    }
    add(ratio2) {
        return new Ratio(this.a * ratio2.b + ratio2.a * this.b, this.b * ratio2.b)
    }
    sub(ratio2) {
        return new Ratio(this.a * ratio2.b - ratio2.a * this.b, this.b * ratio2.b)
    }
    mul(ratio2) {
        return new Ratio(this.a * ratio2.a, this.b * ratio2.b)
    }
    div(ratio2) {
        return new Ratio(this.a * ratio2.b, this.b * ratio2.a)
    }
    reduce() {
        return new Ratio(this.a/gcd(this.a,this.b), this.b/gcd(this.a,this.b));
    }

}
var ratio1 = new Ratio(-6, -9), ratio2 = new Ratio(-4, 4);
var ratio3 = ratio1.reduce();
var ratio1 = new Ratio(-6, -9), ratio2 = new Ratio(-4, 4);
console.log(ratio1.toString(), '=', ratio3.toString());
var ratio3 = ratio2.reduce();
var ratio1 = new Ratio(-6, -9), ratio2 = new Ratio(-4, 4);
console.log(ratio2.toString(), '=', ratio3.toString());
var ratio4 = new Ratio(0, -9),ratio5 = new Ratio(100,-10);
var ratio3 = ratio4.reduce();
var ratio4 = new Ratio(0, -9),ratio5 = new Ratio(100,-10);
console.log('0/-9', '=', ratio3.toString());
var ratio3 = ratio5.reduce();
var ratio4 = new Ratio(0, -9),ratio5 = new Ratio(100,-10);
console.log(ratio5.toString(), '=', ratio3.toString());