import styled from "@emotion/styled";
import type { TaskStatus } from "@ft_tasks/types/model";
import { themeTokens } from "@shared/hooks/use-theme";

export interface TaskNameProps {
    id: string;
    name: string;
    status: TaskStatus;
}

const TaskDisplay = styled.a`
    background-color: hsl(${themeTokens.generalColors.information});
    padding: 0.5em 1em;
    border-radius: 9999px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    border: none;
    box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    background-image: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.1) 0%, 
        transparent 50%, 
        rgba(0, 0, 0, 0.05) 100%);
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.15),
            0 2px 4px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.2),
            inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }
`;

const IconDisplay = styled.span<{ color: string }>`
    background: radial-gradient(circle at center, white, ${props => props.color} 40%);
    display: inline-block;
    min-width: 0.9em;
    min-height: 0.9em;
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

export default function TaskNameComponent({ id, name, status }: TaskNameProps) {
    function onClick() {
        alert(`Task ${id} clicked!`);
    }

    return (
        <TaskDisplay onClick={onClick}>
            <IconDisplay color={status.color} />
            {name}
        </TaskDisplay>
    );
}