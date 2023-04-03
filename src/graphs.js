const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

console.log('dephtFirst:');
dephtFirst(graph);

console.log('breadhFirst:');
breadhFirst(graph);

function breadhFirst(graph) {
  const breadhFirstQueue = ['a'];

  do {
    const currentNode = breadhFirstQueue.shift();

    console.log(currentNode);

    breadhFirstQueue.push(...graph[currentNode]);
  } while (breadhFirstQueue.length > 0);
}

function dephtFirst(graph) {
  const dephtFirstStack = ['a'];

  do {
    const currentNode = dephtFirstStack.pop();

    console.log(currentNode);

    dephtFirstStack.push(...graph[currentNode]);
  } while (dephtFirstStack.length > 0);
}
