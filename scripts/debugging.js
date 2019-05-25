const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, item) => {
    debugger; // Debugging keyword.
    return accumulator.concat(item), []
  }
);

