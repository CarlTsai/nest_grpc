// package: offer
// file: offer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as offer_pb from "./offer_pb";

interface ISbmmOfferService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findOne: ISbmmOfferService_IFindOne;
    findAll: ISbmmOfferService_IFindAll;
}

interface ISbmmOfferService_IFindOne extends grpc.MethodDefinition<offer_pb.OfferId, offer_pb.Offer> {
    path: "/offer.SbmmOffer/FindOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offer_pb.OfferId>;
    requestDeserialize: grpc.deserialize<offer_pb.OfferId>;
    responseSerialize: grpc.serialize<offer_pb.Offer>;
    responseDeserialize: grpc.deserialize<offer_pb.Offer>;
}
interface ISbmmOfferService_IFindAll extends grpc.MethodDefinition<offer_pb.EmptyInput, offer_pb.Offers> {
    path: "/offer.SbmmOffer/FindAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offer_pb.EmptyInput>;
    requestDeserialize: grpc.deserialize<offer_pb.EmptyInput>;
    responseSerialize: grpc.serialize<offer_pb.Offers>;
    responseDeserialize: grpc.deserialize<offer_pb.Offers>;
}

export const SbmmOfferService: ISbmmOfferService;

export interface ISbmmOfferServer {
    findOne: grpc.handleUnaryCall<offer_pb.OfferId, offer_pb.Offer>;
    findAll: grpc.handleUnaryCall<offer_pb.EmptyInput, offer_pb.Offers>;
}

export interface ISbmmOfferClient {
    findOne(request: offer_pb.OfferId, callback: (error: grpc.ServiceError | null, response: offer_pb.Offer) => void): grpc.ClientUnaryCall;
    findOne(request: offer_pb.OfferId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offer_pb.Offer) => void): grpc.ClientUnaryCall;
    findOne(request: offer_pb.OfferId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offer_pb.Offer) => void): grpc.ClientUnaryCall;
    findAll(request: offer_pb.EmptyInput, callback: (error: grpc.ServiceError | null, response: offer_pb.Offers) => void): grpc.ClientUnaryCall;
    findAll(request: offer_pb.EmptyInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offer_pb.Offers) => void): grpc.ClientUnaryCall;
    findAll(request: offer_pb.EmptyInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offer_pb.Offers) => void): grpc.ClientUnaryCall;
}

export class SbmmOfferClient extends grpc.Client implements ISbmmOfferClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public findOne(request: offer_pb.OfferId, callback: (error: grpc.ServiceError | null, response: offer_pb.Offer) => void): grpc.ClientUnaryCall;
    public findOne(request: offer_pb.OfferId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offer_pb.Offer) => void): grpc.ClientUnaryCall;
    public findOne(request: offer_pb.OfferId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offer_pb.Offer) => void): grpc.ClientUnaryCall;
    public findAll(request: offer_pb.EmptyInput, callback: (error: grpc.ServiceError | null, response: offer_pb.Offers) => void): grpc.ClientUnaryCall;
    public findAll(request: offer_pb.EmptyInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offer_pb.Offers) => void): grpc.ClientUnaryCall;
    public findAll(request: offer_pb.EmptyInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offer_pb.Offers) => void): grpc.ClientUnaryCall;
}
