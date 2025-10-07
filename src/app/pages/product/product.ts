import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  /*
  Propiedad PUBLICA: Libre acceso a su contenido
    Propiedad PRIVADA: Contenido restringido
  */
  public infoTarjera: Tarjeta[];

  /* 
  Declaramos coleccion de tarjetas en base a modelo de interfaz "Tarjeta"
  - Se tiene que respetar el uso de todas las propiedades y su tipo
  - Tipo alfanumerico (string) inicializa en ""
  - Tipo numerico (number) inicializa en 0
  */

  constructor(){
    this.infoTarjera = [
      {
        id: "1T",
        img: "../../../assets/gettyimages-2222589873-612x612.jpg",
        alt: "foto",
        titulo: "Tienda compa",
        descripcion: "flama",
        fechaPublicacion: 2025
      },
      {
       id: "2T",
        img: "../../../assets/71HxqwN70xL.jpg",
        alt: "foto",
        titulo: "Tienda compa",
        descripcion: "flama",
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
