import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BuycarComponent } from './pages/buycar/buycar.component';
import { CardetailsComponent } from './pages/cardetails/cardetails.component';
import { Cardetails1Component } from './pages/cardetails1/cardetails1.component';
import { Cardetails2Component } from './pages/cardetails2/cardetails2.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FinanceandinsuranceComponent } from './pages/financeandinsurance/financeandinsurance.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SellcarsComponent } from './sellcars/sellcars.component';
import { SubmitComponent } from './pages/submit/submit.component';


const routes: Routes = [
 {path:'',component:HomepageComponent},
 {path:'aboutus',component:AboutusComponent},
 {path:'buycar',component:BuycarComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'financeandinsurance',component:FinanceandinsuranceComponent},
 {path:'sellcars',component:SellcarsComponent},
 {path:'home',component:HomepageComponent},
 {path:'cardetails',component:CardetailsComponent},
 {path:'cardetails1',component:Cardetails1Component},
 {path:'cardetails2',component:Cardetails2Component},
 {path:'submit',component:SubmitComponent},
 {path:'payment',component:PaymentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



