//Esta carpeta model representa el modelo que tenemos en la base de datos y en el back
export class Persona{
    idPersona?: number;
    name: string;
    surname: string;
    title: string;
    city: string;
    imgProfile: string;
    imgBanner: string;
    email: string;
    aboutme: string;
    
    constructor(name:string, surname:string, title:string, city:string, imgProfile:string, imgBanner:string, email:string, aboutme:string){
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.city = city;
        this.imgProfile = imgProfile;
        this.imgBanner = imgBanner;
        this.email = email;
        this.aboutme = aboutme;
    }

}