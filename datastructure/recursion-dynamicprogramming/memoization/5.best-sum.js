// time - o(m^2 * n) space - o(m^2)
function bestSum(targerSum, numbers, memo = {}){
    if(targerSum in memo) return memo[targerSum];
    if(targerSum === 0) return [];
    if(targerSum < 0) return null

    let shortestCombination = null;

    for(let num of numbers){
        let remaining = targerSum - num;
        let remainingResult = bestSum(remaining, numbers, memo)
        if(remainingResult !== null){
            let combination = [...remainingResult, num];
            if(shortestCombination === null || shortestCombination.length > combination.length){
                shortestCombination = combination
            }
        }
    }
    memo[targerSum] = shortestCombination
    return shortestCombination;
}

// time - o(n^m * m) space - o(m^2)
// 
/**
 * time = o(n^m * m) space - o(m^2)
 * n = numbers m = target
 * time - height of the tree will be 'm' which will branch out n(array) for every node so n^m, additionally we will copy remainingresult which is linear which can max be m elements
 *        so time will be o(n^m * m)
 * space - max call stack depth will be m and we need to store shortest combination which can be max m
 *          so space will be o(m^2)
 */
function bestSum1(targerSum, numbers){
    if(targerSum === 0) return [];
    if(targerSum < 0) return null

    let shortestCombination = null;

    for(let num of numbers){
        let remaining = targerSum - num;
        let remainingResult = bestSum(remaining, numbers)
        if(remainingResult !== null){
            let combination = [...remainingResult, num];
            if(shortestCombination === null || shortestCombination.length > combination.length){
                shortestCombination = combination
            }
        }
    }

    return shortestCombination;
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) //[3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]