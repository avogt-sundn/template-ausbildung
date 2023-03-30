export interface TaskList {
  id: string,
  name: string,
  tasks: Task[],
}

export interface Task {
  id: string,
  done: boolean,
  description: string,
  timestamp?: string,
}
