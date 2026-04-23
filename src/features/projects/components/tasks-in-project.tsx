import styled from "@emotion/styled";
import { themeTokens } from "@shared/types/themes";
import { TaskNameComponent } from "@ft_tasks/index";
import * as models from "../types/models";

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0;
`;

const Header = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.secondary});
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    padding: 0.5em;
`;

const Content = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.tertiary});
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 1em;
    display: flex;
    gap: 0.5em;
`;

export interface TasksInProjectProps {
    project: models.ProjectWithTasks;
}

export default function TasksInProjectComponent({ project }: TasksInProjectProps) {
    return (
        <Container>
            <Header>
                <h3>
                    {project.name}
                </h3>
            </Header>
            <Content>
                {project.tasks.map(task => (
                    <TaskNameComponent key={task.id} task={task} />
                ))}
            </Content>
        </Container>
    );
}