import { Especialidad } from './epecialidad.model';
export class Doctor{
    constructor(
        public Id:number,
        public Nombre:string,
        public Apellido:string,
        public Especialidad:Especialidad
    ){}
}