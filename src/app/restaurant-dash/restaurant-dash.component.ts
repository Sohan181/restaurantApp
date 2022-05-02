import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {
   title = 'restaurantApp';
   formValue !: FormGroup

   constructor(private formBuilder: FormBuilder){}
      ngOnInit(): void {
      this.formValue = this.formBuilder.group({
        name: [''],
        email: [''],
        mobile: [''],
        address: [''],
        services: [''],
      });

    }
    addResto(){}
}




