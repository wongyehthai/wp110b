/*寫一個程式把矩陣轉置。
範例：transpose([[1,2,3], [3,2,1]]) => [[1,3], [2,2], [3,1]]*/
var list = []
function transpose(list) {
    var newlist = [];
    for (var i = 0; i < list[0].length; i++) {
        newlist[i] = [];
        for (var j = 0; j < list.length; j++) {
            newlist[i][j] = list[j][i];
        }
    }
    return newlist;
}

console.log('transpose([[18,97,74], [4,2,7]]) =>', transpose([[18, 97, 74], [4, 2, 7]]))
console.log('transpose([[1,3,5,7], [2,4,6,8]]) =>', transpose([[1, 3, 5, 7], [2, 4, 6, 8]]))
console.log('transpose([[1,3,5,7], [2,4,6,8],[10,11,12,13]]) =>', transpose([[1, 3, 5, 7], [2, 4, 6, 8], [10, 11, 12, 13]]))



