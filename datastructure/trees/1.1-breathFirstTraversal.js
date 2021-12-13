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
 * breath first value/ traversal
 * time - o(n)   space - o(n)
 */
function breathFirstValue(root){
    if(root === null) return [];
    let queue = [root];
    let values = [];

    while(queue.length > 0){
        let current = queue.shift();
        values.push(current.data);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right)
    }
    return values
}

console.log(breathFirstValue(a)) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]