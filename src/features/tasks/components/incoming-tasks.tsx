import styled from "@emotion/styled";
import { themeTokens } from "@shared/hooks/use-theme";
import * as projects from "@ft_projects/index";
import * as projectModels from "@ft_projects/types/models";
import * as models from "@ft_tasks/types/models";
import { taskSearchService } from "@ft_tasks/index";
import { useEffect, useState } from "react";

const IncomingTasksPanel = styled.div`
    padding: 1rem;

    & > h3 {
        background-color: hsl(${themeTokens.backgroundColors.panelHover});
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }
`;

const ProjectsList = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
`;

export default function IncomingTasksComponent() {
    const [incomingTasks, setIncomingTasks] = useState<models.Task[]>([]);

    const projectIds = incomingTasks.reduce((acc, task) => {
        if (!acc.includes(task.projectId)) {
            acc.push(task.projectId);
        }
        return acc;
    }, [] as string[]);

    const projectsList = projectIds.map(id => {
        const tasks = incomingTasks.filter(task => task.projectId === id);
        return {
            id,
            name: `Project ${id}`,
            description: `This is project ${id}.`,
            tasks
        } as projectModels.ProjectWithTasks;
    });

    useEffect(() => {
        taskSearchService.getIncomingTasks().then(r => setIncomingTasks(r.tasks));
    }, []);

    return (
        <IncomingTasksPanel>
            <h3>
                Incoming tasks
            </h3>
            <ProjectsList className="projects-list">
                {projectsList.map(project => (
                    <projects.TasksInProjectComponent key={project.id} project={project} />
                ))}
            </ProjectsList>
        </IncomingTasksPanel>
    );
}