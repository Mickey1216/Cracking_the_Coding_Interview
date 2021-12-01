"use strict";
/**
字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。
给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 */
function oneEditAway(first, second) {
    //只需要0次编辑
    if (first === second)
        return true;
    //只需一次编辑的情况
    //替换
    if (first.length === second.length) {
        var diff_count = 0;
        for (var i = 0; i < first.length; i++) {
            diff_count += first[i] === second[i] ? 0 : 1;
            if (diff_count > 1)
                return false;
        }
        return true;
    }
    else {
        if (Math.abs(first.length - second.length) > 1)
            return false;
        else {
            //只能是长度相差1的情况
            if (first.length < second.length) {
                var tmp = first;
                first = second;
                second = tmp;
            }
            var hasDeletePrivilege = true;
            for (var i = 0, j = 0; i < first.length && j < second.length; i++, j++) {
                if (first[i] !== second[j]) {
                    if (hasDeletePrivilege) {
                        hasDeletePrivilege = false;
                        if (first[++i] != second[j])
                            return false;
                    }
                    else
                        return false;
                }
            }
        }
    }
    return true;
}
console.log(oneEditAway("pale", "pale"));
