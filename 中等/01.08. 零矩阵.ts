/**
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
 */

function setZeroes(matrix: number[][]): void {
    let zero_raw:number[] = []
    let zero_cal:number[] = []

    //找出矩阵中0的行标和列标
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(!matrix[i][j]){
                zero_raw.push(i)
                zero_cal.push(j)
            }
        }
    }

    //初始化res
    let res:Array<Array<number>> = []
    for(let i:number=0;i<matrix.length;i++){
        let arr:number[] = []
        for(let j:number=0;j<matrix[i].length;j++){
            arr[j] = 0
        }
        res.push(arr)
    }

    //清0操作
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
           for(let k=0;k<zero_raw.length;k++){
               if(zero_raw[k] === i || zero_cal[k] === j){
                    res[i][j] = 0
                    break
               }else{
                    res[i][j] = matrix[i][j]
               }
           }
        }
    }

    console.log(res)
    
}

setZeroes([[1,1,1],[1,0,1],[1,1,1]])
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
setZeroes([[1,2,0,5,0],[0,2,1,1,2],[4,3,2,0,1]])