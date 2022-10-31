import express from 'express'
import { join } from 'node:path'
import { graphqlHTTP } from 'express-graphql'
import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { resolvers } from '@src/resolvers'
import { context } from '@src/context'

const callSchema = async () => {
  const joinPath = join(__dirname, '../graphql/schema.graphql')
  const loadedSchema = await loadSchema(joinPath, {
    loaders: [new GraphQLFileLoader()],
  })
  return addResolversToSchema({ schema: loadedSchema, resolvers })
}

const main = async () => {
  const app = express()
  const schema = await callSchema()

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      context,
      graphiql: true,
    }),
  )
  app.listen(4000)
  console.log(`\
  🚀 Server ready at: http://localhost:4000/graphql
  ⭐️ See sample queries: http://pris.ly/e/ts/graphql-express-sdl-first#using-the-graphql-api
  `)
}

main().catch((error) => console.error({ error }))
