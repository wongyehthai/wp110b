/*請寫一個函數計算兩矩陣相加？
範例： add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]*/
var list1 = [];
var list2 = [];
function add(list1, list2) {
    var newlist = [];
    for (var i = 0; i < list1.length; i++) {
        newlist[i] = [];
        for (var j = 0; j < list1[0].length; j++) {
            newlist[i][j] = list1[i][j] + list2[i][j];
        }
    } return newlist;
}
console.log('add([[1,2],[3,4]], [[1,1],[1,1]]) =>', add([[1, 2], [3, 4]], [[1, 1], [1, 1]]))
console.log('add([[1,2,3],[4,5,6],[7,8,9]],[[1,1,1],[1,1,1],[1,1,1]]) =>', add([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]]))