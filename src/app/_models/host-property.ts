import { CurrencyPipe } from "@angular/common";

export interface HostProperty {

    name: string,
    description: string,
    propertyTypeId: number,
    roomTypeId: number,
    categoryId: number,
    subcategoryId: number,
    countryId: number,
    stateId: any,
    cityId: number,
    address: string,
    latitude: string,
    longitude: string,
    bedroomCount: number,
    bedCount: number,
    bathroomCount: number,
    accomodatesCount: number,
    availabilityType: boolean,
    startDate: Date,
    endDate: Date,
    price: CurrencyPipe,
    currencyId: number,
    priceType: any,
    minimumStay: number,
    minimumStayType: any,
    refundType: boolean,
    created: any,
    modified: any,
    status: boolean
}
