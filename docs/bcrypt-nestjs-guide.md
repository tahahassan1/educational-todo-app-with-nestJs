<div dir="rtl">

# إضافة bcrypt واستخدامه في NestJS

> الكود هنا أمثلة مبنية على معرفتي بالمكتبة وبـ NestJS، مش منسوخة من الـ docs. راجع أي تفصيلة عند التنفيذ.

## 1. الفكرة

الـ `bcrypt` بيعمل **hashing** مش encryption.

- التشفير (encryption) ممكن يتفك بمفتاح.
- الـ hash اتجاه واحد ومفيش رجوع منه. الـ server عمره ما بيعرف الـ password الأصلي.
- وقت الـ login بتعمل hash للـ password الجاي وتقارنه بالـ hash المخزّن.
- الـ **salt** بيتولّد عشوائي وبيتخزّن جوه الـ hash نفسه، فمش محتاج تديره بنفسك.
- نتيجة الـ hashing لنفس الـ password بتختلف كل مرة (بسبب الـ salt)، ومع ذلك `compare` بترجّع `true`.

## 2. التنصيب

```bash
npm i bcrypt
npm i -D @types/bcrypt
```

لو التنصيب فشل (الـ `bcrypt` بيبني native addon، وممكن يتعب على Windows)، البديل `bcryptjs`: JavaScript صرف، نفس الـ API تقريبًا، وأبطأ شوية.

```bash
npm i bcryptjs
npm i -D @types/bcryptjs
```

## 3. الـ API الأساسي

```ts
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

// عمل hash
const hash = await bcrypt.hash(password, SALT_ROUNDS);

// مقارنة
const isMatch = await bcrypt.compare(password, hash); // true | false
```

- `SALT_ROUNDS` هو **تكلفة الحساب**. كل زيادة بواحد بتضاعف الوقت تقريبًا. الشائع من 10 لـ 12. الهدف إن الـ hash يبقى بطيء عن قصد عشان يصعّب التخمين بالقوة الغاشمة.
- استخدم النسخ الـ `async` (`hash` و`compare`) عشان الـ event loop ميتعطلش.
- لو TypeScript اشتكى من `import * as bcrypt` في إعداد مشروعك، جرّب `import bcrypt from 'bcrypt'`. اللي يشتغل بيعتمد على إعدادات `tsconfig` (`esModuleInterop`) ونوع المشروع.

## 4. مكانه في المشروع

| الخطوة | فين | إيه اللي يحصل |
|---|---|---|
| التسجيل | `AuthService.register` (أو `UsersService.create`) | `hash` قبل الحفظ في الـ DB |
| الـ login | `AuthService.signIn` | `compare` بدل `===` |
| الـ controller | — | مفيهوش أي hashing، بيمرر بس |

## 5. مثال مع Prisma

عمود الـ password بيخزّن الـ hash (نوع `String`)، وطوله في bcrypt 60 حرف تقريبًا.

```prisma
model User {
  id       Int    @id @default(autoincrement())
  email    String @unique
  password String // hash، مش الـ password الأصلي
}
```

```ts
import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, SALT_ROUNDS);
    const user = await this.prisma.user.create({
      data: { email: dto.email, password: hash },
    });
    // متعرضش الـ hash للـ client
    const { password, ...result } = user;
    return result;
  }

  async signIn(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    const isMatch = user ? await bcrypt.compare(pass, user.password) : false;

    // نفس الرد للحالتين: يوزر مش موجود أو password غلط
    if (!user || !isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
```

أسماء الـ service والحقول (`PrismaService`, `email`) افتراضية، عدّلها حسب مشروعك.

## 6. الـ DTO والـ validation

```ts
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;
}
```

`@MaxLength(72)` مقصودة: الـ bcrypt بيتجاهل أي بايتات بعد الـ **72 byte** في الـ password. الحد ده بالبايت مش بالحروف، فالحروف العربية والـ emoji بتاخد أكتر من byte للحرف.

## 7. اختبار سريع للفهم

```ts
const a = await bcrypt.hash('changeme', 10);
const b = await bcrypt.hash('changeme', 10);

console.log(a === b);                            // false
console.log(await bcrypt.compare('changeme', a)); // true
console.log(await bcrypt.compare('changeme', b)); // true
```

لو الـ hashين مختلفين والـ compare بترجّع `true` مع الاتنين، يبقى فهمت الـ salt.

## 8. أخطاء شائعة

- تخزين الـ password كـ plain text، أو مقارنته بـ `===`.
- عمل `hash` للـ password مرتين بالغلط (مثلًا في الـ controller والـ service). الـ `compare` هتفشل دايمًا بعدها.
- إرجاع الـ user من الـ `register` أو الـ `signIn` بالـ hash. شيله بالـ rest syntax أو بـ DTO للـ response.
- كتابة الـ password أو الـ hash في الـ logs.
- استخدام `hashSync` و`compareSync` في الـ server، لأنها بتعطل الـ event loop.
- تغيير الـ `SALT_ROUNDS` وتوقع إن الـ hashes القديمة تتغير. الـ hash القديم بيفضل شغال بالقيمة اللي اتعمل بيها، لأن الـ rounds متخزنة جواه.

## 9. ملاحظة عن توقيت الرد (اختياري)

لو اليوزر مش موجود ورجّعت `401` فورًا من غير `compare`، الرد هيبقى أسرع من حالة "اليوزر موجود والـ password غلط". مهاجم ممكن يقيس الفرق ويعرف مين مسجل عندك. الحل الشائع إنك تعمل `compare` مقابل hash وهمي ثابت في حالة إن اليوزر مش موجود. في الـ todo app ده مش هيفرق، بس اعرف إنه موجود.

## 10. مراجع للتأكد

- صفحة `bcrypt` على npm (للـ API والـ 72 byte).
- الـ docs بتاعة NestJS في قسم Encryption and Hashing.

</div>
