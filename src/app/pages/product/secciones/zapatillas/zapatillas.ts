import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Indumentaria } from '../../../../models/indumentaria';

@Component({
  selector: 'app-zapatillas',
  imports: [CommonModule],
  templateUrl: './zapatillas.html',
  styleUrl: './zapatillas.css'
})
export class Zapatillas {
public infoIndumentaria: Indumentaria[];

 constructor(){
  this.infoIndumentaria = [
    
       {
        id: 1,
        img: "../../../assets/1335299-1000-1000 jordan1.webp",
        alt: "",
        color: "Gris",
        titulo: "Jordan 1 Low SE",
        precio: 249.999,
        descripcion: "Zapatillas Jordan para Hombre",
        info: "Esta nueva versión de los AJ1 aporta nueva energía a los tonos neutros. El cuero suave y premium y la clásica amortiguación Nike Air te brindan la calidad y la comodidad que esperas de Jordan."


      },
      {
       id: 2,
        img: "../../../assets/155412-1000-1000 Air Force 1.webp",
        alt: "",
        color: "Blanco",
        titulo: "Air Force 1 '07",
        precio: 209.999,
        descripcion: "Zapatillas de Moda para Hombre",
        info:"El resplandor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
      },
      {
        id: 3,
        img: "../../../assets/1427563-1000-1000 waffle.webp",
        alt: "",
        color: "Azul",
        titulo: "Nike Air Max Waffle SP",
        precio: 269.999,
        descripcion: "Zapatillas de Moda para Hombre",
        info: "Los Air Max Waffle fusionan dos de las zapatillas más revolucionarios de Nike para crear un nuevo diseño audaz basado en la herencia. Toman la entresuela exclusiva y la experiencia Tuned Air de los Air Max Plus y las combinan con la parte superior ligera y la suela tipo waffle de los famosos zapatillas de entrenamiento Waffle de la era de auge del running de los años 70, una época en la que la posición de Nike ganaba terreno a cada paso.",
      },
      {
        id: 4,
        img: "../../../assets/1218360-1000-1000.webp",
        alt:"",
        color: "Negro",
        titulo: "Nike Pegasus Trail 5",
        precio:259.999,
        descripcion: "Zapatillas de Trail para Hombre",
        info: "Despliega tus alas y observa lo que te depara la naturaleza mientras recorrés caminos de tierra con los Peg Trail 5. Ahora equipados con una entresuela de espuma ReactX Foam ultrarresponsiva, estos zapatillas son una verdadera amenaza doble, ansiosa por cruzar la línea que separa la tierra de las pistas.",
      },
      {
        id: 5,
        img: "../../../assets/1457792-1000-1000.webp",
        alt:"",
        color: "Marfil P",
        titulo: "Air Jordan 1 Low Premium",
        precio:229.999,
        descripcion: "Zapatillas Jordan para Hombre",
        info: "Inspirados en los originales que se lanzaron en 1985, los Air Jordan 1 Low Premium ofrecen un estilo clásico impecable que se ve familiar, pero siempre viene renovado. Con un diseño icónico que combina a la perfección con cualquier look, Estas zapatillas garantizan que siempre lucirás excelente.",
      },
      {
        id: 6,
        img: "../../../assets/Max1066708-1000-1000.webp",
        alt:"",
        color: "coco",
        titulo: "Nike Air Max 1",
        precio:249.999,
        descripcion: "Zapatillas de Moda para Hombre",
        info: "Conoce al líder de la manada. Inspirado en la arquitectura francesa, célebre en el deporte y amado por la moda, son los primeros zapatillas de la familia que dio fama al diseño Air en el mundo. Con un look trepidante, una amortiguación de eficacia demostrada y una protección antilodo clásica ondulada, no es de extrañar que haya reinado de manera indiscutible desde 1987.",
      },
      {
        id: 7,
        img: "../../../assets/Force845611-800-800.webp",
        alt:"",
        color: "Negro",
        titulo: "Nike Air Force 1 '07 Pro-Tech",
        precio:299.999,
        descripcion: "Zapatillas de Moda para Hombre",
        info: "El resplandor vive en el Air Force 1 '07 Pro-Tech, el original de básquetbol que le da un nuevo giro a lo que mejor conoces. Monocromática de arriba a abajo, esta versión tiene materiales impermeables para que puedas salir con estilo sin importar el clima.",
      },
      {
        id: 8,
        img: "../../../assets/Dunk1310226-800-800.webp",
        alt:"",
        color: "Verde",
        titulo: "Nike Dunk Low Retro",
        precio:259.999,
        descripcion: "Zapatillas de Moda para Hombre",
        info: "Siempre puedes contar con un clásico. Los Dunk Low combinan un icónico diseño de colores contrastantes con materiales premium y un acolchado suave para ofrecer una comodidad duradera que cambia las reglas del juego. Tú eliges el look.",
      },
      {
        id: 9,
        img: "../../../assets/Max1P1391196-800-800.webp",
        alt:"",
        color: "Blanco",
        titulo: "Nike Air Max 1 Premium",
        precio:269.999,
        descripcion: "Zapatillas de Moda para Hombre",
        info: "Esta versión premium de los Air Max 1 le dará un toque especial a cualquier atuendo. Viene equipada con materiales mixtos, chapas decorativas y un logotipo Swoosh brillante. Y como un recordatorio amistoso, Los cordones llevan la leyenda It s not me, it's you (No soy yo, eres tú).",
      },
 
  ]

 }
  tarjetaSeleccionada: any = null;
  
  verMas(tarjeta:any){
    this.tarjetaSeleccionada = tarjeta;
  }
  
}


