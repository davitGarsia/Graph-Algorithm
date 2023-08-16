const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const depthFirstPrintRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor);
  }
};

// Breadth-first

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

const hasPathDepthFirst = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDepthFirst(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
};

const hasPathBreadthFirst = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[src]) {
      queue.push(neighbor);
    }
  }
  return false;
};

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

depthFirstPrint(graph, 'a');
