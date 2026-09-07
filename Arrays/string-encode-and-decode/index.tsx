class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let result = Array();
    for (let i = 0; i < strs.length; i++) {
      result.push(strs[i].length + "#" + strs[i])
    }

    return result.join("")
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    let result = Array()
    for (let i = 0; i < str.length; i++) {
      result.push(str[i])
    }
    // str = 5#Hello5#World
    // 5# I need to skip the next 5 letters.
    return result
  }
}

const s = new Solution();
const input = ["Hello", "World"]
const encoded = s.encode(input)
const decoded = s.decode(encoded)
console.log("encoded", encoded)
console.log("decoded", decoded)
