import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }  from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CarsService } from './../cars.service';
import { ICar } from './../car';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;


  public cars:ICar[] = [];

  displayedColumns: string[] = ['Picture', 'Name', 'Power', 'Couple', 'Perf'];

  dataSource = new MatTableDataSource();



  carsLoading = false;

  constructor(private router: Router, private _carService: CarsService) { }

  ngOnInit() {
    console.log(this.sort);

    this.dataSource.sort = this.sort;
    this.carsLoading = true;

    this._carService.getCars()
    .subscribe(data => {

      this.dataSource.sort = this.sort;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;

      console.log(this.dataSource);
      this.carsLoading=false;

    });


  }

  displayCarsDetail(car){
    //console.log(car);
    this._carService.currentCar = car;
    this.router.navigate(['/carsList', car._id ]);
  }

}
