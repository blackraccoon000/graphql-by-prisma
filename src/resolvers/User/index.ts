import { Context } from '@src/context/types'

const User = {
  posts: (parent: any, _args: any, context: Context) => {
    return context.prisma.user
      .findUnique({
        where: { id: parent?.id },
      })
      .posts()
  },
}

export default User
