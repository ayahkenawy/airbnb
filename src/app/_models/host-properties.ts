import { Category } from "./category";
import { Currencies } from "./currencies";
import { PropertyTypes } from "./property-types";
import { RoomType } from "./room-type";

export class HostProperties {
  constructor() {}
  id: number = 0;
  name: string = '';
  userId: number = 0;
  description: string = '';
  propertyTypeId:PropertyTypes|null=null;
  roomTypeId: RoomType|null=null ;
  categoryId: Category|null=null;
  countryId: number = 0;
  stateId: any;
  cityId: number = 0;
  address: string = '';
  latitude: string = '';
  longitude: string = '';
  bedroomCount: number = 0;
  bedCount: number = 0;
  bathroomCount: number = 0;
  accomodatesCount: number = 0;
  availabilityType: boolean = true;
  // wrwq
  price: number = 0;
  currencyId:Currencies|null=null;
  priceType: any;
  // minimumStay: number = 0;
  // minimumStayType: any;
  refundType: boolean = true;
  created: Date = new Date();
  modified: Date = new Date();
  status: boolean = true;
  Url: string = '';
}
