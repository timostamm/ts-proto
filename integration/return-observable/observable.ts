// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: observable.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Observable } from "rxjs";

export const protobufPackage = "";

export interface ProduceRequest {
  ingredients: string;
}

export interface ProduceReply {
  result: string;
}

function createBaseProduceRequest(): ProduceRequest {
  return { ingredients: "" };
}

export const ProduceRequest = {
  encode(message: ProduceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.ingredients !== "") {
      writer.uint32(10).string(message.ingredients);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProduceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ingredients = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProduceRequest {
    return { ingredients: isSet(object.ingredients) ? globalThis.String(object.ingredients) : "" };
  },

  toJSON(message: ProduceRequest): unknown {
    const obj: any = {};
    if (message.ingredients !== "") {
      obj.ingredients = message.ingredients;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProduceRequest>, I>>(base?: I): ProduceRequest {
    return ProduceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProduceRequest>, I>>(object: I): ProduceRequest {
    const message = createBaseProduceRequest();
    message.ingredients = object.ingredients ?? "";
    return message;
  },
};

function createBaseProduceReply(): ProduceReply {
  return { result: "" };
}

export const ProduceReply = {
  encode(message: ProduceReply, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProduceReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduceReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProduceReply {
    return { result: isSet(object.result) ? globalThis.String(object.result) : "" };
  },

  toJSON(message: ProduceReply): unknown {
    const obj: any = {};
    if (message.result !== "") {
      obj.result = message.result;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProduceReply>, I>>(base?: I): ProduceReply {
    return ProduceReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProduceReply>, I>>(object: I): ProduceReply {
    const message = createBaseProduceReply();
    message.result = object.result ?? "";
    return message;
  },
};

export interface Factory {
  Produce(request: ProduceRequest): Observable<ProduceReply>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
