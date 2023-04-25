function receivesAFunction(a) {
  a()
}

function returnsANamedFunction() {
  let theName = 'bal'
  return function named() { console.log(`Hi ${theName}`); }
}


function returnsAnAnonymousFunction() {
  return () => console.log('Hi AnonymousFunction')
}
