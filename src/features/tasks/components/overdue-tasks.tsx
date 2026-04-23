import styled from "@emotion/styled";
import { TriangleAlert } from "lucide-react";
import * as projects from "@ft_projects/index";
import * as projectModels from "@ft_projects/types/models";
import * as models from "@ft_tasks/types/models";
import { taskSearchService } from "@ft_tasks/index";
import { useEffect, useState } from "react";
import { themeTokens } from "@shared/types/themes";

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0;
`;

const Header = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.primary});
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    padding: 0.5em;
`;

const Content = styled.div`
    background-color: hsl(${themeTokens.backgroundColors.secondary});
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
`;

const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
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
        <Container>
            <Header>
                <h3>
                    <TriangleAlert /> Your overdue tasks
                </h3>
            </Header>
            <Content>
                <ProjectsList className="projects-list">
                    {projectsList.map(project => (
                        <projects.TasksInProjectComponent key={project.id} project={project} />
                    ))}
                </ProjectsList>
            </Content>
        </Container>
    );
}