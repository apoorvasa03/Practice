
/** time - o(n!)  space - o(n^2) 
 * Time Complexity is n! because we need to produces n! elements
 * Space Complexity is (n) bcz n recurive call stack frame, and for each stack frame it use n elemets(slice part)
*/

function permutation(elements){
    if(elements.length === 0) return [[]]
    let firstEl = elements[0];
    let rest = elements.slice(1);
    let premWithoutFirst = permutation(rest)
    let allPermutations = []

    premWithoutFirst.forEach(prem => {
        for(let i=0; i<= prem.length; i++){
            let premWithFirst = [...prem.slice(0, i), firstEl, ...prem.slice(i)]
            allPermutations.push(premWithFirst)
        }
    });
    return allPermutations
}


console.log(permutation(['a', 'b', 'c']))
/**
 [
  [ 'a', 'b', 'c' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'c', 'a' ],
  [ 'a', 'c', 'b' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'b', 'a' ]
]
 */