/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (input) {
    return input == input.toString().split('').reverse().join('');
};
