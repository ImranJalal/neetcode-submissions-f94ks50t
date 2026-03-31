class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let input = [];

        for(let i=0;i<s.length;i++){
            let char = s[i]
            if('(' === char || '{' === char || '[' === char){
                input.push(char)
            } else {
                let prevValue = input.pop();
                if(prevValue === undefined) return false
                if(prevValue === '(' && char !== ')')return false
                if(prevValue === '{' && char !== '}')return false
                if(prevValue === '[' && char !== ']')return false
            }
        }
        return input.length === 0;
    }
}