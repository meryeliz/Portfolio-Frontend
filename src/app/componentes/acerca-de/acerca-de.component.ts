import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //prueba para servicios
  miPorfolio: any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    //acceso a los metodos o propiedades
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      //se muestra en consola los datos del json
      console.log(data);
      this.miPorfolio = data;
    });

  }

}
