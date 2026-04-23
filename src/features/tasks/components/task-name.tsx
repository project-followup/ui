import styled from "@emotion/styled";
import { type TaskStatus } from "@ft_tasks/types/models";

export interface Task {
    id: string;
    name: string;
    status: TaskStatus;
    projectId: string;
}

export interface TaskNameProps {
    task: Task;
}

interface TaskDisplayProps {
    backgroundColor: string;
}

const TaskDisplay = styled.a<TaskDisplayProps>`
    background-color: ${props => props.backgroundColor};
    padding: 0.5em 1em;
    border-radius: 9999px;
    cursor: pointer;
`;

const NameDisplay = styled.span`
`;

export default function TaskNameComponent({ task }: TaskNameProps) {
    function onClick() {
        alert(`Task ${task.id} clicked!`);
    }

    return (
        <TaskDisplay onClick={onClick} backgroundColor={task.status.color}>
            <NameDisplay>{task.name}</NameDisplay>
        </TaskDisplay>
    );
}