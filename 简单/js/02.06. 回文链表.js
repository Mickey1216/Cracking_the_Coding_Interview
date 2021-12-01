"use strict";
/**
编写一个函数，检查输入的链表是否是回文的。

示例 1：
输入： 1->2
输出： false
示例 2：
输入： 1->2->2->1
输出： true
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function isPalindrome(head) {
    //双指针+数组
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = list.length - 1; i < j; ++i, --j) {
        if (list[i] !== list[j])
            return false;
    }
    return true;
}
