var Tree = /** @class */ (function () {
    // branch:string;
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        // this.leaf ="geen loadn"
        console.log("this ".concat(this.leaf, " is mpving to right "));
    };
    return Tree;
}());
var tree1 = new Tree('green LEaf');
tree1.moveLeaf();
// tree1.leaf
