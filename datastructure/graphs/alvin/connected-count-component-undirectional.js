function connectedComponentCount(graph){
    let visited = new Set();
    let count = 0
    for(let node in graph){
      if(explore(graph, node, visited)) count += 1
    }
  
    return count
  }
  
  function explore(graph, current, visited){
      if(visited.has(current)) return false
      visited.add(current)
    
      // this for loop breaks when all the nodes of the compoenent in graph is visited
      for(let neighbor of graph[current]){
        explore(graph, neighbor, visited)
      }
  
      return true
  }
  
  const graph = {
    0 : ['8', '5', '1'],
    1 : ['0'],
    5 : ['0', '8'],
    8 : ['0', '5'],
    2 : ['3', '4'],
    3 : ['2', '4'],
    4 : ['3', '2'],
  }
  
  console.log(connectedComponentCount(graph)) // 2