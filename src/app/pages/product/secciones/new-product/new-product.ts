import { Component } from '@angular/core';
import { Registrarse } from '../../../../models/registrarse';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';



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
  coleccionProductos: Registrarse[] = [];


  /* Instancia que se vincula con el formulario desde el HTML */
  /* nombrePropiedad: new Control ->
  string -> "" / number -> null
  Validators.required -> validado como valor requerido estrictamente
  */

// FormControl -> representa un campo individual dentro de un formulario reactivo.
 //FormControl = Controlador de cada dato ingresado en el formulario
// Se crea un nuevo formulario reactivo usando FormGroup
  nuevoFormulario = new FormGroup ({
    email: new FormControl("",Validators.required),
    nombre: new FormControl ("",Validators.required),
    contraseña: new FormControl("", Validators.required),
    apellido: new FormControl("",Validators.required)
  });
  
  /**  
   @description Metodo de creacion de productos segun interfaz de "producto"
  **/
  enviarformulario(): void{
    if(this.nuevoFormulario.valid){
      const nuevoFormulario: Registrarse = {
        nombre:this.nuevoFormulario.value.nombre!,
        apellido: this.nuevoFormulario.value.apellido!, 
        email: this.nuevoFormulario.value.email!,
        contraseña: this.nuevoFormulario.value.contraseña!
      
      }
      this.coleccionProductos.push(nuevoFormulario);
      console.log("Registro enviado");
      this.nuevoFormulario.reset()
    }
  }
}
