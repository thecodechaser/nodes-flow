// checkDag.js
export function checkDAG(nodes, edges) {
  const graph = new Map();
  const inDegree = new Map();

  for (const node of nodes) {
    graph.set(node.id, []);
    inDegree.set(node.id, 0);
  }

  for (const { source, target } of edges) {
    graph.get(source).push(target);
    inDegree.set(target, (inDegree.get(target) || 0) + 1);
  }

  const queue = [];
  for (const [node, deg] of inDegree.entries()) {
    if (deg === 0) queue.push(node);
  }

  let visited = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    visited++;
    for (const neighbor of graph.get(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return {
    num_nodes: nodes.length,
    num_edges: edges.length,
    is_dag: visited === nodes.length,
  };
}
