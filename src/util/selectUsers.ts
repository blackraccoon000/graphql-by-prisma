import { prisma } from '@src/context'

/**
 * prismaを経由してuser情報を取得する。
 */
const selectUsers = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      // posts: {
      // リレーションしながらor文検索
      // where: {
      //   OR: [{ id: 2 }, { id: 4 }],
      // },
      // },
    },
  })
  console.log(user)
}

export default selectUsers
