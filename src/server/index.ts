import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { context } from '@src/context'
import combineSchema from '@src/server/combine-schema'

/**
 * expressによるサーバ起動設定
 */
const server = async () => {
  const app = express()
  const schema = await combineSchema()

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      context,
      // graphiqlを有効化する
      graphiql: true,
    }),
  )
  app.listen(4000)

  console.log(`\*
  🚀 Server ready at: http://localhost:4000/graphql
  `)
}

export default server
