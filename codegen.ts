import type { CodegenConfig } from '@graphql-codegen/cli'

/**
 * npx graphql-codegen initによる自動生成。
 * 内部動作を確認しながら変更も試したが結局デフォルトで落ち着いている。
 * graphql.tsが生成されることを確認すること。
 */
const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
