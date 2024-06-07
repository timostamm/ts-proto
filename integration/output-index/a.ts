// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: a.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export interface A {
  a: string;
}

function createBaseA(): A {
  return { a: "" };
}

export const A = {
  encode(message: A, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.a !== "") {
      writer.uint32(10).string(message.a);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): A {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.a = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): A {
    return { a: isSet(object.a) ? globalThis.String(object.a) : "" };
  },

  toJSON(message: A): unknown {
    const obj: any = {};
    if (message.a !== "") {
      obj.a = message.a;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<A>, I>>(base?: I): A {
    return A.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<A>, I>>(object: I): A {
    const message = createBaseA();
    message.a = object.a ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
