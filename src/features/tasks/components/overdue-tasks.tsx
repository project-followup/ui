import styled from "@emotion/styled";
import { themeTokens } from "@shared/hooks/use-theme";
import { TriangleAlert } from "lucide-react";
import * as projects from "@ft_projects/index";

const exampleProject = {
    id: "project1",
    name: "Example Project",
    description: "This is an example project.",
    tasks: [
        {
            id: "task1",
            name: "Example Task 1",
            status: { id: "status1", name: "To Do", color: "blue" },
            projectId: "project1"
        },
        {
            id: "task2",
            name: "Example Task 2",
            status: { id: "status2", name: "In Progress", color: "orange" },
            projectId: "project1"
        },
        {
            id: "task3",
            name: "Example Task 3",
            status: { id: "status3", name: "Done", color: "green" },
            projectId: "project1"
        }
    ]
};

const OverdueTasksPanel = styled.div`
    padding: 1rem;

    @keyframes changeColor {
        0% {
            background-color: hsl(${themeTokens.generalColors.error});
        }

        50% {
            background-color: hsl(${themeTokens.backgroundColors.panelHover});
        }

        100% {
            background-color: hsl(${themeTokens.generalColors.error});
        }
    }

    & > h3 {
        background-color: hsl(${themeTokens.generalColors.error});
        animation: changeColor ease;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }
`;

const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
`;

export default function OverdueTasksComponent() {
    return (
        <OverdueTasksPanel>
            <h3>
                <TriangleAlert /> Overdue tasks
            </h3>
            <ProjectsList className="projects-list">
                <projects.TasksInProjectComponent project={exampleProject} />
            </ProjectsList>
        </OverdueTasksPanel>
    );
}