import { AdressOfDepartment } from "./AdressOfDepartment";
import { Worker } from "./Worker";

export class Department{
   id: number
   nameDepartment: string
   phoneNumber: string
   adressOfDepartment: AdressOfDepartment
   workers: Worker[]
   
}