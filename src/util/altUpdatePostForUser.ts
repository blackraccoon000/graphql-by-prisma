import { prisma } from '@src/context'
import { PostUpdateInput } from '@src/generated/graphql'

/**
 * Post情報更新
 * @param id postId
 * @param data 変更したいpostData
 * @returns post
 * @memo スプレッド構文使用時にnullを許容しないため、工夫している。
 * @see https://zenn.dev/katoaki/articles/37a8cff3a8a32a
 */
const altUpdatePostForUser = async (id: number, data: PostUpdateInput) => {
  /**
   * @see https://zawatech.com/?p=344
   */
  const nonNullableData: { [prop: string]: string | boolean } = {}
  /**
   * @see https://typescriptbook.jp/reference/values-types-variables/object/how-to-loop-an-object
   */
  for (const [key, value] of Object.entries(data)) {
    if (value !== null) nonNullableData[key] = value
  }
  const beforePost = await prisma.post.findUnique({ where: { id } })
  if (!beforePost) throw new Error('post id is not found')

  const post = await prisma.post.update({
    data: nonNullableData,
    where: {
      id,
    },
    select: {
      // id: true,
      // title: true,
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          posts: {
            select: {
              id: true,
              title: true,
              published: true,
            },
          },
        },
      },
    },
  })
  console.dir(post.author)

  return post
}

export default altUpdatePostForUser
