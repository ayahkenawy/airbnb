import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UserPageService } from 'src/app/services/user-page.service';
import { Category } from 'src/app/_models/category';
import { HostProperties } from 'src/app/_models/host-properties';
import { Iprofile } from 'src/app/_models/iprofile';
import { PropertyTypes } from 'src/app/_models/property-types';
import { SubCategory } from 'src/app/_models/sub-category';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css'],
})
export class HostProfileComponent implements OnInit {
  router: any;
  constructor(
    public ar:ActivatedRoute,
    public HostProperty: HostService,
    public userName: ProfileService,
   //public property:HostService,
    public propertyT:HostService,
    public Category:HostService,
    public subCategory:HostService,

  ) {}

  hostProp: HostProperties=new HostProperties(0,"","","",0,0,0,0,0,"",0,"","","",0,0,0,0,true,new Date(),new Date(),0,0,"",0,"",true,"","",true);
  HostName: Iprofile | null = null;
  geniralProperty:HostProperties[]=[];
  properyType:PropertyTypes[]=[];
  hostCategory:Category[]=[];
  hostSubCategory:SubCategory[]=[];

  ngOnInit(): void {
    this.HostPropertyById();
    this.hostName();
    this.getPropertyType();
    this.getCategory();
  }

  HostPropertyById() {
    this.HostProperty.getPropertiesByHostId().subscribe(
      (req) => (
         this.geniralProperty = req
        )
    );
  }

  hostName(){
    this.userName.getUserData().subscribe(
      (req)=>{this.HostName=req}
    );
  }

 

  getPropertyType(){
    this.propertyT.getAllPropertyType().subscribe((req)=>this.properyType=req);
  }

  getCategory(){
    this.Category.getAllCategory().subscribe((req)=>this.hostCategory=req);
  }

  getSubCategory()
{
  this.subCategory.getAllSubCategory().subscribe((req)=>this.hostSubCategory=req)
}


deleteProperty(){
     this.HostProperty.deleteProperty(this.hostProp)
     .subscribe((req)=>console.log(req));
    this.router.navigateByUrl("/hostProfile")

  
  
}


}
