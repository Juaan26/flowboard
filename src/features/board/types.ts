import type { User } from '../auth/types'

export type Project = {
  id: string
  name: string
  description: string
  members: User[]
}

export type Column = {
  id: string
  name: string
  order: number
  projectId: string
}