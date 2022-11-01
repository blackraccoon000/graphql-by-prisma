import { prisma } from '@src/context'

/**
 * PrismaClientにはexistsは存在しないため、代替え案
 */
const existsUsers = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
    },
  })
  const exists = user ? true : false
  console.log(exists)
  return exists
}

export default existsUsers
