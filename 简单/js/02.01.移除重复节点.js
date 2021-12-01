"use strict";
/**
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:
 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]

示例2:
 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]

提示：
链表长度在[0, 20000]范围内。
链表元素在[0, 20000]范围内。

进阶：
如果不得使用临时缓冲区，该怎么解决？
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function removeDuplicateNodes(head) {
    if (!head)
        return head;
    const set = new Set();
    set.add(head.val);
    let [pre, cur] = [head, head.next];
    while (cur) {
        if (set.has(cur.val)) {
            pre.next = cur.next; //删除当前节点
        }
        else {
            set.add(cur.val);
            pre = pre.next;
        }
        cur = cur.next;
    }
    return head;
}
