/**Given N things, in how many ways can we arrange them */

/** time - o(2^n)  space - o(n^2) 
 * Time Complexity is 2^n because in each recurssion we are doubling the array
 * Space Complexity is (n) bcz n recurive call stack frame, and for each stack frame it use n elemets(slice part)
*/
const combination = (elements) => {
    if(elements.length === 0) return [[]];

    let firstEl = elements[0];
    let rest = elements.slice(1);
    let combinationWithOutFirst = combination(rest)
    let combinationWithFrist = []
    combinationWithOutFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl]
        combinationWithFrist.push(combWithFirst)
    })

    return [...combinationWithOutFirst, ...combinationWithFrist]
}

console.log(combination(['a', 'b', 'c'])) // [[], [ 'c' ], [ 'b' ], [ 'c', 'b' ], [ 'a' ], [ 'c', 'a' ], [ 'b', 'a' ], [ 'c', 'b', 'a' ]]