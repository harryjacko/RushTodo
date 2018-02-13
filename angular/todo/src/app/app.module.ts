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
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import {SessionService} from './session.service';
import { CreateComponent } from './create/create.component';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		RegisterComponent,
		HomeComponent,
		CreateComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatInputModule,
		MatListModule,
	],
	providers: [SessionService],
	bootstrap: [AppComponent]
})
export class AppModule { }
