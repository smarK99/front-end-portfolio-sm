export class Skill {
    idSkill?: number;
    nombreSkill: string;
    porcentaje: number;

    constructor(nombre: string, porcentaje: number){
        this.nombreSkill = nombre;
        this.porcentaje = porcentaje;
    }
}
