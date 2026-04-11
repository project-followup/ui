import './landing-page.scss'
import { Button } from '../../components/Button'
import stickyNotesImg from '../../assets/pages/landing-page/stickynotes.jpg'
import meetingImg from '../../assets/pages/landing-page/meeting.jpg'

const AUTH_URL = 'http://localhost:4001/auth'

export function LandingPage() {
  return (
    <div className="landing-page">
      <section className="landing-page__hero">
        <h1 className="landing-page__title">Project FollowUp</h1>
        <p className="landing-page__tagline">
          Plan sprints, track tasks, and keep your team aligned — all in one place.
        </p>
      </section>

      <section className="landing-page__visuals" aria-label="Application features">
        <article className="landing-page__visual-card">
          <img
            src={stickyNotesImg}
            alt="Kanban board with sticky notes in different stages"
            className="landing-page__visual-img"
          />
          <p className="landing-page__visual-caption">Visualise your workflow with a task board</p>
        </article>
        <article className="landing-page__visual-card">
          <img
            src={meetingImg}
            alt="Team collaborating during a sprint planning meeting"
            className="landing-page__visual-img"
          />
          <p className="landing-page__visual-caption">Plan sprints and upcoming work together</p>
        </article>
      </section>

      <section className="landing-page__login" aria-label="Sign in">
        <h2 className="landing-page__login-heading">Get started</h2>
        <p className="landing-page__login-description">
          Sign in with your organisation account to access the dashboard.
        </p>
        <a href={AUTH_URL} className="landing-page__login-link">
          <Button size="large">Sign in</Button>
        </a>
      </section>
    </div>
  )
}
