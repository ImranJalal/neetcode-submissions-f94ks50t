class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
     const stack = [];

    for (const string of operations) {
        if (string === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]); 
            // when you land on '+' what end up happening is 
            // that you are at length 2 so it subtracks it to 
            // land to stack[1] + stack[0] so you get three 
        } else if (string === "D") {
            stack.push(stack[stack.length - 1] * 2);
            // lands on 'D' what was the previous value multiple it by 2
        } else if (string === "C") {
            stack.pop();
            // lands on 'C' you pop the previous value so we are not pushing anything to 
            // empty array just removing what is at the top
        } else {
            stack.push(Number(string));
            // Number() Validates and makes it into a clearn number 
            // parsInt() Grabs the number only 
        }
    }

    return stack.reduce((sum, val) => sum + val, 0);
    }
}
