
/** is the graph has loop, then dfs will become infinity hence visited set is used */
function undirectedPath(edges, nodeA, nodeB){
    let graph = buildGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}

function hasPath(graph, src, destination, visited){
    if(src === destination) return true
    if(visited.has(src)) return false
    visited.add(src)

    for(let neighbor of src){
        if(hasPath(graph, neighbor, destination, visited)) return true
    }

    return false
}

const buildGraph = (edges) => {
    let graph = {}

    for(let edge of edges){
        const [a, b] = edge
        if(! (a in graph)) graph[a] = []
        if(! (b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

console.log(undirectedPath(edges, 'i', 'l'))