import { join } from 'node:path'
import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { resolvers } from '@src/resolvers'

/**
 * スキーマ情報とgraphqlファイルの情報を結合する関数
 */
const combineSchema = async () => {
  const joinPath = join(__dirname, '../../graphql/schema.graphql')
  const schema = await loadSchema(joinPath, {
    loaders: [new GraphQLFileLoader()],
  })
  return addResolversToSchema({
    schema,
    resolvers,
  })
}

export default combineSchema
