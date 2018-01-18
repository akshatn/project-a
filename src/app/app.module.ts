/*Angular modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*ngx-bootstrap modules */
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap'
import { BsDatepickerModule}  from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';

/*material modules*/
import { MatTableModule } from '@angular/material';
import { MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MatIconModule} from '@angular/material';


/*animation modules*/
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

/* application components*/
import { AppComponent } from './app.component';
import { TryComponent } from './try/try.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { VetRegistrationComponent } from './registration/vet-registration/vet-registration.component';
import { PetOwnerRegistrationComponent } from './registration/pet-owner-registration/pet-owner-registration.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    LoginComponent,
    RegistrationComponent,
    VetRegistrationComponent,
    PetOwnerRegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatSelectModule, MatOptionModule,
    MatFormFieldModule, MatInputModule, MatStepperModule, MatIconModule,
    AngularFontAwesomeModule,
    AppRoutingModule

  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
