import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarsService } from './../cars.service';
import { ICar } from './../car';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  idCar="";
  carLoading=false;
  constructor(private route: ActivatedRoute ,private _carService: CarsService) { }

public currentCar: ICar;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.idCar = id;
    this.carLoading=true;
    this._carService.getCar(this.idCar).subscribe(data => {
      this.currentCar = data;
      this.carLoading=false;
    });
  }

}
