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
let e = new Node(2)
let f = new Node(1)


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


function findMaxPathSum(root){
    if(root === null) return -Infinity
    if(root.left === null && root.right === null) return root.data

    let leftSum = findMaxPathSum(root.left);
    let rightSum = findMaxPathSum(root.right);

    let result = Math.max(leftSum, rightSum)

    return root.data + result
}


console.log(findMaxPathSum(a))