import { PrismaClient } from '@prisma/client'
import { Context } from '@src/context/types'

export const prisma = new PrismaClient()
export const context: Context = { prisma }
