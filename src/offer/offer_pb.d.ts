// package: offer
// file: offer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OfferId extends jspb.Message { 
    getId(): number;
    setId(value: number): OfferId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OfferId.AsObject;
    static toObject(includeInstance: boolean, msg: OfferId): OfferId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OfferId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OfferId;
    static deserializeBinaryFromReader(message: OfferId, reader: jspb.BinaryReader): OfferId;
}

export namespace OfferId {
    export type AsObject = {
        id: number,
    }
}

export class Offers extends jspb.Message { 
    clearOffersList(): void;
    getOffersList(): Array<Offer>;
    setOffersList(value: Array<Offer>): Offers;
    addOffers(value?: Offer, index?: number): Offer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Offers.AsObject;
    static toObject(includeInstance: boolean, msg: Offers): Offers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Offers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Offers;
    static deserializeBinaryFromReader(message: Offers, reader: jspb.BinaryReader): Offers;
}

export namespace Offers {
    export type AsObject = {
        offersList: Array<Offer.AsObject>,
    }
}

export class Offer extends jspb.Message { 
    getId(): number;
    setId(value: number): Offer;
    getTitle(): string;
    setTitle(value: string): Offer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Offer.AsObject;
    static toObject(includeInstance: boolean, msg: Offer): Offer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Offer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Offer;
    static deserializeBinaryFromReader(message: Offer, reader: jspb.BinaryReader): Offer;
}

export namespace Offer {
    export type AsObject = {
        id: number,
        title: string,
    }
}

export class EmptyInput extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyInput.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyInput): EmptyInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyInput;
    static deserializeBinaryFromReader(message: EmptyInput, reader: jspb.BinaryReader): EmptyInput;
}

export namespace EmptyInput {
    export type AsObject = {
    }
}
