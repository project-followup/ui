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
    padding: 0.5em 1em;
    border-radius: 9999px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    border: solid black 1px;
`;

const IconDisplay = styled.span<{ color: string }>`
    background: radial-gradient(circle at 45% 45%, white, ${props => props.color} 35%);
    display: inline-block;
    min-width: 1em;
    min-height: 1em;
    border-radius: 9999px;
    border: solid grey 1px;
    vertical-align: baseline;
    position: relative;
    left: -0.5em;
    box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.15),
        0 2px 4px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
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