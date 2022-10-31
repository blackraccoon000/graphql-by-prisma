import { Context } from '@src/context/types'

const Post = {
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
}

export default Post
