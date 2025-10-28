import { Component } from '@angular/core';
import { Indumentaria } from '../../../../models/indumentaria';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/*
  FormControl = Controlador de cada dato ingresado en el formulario
  FormGriup = Directiva para formularios reactivos en Angular, agrupa FromControl
  ReactiveFormsModule = Permite hacer uso de formularios reactivos
  Validators = Valida datos ingresados en un formulario
*/

@Component({
  selector: 'app-new-product',
  imports: [],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {

}
