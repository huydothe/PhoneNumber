export class Phone{
    type:string;
    PhoneNum:number;

    constructor(type: string, PhoneNum: number) {
        this.type = type;
        this.PhoneNum = PhoneNum;
    }
    getType(){
        return this.type;
    }
}