import { PrismaClient } from '@prisma/client'
import { Context } from '@src/context/types'

const prisma = new PrismaClient()

export const context: Context = { prisma }

// prisma.user.findMany().then((res) => {
//   console.log('test1:', res)
//   prisma.user
//     .create({
//       data: {
//         name: 'xxx_test3',
//         email: 'xxx_test3@example.com',
//       },
//     })
//     .then((res) => {
//       console.log('created:', res)
//       prisma.user.findMany().then((res) => console.log('test2:', res))
//     })
//     .catch((error) => console.log('error:', error))
// })
