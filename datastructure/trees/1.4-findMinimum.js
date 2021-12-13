class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(5)
let b = new Node(11)
let c = new Node(3)
let d = new Node(4)
let e = new Node(15)
let f = new Node(12)


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/** 
 * breath first
 * time - o(n^2)   space - o(n)
*/
function findMinimun(root){
    let minimun = Infinity;
    let queue = [root];

    while(queue.length > 0){
        let current = queue.shift(); // shift itself use o(n) time
        if(minimun > current.data) minimun = current.data;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right)
    }

    return minimun
}


/** 
 * depth first
 * time - o(n)   space - o(n)
*/

function findMinimunValue(root){
    let minimun = Infinity
    let stack = [root];
    
    while(stack.length > 0){
        let current = stack.pop();
        if(current.data < minimun) minimun = current.data;
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }

    return minimun
}


function findMinimunRecursive(root){
    if(root === null) return Infinity
    let leftMin = findMinimun(root.left);
    let rightMin = findMinimun(root.right);
    return Math.min(root.data, leftMin, rightMin)
}

console.log(findMinimunRecursive(a))