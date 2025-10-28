import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Indumentaria } from '../../models/indumentaria';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 public infoIndumentaria: Indumentaria[];

 constructor(){
  this.infoIndumentaria = [
    
       {
        id: 1,
        img: "../../../assets/1335299-1000-1000 jordan1.webp",
        alt: "",
        color: "Gris",
        titulo: "Jordan 1 Low SE",
        precio: "",
        descripcion: "Zapatillas Jordan para Hombre",
        info: "Esta nueva versión de los AJ1 aporta nueva energía a los tonos neutros. El cuero suave y premium y la clásica amortiguación Nike Air te brindan la calidad y la comodidad que esperas de Jordan."


      },
      {
       id: 2,
        img: "../../../assets/155412-1000-1000 Air Force 1.webp",
        alt: "",
        color: "Blanco",
        titulo: "Air Force 1 '07",
        precio: "",
        descripcion: "Zapatillas de Moda para Hombre",
        info:"El resplandor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
      },
      {
        id: 3,
        img: "../../../assets/1427563-1000-1000 waffle.webp",
        alt: "",
        color: "Azul",
        titulo: "Nike Air Max Waffle SP",
        precio: "",
        descripcion: "Zapatillas de Moda para Hombre",
        info: "Los Air Max Waffle fusionan dos de las zapatillas más revolucionarios de Nike para crear un nuevo diseño audaz basado en la herencia. Toman la entresuela exclusiva y la experiencia Tuned Air de los Air Max Plus y las combinan con la parte superior ligera y la suela tipo waffle de los famosos zapatillas de entrenamiento Waffle de la era de auge del running de los años 70, una época en la que la posición de Nike ganaba terreno a cada paso.",
      },
      {
        id: 4,
        img: "../../../assets/ojotas773166-1000-1000.webp",
        alt: "",
        color: "Negro",
        titulo: "Nike Offcourt Adjust",
        precio:"",
        descripcion: "Sandalias de Moda para Hombre",
        info: "Después del partido, al hacer los mandados y más: ajusta tu comodidad sobre la marcha. La correa acolchada regulable te permite perfeccionar el ajuste, mientras que la entresuela de espuma ligera brinda comodidad de primer nivel a tus pies."
      },
      {
        id: 5,
        img: "../../../assets/1218360-1000-1000.webp",
        alt:"",
        color: "Negro",
        titulo: "Nike Pegasus Trail 5",
        precio:"",
        descripcion: "Zapatillas de Trail para Hombre",
        info: "Despliega tus alas y observa lo que te depara la naturaleza mientras recorrés caminos de tierra con los Peg Trail 5. Ahora equipados con una entresuela de espuma ReactX Foam ultrarresponsiva, estos zapatillas son una verdadera amenaza doble, ansiosa por cruzar la línea que separa la tierra de las pistas.",
      },
      {
        id: 6,
        img: "../../../assets/1457792-1000-1000.webp",
        alt:"",
        color: "Negro",
        titulo: "Air Jordan 1 Low Premium",
        precio:"",
        descripcion: "Zapatillas Jordan para Hombre",
        info: "Inspirados en los originales que se lanzaron en 1985, los Air Jordan 1 Low Premium ofrecen un estilo clásico impecable que se ve familiar, pero siempre viene renovado. Con un diseño icónico que combina a la perfección con cualquier look, Estas zapatillas garantizan que siempre lucirás excelente.",
      },
      {
        id: 7,
        img: "../../../assets/reme1549894-1000-1000.webp",
        alt:"",
        color: "Negro",
        titulo: "Nike Total 90",
        precio: "",
        descripcion: "Remera de Fútbol para Hombre",
        info:"Total 90 ha vuelto. Esta remera de algodón suave canaliza la energía de principios de los 2000 de los icónicos kits de fútbol de Nike."
      },
      {
        id: 8,
        img: "../../../assets/tech1577734-1000-1000.webp",
        alt: "",
        color: "Oliva Neutro",
        titulo: "Nike Tech",
        precio: "",
        descripcion: "Campera de Moda para Hombre",
        info:"El look resistente de una chamarra de fatiga camuflajeada recibe una actualización técnica. Nuestra versión está confeccionada con una mezcla de tela de nylon fresca y arrugada que absorbe el sudor y es ligeramente elástica. La articulación en los codos y los cordones elásticos en el dobladillo y el gorro se combinan para crear una comodidad versátil."
      }
 
  ]

 }
  tarjetaSeleccionada: any = null;
  
  verMas(tarjeta:any){
    this.tarjetaSeleccionada = tarjeta;
  }
}
