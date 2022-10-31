import { v4 as uuidv4 } from 'uuid'
import { Context } from '@src/context/types'
import {
  UserUniqueInput,
  PostCreateInput,
  UserCreateInput,
} from '@src/resolvers/types'

const Mutation = {
  signupUser: (
    _parent: any,
    args: { data: UserCreateInput },
    context: Context,
  ) => {
    const postData = args.data.posts?.map((post) => {
      return { title: post.title, content: post.content || undefined }
    })
    return context.prisma.user.create({
      data: {
        name: args.data.name,
        email: args.data.email,
        age: args.data.age,
        posts: {
          create: postData,
        },
      },
    })
  },
  deleteUser: (_parent: any, args: { id: number }, context: Context) => {
    return context.prisma.user.delete({
      where: { id: args.id },
    })
    // .catch((error) => {
    //   console.log(error.meta.cause)
    //   return error.meta.cause
    // })
  },
  createDraft: (
    _parent: any,
    args: { data: PostCreateInput; authorEmail: string },
    context: Context,
  ) => {
    return context.prisma.post.create({
      data: {
        title: args.data.title,
        content: args.data.content,
        author: {
          connect: { email: args.authorEmail },
        },
      },
    })
  },
  togglePublishPost: async (
    _parent: any,
    args: { id: number },
    context: Context,
  ) => {
    try {
      const post = await context.prisma.post.findUnique({
        where: { id: args.id || undefined },
        select: {
          published: true,
        },
      })

      return context.prisma.post.update({
        where: { id: args.id || undefined },
        data: { published: !post?.published },
      })
    } catch (error) {
      throw new Error(`Post with ID ${args.id} does not exist in the database.`)
    }
  },
  incrementPostViewCount: (
    _parent: any,
    args: { id: number },
    context: Context,
  ) => {
    return context.prisma.post.update({
      where: { id: args.id || undefined },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    })
  },
  deletePost: (_parent: any, args: { id: number }, context: Context) => {
    return context.prisma.post.delete({
      where: { id: args.id },
    })
  },
  addProfileForUser: (
    _parent: any,
    args: { userUniqueInput: UserUniqueInput; bio: string },
    context: Context,
  ) => {
    return context.prisma.profile.create({
      data: {
        bio: args.bio,
        user: {
          connect: {
            id: args.userUniqueInput?.id,
            email: args.userUniqueInput?.email,
          },
        },
      },
    })
  },
  /**
   * 公開フラグ publishedがtrueの場合のみコメントがつけられる
   * @param _parent
   * @param args
   * @param context
   * @returns
   */
  createComment: async (
    _parent: any,
    args: {
      data: {
        text: string
      }
      postId: number
    },
    context: Context,
  ) => {
    const post = await context.prisma.post.findUnique({
      where: { id: args.postId },
    })

    if (!post?.published) {
      throw new Error('post publish flag is false!')
    } else {
      return context.prisma.comment.create({
        data: {
          id: uuidv4(),
          text: args.data.text,
          post: {
            connect: { id: args.postId },
          },
          author: {
            connect: { id: post.authorId || undefined },
          },
        },
      })
    }
  },
}

export default Mutation
