import * as models from "@ft_tasks/types/models";

export interface GetOverdueTasksResponse {
    tasks: models.Task[];
}

export interface GetIncomingTasksResponse {
    tasks: models.Task[];
}

export interface TaskSearchService {
    getOverdueTasks(): Promise<GetOverdueTasksResponse>;
    getIncomingTasks(): Promise<GetIncomingTasksResponse>;
}

export class TaskSearchServiceImpl implements TaskSearchService {
    getOverdueTasks(): Promise<GetOverdueTasksResponse> {
        const items: models.Task[] = [
            {
                id: "1",
                name: "Task 1",
                status: { id: "1", name: 'Overdue', color: "red" },
                projectId: "1"
            },
            {
                id: "2",
                name: "Task 2",
                status: { id: "1", name: 'Overdue', color: "red" },
                projectId: "2",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "3",
                name: "Task 3",
                status: { id: "1", name: 'Overdue', color: "red" },
                projectId: "1",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "4",
                name: "Task 4",
                status: { id: "1", name: 'Overdue', color: "red" },
                projectId: "1",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "5",
                name: "Task 5",
                status: { id: "1", name: 'Overdue', color: "red" },
                projectId: "2",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            }
        ];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ tasks: items });
            }, 1000);
        });
    }

    getIncomingTasks(): Promise<GetIncomingTasksResponse> {
        
        const items: models.Task[] = [
            {
                id: "1",
                name: "Task 1",
                status: { id: "2", name: 'Active', color: "yellow" },
                projectId: "1",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "2",
                name: "Task 2",
                status: { id: "2", name: 'Active', color: "yellow" },
                projectId: "2",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "3",
                name: "Task 3",
                status: { id: "2", name: 'Active', color: "yellow" },
                projectId: "1",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "4",
                name: "Task 4",
                status: { id: "2", name: 'Active', color: "yellow" },
                projectId: "1",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            },
            {
                id: "5",
                name: "Task 5",
                status: { id: "2", name: 'Active', color: "yellow" },
                projectId: "2",
                dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // yesterday
            }
        ];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ tasks: items });
            }, 1000);
        });
    }
}

export const taskSearchService: TaskSearchService = new TaskSearchServiceImpl();