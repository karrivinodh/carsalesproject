import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BuycarComponent } from './pages/buycar/buycar.component';
import { HttpClientModule } from '@angular/common/http';
import { FinanceandinsuranceComponent } from './pages/financeandinsurance/financeandinsurance.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CardetailsComponent } from './pages/cardetails/cardetails.component';
import { Cardetails1Component } from './pages/cardetails1/cardetails1.component';
import { Cardetails2Component } from './pages/cardetails2/cardetails2.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SellcarsComponent } from './sellcars/sellcars.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    ContactusComponent,
    AboutusComponent,
    BuycarComponent,
 
    FinanceandinsuranceComponent,
  
   
    CardetailsComponent,
    Cardetails1Component,
    Cardetails2Component,
    SubmitComponent,
    PaymentComponent,
    SellcarsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
