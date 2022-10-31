import { DateTimeResolver as DateTime } from 'graphql-scalars'
import Query from '@src/resolvers/Query'
import Mutation from '@src/resolvers/Mutation'
import Post from '@src/resolvers/Post'
import User from '@src/resolvers/User'
import Comment from '@src/resolvers/Comment'

/**
 * リゾルバを定義
 */
export const resolvers = {
  Query,
  Mutation,
  DateTime,
  Post,
  User,
  Comment,
}
