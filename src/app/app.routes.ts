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
        path: 'anchor',
        loadComponent: () => import('../app/pages/anchor/anchor.component').then(component => component.AnchorComponent)
    },
    {
        path: 'flexbox',
        loadComponent: () => import('../app/pages/flexbox/flexbox.component').then(component => component.FlexboxComponent)
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
