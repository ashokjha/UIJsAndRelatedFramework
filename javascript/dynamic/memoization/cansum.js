

//Auther Ashok Kumar Jha (ashu.kr.jha@gmail.com)

// Below is recursive implementation brut force
// but slow for larger number as time complexicity is O(n^m)
// Space complexicity is O(n)

const cansumb = (targetSum,numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for(let elm of numbers) {
        const remainder = targetSum - elm;
        if(cansum(remainder,numbers) === true) {
            return true;
        }
    }
    return false;
}


const cansum = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for(let elm of numbers) {
        const remainder = targetSum - elm;
        memo[targetSum] = remainder
        if(cansum(remainder,numbers,memo) === true) {
            return true;
        }
    }
    return false;
}

console.log(cansum(44,[7,3]));
console.log(cansum(14,[1,2,7,9]));
console.log("cansum(387,[7,14])) = "+cansum(387,[7,14]));

console.log("cansum(2227,[4,2,1,9,6])) = "+cansum(2227,[4,2,1,9,6]));
