export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export interface PostOrderByUpdatedAtInput {
  updatedAt: SortOrder
}

export interface UserUniqueInput {
  id?: number
  email?: string
}

export interface PostCreateInput {
  title: string
  content?: string
}

export interface UserCreateInput {
  email: string
  name?: string
  age?: number
  posts?: PostCreateInput[]
}
