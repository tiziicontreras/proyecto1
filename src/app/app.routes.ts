import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Zapatillas } from './pages/product/secciones/zapatillas/zapatillas';
import { Remeras } from './pages/product/secciones/remeras/remeras';
import { NewProduct } from './pages/product/secciones/new-product/new-product';



export const routes: Routes = [
    {
        /*Definimos ruta general o raiz en especifico que nos lleve a la ruta Home -> principal*/
        path: "",component: Home
    },
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "product", component: Product},
    {path: "contact", component: Contact},
    {path: "Zapatillas", component: Zapatillas},
     {path: "remeras", component: Remeras},
     {path: "new-product", component: NewProduct},

  
];
