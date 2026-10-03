# Prisma 7 + NestJS + PostgreSQL — الدليل المختصر

> القاعدة الذهبية: **ثبّت كل حاجة على نفس إصدار Prisma 7، وماتستخدمش `@latest` أبدًا.**
> `@latest` بيسحب Prisma 8، والمكوّنات بتبقى مختلفة الإصدارات وبيحصل سلوك غريب.

---

## 0. قبل ما تبدأ

- Postgres شغال ومعاه database: `CREATE DATABASE your_db_name;`
- مشروع NestJS جاهز: `nest new project-name`

---

## 1. التثبيت (بإصدارات مثبتة)

```bash
npm install -D prisma@7.10.0 --save-exact
npm install @prisma/client@7.10.0 @prisma/adapter-pg@7.10.0 dotenv --save-exact
```

تأكد:

```bash
npx prisma --version      # لازم يطلع 7.10.0
```

**لو ظهرلك رسالة "حدّث لآخر إصدار" في أي وقت: تجاهلها.** دي تنبيه مش error، وتنفيذها بيرقّيك لـ Prisma 8.

**ليه الـ adapter؟** من Prisma 7 الـ Client مش بيتصل لوحده، لازم `driver adapter` صريح.

---

## 2. التهيئة

```bash
npx prisma init
```

هيعمل `prisma/schema.prisma` و`.env` وملف config.

**اسم ملف الـ config:** ممكن يتولّد `prisma.config.ts` أو `prisma7.config.ts`. الاتنين شغالين مع Prisma 7، **سيبه زي ما اتولّد ومتعملوش rename.**

---

## 3. `prisma/schema.prisma`

```prisma
generator client {
  provider     = "prisma-client"
  output       = "../generated/prisma"
  moduleFormat = "cjs"
}

datasource db {
  provider = "postgresql"
}
```

- `provider = "prisma-client"` — مش `prisma-client-js` (ده القديم)
- `moduleFormat = "cjs"` — لأن NestJS شغال CommonJS
- **مفيش `url` هنا.** الـ URL في ملف الـ config

---

## 4. ملف الـ config (`prisma.config.ts` أو `prisma7.config.ts`)

```typescript
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

لو `init` ولّد لك الملف جاهز، سيبه على شكله الأصلي.

---

## 5. `.env`

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/YOUR_DB_NAME?schema=public"
```

سطر واحد كامل. `.env` مبيدعمش `${VAR}`.

---

## 6. أول model

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 7. أول migration

```bash
npx prisma migrate dev --name init
```

بيعمل حاجتين:
1. يطبّق الـ SQL على الـ database
2. يشغّل `prisma generate` ويطلع مجلد `generated/prisma`

بعدها شغّل `generate` يدوي، حتى لو `migrate dev` عملها تلقائي. ماتعتمدش عليه:

```bash
npx prisma generate
```

اتأكد إن مجلد `generated/prisma` ظهر وفيه `client.ts`.

**لو المجلد لسه مظهرش:** اتأكد من `npx prisma --version` (لازم `7.10.0`).

---

## 8. `PrismaService`

```bash
npx nest g module prisma
npx nest g service prisma
```

`src/prisma/prisma.service.ts`:

```typescript
import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

- الـ `constructor` + `adapter` **إجباريين** في v7.
- الـ import لازم ينتهي بـ `/client` (مش `generated/prisma` بس).
- استخدمت مسار نسبي (`../../generated/...`) لأنه بيشتغل من غير ما تعدّل `tsconfig`.
- `import 'dotenv/config'` في أول الملف عشان `process.env.DATABASE_URL` يتقرا صح (Nest مش بيحمّل `.env` لوحده من غير `ConfigModule`).

---

## 9. `PrismaModule` (global)

```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

وسجّله في `AppModule`:

```typescript
@Module({
  imports: [PrismaModule, UsersModule],
})
export class AppModule {}
```

---

## 10. الاستخدام (في الـ Service بس)

```typescript
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  create(data: { name: string; email: string }) {
    return this.prisma.user.create({ data });
  }
}
```

الـ Controller بيكلّم الـ Service، مش Prisma مباشرة.

---

## الأوامر — امتى تستخدم إيه

| الأمر | امتى |
|---|---|
| `npx prisma migrate dev --name X` | كل مرة تعدّل الـ schema أثناء التطوير |
| `npx prisma migrate deploy` | على السيرفر/production بس |
| `npx prisma generate` | بعد `git pull`، أو لو مجلد `generated` ناقص/قديم |
| `npx prisma db pull` | لو عندك database جاهزة وعايز schema منها |
| `npx prisma migrate status` | تشوف الـ migrations اللي اتطبقت |
| `npx prisma studio` | واجهة تتصفح بيها الداتا |

---

## أخطاء شائعة

| الرسالة | الحل |
|---|---|
| `Cannot find module '@prisma/client'` | الـ import لازم من `generated/prisma/client` مش `@prisma/client` |
| `The datasource property url is no longer supported...` | شيل `url` من `schema.prisma` وحطها في ملف الـ config |
| `PrismaClient was instantiated without any options` | ناقص الـ `constructor` + `adapter` في `PrismaService` |
| `Already in sync...` | مش error، معناه مفيش تعديل جديد في الـ schema |
| `generated/prisma` مش بيتولّد / سلوك غريب | `npx prisma --version` لازم يكون `7.10.0` بالظبط، ولو لأ رجّعه بـ `npm i -D prisma@7.10.0 --save-exact` |

---

## قائمة فحص سريعة لأي مشروع جديد

1. ثبّت الحزم بإصدارات 7 مثبتة (خطوة 1)
2. `npx prisma --version` = 7.10.0
3. `schema.prisma`: `prisma-client` + `output` + `moduleFormat = "cjs"` + من غير `url`
4. الـ URL في ملف الـ config، والـ `.env` بسطر واحد كامل
5. `npx prisma migrate dev --name init` ثم `npx prisma generate`، واتأكد إن `generated/prisma` ظهر
6. `PrismaService` بالـ adapter، و`PrismaModule` global
