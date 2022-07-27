import { CONECTION } from "./state.enum";


//Clase contacto
export class Contact {
    name = '';
    surname = '';
    email = '';
    estado = CONECTION.DISCONECT;

    constructor(name, surname, email, estado) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.estado = estado;
    }
}