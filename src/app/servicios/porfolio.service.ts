import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//el servicio es inyectado en los componenetes
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  //falta la url de la api
  url: string = "http//";

  constructor(private http: HttpClient) { }
  obtenerDatos(): Observable<any>{
    //acceso al json
    //con el get se obtienen el json
    return this.http.get('./assets/data/data.json');

    /*retornar los datos del backend. Falta terminar*/
    //return this.http.get<any>(this.url + "persona");//obtiene los datos personales
  }

  /*METODO PARA OBTENER DATOS
  obtenerDatos() {
    console.log("El servicio porfolio esta corriendo");
  }*/
}
