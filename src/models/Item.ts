export class Item{
    code:string;
    name:string;
    qty:number;
    price:number;

    constructor(code:string,name:string,qty:number,price:number) {
        this.code= code;
        this.name=name;
        this.qty = qty;
        this.price=price;
    }
}