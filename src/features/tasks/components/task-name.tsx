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

const TaskDisplay = styled.a`
`;

const IconDisplay = styled.span<{ color: string }>`
`;

const NameDisplay = styled.span`
`;

export default function TaskNameComponent({ task }: TaskNameProps) {
    function onClick() {
        alert(`Task ${task.id} clicked!`);
    }

    return (
        <TaskDisplay onClick={onClick}>
            <IconDisplay color={task.status.color} />
            <NameDisplay>{task.name}</NameDisplay>
        </TaskDisplay>
    );
}