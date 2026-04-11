import './landing-page.scss'
import { Button } from '../../components/Button'
import stickyNotesImg from '../../assets/pages/landing-page/stickynotes.jpg'
import meetingImg from '../../assets/pages/landing-page/meeting.jpg'
import { ArticleComponent } from './components/article'

const AUTH_URL = 'http://localhost:4001/auth'

export function LandingPage() {
    return (
        <div className='landing-page'>
            <section>
                <h1>Project FollowUp</h1>
                <p>
                    Plan sprints, track tasks, and keep your team aligned — all in one place.
                </p>
            </section>

            <section>
                <h2>Get started</h2>
                <p>
                    Sign in with your organisation account to access the dashboard.
                </p>
                <a href={AUTH_URL}>
                    <Button size="large">Sign in</Button>
                </a>
            </section>

            <section className="info-section">
                <ArticleComponent
                    image={stickyNotesImg}
                    imageAltText="Kanban board with sticky notes in different stages">
                    <h2>Trace your work</h2>
                    <div>
                        <p>With <em>Project FollowUp</em> you can keep track of work being done and work ahead of you.</p>
                        <p>Create projects, divide them into tasks, and assign them to team members.</p>
                        <p>Track progress of each task and project as a whole.</p>
                    </div>
                </ArticleComponent>
                <ArticleComponent
                    image={meetingImg}
                    imageAltText="Team collaborating during a sprint planning meeting">
                    <h2>Plan sprints</h2>
                    <div>
                        <p>Collaborate with your team members to plan next steps and ensure everyone is aligned.</p>
                        <p>Run meetings to discuss progress, address blockers, and plan upcoming tasks.</p>
                        <p>Keep detailed information about progress in projects and tasks.</p>
                    </div>
                </ArticleComponent>
            </section>
        </div >
    )
}
