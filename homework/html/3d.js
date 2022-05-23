class Vector {
    constructor(array) {
        this.x = array;
    }

    length() {
        let ans = 0
        for (let x = 0; x < this.x.length; x++) {
            ans += this.x[x] * this.x[x];
        }
        return Math.sqrt(ans);
    }

    neg() {
        let n = new Vector([]);
        for (let x = 0; x < this.x.length; x++) {
            n.x.push(-this.x[x]);
        }
        return n;
    }

    add(p2) {
        let n = new Vector([])
        for (let x = 0; x < this.x.length; x++) {
            n.x.push(this.x[x] + p2.x[x])
        }
        return n;
    }

    sub(p2) {
        for (let x = 0; x < this.x.length; x++) {
            return this.add(p2.neg())
        }
    }

    dot(p2) {
        let n = 0
        for (let x = 0; x < this.x.length; x++) {
            n = n + this.x[x] * p2.x[x];
        } return n;
    }

    distance(p2) {
        return this.sub(p2).length()
    }

    toString() {
        return this.x.toString()

    }
}
let p = new Vector([2, 3,4]), p2 = new Vector([1, 2,5])
console.log(p)
console.log(p.toString())
console.log(p + '')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2).toString())
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))
console.log(p2.neg())