let stringA = "ABABAB";
let stringB = "ABAB";

/**
 * @string {strA}
 * @string {strB}
 * @return string
 * @description - This is a function that returns a string that is guaranteed to be a factor or greatest common divisor of the two given strings.
 */

// Greatest Common Divisor for Strings
function greatestCommonDivisor(strA, strB) {
    if (strA + strB !== strB + strA) return "";
    return strA.substring(0, _gcds(strA.length, strB.length));
}

// Private Function
function _gcds(stringA, stringB) {
    while (stringB !== 0) {
        let temp = stringB;
        stringB = stringA % stringB;
        stringA = temp;
    }

    return stringA;
}

const result = greatestCommonDivisor(stringA, stringB);
console.log(result);