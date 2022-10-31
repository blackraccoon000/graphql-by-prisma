import { Context } from '@src/context/types'
import {
  PostOrderByUpdatedAtInput,
  UserUniqueInput,
} from '@src/resolvers/types'

const Query = {
  selectUser: (_parent: any, args: any, context: Context) => {
    return context.prisma.user.findUnique({
      where: { id: args.id || undefined },
    })
  },
  allUsers: (_parent: any, _args: any, context: Context) => {
    return context.prisma.user.findMany()
  },
  postById: (_parent: any, args: { id: number }, context: Context) => {
    return context.prisma.post.findUnique({
      where: { id: args.id || undefined },
    })
  },
  feed: (
    _parent: any,
    args: {
      searchString: string
      skip: number
      take: number
      orderBy: PostOrderByUpdatedAtInput
    },
    context: Context,
  ) => {
    const or = args.searchString
      ? {
          OR: [
            { title: { contains: args.searchString } },
            { content: { contains: args.searchString } },
          ],
        }
      : {}

    return context.prisma.post.findMany({
      where: {
        published: true,
        ...or,
      },
      take: args?.take,
      skip: args?.skip,
      orderBy: args?.orderBy,
    })
  },
  draftsByUser: (
    _parent: any,
    args: { userUniqueInput: UserUniqueInput },
    context: Context,
  ) => {
    return context.prisma.user
      .findUnique({
        where: {
          id: args.userUniqueInput.id || undefined,
          email: args.userUniqueInput.email || undefined,
        },
      })
      .posts({
        where: {
          published: false,
        },
      })
  },
}

export default Query
