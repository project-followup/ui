export interface TaskStatus {
    id: string;
    name: string;
    color: string;
}

export interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    projectId: string;
    dueDate?: Date;
}