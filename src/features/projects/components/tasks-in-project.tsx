import styled from "@emotion/styled";
import { TaskNameComponent } from "@ft_tasks/index";
import { themeTokens } from "@shared/hooks/use-theme";
import * as models from "../types/models";

const ProjectPanel = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.panel});
    border-radius: 0.5rem;
    h2 {
        width: 100%;
        background-color: hsl(${themeTokens.backgroundColors.panelHover});
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        padding: 0.5rem 1rem;
    }
`;

const TaskListPanel = styled.div`
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

export interface TasksInProjectProps {
    project: models.ProjectWithTasks;
}

export default function TasksInProjectComponent({ project }: TasksInProjectProps) {
    return (
        <ProjectPanel>
            <h2>{project.name}</h2>
            <TaskListPanel>
                {project.tasks.map(task => (
                    <TaskNameComponent key={task.id} task={task} />
                ))}
            </TaskListPanel>
        </ProjectPanel>
    );
}