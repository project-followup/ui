import styled from "@emotion/styled";
// import * as models from "@ft_tasks/types/models";
// import { taskSearchService } from "@ft_tasks/index";
// import { useEffect, useState } from "react";

const IncomingTasksPanel = styled.div`=
`;

export default function IncomingTasksComponent() {
    // const [incomingTasks, setIncomingTasks] = useState<models.Task[]>([]);

    // useEffect(() => {
    //     taskSearchService.getIncomingTasks().then(r => setIncomingTasks(r.tasks));
    // }, []);

    return (
        <IncomingTasksPanel>
            <h3>
                Incoming tasks
            </h3>
            {/* <TableComponent<models.Task>
                columns={[
                    { header: "Title", valueExtractor: task => task.name, order: 1 },
                    { header: "Status", valueExtractor: task => task.status.name, order: 2 },
                    { header: "Due date", valueExtractor: task => task.dueDate ? toDateOnlyString(task.dueDate) : '', order: 3 },
                    { header: "", valueExtractor: () => <button>View</button>, order: 4 }
                ]}
                data={incomingTasks}
            /> */}
        </IncomingTasksPanel>
    );
}