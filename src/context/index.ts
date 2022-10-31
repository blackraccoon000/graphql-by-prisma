import { PrismaClient } from '@prisma/client'
import { Context } from '@src/context/types'

const prisma = new PrismaClient()

export const context: Context = { prisma }

// prisma.user
//   .findMany()
//   .then((res) => {
//     console.log('test1:', res)
//     return prisma.user.create({
//       data: {
//         name: 'xxx_test4',
//         email: 'xxx_test4@example.com',
//       },
//     })
//   })
//   .then((res) => {
//     console.log('created:', res)
//     return prisma.user.findMany()
//   })
//   .then((res) => console.log('test2:', res))
//   .catch((error) => console.log('error:', error))

// prisma.post
//   .findMany()
//   .then((res) => {
//     console.log({ res })
//     console.log('==========')
//     return prisma.post
//       .create({
//         data: {
//           title: 'GraphQL test Title',
//           content: 'all identity update error object',
//           published: true,
//           author: {
//             connect: {
//               email: 'xxx_text3@example.com',
//             },
//           },
//         },
//       })
//       .then((res) => {
//         console.log({ res })
//         console.log('==========')
//         // return prisma.post.findMany()
//       })
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

// prisma.user
//   .findUnique({
//     where: {
//       email: 'xxx_test@example.com',
//     },
//   })
//   .then((res) => {
//     return prisma.post.create({
//       data: {
//         title: 'GraphQL test Title',
//         content: 'all identity update error object',
//         published: true,
//         author: {
//           connect: { email: 'xxx_test@example.com' },
//         },
//       },
//     })
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// prisma.post
//   .create({
//     data: {
//       title: 'GraphQL test Title',
//       content: 'all identity update error object',
//       published: true,
//       author: {
//         connect: { email: 'xxx_test@example.com' },
//       },
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// prisma.post
//   .create({
//     data: {
//       title: 'GraphQL test Title',
//       content: 'all identity update error object',
//       published: true,
//       author: {
//         connect: { email: 'xxx_text@example.com' },
//       },
//       // author: {
//       //   connect: {
//       //     email: 'xxx_text@example.com',
//       //   },
//       // },
//     },
//   })
//   .then((res) => {
//     console.log({ res })
//   })

// prisma.user
//   .findUnique({
//     where: {
//       email: 'xxx_test@example.com',
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// prisma.post
//   .findMany()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// prisma.post
//   .update({
//     data: {
//       published: false,
//     },
//     where: {
//       id: 4,
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// prisma.post
//   .delete({
//     where: {
//       id: 3,
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err.meta.cause)
//   })
