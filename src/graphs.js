const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

console.log('dephtFirst:');
dephtFirst(graph, 'a');

console.log('breadhFirst:');
breadhFirst(graph, 'a');

function breadhFirst(graph, root) {
  const breadhFirstQueue = [root];

  do {
    const currentNode = breadhFirstQueue.shift();

    console.log(currentNode);

    breadhFirstQueue.push(...graph[currentNode]);
  } while (breadhFirstQueue.length > 0);
}

function dephtFirst(graph, root) {
  const dephtFirstStack = [root];

  do {
    const currentNode = dephtFirstStack.pop();

    console.log(currentNode);

    dephtFirstStack.push(...graph[currentNode]);
  } while (dephtFirstStack.length > 0);
}
