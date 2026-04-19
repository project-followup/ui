import * as tasksModels from "@ft_tasks/types/models";

export interface ProjectWithTasks {
    id: string;
    name: string;
    description: string;
    tasks: tasksModels.Task[];
}