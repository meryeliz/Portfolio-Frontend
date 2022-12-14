import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//Importamos nuestros comonenetes
import { LoginComponent } from '../componentes/login/login.component';
import { HomeComponent } from '../componentes/home/home.component';
import { NewSkillComponent } from '../componentes/hys/new-skill.component';
import { EditSkillComponent } from '../componentes/hys/edit-skill.component';



//falta terminar rutas
const routes: Routes = [
  { path: '', component: HomeComponent }, //la ruta dirige a la pagina principal
  { path: 'login', component: LoginComponent },
  { path: 'nuevaskill', component: NewSkillComponent },
  { path: 'edithys/:id', component: EditSkillComponent}
  

];


@NgModule({
  //declarations: [],
  //Cargamos nuestras rutas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
//export class AppRouting.Module.TsModule { }
