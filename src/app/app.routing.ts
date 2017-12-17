import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },   
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent }

];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });