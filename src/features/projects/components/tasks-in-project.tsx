import styled from "@emotion/styled";
import { TaskNameComponent } from "@ft_tasks/index";
import * as models from "../types/models";
import { CollapsiblePanel } from "@shared/components";

const TaskListPanel = styled.div`
`;

export interface TasksInProjectProps {
    project: models.ProjectWithTasks;
}

export default function TasksInProjectComponent({ project }: TasksInProjectProps) {
    return (
        <CollapsiblePanel defaultExpanded>
            <CollapsiblePanel.Title>
                <h3>
                    {project.name}
                </h3>
            </CollapsiblePanel.Title>
            <CollapsiblePanel.Content>
                <TaskListPanel>
                    {project.tasks.map(task => (
                        <TaskNameComponent key={task.id} task={task} />
                    ))}
                </TaskListPanel>
            </CollapsiblePanel.Content>
        </CollapsiblePanel>
    );
}