import './landing-page.scss'
import { Button } from '../../components/Button'

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

            <section className="sign-in">
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
