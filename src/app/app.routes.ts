import { Routes } from '@angular/router';
import { WelcomeComponent } from '../shared/components/welcome/welcome.component';
import { CategoryDetailsComponent } from '../shared/components/category-details/category-details.component';
import { productDetailGuard } from '../shared/services/product-detail.guard';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'details', component: CategoryDetailsComponent },
    { path: 'category/:id', canActivate: [productDetailGuard], component: CategoryDetailsComponent, },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: WelcomeComponent, pathMatch: 'full' }
];
