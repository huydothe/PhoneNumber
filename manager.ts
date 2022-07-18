import {Phone} from "./demo";
import {Sort} from "./sort";

let storage=new Sort();

let phone1=new Phone("viettel", 1123444);
let phone2=new Phone("vinaphone", 1124545);
let phone3=new Phone("mobifone", 1123442);
let phone4=new Phone("viettel", 1127544);
let phone5=new Phone("vinaphone", 1888345);
let phone6=new Phone("mobifone", 1999342);

storage.setPhone(phone1);
storage.setPhone(phone2);
storage.setPhone(phone3);
storage.setPhone(phone4);
storage.setPhone(phone5);
storage.setPhone(phone6);

console.log(storage.getViettel());
console.log(storage.getVinaphone());
console.log(storage.getMobifone());

