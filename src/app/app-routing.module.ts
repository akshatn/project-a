import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { VetRegistrationComponent } from './registration/vet-registration/vet-registration.component';
import { PetOwnerRegistrationComponent } from './registration/pet-owner-registration/pet-owner-registration.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [

	{ path : "home", component :  HomeComponent},
	{ path : "login", component :  LoginComponent},
	{ path : "vetRegistration", component : VetRegistrationComponent},
	{ path : "petOwnerRegistration", component :  PetOwnerRegistrationComponent},
	{ path : "", redirectTo : '/home', pathMatch : 'full'}
	
];

@NgModule({
	exports : [ RouterModule],
	imports : [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
