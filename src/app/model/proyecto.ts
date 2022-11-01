export class Proyecto {
    idProyecto?: number;
    nombreProyecto: string;
    descripcionProy: string;
    urlProy: string;

    constructor(nombreProyecto: string, descripcionProy: string, urlProy: string){
        this.nombreProyecto = nombreProyecto;
        this.descripcionProy = descripcionProy;
        this.urlProy = urlProy;
    }
}
