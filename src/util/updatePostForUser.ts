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
const updatePostForUser = async (id: number, data: PostUpdateInput) => {
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
  console.log({ beforePost })

  const post = await prisma.post.update({
    data: nonNullableData,
    where: {
      id,
    },
  })
  const afterPost = await prisma.post.findUnique({ where: { id } })
  console.log({ afterPost })

  return post
}

export default updatePostForUser
