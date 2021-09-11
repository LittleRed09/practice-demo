
 function ListNode(x){
   this.val = x;
   this.next = null;
 }

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 * 
 * 
 * @param node ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
 function moveNode(node, k) {
    // write code here
    let head = new ListNode();
    head.next = node;
    let pre = head
    let cur = node
    let list2 = new ListNode()
    let cur2 = list2
    while(cur !== null){
        if(cur.val > k){
            cur2.next = cur
            pre.next = cur.next
            cur = cur.next
            cur2 = cur2.next;
            cur2.next = null
        } else {
            pre = pre.next;
            cur = cur.next;
        }
    }
    if(list2.next !== null){
        pre.next = list2.next
    }
    return head.next
}
module.exports = {
    moveNode : moveNode
};


let valueList = [4,20,6,15,8,5]
let node = new ListNode()
let cur = node;
valueList.forEach(val=>{
    cur.next = new ListNode(val)
    cur = cur.next;
})
let result = (moveNode(node.next, 10))
while(result != null){
    console.log(result.val)
    result = result.next
}