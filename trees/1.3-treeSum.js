class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(3)
let b = new Node(11)
let c = new Node(4)
let d = new Node(4)
let e = new Node(2)
let f = new Node(1)


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function treeSum(root){
    if(root === null) return 0;
    return root.data + treeSum(root.left) + treeSum(root.right)
}

console.log(treeSum(a)) // 25