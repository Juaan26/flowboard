export enum Priority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    URGENT = 'URGENT'
}

export type Task =
    {
        id: string,
        title: string,
        description: string,
        columnId: string,
        projectId: string,
        assigneeId: string,
        priority: Priority,
        labels: string[],
        createdAt: string,
    }

export type CreateTaskDTO = {
  title: string
  columnId: string
  projectId: string
  assigneeId: string
  priority: Priority
}

export type UpdateTaskDTO = Partial<Omit<Task, 'id' | 'projectId' | 'createdAt'>>