
//Auther Ashok Kumar Jha (ashu.kr.jha@gmail.com)

// Below is recursive implementation
// but slow for larger number as time complexicity is O(2^n*n)
// const fib = (n) => (n<2)?1:fib(n-1)+fib(n-2) 

//Using Dynamic Memorization Steps
//Time and space complexity is O(n)

//Memoization
const fib = (n,mem={0:1,1:1}) => {
    if(n<0) 
        return NaN
    else if (!(n in mem)) 
        mem[n] = fib(n-1,mem)+fib(n-2,mem)       
    return mem[n] 
}

//console.log(fib(0))
//console.log(fib(1))
//console.log(fib(2))
//console.log(fib(3))
//console.log(fib(4))
//console.log("20! = "+ fib(15))
//console.log(fib(-3))


const fact = (n,mem={0:1,1:1}) => {
    if(n<0) 
        return NaN
    else if (!(n in mem)) 
        mem[n] = n*fact(n-1,mem)       
    return mem[n] 
}

console.log("0! = "+ fact(0))
console.log("1! = "+ fact(1))
console.log("2! = "+ fact(2))
console.log("3! = "+ fact(3))
console.log("4! = "+ fact(4))
console.log("15! = "+ fact(15))
console.log("20! = "+ fact(20))
console.log("25! = "+ fact(25))
console.log("-3! = "+ fact(-3))
