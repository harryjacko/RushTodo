import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
