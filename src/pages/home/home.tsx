
import { OverdueTasksComponent, IncomingTasksComponent } from "@ft_tasks/index";

export default function Home() {
    return (<div>
        <h2>Home</h2>
        <OverdueTasksComponent />
        <IncomingTasksComponent />
    </div>);
}