import { Component, OnInit } from '@angular/core';
import { ServicemangerService } from '../../core/servicemanger.service';
import { Airport } from '../../models/airport';
import { Flight } from '../../models/flight';
import { TravelClass } from '../../models/travel-class';

@Component({
  selector: 'app-search-process',
  templateUrl: './search-process.component.html',
  styleUrls: ['./search-process.component.css'],
})
export class SearchProcessComponent implements OnInit {
  //Variable declaration and initialization

  adultLimitData!: number[];
  childrenLimitData!: number[];
  infantsLimitData!: number[];

  //Calling Airport model class to check the type
  airportsdetails: Airport[] = [];
  cities = {
    airports: this.airportsdetails,
  };

  //Calling Flight model class to check the type
  airlinedetails: Flight[] = [];
  airline = {
    flights: this.airlinedetails,
  };

  //Calling Travel class model class to check the type
  traveldetails: TravelClass[] = [];
  travel = {
    travelClasses: this.traveldetails,
  };
  fromCity!: string;
  toCity!: string;

  //Dependancy Injection
  constructor(
    private searchManager: ServicemangerService,
  ) {}

  ngOnInit(): void {
    //Calling the methods of the Search manager service file
    this.adultLimitData = this.searchManager.getAdultLimit();
    this.childrenLimitData = this.searchManager.getChildrenLimit();
    this.infantsLimitData = this.searchManager.getInfantsLimit();
    this.cities = this.searchManager.getAirports();

    this.travel = this.searchManager.getTravelClasses();
    this.airline = this.searchManager.getAirline();
  }


  
  //Alert mesaage if the user select same city for both from and to city
  selectedFromvalue(e: any) {
    this.fromCity = e.target.value;
    // write the code here to get a alert message when user select same city for both From and To city
  }



//Alert mesaage if the user select same city for both from and to city
  selectedTovalue(e: any) {
    this.toCity = e.target.value;
    // write the code here to get a alert message when user select same city for both From and To city

  }
}
