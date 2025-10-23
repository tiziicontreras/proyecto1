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
        img: "../../../assets/1335299-1000-1000 jordan1.webp",
        alt: "foto",
        titulo: "Remeras",
        descripcion: "todo tipo",
        fechaPublicacion: 2025
      },
      {
       id: "2T",
        img: "../../../assets/155412-1000-1000 Air Force 1.webp",
        alt: "foto",
        titulo: "Zapatillas",
        descripcion: "Vestir",
        fechaPublicacion: 2025 
      },
      {
        id: "3T",
        img: "../../../assets/1427563-1000-1000 waffle.webp",
        alt: "foto",
        titulo: "Tienda compa",
        descripcion: "flama",
        fechaPublicacion: 2025
      }
    
  ]
 }
}
