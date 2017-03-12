import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './components/start/game.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: GameComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);