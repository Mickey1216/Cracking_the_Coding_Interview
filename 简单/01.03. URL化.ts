/**
URL化。编写一种方法，将字符串中的空格全部替换为%20。
假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。
 */

function replaceSpaces(S: string, length: number): string {
    let res: string = ""

    for (let i = 0; i < length && i < S.length; i++) {
        res += S[i] === " " ? "%20" : S[i]
    }

    return res
}
 
console.log(replaceSpaces("Mr John Smith    ", 13));

