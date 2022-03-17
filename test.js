function islandCount(grid){
  let minSize = Infinity
  let visisted = new Set()

  for(let r =0; r < grid.length; r++){
    for(let c=0; c< grid[0].length; c++){
        let size = exploreSize(grid, r, c, visisted)
       if(size && size < minSize){
         minSize = size;
       }
      }
}
return minSize
}

function exploreSize(grid, r, c, visited){

  let rowInbounds = 0 <= r && r < grid.length
  let columnInbounds = 0 <= c && c < grid[0].length;

  if(!rowInbounds || !columnInbounds) return 0
  
  if(grid[r][c] === 'w') return 0

  let pos = r + ',' + c
  if(visited.has(pos)) return 0
  visited.add(pos)
  let size = 1

  size += exploreSize(grid,  r-1, c, visited)
  size += exploreSize(grid,  r+1, c, visited)
  size += exploreSize(grid,  r, c-1, visited)
  size += exploreSize(grid,  r, c+1, visited)

  return size
}

let grid = [['w', 'l', 'w', 'w', 'w'],
            ['w', 'l', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'l', 'w'],
            ['w', 'w', 'l', 'l', 'w'],
            ['l', 'w', 'w', 'l', 'l'],
            ['l', 'l', 'w', 'w', 'w']]

console.log(islandCount(grid));