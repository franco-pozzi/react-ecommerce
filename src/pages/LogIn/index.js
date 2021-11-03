import { useState } from "react"
import { Link, Redirect} from "react-router-dom"
import { useContext } from "react"


import AuthContext from "context/AuthContext"



import { logInServices } from "services/logInServices"



const LogIn = () => {

    const { isAuthenticated, addToken } = useContext(AuthContext)

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState()

    


    const onSubmit = (e) => {
        e.preventDefault()        

        const formData = {
            username: username,
            password: password
        }

        logInServices({formData, addToken, setErrors})
    }

    const UserNameChange = evt => { setUsername(evt.target.value) }

    const PasswordChange = evt => { setPassword(evt.target.value) }


    if (isAuthenticated) return <Redirect to='/cart' />

    return (
        <section className='section'>
            <div className="page-log-in">
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <h1 className="title">Log in</h1>

                        <form onSubmit={onSubmit}>
                            <div className="field">
                                <label>Username</label>
                                <div className="control">
                                    <input type="text" placeholder='username' className="input" value={username} onChange={UserNameChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Password</label>
                                <div className="control">
                                    <input type="password" placeholder='password' className="input" value={password} onChange={PasswordChange} />
                                </div>
                            </div>

                            {errors &&
                                <div className="notification is-danger">
                                    <p>{errors}</p>
                                </div>
                            }

                            <div className="field">
                                <div className="control">
                                    <input type="submit" className="button is-dark" value='Log in' />
                                </div>
                            </div>

                            <hr />

                            Or <Link to="/sign-up">click here </Link> to sign up!
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LogIn
