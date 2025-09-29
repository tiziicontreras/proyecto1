import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "product", component: Product},
    {path: "contact", component: Contact},
];
