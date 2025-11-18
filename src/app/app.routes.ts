// Importamos la interfaz Routes para definir la configuración de rutas
import { Routes } from '@angular/router';
// Importamos los componentes que se usarán en las rutas
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Zapatillas } from './pages/product/secciones/zapatillas/zapatillas';
import { Remeras } from './pages/product/secciones/remeras/remeras';
import { NewProduct } from './pages/product/secciones/new-product/new-product';
import { Oferta } from './pages/oferta/oferta';



// Definimos el arreglo de rutas de la aplicación
export const routes: Routes = [
    {
        /*Definimos ruta general o raiz en especifico que nos lleve a la ruta Home -> principal*/
        path: "",component: Home
    },
    // Ruta alternativa para Home
    {path: "home", component: Home},
    // Ruta hacia la página About
    {path: "about", component: About},
    {path: "product", component: Product},
    {path: "contact", component: Contact},
    {path: "Zapatillas", component: Zapatillas},
     {path: "remeras", component: Remeras},
    {path: "new-product", component: NewProduct},
    {path: "oferta", component: Oferta}

  
];
