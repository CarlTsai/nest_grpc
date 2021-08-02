// GENERATED CODE -- DO NOT EDIT!
'use strict';

var grpc = require('grpc');

var offer_pb = require('./offer_pb.js');

function serialize_offer_EmptyInput(arg) {
  if (!(arg instanceof offer_pb.EmptyInput)) {
    throw new Error('Expected argument of type offer.EmptyInput');
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_offer_EmptyInput(buffer_arg) {
  return offer_pb.EmptyInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_offer_Offer(arg) {
  if (!(arg instanceof offer_pb.Offer)) {
    throw new Error('Expected argument of type offer.Offer');
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_offer_Offer(buffer_arg) {
  return offer_pb.Offer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_offer_OfferId(arg) {
  if (!(arg instanceof offer_pb.OfferId)) {
    throw new Error('Expected argument of type offer.OfferId');
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_offer_OfferId(buffer_arg) {
  return offer_pb.OfferId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_offer_Offers(arg) {
  if (!(arg instanceof offer_pb.Offers)) {
    throw new Error('Expected argument of type offer.Offers');
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_offer_Offers(buffer_arg) {
  return offer_pb.Offers.deserializeBinary(new Uint8Array(buffer_arg));
}

var SbmmOfferService = exports.SbmmOfferService = {
  findOne: {
    path: '/offer.SbmmOffer/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: offer_pb.OfferId,
    responseType: offer_pb.Offer,
    requestSerialize: serialize_offer_OfferId,
    requestDeserialize: deserialize_offer_OfferId,
    responseSerialize: serialize_offer_Offer,
    responseDeserialize: deserialize_offer_Offer
  },
  findAll: {
    path: '/offer.SbmmOffer/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: offer_pb.EmptyInput,
    responseType: offer_pb.Offers,
    requestSerialize: serialize_offer_EmptyInput,
    requestDeserialize: deserialize_offer_EmptyInput,
    responseSerialize: serialize_offer_Offers,
    responseDeserialize: deserialize_offer_Offers
  }
};
exports.SbmmOfferClient = grpc.makeGenericClientConstructor(SbmmOfferService);
