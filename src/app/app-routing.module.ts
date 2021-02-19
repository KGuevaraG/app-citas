import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './components/citas/citas.component';
import { DoctoresComponent } from './components/doctores/doctores.component';

const routes: Routes = [
  {path:'citas',component:CitasComponent},
  {path:'doctores',component:DoctoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
