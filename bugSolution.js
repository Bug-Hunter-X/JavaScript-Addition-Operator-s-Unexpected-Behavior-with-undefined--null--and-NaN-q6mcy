function foo(a, b) {
  // Handle undefined and null values
  a = (typeof a === 'undefined') ? 0 : a;
  a = (a === null) ? 0 : a;

  // Handle NaN values
  if (isNaN(a)) {
    console.error('NaN encountered!');
    return 0; // Or handle as appropriate for your logic
  }

  b = (typeof b === 'undefined') ? 0 : b;
  b = (b === null) ? 0 : b;  
  if (isNaN(b)){
    console.error('NaN encountered!');
    return 0;
  }
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(NaN, 1)); // 0