//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';



const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    //{ path: '**', component: PageNotFoundComponent },
];

/*@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})*/
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

