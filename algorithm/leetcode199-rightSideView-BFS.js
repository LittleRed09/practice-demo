/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    let queue = [root]
    const result = []
    let layer = []

    while(queue.length > 0){
        const node = queue.shift()
        if(node === null){
            continue;
        }
        if(node.left){
            layer.push(node.left)
        }
        if(node.right){
            layer.push(node.right)
        }   
        if(queue.length === 0){
            result.push(node.val)
            queue = layer;
            layer = []
        }
    }

    return result;
};