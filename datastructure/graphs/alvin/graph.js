const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
  }
  
  /** stack can be used to do depth first search, u push the given starting node and 
   * in while loop u pop the last value from the stack and push its neighbor to the stack */
  function depthFirstSearch(graph, source){
    let stack = [source]
    while(stack.length > 0){
       let current = stack.pop()
        console.log(current)
       for(let neighbor of graph[current]){
         stack.push(neighbor)
       }
    }
  }
  
  
  
  function depthFirstSearchRecursive(graph, source){
    console.log(source)
    for(let neighbor of graph[source]){
      depthFirstSearch(graph, neighbor)
    }
  }
  
  /** breath first search can be done only through iteration, 
   * BFS demand queue and if we try to implement recursive way, 
   * under the wood there is a stack datastructure which fight against queue order we want*/
  function breathFirstSearch(graph, source){
    let queue = [source]
    while(queue.length > 0){
      let current = queue.shift()
      console.log(current)
      for(let neighbor of graph[current]){
        queue.push(neighbor)
      }
    }
  }
  
  function breathFirstSearch(graph, source){
  
  }
  
  
  // console.log(depthFirstSearchRecursive(graph, 'a')) // a, b, d, f, c, e
  // console.log(depthFirstSearch(graph, 'a')) // a, c, e, b, d, f 
  
  console.log(breathFirstSearch(graph, 'a')) // a, b, c, d, e, f 