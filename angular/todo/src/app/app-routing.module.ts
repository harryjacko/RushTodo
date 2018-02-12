import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
	{ path: 'index', component: IndexComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'home', component: HomeComponent }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
