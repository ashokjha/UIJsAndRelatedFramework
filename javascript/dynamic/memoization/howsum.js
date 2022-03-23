

//Auther Ashok Kumar Jha (ashu.kr.jha@gmail.com)

// Below is recursive implementation using brute force how sum
// but slow for larger number as time complexicity is O(n^m*m)
// Space complexicity is O(m)


const howsum1 = (targetSum,numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for(let elm of numbers) {
        const remainder = targetSum - elm;
        const remainderResult = howsum1(remainder,numbers)
        if(remainderResult != null) {
            return [...remainderResult,elm];
        }
    }
    return null;
}

// Below is recursive implementation using brute force and memoization how sum
//  time complexicity is O(n*m^2)
// Space complexicity is O(m^2)

const howsum = (targetSum,numbers,mem={}) => {
    if(targetSum in mem) return mem[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for(let elm of numbers) {
        const remainder = targetSum - elm;
        const remResult = howsum(remainder,numbers,mem);
        if(remResult != null) {
            mem[targetSum]= [...remResult,elm];
            return mem[targetSum];
        }
    }
    mem[targetSum] = null;
    return mem[targetSum];
}

console.log("howsum(44,[7,3]) = " + howsum(44,[7,3]));
console.log("howsum(14,[1,2,7,9]) = " + howsum(14,[1,2,7,9]));
console.log("howsum(387,[7,14])) = " + howsum(387,[7,14]));

console.log("howsum(2227,[4,2,1,9,6])) = " + howsum(2227,[4,2,1,9,6]));
