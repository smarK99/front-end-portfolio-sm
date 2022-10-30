//Esta carpeta model representa el modelo que tenemos en la base de datos y en el back
export class Persona{
    idPersona?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    ciudad: string;
    img: string;
    email: string;
    aboutMe: string;
    
    constructor(nombre:string, apellido:string, titulo:string, ciudad:string, img:string, email:string, aboutMe:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.ciudad = ciudad;
        this.img = img;
        this.email = email;
        this.aboutMe = aboutMe;
    }

}