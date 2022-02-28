//@author: Ashok Kumar Jha
export class MBnk {
    private _r:number;
    private _p:number;
    private _ci:number;
    constructor(r:number,p:number,ci=1) {
        this._r = r;
        this._p = p;
        this._ci = (ci <= 0)? 1:ci; 
    }
    public getR() {
        return this._r;  
    }
    public getP() {
        return this._p;  
    }
    public getCi() {
        return this._ci;  
    } 
    public acf() {
        return (1 + (this._r*0.01/this._ci))**(this._p*this._ci)
    }
    public toString(){
        return `rate = ${this.getR()}, period = ${this.getP()}, cum/yr = ${this.getCi()}, ACF = ${this.acf()}`;
    }
    public fv(pv:number) {
        return pv*this.acf()
    } 
};
