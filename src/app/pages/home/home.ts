import { Component } from '@angular/core';
import { Indumentaria } from '../../indumentaria';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 public infoIndumentaria: Indumentaria[];

 constructor(){
  this.infoIndumentaria = [
    
       {
        id: "1T",
        img: "../../../assets/1532179-1000-1000re.webp",
        alt: "foto",
        titulo: "Remeras",
        descripcion: "todo tipo",
        fechaPublicacion: 2025
      },
      {
       id: "2T",
        img: "../../../assets/71HxqwN70xL.jpg",
        alt: "foto",
        titulo: "Zapatillas",
        descripcion: "Vestir",
        fechaPublicacion: 2025 
      },
      {
        id: "3T",
        img: "../../../assets/gettyimages-2222589873-612x612.jpg",
        alt: "foto",
        titulo: "Tienda compa",
        descripcion: "flama",
        fechaPublicacion: 2025
      },
      {
       id: "4T",
        img: "../../../assets/71HxqwN70xL.jpg",
        alt: "foto",
        titulo: "Tienda compa",
        descripcion: "flama",
        fechaPublicacion: 2025 
      }
    
  ]
 }
}
