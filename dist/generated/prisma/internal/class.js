"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        Int      @id @default(autoincrement())\n  username  String\n  email     String   @unique\n  password  String\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n  todos     Todo[]\n\n  @@map(\"users\")\n}\n\nmodel Todo {\n  id     Int     @id @default(autoincrement())\n  title  String\n  isDone Boolean @default(false)\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  userId Int  @map(\"user_id\")\n  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"todos\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"todos\",\"kind\":\"object\",\"type\":\"Todo\",\"relationName\":\"TodoToUser\"}],\"dbName\":\"users\",\"schema\":null},\"Todo\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isDone\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TodoToUser\"}],\"dbName\":\"todos\",\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"user\",\"todos\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Todo.findUnique\",\"Todo.findUniqueOrThrow\",\"Todo.findFirst\",\"Todo.findFirstOrThrow\",\"Todo.findMany\",\"Todo.createOne\",\"Todo.createMany\",\"Todo.createManyAndReturn\",\"Todo.updateOne\",\"Todo.updateMany\",\"Todo.updateManyAndReturn\",\"Todo.upsertOne\",\"Todo.deleteOne\",\"Todo.deleteMany\",\"Todo.groupBy\",\"Todo.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"isDone\",\"createdAt\",\"updatedAt\",\"userId\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"username\",\"email\",\"password\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "cRYgCgQAAEgAIC4AAEQAMC8AAAkAEDAAAEQAMDECAAAAATRAAEcAITVAAEcAIUIBAEYAIUMBAAAAAUQBAEYAIQEAAAABACAKAwAASwAgLgAASQAwLwAAAwAQMAAASQAwMQIARQAhMgEARgAhMyAASgAhNEAARwAhNUAARwAhNgIARQAhAQMAAGsAIAoDAABLACAuAABJADAvAAADABAwAABJADAxAgAAAAEyAQBGACEzIABKACE0QABHACE1QABHACE2AgBFACEDAAAAAwAgAQAABAAwAgAABQAgAQAAAAMAIAEAAAABACAKBAAASAAgLgAARAAwLwAACQAQMAAARAAwMQIARQAhNEAARwAhNUAARwAhQgEARgAhQwEARgAhRAEARgAhAQQAAGoAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAcEAABpACAxAgAAAAE0QAAAAAE1QAAAAAFCAQAAAAFDAQAAAAFEAQAAAAEBCwAADgAgBjECAAAAATRAAAAAATVAAAAAAUIBAAAAAUMBAAAAAUQBAAAAAQELAAAQADABCwAAEAAwBwQAAFwAIDECAFQAITRAAFMAITVAAFMAIUIBAFEAIUMBAFEAIUQBAFEAIQIAAAABACALAAATACAGMQIAVAAhNEAAUwAhNUAAUwAhQgEAUQAhQwEAUQAhRAEAUQAhAgAAAAkAIAsAABUAIAIAAAAJACALAAAVACADAAAAAQAgEgAADgAgEwAAEwAgAQAAAAEAIAEAAAAJACAFBQAAVwAgGAAAWAAgGQAAWwAgGgAAWgAgGwAAWQAgCS4AAEMAMC8AABwAEDAAAEMAMDECADYAITRAADkAITVAADkAIUIBADcAIUMBADcAIUQBADcAIQMAAAAJACABAAAbADAXAAAcACADAAAACQAgAQAACgAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAHAwAAVgAgMQIAAAABMgEAAAABMyAAAAABNEAAAAABNUAAAAABNgIAAAABAQsAACQAIAYxAgAAAAEyAQAAAAEzIAAAAAE0QAAAAAE1QAAAAAE2AgAAAAEBCwAAJgAwAQsAACYAMAcDAABVACAxAgBUACEyAQBRACEzIABSACE0QABTACE1QABTACE2AgBUACECAAAABQAgCwAAKQAgBjECAFQAITIBAFEAITMgAFIAITRAAFMAITVAAFMAITYCAFQAIQIAAAADACALAAArACACAAAAAwAgCwAAKwAgAwAAAAUAIBIAACQAIBMAACkAIAEAAAAFACABAAAAAwAgBQUAAEwAIBgAAE0AIBkAAFAAIBoAAE8AIBsAAE4AIAkuAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzIAA4ACE0QAA5ACE1QAA5ACE2AgA2ACEDAAAAAwAgAQAAMQAwFwAAMgAgAwAAAAMAIAEAAAQAMAIAAAUAIAkuAAA1ADAvAAAyABAwAAA1ADAxAgA2ACEyAQA3ACEzIAA4ACE0QAA5ACE1QAA5ACE2AgA2ACENBQAAOwAgGAAAQgAgGQAAOwAgGgAAOwAgGwAAOwAgNwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABPgIAQQAhDgUAADsAIBoAAEAAIBsAAEAAIDcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAD8AIT8BAAAAAUABAAAAAUEBAAAAAQUFAAA7ACAaAAA-ACAbAAA-ACA3IAAAAAE-IAA9ACELBQAAOwAgGgAAPAAgGwAAPAAgN0AAAAABOEAAAAAEOUAAAAAEOkAAAAABO0AAAAABPEAAAAABPUAAAAABPkAAOgAhCwUAADsAIBoAADwAIBsAADwAIDdAAAAAAThAAAAABDlAAAAABDpAAAAAATtAAAAAATxAAAAAAT1AAAAAAT5AADoAIQg3AgAAAAE4AgAAAAQ5AgAAAAQ6AgAAAAE7AgAAAAE8AgAAAAE9AgAAAAE-AgA7ACEIN0AAAAABOEAAAAAEOUAAAAAEOkAAAAABO0AAAAABPEAAAAABPUAAAAABPkAAPAAhBQUAADsAIBoAAD4AIBsAAD4AIDcgAAAAAT4gAD0AIQI3IAAAAAE-IAA-ACEOBQAAOwAgGgAAQAAgGwAAQAAgNwEAAAABOAEAAAAEOQEAAAAEOgEAAAABOwEAAAABPAEAAAABPQEAAAABPgEAPwAhPwEAAAABQAEAAAABQQEAAAABCzcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAEAAIT8BAAAAAUABAAAAAUEBAAAAAQ0FAAA7ACAYAABCACAZAAA7ACAaAAA7ACAbAAA7ACA3AgAAAAE4AgAAAAQ5AgAAAAQ6AgAAAAE7AgAAAAE8AgAAAAE9AgAAAAE-AgBBACEINwgAAAABOAgAAAAEOQgAAAAEOggAAAABOwgAAAABPAgAAAABPQgAAAABPggAQgAhCS4AAEMAMC8AABwAEDAAAEMAMDECADYAITRAADkAITVAADkAIUIBADcAIUMBADcAIUQBADcAIQoEAABIACAuAABEADAvAAAJABAwAABEADAxAgBFACE0QABHACE1QABHACFCAQBGACFDAQBGACFEAQBGACEINwIAAAABOAIAAAAEOQIAAAAEOgIAAAABOwIAAAABPAIAAAABPQIAAAABPgIAOwAhCzcBAAAAATgBAAAABDkBAAAABDoBAAAAATsBAAAAATwBAAAAAT0BAAAAAT4BAEAAIT8BAAAAAUABAAAAAUEBAAAAAQg3QAAAAAE4QAAAAAQ5QAAAAAQ6QAAAAAE7QAAAAAE8QAAAAAE9QAAAAAE-QAA8ACEDRQAAAwAgRgAAAwAgRwAAAwAgCgMAAEsAIC4AAEkAMC8AAAMAEDAAAEkAMDECAEUAITIBAEYAITMgAEoAITRAAEcAITVAAEcAITYCAEUAIQI3IAAAAAE-IAA-ACEMBAAASAAgLgAARAAwLwAACQAQMAAARAAwMQIARQAhNEAARwAhNUAARwAhQgEARgAhQwEARgAhRAEARgAhSAAACQAgSQAACQAgAAAAAAABTQEAAAABAU0gAAAAAQFNQAAAAAEFTQIAAAABUwIAAAABVAIAAAABVQIAAAABVgIAAAABBRIAAG0AIBMAAHAAIEoAAG4AIEsAAG8AIFAAAAEAIAMSAABtACBKAABuACBQAAABACAAAAAAAAsSAABdADATAABiADBKAABeADBLAABfADBMAABgACBNAABhADBOAABhADBPAABhADBQAABhADBRAABjADBSAABkADAFMQIAAAABMgEAAAABMyAAAAABNEAAAAABNUAAAAABAgAAAAUAIBIAAGgAIAMAAAAFACASAABoACATAABnACABCwAAbAAwCgMAAEsAIC4AAEkAMC8AAAMAEDAAAEkAMDECAAAAATIBAEYAITMgAEoAITRAAEcAITVAAEcAITYCAEUAIQIAAAAFACALAABnACACAAAAZQAgCwAAZgAgCS4AAGQAMC8AAGUAEDAAAGQAMDECAEUAITIBAEYAITMgAEoAITRAAEcAITVAAEcAITYCAEUAIQkuAABkADAvAABlABAwAABkADAxAgBFACEyAQBGACEzIABKACE0QABHACE1QABHACE2AgBFACEFMQIAVAAhMgEAUQAhMyAAUgAhNEAAUwAhNUAAUwAhBTECAFQAITIBAFEAITMgAFIAITRAAFMAITVAAFMAIQUxAgAAAAEyAQAAAAEzIAAAAAE0QAAAAAE1QAAAAAEEEgAAXQAwSgAAXgAwTAAAYAAgUAAAYQAwAAEEAABqACAFMQIAAAABMgEAAAABMyAAAAABNEAAAAABNUAAAAABBjECAAAAATRAAAAAATVAAAAAAUIBAAAAAUMBAAAAAUQBAAAAAQIAAAABACASAABtACADAAAACQAgEgAAbQAgEwAAcQAgCAAAAAkAIAsAAHEAIDECAFQAITRAAFMAITVAAFMAIUIBAFEAIUMBAFEAIUQBAFEAIQYxAgBUACE0QABTACE1QABTACFCAQBRACFDAQBRACFEAQBRACECBAYCBQADAQMAAQEEBwAAAAAFBQAIGAAJGQAKGgALGwAMAAAAAAAFBQAIGAAJGQAKGgALGwAMAQMAAQEDAAEFBQARGAASGQATGgAUGwAVAAAAAAAFBQARGAASGQATGgAUGwAVBgIBBwgBCAsBCQwBCg0BDA8BDREEDhIFDxQBEBYEERcGFBgBFRkBFhoEHB0HHR4NHh8CHyACICECISICIiMCIyUCJCcEJSgOJioCJywEKC0PKS4CKi8CKzAELDMQLTQW"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map