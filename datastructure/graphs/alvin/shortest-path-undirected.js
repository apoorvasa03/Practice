/** to find the shortest path BFS is better than DFS bcz BFS covers all direction and reaching the destination wil be fast */
function shortestPath(edges, source, destination){
    let graph = buildGraph(edges)
  
    let queue = [[source, 0]]
    /** there can be cyclic graph which leads to infinity loop hence visited list is kept */
    let visited = new Set([source]);
  
    while(queue.length > 0){
        let [current, distance] = queue.shift()
        if(current === destination) return distance
        for(let neighbor of graph[current]){
          if(!visited.has(neighbor)){
            visited.add(neighbor)
            queue.push([neighbor, distance+1])
          }
        }
    }
  
    return -1
  }
  
  /** since it is undireected graph, if a is connected to b then b is also connected to a */
  function buildGraph(edges){
    let graph = {}
  
    for(let edge of edges){
      let [a, b] = edge
      if(!(a in graph)) graph[a] = []
      if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
     }
  
     return graph
  }
  
  
  
  const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
  ]
  
  console.log(shortestPath(edges, 'w', 'z')) // 5