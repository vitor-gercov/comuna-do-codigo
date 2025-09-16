import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/pages/home/home.component').then(component => component.HomeComponent)
    },
    {
        path: 'sobre',
        loadComponent: () => import('../app/pages/sobre/sobre.component').then(component => component.SobreComponent)
    },
    {
        path: 'dialog',
        loadComponent: () => import('../app/pages/dialog/dialog.component').then(component => component.DialogComponent)
    },
    {
        path: 'tooltip',
        loadComponent: () => import('../app/pages/tooltip/tooltip.component').then(component => component.TooltipComponent)
    },
    {
        path: 'accordion',
        loadComponent: () => import('../app/pages/accordion/accordion.component').then(component => component.AccordionComponent)
    }
];
