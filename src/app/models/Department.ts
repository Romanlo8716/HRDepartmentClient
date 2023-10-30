import { AdressOfDepartment } from "./AdressOfDepartment";
import { Worker } from "./Worker";

export class Department{
   id: Number
   nameDepartment: String
   phoneNumber: String
   adressOfDepartment: AdressOfDepartment
   workers: Worker[]
   
}