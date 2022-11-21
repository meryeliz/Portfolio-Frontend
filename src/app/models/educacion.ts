export class Educacion {
    id?: number;
    nomEscuela: string;
    descripcion: string;
    ciudad: string;
    fechaInicio: string;
    fechaFin: string;

    constructor(nomEscuela: string, descripcion: string, ciudad: string, fechaInicio:string, fechaFin: string) {
        this.nomEscuela = nomEscuela;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

}


