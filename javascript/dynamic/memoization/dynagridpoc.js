//Auther Ashok Kumar Jha (ashu.kr.jha@gmail.com)

// Below is recursive implementation
// but slow for larger grid as time complexicity is O(2^(m+n))
// Space complexicity is O(m+n)

/*
const gridTraveler = (m,n) => {
    if(m<=0 || n<=0) return 0
    else if(m===1 && n===1) return 1
    return gridTraveler(m-1,n) + gridTraveler(m,n-1)                      
};
*/

///Memoization
const gridTraveler = (m,n,mem={}) => {
    const key = m+","+n 
    if(key in mem) return mem[key] 
    else  if(m < 1 || n < 1) return 0
    else if(m===1 && n===1) return 1
    else 
        mem[key] = gridTraveler(m-1,n,mem)+gridTraveler(n,m-1,mem)
        mem[key+"->"+mem[key]] = mem[key]        
    return mem[key] 
};

//console.log(gridTraveler(0,0))
//console.log(gridTraveler(5,0))
//console.log(gridTraveler(0,10))
//console.log(gridTraveler(-10,4))
//console.log(gridTraveler(20,-30))
let mem={};
console.log(gridTraveler(3,3,mem));
console.log(mem);
//console.log(gridTraveler(18,18))

//console.log(gridTraveler(8,9))


"[[1,3,1],[1,5,1],[4,2,1]]"

[[1,3,1],[1,5,1],[4,2,1]]