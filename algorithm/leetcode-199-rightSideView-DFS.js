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
    const result = []
    dfs(0)
    return result;

    function dfs(root, depth){
        if(root === null){
            return 
        }

        if(!result[depth]){
            result[depth] = root.val;
        }
        dfs(root.right, depth+1)
        dfs(root.left, depth+1)
    }
};