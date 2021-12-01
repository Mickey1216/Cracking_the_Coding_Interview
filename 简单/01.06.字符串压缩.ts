/**
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。
你可以假设字符串中只包含大小写英文字母（a至z）。
 */

function compressString(S: string): string {
    let res:string = ''
    let alpha:string = ''
    let count:number = 0
    
    alpha = S[0]
    count = 1
    for(let i:number=1;i<S.length;i++){
        if(alpha === S[i]){
            count++
        }else{
            res += alpha + count.toString()
            alpha = S[i]
            count = 1   
        }
    }

    res += alpha + count.toString()

    return res.length >= S.length ? S : res
    
}

console.log(compressString('aabcccccaaa'));
console.log(compressString('abbccd'));

