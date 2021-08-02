import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EmptyInput, OfferId, Offers, Offer } from './offer_pb';
import * as ttt from './offer_pb_2'

let items = [];
let tmp = new Offer();
tmp.setId(1);
tmp.setTitle("tea");
items.push(tmp);
let tmp2 = new Offer();
tmp2.setId(2);
tmp2.setTitle("milk");
items.push(tmp2);
let tmp3 = new Offer();
tmp3.setId(3);
tmp3.setTitle("alcohol");
items.push(tmp3);

@Controller()
export class OfferController {
  @GrpcMethod('SbmmOffer', 'FindOne')
  findOne(data: any): Offer {
    console.log("grpc server: findOne");
    console.log(JSON.stringify(data));
    console.log(ttt.OfferId.deserializeBinary(data));
    let targetOffer = items.find(({ id }) => id === data.id);
    if(targetOffer){
      console.log(JSON.stringify(targetOffer))
      return targetOffer;
    }
    return new Offer;
  }

  @GrpcMethod('SbmmOffer', 'FindAll')
  findAll(data: EmptyInput): Offers {
    console.log("grpc server: findAll");
    let allOffers: Offers = new Offers;
    allOffers.setOffersList(items);
    console.log(JSON.stringify(allOffers));
    return allOffers;
  }
}