class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


/**
 * depth first value/ traversal
 * time - o(n)   space - o(n)
 */
function depthFirstValues(root){
    if(root === null) return []
    let result = []
    let stack = [root]
    while(stack.length > 0){
        let current = stack.pop()
        result.push(current.data)
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left)
    }
    return result
}

/**
 * depth first value/ traversal in recurssive way
 * time - o(n)   space - o(n)
 */
function depthFirstValuesRecurssive(root){
    if(root === null) return [];
    let left = depthFirstValuesRecurssive(root.left);
    let right = depthFirstValuesRecurssive(root.right);
    return [root.data, ...left, ...right]
}



console.log(depthFirstValues(a)) // [ 'a', 'b', 'd', 'e', 'c', 'f' ]
console.log(depthFirstValuesRecurssive(a)) // [ 'a', 'b', 'd', 'e', 'c', 'f' ]




