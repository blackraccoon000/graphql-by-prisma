import { PrismaClient } from '@prisma/client'
import { Context } from '@src/context/types'

const prisma = new PrismaClient()

export const context: Context = { prisma }
