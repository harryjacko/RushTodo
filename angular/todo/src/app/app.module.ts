import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		RegisterComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
