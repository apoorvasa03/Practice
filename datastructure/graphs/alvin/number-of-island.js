function islandCount(grid){
    let visited = new Set()
    let count = 0
    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[0].length; c++){
         if(explore(grid, r, c, visited)) count++
      }
    }
    return count
  }
  
  function explore(grid, r, c, visited){
    const rowInbounds = 0 <= r && r < grid.length
    const columnInbounds = 0 <= c && c < grid[0].length
    if(!rowInbounds || !columnInbounds) return false
  
    if(grid[r][c] === 'w') return false
  
    let pos = r + ',' + c
    if(visited.has(pos)) return false
    visited.add(pos)
  
    explore(grid, r-1, c, visited)
    explore(grid, r+1, c, visited)
    explore(grid, r, c-1, visited)
    explore(grid, r, c+1, visited)
  
    return true
  }
  
  let grid = [['w', 'l', 'w', 'w', 'w'],
              ['w', 'l', 'w', 'w', 'w'],
              ['w', 'w', 'w', 'l', 'w'],
              ['w', 'w', 'l', 'l', 'w'],
              ['l', 'w', 'w', 'l', 'l'],
              ['l', 'l', 'w', 'w', 'w']]
  
  console.log(islandCount(grid))            