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

上記を参考に環境を揃える。

.env ファイルを用意し、下記のように設定しておくこと。
下記は Postgres での設定
https://www.prisma.io/docs/concepts/database-connectors/postgresql

本環境は heroku の hobby plan を使わせて頂いてる。
下記を実行すると prisma/schema.prisma の model を参照し DB が定義される。

```
Codes/graphql-by-prisma - [adding-comment●] » prisma db push
```

下記実行で playground が立ち上がる。

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

上記の説明だけだと意味がわからないので追記
・DB への定義は schema.prisma で行う。
・playground などの型定義は graphql/schema.graphql にて行う。
・プログラム定義は types.ts にて定義。

似たような作業を上記 3 箇所で行うことで、スキーマを定義する際にどこを設定したのかわからなくなる。
だから、codegen のようなツールができたという経緯がわかったということ。

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

##

### メモ

```
Codes/graphql-by-prisma - [graphql-cli●] » npx graphql-codegen init

    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.

? What type of application are you building? Backend - API or server
? Where is your schema?: (path or url) ./graphql/schema.graphql
? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Resolvers (strongly typed resolve functions)
? Where to write the output: src/generated/graphql.ts
? Do you want to generate an introspection file? Yes
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
Fetching latest versions of selected plugins...
(node:56639) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

    Config file generated at codegen.ts

      $ npm install

    To install the plugins.

      $ npm run codegen

    To run GraphQL Code Generator.

Codes/graphql-by-prisma - [graphql-cli●] »
```

typescript 型定義の自動生成？

```
npm run codegen
```

### その他参考ページ

おそらく middle ware が豊富な点が使用数が多い理由だと思う。

https://npmtrends.com/@graphql-codegen/cli-vs-apollo-vs-graphql-cli

https://github.com/graphql/express-graphql

### 後で読む

https://www.prisma.io/docs/concepts/components/prisma-client/null-and-undefined#use-case-null-and-undefined-in-a-graphql-resolver
