

//Auther Ashok Kumar Jha (ashu.kr.jha@gmail.com)

// Below is recursive implementation using brute force best sum combination
// but slow for larger number as time complexicity is O(n^m*m)
// Space complexicity is O(m)


const bestsum1 = (targetSum,numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shrtCmb = null;

    for(let elm of numbers) {
        const rmd = targetSum - elm;
        const rmdCmb = bestsum1(rmd,numbers)
        if(rmdCmb !==  null) {
            const cmb = [...rmdCmb,elm];
            if ((shrtCmb===null)|| (cmb.length < shrtCmb.length))
                shrtCmb = cmb; 
        }
    }
    return shrtCmb;
}

//console.log("bestsum1(44,[7,3]) = " + bestsum1(44,[7,3]));
//console.log("bestsum1(14,[1,2,7,9]) = " + bestsum1(14,[1,2,7,9]));
//console.log("bestsum1(387,[7,14])) = " + bestsum1(387,[7,14]));

//console.log("bestsum1(2227,[4,2,1,9,6])) = " + bestsum1(2227,[4,2,1,9,6]));


// Below is recursive implementation using brute force and memoization how sum
//  time complexicity is O(n*m^2)
// Space complexicity is O(m^2)

const bestsum = (targetSum,numbers,mem={}) => {
    if (targetSum in mem) return mem[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shrtCmb = null;

    for(let elm of numbers) {
        const rmd = targetSum - elm;
        const rmdCmb = bestsum(rmd,numbers,mem)
        if(rmdCmb !==  null) {
            const cmb = [...rmdCmb,elm];
            if ((shrtCmb===null)|| (cmb.length < shrtCmb.length))
                shrtCmb = cmb; 
        }
    }
    mem[targetSum]=shrtCmb;
    return shrtCmb;
}

console.log("bestsum(44,[7,3]) = " + bestsum(44,[7,3]));
console.log("bestsum(14,[1,2,7,9]) = " + bestsum(14,[1,2,7,9]));
console.log("bestsum(387,[7,14])) = " + bestsum(387,[7,14]));

console.log("bestsum(2227,[4,2,1,9,6])) = " + bestsum(2227,[4,2,1,9,6]));
