// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: proto-2.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "omit";

export interface Proto2TestMessage {
  boolValue?: boolean | undefined;
  intValue?: number | undefined;
  stringValue?: string | undefined;
  mapValue: { [key: string]: string };
}

export interface Proto2TestMessage_MapValueEntry {
  key?: string | undefined;
  value?: string | undefined;
}

function createBaseProto2TestMessage(): Proto2TestMessage {
  return { boolValue: undefined, intValue: undefined, stringValue: undefined, mapValue: {} };
}

export const Proto2TestMessage = {
  encode(message: Proto2TestMessage, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.boolValue !== undefined) {
      writer.uint32(8).bool(message.boolValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(16).int32(message.intValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(26).string(message.stringValue);
    }
    Object.entries(message.mapValue).forEach(([key, value]) => {
      Proto2TestMessage_MapValueEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Proto2TestMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProto2TestMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.boolValue = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.intValue = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Proto2TestMessage_MapValueEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined && entry4.key !== undefined) {
            message.mapValue[entry4.key] = entry4.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proto2TestMessage {
    return {
      boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      mapValue: isObject(object.mapValue)
        ? Object.entries(object.mapValue).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Proto2TestMessage): unknown {
    const obj: any = {};
    if (message.boolValue !== undefined) {
      obj.boolValue = message.boolValue;
    }
    if (message.intValue !== undefined) {
      obj.intValue = Math.round(message.intValue);
    }
    if (message.stringValue !== undefined) {
      obj.stringValue = message.stringValue;
    }
    if (message.mapValue) {
      const entries = Object.entries(message.mapValue);
      if (entries.length > 0) {
        obj.mapValue = {};
        entries.forEach(([k, v]) => {
          obj.mapValue[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proto2TestMessage>, I>>(base?: I): Proto2TestMessage {
    return Proto2TestMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proto2TestMessage>, I>>(object: I): Proto2TestMessage {
    const message = createBaseProto2TestMessage();
    message.boolValue = object.boolValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.mapValue = Object.entries(object.mapValue ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProto2TestMessage_MapValueEntry(): Proto2TestMessage_MapValueEntry {
  return { key: undefined, value: undefined };
}

export const Proto2TestMessage_MapValueEntry = {
  encode(message: Proto2TestMessage_MapValueEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Proto2TestMessage_MapValueEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProto2TestMessage_MapValueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proto2TestMessage_MapValueEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : undefined,
      value: isSet(object.value) ? globalThis.String(object.value) : undefined,
    };
  },

  toJSON(message: Proto2TestMessage_MapValueEntry): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proto2TestMessage_MapValueEntry>, I>>(base?: I): Proto2TestMessage_MapValueEntry {
    return Proto2TestMessage_MapValueEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proto2TestMessage_MapValueEntry>, I>>(
    object: I,
  ): Proto2TestMessage_MapValueEntry {
    const message = createBaseProto2TestMessage_MapValueEntry();
    message.key = object.key ?? undefined;
    message.value = object.value ?? undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
