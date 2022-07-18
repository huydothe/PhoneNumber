import {Phone} from "./demo";

export class Sort extends Phone {
    Storage = [];
    viettel = [];
    vinaphone = [];
    mobifone = [];

    constructor(type?: string, PhoneNum?: number) {
        super(type, PhoneNum);
        this.Storage = [];
        this.viettel = [];
        this.vinaphone = [];
        this.mobifone = [];
    }

    getViettel() {
        return this.viettel;
    }

    getMobifone() {
        return this.mobifone;
    }

    getVinaphone() {
        return this.vinaphone;
    }

    setPhone(phone) {
        if (phone.getType() === 'viettel') {
            this.getViettel().push(phone);
            return this.getViettel();
        }
        else if (phone.getType() === 'mobifone') {
            this.getMobifone().push(phone);
            return this.getMobifone();
        }
        else if (phone.getType() === 'vinaphone') {
            this.getVinaphone().push(phone);
            return this.getVinaphone();
        }
    }
}