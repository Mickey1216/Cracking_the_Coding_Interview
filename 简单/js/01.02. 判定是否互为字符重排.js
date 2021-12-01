"use strict";
/**
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 */
function CheckPermutation(s1, s2) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < s1.length; i++) {
        arr1[i] = s1[i];
    }
    for (let i = 0; i < s2.length; i++) {
        arr2[i] = s2[i];
    }
    if (arr1.sort().join() === arr2.sort().join()) {
        return true;
    }
    else {
        return false;
    }
}
console.log(CheckPermutation("asvnpzurz", "urzsapzvn"));
