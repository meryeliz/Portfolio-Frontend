import { Component } from '@angular/core';
//El component es un decorador
@Component({
  //selector: definimos el nombre con el cual se va a llamar o montar al componenete
  selector: 'app-root',
  //templateUrl: definimos el archivo HTML del template del componenete
  templateUrl: './app.component.html',
  //styleUrl: cargamos los archivos de estilo en un array
  styleUrls: ['./app.component.css']
})
  //Exportamos la clase para ser usada dentro de nuestro proyecto
export class AppComponent {
  title = 'Prueba-Angular';
}
