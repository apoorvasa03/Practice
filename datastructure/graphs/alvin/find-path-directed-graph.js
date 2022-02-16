let graph = {
    f: ['g', 'i'],
    g: ['h'],
    h:[],
    i:['g', 'k'],
    j:['i'],
    k:[]
  }
  
  // dsf
  function hasPathDFS(graph, source, destination){
    if(source === destination) return true
  
    for(let neighbor of graph[source]){
        if(hasPath(graph, neighbor, destination) === true){
            return true
        }
    }
  
    return false
  }
  
  //bfs
  function hasPathBFS(graph, source, destination){
    let queue = [source]
  
    while(queue.length > 0){
      let current = queue.shift()
  
      if(current === destination) return true
      for(let neighbor of graph[current]){
        queue.push(neighbor)
      }
    }
  
    return false
  }
  
  console.log(hasPathBFS(graph, 'f', 'h')) // true
  console.log(hasPathBFS(graph, 'f', 'j')) // false