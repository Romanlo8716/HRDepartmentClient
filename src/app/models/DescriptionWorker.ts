import { Worker } from "./Worker"
import { LaborBook } from "./LaborBook"
import { MedicalBook } from "./MedicalBook"
import { Vacation } from "./Vacation"
import { DepartmentsAndPostsOfWorker } from "./DepartmentsAndPostsOfWorker"
import { Education } from "./Education"

export class DescroptionWorker{
    id:Number
    worker:Worker
    laborBooks: LaborBook[]
    medicalBooks: MedicalBook[]
    vacations: Vacation[]
    educations:Education[]
   // departmentsAndPostsOfWorkers: DepartmentsAndPostsOfWorker[] 

}