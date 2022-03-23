
const aar =  [[1,3,1],[1,5,1],[4,2,1]]

const gridTraveler = (m,n,mem={}) => {
    const key = m+","+n 
    if(key in mem) return mem[key] 
    else  if(m < 1 || n < 1) return 0
    else if(m===1 && n===1) return 1
    else 
        mem[key] = gridTraveler(m-1,n,mem)+gridTraveler(n,m-1,mem);
        //mem[key+"->"+mem[key]] = mem[key];
    (new Map(Object.entries(mem))).forEach((v,k) => console.log(k+" => " + v)); 
    //console.log(mem);

    return mem[key] 
};

console.log(gridTraveler(3,3));
