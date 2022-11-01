import { prisma } from '@src/context'
import { PostCreateInput } from '@src/generated/graphql'

/**
 * userIdに関連付けたPostを生成する。
 * @param authorId userId
 * @param data postData
 * @returns User
 * @see https://wp-kyoto.net/prisma-select-relational-table-data/
 */
const altCreatePostForUser = async (
  // email: string,
  authorId: number,
  data: PostCreateInput,
) => {
  const post = await prisma.post.create({
    data: {
      ...data,
      author: {
        connect: {
          // email,
          id: authorId,
        },
      },
    },
    select: {
      // id: true,
      // title: true,
      author: {
        select: {
          id: true,
          email: true,
        },
      },
      // authorId: true,
      // comments: true,
    },
  })
  console.log(post)

  // const user = await prisma.user.findUnique({
  //   // カラムを直接指定する場合はselectを使用する
  //   // select: {
  //   //   id: true,
  //   //   email: true,
  //   //   posts: true,
  //   // },
  //   where: {
  //     // email,
  //     id: authorId,
  //   },
  // })

  // リレーションしたい場合
  // const user = await prisma.user.findUnique({
  //   include: {
  //     posts: true,
  //     comments: true,
  //   },
  //   where: {
  //     id: authorId,
  //   },
  // })
  return post
}

export default altCreatePostForUser
