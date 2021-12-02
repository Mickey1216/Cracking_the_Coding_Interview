/**
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
题目数据 保证 整个链式结构中不存在环。
注意，函数返回结果后，链表必须 保持其原始结构 。

示例 1：
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let curA = headA,curB = headB,lenA = getListLen(headA),lenB = getListLen(headB)
    //将更长链表保存在headA中
    if(lenA < lenB){
        [curA,curB] = [curB,curA]
        [lenA,lenB] = [lenB,lenA]
    }

    let i = lenA - lenB
    while(i-- > 0){
        curA = curA.next
    }

    while(curA && curA !== curB){
        curA = curA.next
        curB = curB.next
    }

    return curA
};

var getListLen = function(head){
    let len = 0,cur = head
    while(cur){
        len++
        cur = cur.next
    }
    return len 
}
