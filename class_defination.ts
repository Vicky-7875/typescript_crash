class Tree {
  // branch:string;
  constructor(protected leaf: string) {
    this.leaf = leaf;
  }

  public moveLeaf() {
    // this.leaf ="geen loadn"
    console.log(`this ${this.leaf} is mpving to right `);
  }
}


let tree1 = new Tree('green LEaf')

tree1.moveLeaf()
// tree1.leaf