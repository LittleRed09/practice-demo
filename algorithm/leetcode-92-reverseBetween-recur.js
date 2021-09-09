/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(head.next === null){
        return head;
    }
    let last = reverse(head,left-1,right-1);
    if(left > 1 || right < 1){
        // 头节点不需要翻转
        head.next = last
        return head
    } else {
        head.next.next = head;
        head.next = null; 
        return last;
    }
};