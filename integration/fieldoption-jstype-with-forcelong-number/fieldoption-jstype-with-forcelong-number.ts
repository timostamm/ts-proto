// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: fieldoption-jstype-with-forcelong-number.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "foo";

export interface FieldOption {
  normalField: number;
  numberField: number;
  stringField: string;
}

function createBaseFieldOption(): FieldOption {
  return { normalField: 0, numberField: 0, stringField: "0" };
}

export const FieldOption = {
  encode(message: FieldOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.normalField !== 0) {
      writer.uint32(8).int64(message.normalField);
    }
    if (message.numberField !== 0) {
      writer.uint32(16).int64(message.numberField);
    }
    if (message.stringField !== "0") {
      writer.uint32(24).int64(message.stringField);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FieldOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.normalField = longToNumber(reader.int64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numberField = longToNumber(reader.int64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.stringField = longToString(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldOption {
    return {
      normalField: isSet(object.normalField) ? globalThis.Number(object.normalField) : 0,
      numberField: isSet(object.numberField) ? globalThis.Number(object.numberField) : 0,
      stringField: isSet(object.stringField) ? globalThis.String(object.stringField) : "0",
    };
  },

  toJSON(message: FieldOption): unknown {
    const obj: any = {};
    if (message.normalField !== 0) {
      obj.normalField = Math.round(message.normalField);
    }
    if (message.numberField !== 0) {
      obj.numberField = globalThis.Number(message.numberField);
    }
    if (message.stringField !== "0") {
      obj.stringField = globalThis.String(message.stringField);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldOption>, I>>(base?: I): FieldOption {
    return FieldOption.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FieldOption>, I>>(object: I): FieldOption {
    const message = createBaseFieldOption();
    message.normalField = object.normalField ?? 0;
    message.numberField = object.numberField ?? 0;
    message.stringField = object.stringField ?? "0";
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function longToString(int64: bigint | string) {
  return int64.toString();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
