class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let c = s.split('').sort().join('')
        let d = t.split('').sort().join('')

      return c === d
    }
}
