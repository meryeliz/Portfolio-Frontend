import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nomEscuela: string;
  descripcion: string;
  ciudad: string;
  fechaInicio: string;
  fechaFin: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nomEscuela, this.descripcion, this.ciudad, this.fechaInicio, this.fechaFin);
    this.educacionS.save(edu).subscribe(
      data => {
        alert("Estudio agregado correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir estudios.");
        this.router.navigate(['']);
      }
    )
  }
}
