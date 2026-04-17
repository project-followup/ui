import './landing-page.scss'
import { Button } from '@shared/controls/Button'
import { useAuth } from '@shared/hooks/use-auth';

export function LandingPage() {
    const { login } = useAuth();

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
                <Button size="large" onClick={login}>Sign in</Button>
            </section>
        </div >
    )
}
