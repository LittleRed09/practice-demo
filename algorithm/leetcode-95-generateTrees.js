
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {

    return generateSubTrees(1, n)

    /**
     * 
     * @param {起始值} start 
     * @param {结束值} end 
     * @return {TreeNode[]}
     */
    function generateSubTrees (start, end) {
        if(start > end){
            return [null]
        }
        if(start === end){
            return [new TreeNode(start)]
        }

        let result = [];
        for(let i=start; i <= end; i++){
            let leftTreeList = generateSubTrees(start, i-1);
            let rightTreeList = generateSubTrees(i+1, end);
            for(let j=0; j < leftTreeList.length; j++){
                for(let k=0;k < rightTreeList.length; k++){
                    let root = new TreeNode(i)
                    root.left = leftTreeList[j]
                    root.right = rightTreeList[k]
                    result.push(root)
                }
            }
        }
        return result;
    }
};
console.log(generateTrees(2))