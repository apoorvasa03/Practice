function countConstruct(target, wordBank){
    if(target === '') return [[]];
    let totalConstruct = []
    for(let word of wordBank){
        if(wordBank.indexOf(word) === 0){
            let suffix = target.slice(word.length)
            let result = countConstruct(suffix, wordBank) 
            let comb = result.map(way => ([...way, word]))
            totalConstruct.push(comb)
        }
    }

    return totalConstruct
} 


console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd'])) 