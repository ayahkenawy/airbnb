import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/services/host.service';
import { Category } from 'src/app/_models/category';
import { Cities } from 'src/app/_models/cities';
import { Countries } from 'src/app/_models/countries';
import { Currencies } from 'src/app/_models/currencies';
import { HostProperties } from 'src/app/_models/host-properties';
import { PropertyTypes } from 'src/app/_models/property-types';
import { RoomType } from 'src/app/_models/room-type';
import { SubCategory } from 'src/app/_models/sub-category';

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css'],
})
export class HostPageComponent {
  constructor(public hostService: HostService) {}
  propType: PropertyTypes[] = [];
  Countries: Countries[] = [];
  Cities: Cities[] = [];
  roomType: RoomType[] = [];
  category: Category[] = [];
  subCategory:SubCategory[]=[];
  curency: Currencies[] = [];
    // oject from hostProp to send it to API/////////////
    newProp = new HostProperties();




  selectedCountry = '';
  selectedCity = '';

  ngOnInit(): void {
    this.getAllCountries();
    this.getAllCities();
    this.getPropType();
    this.getRoomType();
    this.getPropCategory();
    this.getCarency();
    this.getSubCategory();
  }

  getAllCountries() {
    this.hostService.getContries().subscribe((country) => {
      this.Countries = country;
      console.log(this.Countries);
    });
  }
  getAllCities() {
    this.hostService.getCities().subscribe((city) => {
      this.Cities = city;
    });
  }
  getPropType() {
    this.hostService.getAllPropertyType().subscribe((req) => {
      this.propType = req;
      console.log(req);
    });
  }
  getRoomType() {
    this.hostService.getRoomType().subscribe((type) => {
      this.roomType = type;
    });
  }
  getPropCategory() {
    this.hostService.getAllCategory().subscribe((cat) => {
      this.category = cat;
    });
  }
  getSubCategory(){
    this.hostService.getAllSubCategory().subscribe((sub)=>{
      this.subCategory=sub
    })
  }
  getCarency() {
    this.hostService.getCurrencies().subscribe((c) => {
      this.curency = c;
    });
  }


  //getting Data from user ////////////////////
  getProPTypeID(propTypeID:any){
    this.newProp.propertyTypeId=propTypeID;
     }
  getRoomTypeId(roomTypeId:any){
   this.newProp.roomTypeId=roomTypeId;

  }
  getCatID(categoryId:any){
    this.newProp.categoryId=categoryId;

    }
  getSubCatId(subId:any){
    this.newProp.subcategoryId=subId
    this.newProp.subcategoryId
  }
  getCountryId(country: any) {
    this.newProp.countryId = country;
  }
  getCityId(c:any){
    this.newProp.cityId=c
 }
 getCurencyId(cu:any){
  this.newProp.currencyId=cu
 }
 addNewProperty(){
  this.hostService.AddProperty(this.newProp).subscribe((prop)=>{
  })
  console.log(this.newProp)
  this.hostService.getAllProperties().subscribe(f=>{console.log(f)})
 }

}
