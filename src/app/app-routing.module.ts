import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)
    },
    {
        path: 'category/:name',
        loadChildren: () => import('./pages/category-page/category-page.module').then(m => m.CategoryPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
