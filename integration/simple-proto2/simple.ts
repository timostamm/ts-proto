// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: simple.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "simple";

export enum EnumWithoutZero {
  A = 1,
  B = 2,
  UNRECOGNIZED = -1,
}

export function enumWithoutZeroFromJSON(object: any): EnumWithoutZero {
  switch (object) {
    case 1:
    case "A":
      return EnumWithoutZero.A;
    case 2:
    case "B":
      return EnumWithoutZero.B;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EnumWithoutZero.UNRECOGNIZED;
  }
}

export function enumWithoutZeroToJSON(object: EnumWithoutZero): string {
  switch (object) {
    case EnumWithoutZero.A:
      return "A";
    case EnumWithoutZero.B:
      return "B";
    case EnumWithoutZero.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Issue56 {
  test: EnumWithoutZero;
}

function createBaseIssue56(): Issue56 {
  return { test: 1 };
}

export const Issue56 = {
  encode(message: Issue56, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.test !== 1) {
      writer.uint32(8).int32(message.test);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Issue56 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssue56();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.test = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Issue56 {
    return { test: isSet(object.test) ? enumWithoutZeroFromJSON(object.test) : 1 };
  },

  toJSON(message: Issue56): unknown {
    const obj: any = {};
    if (message.test !== 1) {
      obj.test = enumWithoutZeroToJSON(message.test);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Issue56>, I>>(base?: I): Issue56 {
    return Issue56.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Issue56>, I>>(object: I): Issue56 {
    const message = createBaseIssue56();
    message.test = object.test ?? 1;
    return message;
  },
};

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
