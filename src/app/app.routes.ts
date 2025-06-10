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
        path: 'anchor',
        loadComponent: () => import('../app/pages/anchor/anchor.component').then(component => component.AnchorComponent)
    },
    {
        path: 'componentes',
        children: [
            {
                path: '',
                loadComponent: () => import('../app/pages/componentes/componentes.component').then(component => component.ComponentesComponent),
            },
            {
                path: 'botoes',
                loadComponent: () => import('../app/pages/componentes/botoes/botoes.component').then(component => component.BotoesComponent),
            }
        ]
    }
];
