import { prisma } from '@src/context'

/**
 * prismaを経由してuser情報を取得する。
 */
const allUsers = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
}

export default allUsers
