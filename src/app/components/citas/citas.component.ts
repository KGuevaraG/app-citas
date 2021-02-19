import { Component, OnInit } from '@angular/core';
import { Citas } from '../../models/citas.model';
import { faCheck, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/models/clientes.model';
import { Doctor } from 'src/app/models/doctor.model';
import { Especialidad } from 'src/app/models/epecialidad.model';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  faCheck=faCheck;
  faPen=faPen;
  faTrashAlt=faTrashAlt;

  public Cita: Citas;
  private Cliente:Cliente;
  private fecha:Date;
  private Doctor:Doctor;
  private Especialidad:Especialidad;
  constructor() { 
    this.fecha=new Date(2021,10,3,23,30);
    this.Especialidad=new Especialidad(1,'Pediatra','La pediatría es la especialidad médica que estudia al niño y sus enfermedades. El término procede del griego paidos (niño) e iatrea (curación), pero su contenido es mucho mayor que la curación de las enfermedades de los niños, ya que la pediatría estudia tanto al niño sano como al enfermo.')
    this.Cliente=new Cliente('00000000-0','Kevin','Guevara',this.fecha);
    this.Doctor=new Doctor(1,'Gutierres','Ramirez',this.Especialidad)
    this.Cita=new Citas(null,this.Cliente,this.fecha,this.Doctor);
  }

  ngOnInit(): void {
  }
  onSubmit(){}

}
