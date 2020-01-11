/**
 * Ionic 4 Taxi Booking Complete App (https://store.enappd.com/product/taxi-booking-complete-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiclemanagement',
  templateUrl: './vehiclemanagement.page.html',
  styleUrls: ['./vehiclemanagement.page.scss'],
})
export class VehiclemanagementPage implements OnInit {
  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };
  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };
  public data = [{
    'name': 'Madza',
    'car_no': '43A 235 70',
    'icon': 'paper',
  },
  {
    'name': 'Mitshubishi Outlander',
    'car_no': '43A 125 70',
    'icon': 'paper',
  }];
  
  constructor(public modalCtrl: ModalController, public nativePageTransitions: NativePageTransitions, public route: Router) { }

  ngOnInit() {
  }

  openpageTRansition() {
    this.route.navigate(['addnewvehicle']);
  }
  
}
