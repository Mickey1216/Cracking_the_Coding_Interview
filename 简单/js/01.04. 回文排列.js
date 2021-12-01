"use strict";
/**
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。
回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。
回文串不一定是字典当中的单词。
 */
function canPermutePalindrome(s) {
    let alphaMaps = {}; //对象 用于统计字符串中每个字符出现的个数:如{'a':1,'b':1...}
    //统计每个字符出现的次数
    for (let i = 0; i < s.length; i++) {
        if (alphaMaps.hasOwnProperty(s[i])) {
            alphaMaps[s[i]] += 1;
        }
        else {
            alphaMaps[s[i]] = 1;
        }
    }
    //特殊情况，如：aaa
    let keys = Object.keys(alphaMaps);
    if (keys.length == 1)
        return true;
    let oddNums = 0;
    keys.forEach((key) => {
        oddNums += alphaMaps[key] % 2 ? 1 : 0;
    });
    return oddNums > 1 ? false : true;
}
console.log(canPermutePalindrome('aaabbb'));
