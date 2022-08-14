import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//el servicio es inyectado en los componenetes
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }
  obtenerDatos(): Observable<any>{
    //acceso al json
    //con el get se obtienen el json
    return this.http.get('./assets/data/data.json');
  }

  /*METODO PARA OBTENER DATOS
  obtenerDatos() {
    console.log("El servicio porfolio esta corriendo");
  }*/
}
