"use strict";
/**
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
不占用额外内存空间能否做到？  那就只有在下标做手脚了！
示例:
给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
 */
//方法1
function rotate(matrix) {
    //定义一个二维数组并初始化
    var T = new Array();
    for (var i = 0; i < matrix.length; i++) {
        T[i] = [];
    }
    //反转matrix
    var temp = matrix.reverse();
    //矩阵转置操作
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            T[i][j] = temp[j][i];
        }
    }
    console.log(T);
}
rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
//方法2
// function rotate(matrix: number[][]): void{
//   let rowLen:number = matrix.length
//   let colLen:number = matrix[0].length
//   let tmpMatrix:number[][] = []
//   for(let i = 0; i < colLen; i++)
//     tmpMatrix[i] = []
//   for(let i = 0; i < colLen; i++)
//     for(let j = 0; j < rowLen; j++){
//       tmpMatrix[i][j] = matrix[rowLen - j - 1][i]
//     }
//   matrix = tmpMatrix
//   console.log(matrix)
// }
