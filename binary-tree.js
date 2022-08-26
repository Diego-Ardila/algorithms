var recursiveMap = (leftNode, rightNode) => {
  console.log(leftNode, rightNode)
  if (leftNode.left && rightNode.right) {
    if (leftNode.left.val !== rightNode.right.val) return false;
    const answer = recursiveMap(leftNode.left, rightNode.right);
    if (!answer) return false;
  }
  else if (leftNode.left !== rightNode.right) {
    return false;
  }
  if (leftNode.right && rightNode.left) {
    if (leftNode.right.val !== rightNode.left.val) return false;
    const answer = recursiveMap(leftNode.right, rightNode.left);
    if (!answer) return false;
  }
  else if (leftNode.right !== rightNode.left) {
    return false;
  }
  return true;
}

var isSymmetric = function (root) {
  if (root.left === null && root.right === null) {
    return true
  } else if (root.left === null || root.right === null) {
    return false;
  } else if (root.left.val === root.right.val) {
    return recursiveMap(root.left, root.right)
  } else return false;
};