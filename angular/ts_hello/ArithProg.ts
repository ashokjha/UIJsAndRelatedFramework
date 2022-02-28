//@auther Ashok Kumar Jha
export class AP {
    constructor(private _ft?:number,private _cd?:number){};
    
    getFt() {
        return this._ft; 
    }   

    getCd() {
        return this._cd; 
    } 
    getNthTerm(n:number) {
        return this._ft+(n-1)*this._cd;
    } 

    sum(n:number) {
        return n*(2*this._ft+(n-1)*this._cd)/2;
    }

    getAM(n:number) {
        return (this._ft + this.getNthTerm(n))/2;
    }
}

export enum SERIES {AP,GP}