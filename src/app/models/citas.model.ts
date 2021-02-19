import { Cliente } from './clientes.model';
import { Doctor } from './doctor.model';

export class Citas{
    constructor(
        public Id:number,
        public Cliente:Cliente,
        public Fecha:Date,
        public Doctor:Doctor
    ){}
}