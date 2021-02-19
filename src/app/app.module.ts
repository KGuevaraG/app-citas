import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CitasComponent } from './components/citas/citas.component';
import { ClientDatosComponent } from './components/client-datos/client-datos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DoctorDatosComponent } from './components/doctor-datos/doctor-datos.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { NewClienteComponent } from './components/new-cliente/new-cliente.component';
import { NewDoctorComponent } from './components/new-doctor/new-doctor.component';
import { NewUsuarioComponent } from './components/new-usuario/new-usuario.component';
import { NewCitaComponent } from './components/new-cita/new-cita.component';
import { UsuarioDatosComponent } from './components/usuario-datos/usuario-datos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CitasComponent,
    ClientDatosComponent,
    ClientesComponent,
    DoctorDatosComponent,
    DoctoresComponent,
    NewClienteComponent,
    NewDoctorComponent,
    NewUsuarioComponent,
    NewCitaComponent,
    UsuarioDatosComponent,
    UsuariosComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
