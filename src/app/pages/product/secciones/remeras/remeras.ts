import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Indumentaria } from '../../../../models/indumentaria';


@Component({
  selector: 'app-remeras',
  imports: [CommonModule],
  templateUrl: './remeras.html',
  styleUrl: './remeras.css'
})
export class Remeras {

public infoIndumentaria: Indumentaria[];
  constructor(){
    

  this.infoIndumentaria = [
    
       {
        id: 1,
        img: "../../../assets/j1237558-800-800.webp",
        alt: "",
        color: "Blanco",
        titulo: "Jordan",
        precio: 65.999,
        descripcion: "Remera Jordan para Hombre",
        info: "Confeccionada con algodón suave, esta remera clásica pone los gráficos de herencia de Jordan al frente y en el centro. "


      },
      {
       id: 2,
        img: "../../../assets/Rare1334066-800-800.webp",
        alt: "",
        color: "Royal",
        titulo: "Jordan Rare Air",
        precio: 109.999,
        descripcion: "Remera Jordan para Hombre",
        info:"Celebra las imperfecciones que nos hacen únicos con la colección Rare Air de Jordan. Confeccionada con algodón de densidad alta, esta remera de manga corta estructurada combina detalles desgastados con un lavado uniforme para lograr un look perfectamente usado.",
      },
      {
        id: 3,
        img: "../../../assets/Chica1336958-800-800.webp",
        alt: "",
        color: "Rojo",
        titulo: "Chicago Bulls Essential",
        precio: 65.999,
        descripcion: "Remera de Basquet para Hombre",
        info: "Hogar, dulce hogar. Anima a tu equipo con esta remera de algodón suave de los Bulls.",
      },
      {
        id: 4,
        img: "../../../assets/spo1236455-800-800.webp",
        alt:"",
        color: "Azul",
        titulo: "Nike Sportswear",
        precio:54.999,
        descripcion: "Remera de Moda para Hombre",
        info: "La remera Nike Sportswear es una prenda de algodón suave que lleva un logotipo clásico en el pecho.",
      },
      {
        id: 5,
        img: "../../../assets/js1387969-800-800.webp",
        alt:"",
        color: "Azul V",
        titulo: "Jordan Sport",
        precio:69.999,
        descripcion: "Remera Jordan para Hombre",
        info: "Esta es una remera que está hecha para ir por todo. Está confeccionada con una mezcla de algodón suave mejorada con tecnología absorbente de transpiración para mantener la frescura tanto al levantarte como al relajarte.",
      },
      {
        id: 6,
        img: "../../../assets/Esse1527510-800-800.png",
        alt:"",
        color: "Militar",
        titulo: "Nike Sportswear Premium Essentials",
        precio:76.999,
        descripcion: "Remera de Moda para Hombre",
        info: "La remera Nike Sportswear Premium essentials ofrece un ajuste suelto para brindar un look desenfadado y cómodo. Su tela de algodón orgánico de alta densidad se siente gruesa y suave. Este producto está confeccionado con al menos un 75% de fibras de algodón orgánico.",
      },
      {
        id: 7,
        img: "../../../assets/clu489910-1000-1000.webp",
        alt:"",
        color: "Rosa",
        titulo: "Nike Sportswear Club",
        precio:49.999,
        descripcion: "Remera de Moda para Hombre",
        info: "UN OPCIÓN INTELIGENTE PARA TU ACTIVIDAD DIARIA. La remera Nike Sportswear esta confeccionada con nuestra tela de algodón de uso diario en un ajuste clasico que brinda una sensación familiar desde el primer uso.El logotipo de Futura bordado en el pecho te brinda un estilo Nike distintivo.",
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
        descripcion: "Zapatillas de Moda para Hombre ",
        info: "Esta versión premium de los Air Max 1 le dará un toque especial a cualquier atuendo. Viene equipada con materiales mixtos, chapas decorativas y un logotipo Swoosh brillante. Y como un recordatorio amistoso, Los cordones llevan la leyenda It s not me, it's you (No soy yo, eres tú).",
      },
 
  ]

 }
  tarjetaSeleccionada: any = null;
  
  verMas(tarjeta:any){
    this.tarjetaSeleccionada = tarjeta;
  }
}
