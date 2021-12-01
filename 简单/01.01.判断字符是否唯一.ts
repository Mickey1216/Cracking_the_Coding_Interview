/**
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
 */

function isUnique(astr: string): boolean {
    let arr:string[] = new Array(astr.length)
    for(let i:number=0;i<astr.length;i++){
        arr[i] = astr[i]
    }
    const arr_len = arr.length
    let s = new Set(arr) 
    const s_len = s.size
    if (arr_len === s_len) {
        return true;
    }
    else {
        return false;
    }
    
}

console.log(isUnique('leetcode'))
