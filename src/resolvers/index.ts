import { DateTimeResolver } from 'graphql-scalars'
import { Context } from '@src/context/types'
import Query from '@src/resolvers/Query'
import Mutation from '@src/resolvers/Mutation'

export const resolvers = {
  Query,
  Mutation,
  DateTime: DateTimeResolver,
  Post: {
    author: (parent: any, _args: any, context: Context) => {
      return context.prisma.post
        .findUnique({
          where: { id: parent?.id },
        })
        .author()
    },
    comments: (parent: any, _args: any, context: Context) => {
      return context.prisma.post
        .findUnique({
          where: { id: parent?.id },
        })
        .comments()
    },
  },
  User: {
    posts: (parent: any, _args: any, context: Context) => {
      return context.prisma.user
        .findUnique({
          where: { id: parent?.id },
        })
        .posts()
    },
  },
  Comment: {
    post: (parent: any, _args: any, context: Context) => {
      return context.prisma.comment
        .findUnique({
          where: { id: parent?.id },
        })
        .post()
    },
    author: (parent: any, _args: any, context: Context) => {
      return context.prisma.comment
        .findUnique({
          where: { id: parent?.id },
        })
        .author()
    },
  },
}
