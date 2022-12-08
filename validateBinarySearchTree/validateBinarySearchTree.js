/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let isValidBST = function (root) {

    let is_bst_valid = true;
    let prev_node = new TreeNode(-Infinity, null, null);

    const in_order_traverse = (node) => {

        if (!node || !is_bst_valid) {
            return;
        }

        in_order_traverse(node.left);

        if (node.val <= prev_node.val) {
            is_bst_valid = false;
        }

        prev_node = node;
        in_order_traverse(node.right);
    };

    in_order_traverse(root);
    return is_bst_valid;
};
