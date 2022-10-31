### 起動方法

[コピー元](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-express-sdl-first)

[参考](https://www.udemy.com/course/graphql-bootcamp/)

```
Codes/graphql-express-sdl-first » volta -v
1.1.0
Codes/graphql-express-sdl-first » prisma -v
Environment variables loaded from .env
prisma                  : 4.5.0
@prisma/client          : 4.5.0
Current platform        : darwin-arm64
Codes/graphql-express-sdl-first » npm -v
8.19.2
Codes/graphql-express-sdl-first » node -v
v18.12.0
Codes/graphql-express-sdl-first »
```

.env ファイルを用意し、下記のように設定しておくこと。
下記は Postgres での設定
https://www.prisma.io/docs/concepts/database-connectors/postgresql

本環境は heroku の hobby plan を使わせて頂いてる。

```
npm install
npm run dev
```

### カスタム項目

・graphql-yoga を使用しないカスタマイズ

・ファイル分割し typescript を alias で起動できるようにした

・graphql ファイルからロードするように調整した
https://www.the-guild.dev/graphql/tools/docs/schema-loading

・ホットリロードがうまく機能しない問題
https://stackoverflow.com/questions/61128328/running-script-when-ts-node-dev-restarts-server

・graphql ファイルの変更漏れでうまく機能しない問題
→ 自動生成がだから必要になることがわかった。

### 下記で DB 構造を更新した。

参考元の内容は prisma のバージョンは古く、prisma deploy は使えない。

```
Codes/graphql-express-sdl-first » prisma db push
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "dbj5eoh37586a1", schema "public" at "ec2-44-210-228-110.compute-1.amazonaws.com:5432"

🚀  Your database is now in sync with your Prisma schema. Done in 5.08s

✔ Generated Prisma Client (4.5.0 | library) to ./node_modules/@prisma/client in 52ms

Codes/graphql-express-sdl-first »
```
