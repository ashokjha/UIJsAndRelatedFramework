function allEqual(arr) {
  return new Set(arr).size == 1;
}

const allEqual1 = (arr) => arr.every( v => v === arr[0] )

console.log(allEqual1( [1,1,1,1] ))
console.log(allEqual1( [1,2,1,1] ))
console.log(allEqual1( [1,'1',1,1] ))
console.log(allEqual1( [] ))

console.log(allEqual( [1,1,1,1] ))
console.log(allEqual( [1,2,1,1] ))
console.log(allEqual( [1,'1',1,1] ))
console.log(allEqual( [] ))