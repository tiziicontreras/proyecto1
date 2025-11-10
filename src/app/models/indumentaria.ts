
// Definimos una interfaz llamada 'Indumentaria'
export interface Indumentaria {
    id: number; //numeros como letras -> ej : 123AB / 123 / ABC

     // El signo '?' indica que este campo no es obligatorio
     //Propiedades
    img?: string;
    alt?: string;
    titulo: string;
    precio: number;
    color: string;
    descripcion: string;
    info: string;

}
