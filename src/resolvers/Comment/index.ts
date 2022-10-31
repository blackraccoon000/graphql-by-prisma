import { Context } from '@src/context/types'

const Comment = {
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
}

export default Comment
