import './landing-page.scss'
import { Button } from '../../components/Button'
import stickyNotesImg from '../../assets/pages/landing-page/stickynotes.jpg'
import meetingImg from '../../assets/pages/landing-page/meeting.jpg'

const AUTH_URL = 'http://localhost:4001/auth'

export function LandingPage() {
    return (
    <div>
        <section>
        <h1>Project FollowUp</h1>
        <p>
          Plan sprints, track tasks, and keep your team aligned — all in one place.
        </p>
      </section>

      <section>
        <article>
          <img
            src={stickyNotesImg}
            alt="Kanban board with sticky notes in different stages"
          />
          <p>Visualise your workflow with a task board</p>
        </article>
        <article>
          <img
            src={meetingImg}
            alt="Team collaborating during a sprint planning meeting"
          />
          <p>Plan sprints and upcoming work together</p>
        </article>
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
    </div >
  )
}
