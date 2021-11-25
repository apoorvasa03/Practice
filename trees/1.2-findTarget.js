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


function breathFirstSeach(root, target){
    if(root === null) return false
    let queue = [root];

    while(queue.length > 0){
        let current = queue.shift()
        if(current === target) return true
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right)
    }

    return false;
}


function depthFirstSearch(root, target){
    if(root === null) return false;

    if(root === target) return true;
    return depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target)
}

console.log(breathFirstSeach(a, e))