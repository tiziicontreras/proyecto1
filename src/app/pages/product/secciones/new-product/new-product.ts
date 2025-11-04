import { Component } from '@angular/core';
import { Indumentaria } from '../../../../models/indumentaria';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../product';


/*
  FormControl = Controlador de cada dato ingresado en el formulario
  FormGriup = Directiva para formularios reactivos en Angular, agrupa FromControl
  ReactiveFormsModule = Permite hacer uso de formularios reactivos
  Validators = Valida datos ingresados en un formulario
*/

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
/* Propiedades PRIVADA -> informacion sensible */

  private contadorId= 1;
  /* Coleccion de productos de tipo PRODUCTO */
  coleccionProductos: Indumentaria[] = [];
  /* Instancia que se vincula con el formulario desde el HTML */
  /* nombrePropiedad: new Control ->
  string -> "" / number -> null
  Validators.required -> validado como valor requerido estrictamente
  */
  nuevoProducto = new FormGroup ({
    nombre: new FormControl ("",Validators.required),
    descripcion: new FormControl("",Validators.required),
    precio: new FormControl(null, Validators.required),
    img:new FormControl(""),
    alt:new FormControl(""),
  });
  
  /**  
   @description Metodo de creacion de productos segun interfaz de "producto"
  **/
  crearProducto(): void{
    if(this.nuevoProducto.valid){
      const nuevoProducto: Indumentaria = {
        /* Id ->asignamos contador para que sea autoincrementable */
        id: this.contadorId++,
        /* 
        resto de propiedades, asignamos desde el formulario el valor
        que recibio desde su casilla o formControlName
        */
        nombre: this.nuevoProducto.value.nombre!,
        
      }
      this.coleccionProductos.push(nuevoProducto);
      console.log("Producto agregado: ", nuevoProducto );
      console.log("Coleccion actaul de productos: ",this.coleccionProductos);
      this.nuevoProducto.reset()
    }
  }
}
