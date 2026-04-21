import styled from "@emotion/styled";
import { TriangleAlert } from "lucide-react";
import * as projects from "@ft_projects/index";
import * as projectModels from "@ft_projects/types/models";
import * as models from "@ft_tasks/types/models";
import { taskSearchService } from "@ft_tasks/index";
import { useEffect, useState } from "react";

const OverdueTasksPanel = styled.div`
`;

const ProjectsList = styled.div`
`;

export default function OverdueTasksComponent() {
    const [overdueTasks, setOverdueTasks] = useState<models.Task[]>([]);

    const projectIds = overdueTasks.reduce((acc, task) => {
        if (!acc.includes(task.projectId)) {
            acc.push(task.projectId);
        }
        return acc;
    }, [] as string[]);

    const projectsList = projectIds.map(id => {
        const tasks = overdueTasks.filter(task => task.projectId === id);
        return {
            id,
            name: `Project ${id}`,
            description: `This is project ${id}.`,
            tasks
        } as projectModels.ProjectWithTasks;
    });

    useEffect(() => {
        taskSearchService.getOverdueTasks().then(r => setOverdueTasks(r.tasks));
    }, []);

    return (
        <OverdueTasksPanel>
            <h3>
                <TriangleAlert /> Overdue tasks
            </h3>
            <ProjectsList className="projects-list">
                {projectsList.map(project => (
                    <projects.TasksInProjectComponent key={project.id} project={project} />
                ))}
            </ProjectsList>
        </OverdueTasksPanel>
    );
}