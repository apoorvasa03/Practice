
function fixBuss(num){
    let name = ''; 
    if(num % 3 === 0) name += 'Fizz' 
    if(num% 5 === 0) name += 'Buzz'
    return name
}

function whosPaying(names) {
    let n = names.length
    let index = Math.floor(Math.random() * n)

    return names[index] + ' is going to buy lunch today!'
  
}

console.log(whosPaying(['a', 'b', 'c', 'd', 'e']))