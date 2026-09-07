# Encode and Decode Strings

**Medium**

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and decoded back to the original list of strings.

**Machine 1 (sender):**

```
String encode(List<String> strs) {
    // ... your code
    return encoded_string;
}
```

**Machine 2 (receiver):**

```
List<String> decode(String encoded_string) {
    // ... your code
    return decoded_strs;
}
```

Machine 1 does:

```
String encoded_string = encode(strs);
```

Machine 2 does:

```
List<String> decoded_strs = decode(encoded_string);
```

`decoded_strs` on Machine 2 should be the same as the input `strs` on Machine 1.

Implement the `encode` and `decode` methods.

---



## Example 1

**Input:** `strs = ["Hello","World"]`

**Output:** `["Hello","World"]`

```
Solution solution = new Solution();
String encoded_string = solution.encode(strs);

// Machine 1 ---encoded_string---> Machine 2

List<String> decoded_strs = solution.decode(encoded_string);
```



## Example 2

**Input:** `strs = [""]`

**Output:** `[""]`

---



## Constraints

- `0 <= strs.length < 100`
- `0 <= strs[i].length < 200`
- `strs[i]` contains any of the 256 valid ASCII characters



## Follow up

Could you write a generalized algorithm that works on any possible set of characters?

## Complexity

Aim for **O(m)** time for each `encode()` and `decode()` call, and **O(m + n)** space.

- `m` = sum of lengths of all strings
- `n` = number of strings
