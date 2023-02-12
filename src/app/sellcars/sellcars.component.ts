import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from 'src/model/model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sellcars',
  templateUrl: './sellcars.component.html',
  styleUrls: ['./sellcars.component.css']
})
export class SellcarsComponent implements OnInit  {
  registerForm!: FormGroup;
    message = '';
  constructor(private service:ServiceService){}
  ngOnInit(): void {
   this.register();
  }
  register() {
    let car: Car = {
      engineNumber: this.EngineNumber.value,
      brand :this.Brand.value,
      bodyType  :this. BodyType .value,  
       model   :this. Model  .value, 
       year:this.Year.value,   
       fuelType   :this.FuelType .value, 
       mileage    :this. Mileage  .value,
       ownership   :this.Ownership  .value, 
       transmission   :this.Transmission .value, 
       seatingCapacity   :this.SeatingCapacity  .value, 
       rTO    :this.RTO.value,
       color   :this.Color .value, 
       kmDriven  :this.KmDriven  .value,  
       location   :this.Location .value, 
       price:this.Price.value
    };

    this.service.AddcarDetails(car).subscribe((res: any) => {
      window.alert("Added")
    });
    
  };
 get EngineNumber():FormControl{
  return this.registerForm.get('engineNumber') as FormControl;
 }
 get BodyType():FormControl{
  return this.registerForm.get('bodyType') as FormControl;
  }
  get Brand (): FormControl {
    return this.registerForm.get('brand ') as FormControl;
  }

  get Model(): FormControl {
    return this.registerForm.get('model') as FormControl;
  }
  get Year(): FormControl {
    return this.registerForm.get('year ') as FormControl;
  }
  get FuelType(): FormControl {
    return this.registerForm.get('fuelType ') as FormControl;
  } get Mileage (): FormControl {
    return this.registerForm.get('mileage ') as FormControl;
  } get Ownership(): FormControl {
    return this.registerForm.get('ownership ') as FormControl;
  }
  get Transmission (): FormControl {
    return this.registerForm.get('transmission  ') as FormControl;
  }
  get SeatingCapacity (): FormControl {
    return this.registerForm.get('seatingCapacity ') as FormControl;
  }
  get RTO(): FormControl {
    return this.registerForm.get('rTO') as FormControl;
  }
  get Color(): FormControl {
    return this.registerForm.get('color') as FormControl;
  }
  get KmDriven(): FormControl {
    return this.registerForm.get('kmDriven') as FormControl;
  }
  get Location (): FormControl {
    return this.registerForm.get('location') as FormControl;
  }
  get Price(): FormControl {
    return this.registerForm.get('price') as FormControl
  }
  get IsCarAvailable(): FormControl {
    return this.registerForm.get('isCarAvailable') as FormControl;
}

}