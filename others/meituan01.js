function TreeNode(val){
    this.val = val
    this.left = null
    this.right = null
}

function test(n){
    if(n === 1){
        return 2;
    }
    let result = 0;

    recur(new TreeNode('a'), 1, 'ca')
    recur(new TreeNode('b'), 1, 'cb')

    return result % 998244353

    function recur(root, depth, str){
        if(str + 'a' !== 'aba'){
            if(depth === n-1) {
                result++;
            }else {
                root.left = new TreeNode('a')
                recur(root.left, depth+1, str.slice(1)+'a')
            }
        }
        if(str + 'b' !== 'bab'){
            if(depth === n-1){
                result++
            }else {
                root.right = new TreeNode('b')
                recur(root.right, depth+1, str.slice(1)+'b')
            }
        }

    }
}
//console.log(test(1))
console.log('2',test(2))
console.log('3',test(3))
console.log('4',test(4))
console.log(test(10))