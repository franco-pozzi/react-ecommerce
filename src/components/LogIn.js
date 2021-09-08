import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const LogIn = ({ addToken }) => {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState()


    const onSubmit = (e) => {
        // e.preventDefault()

        axios.defaults.headers.common["Authorization"] = ""

        localStorage.removeItem("token")

        const formData = {
            username: username,
            password: password
        }

        axios
            .post("/api/v1/token/login/", formData)
            .then(response => {

                const token = response.data.auth_token

                axios.defaults.headers.common["Authorization"] = "Token " + token

                // addToken(token)
                console.log(token)


                // const toPath = this.$route.query.to || '/cart'

                // this.$router.push(toPath)
            })
            .catch(error => {
                // if (error.response) {
                //     for (const property in error.response.data) {
                //         errors.push(`${property}: ${error.response.data[property]}`)
                //     }
                // } else {
                //     setErrors('Something went wrong. Plase try again')

                //     console.log(JSON.stringify(error))

                console.log(error.response)
                // }
                // setErrors(error)
            })

        setUsername('')
        setPassword('')
    }



    useEffect(() => {
        document.title = 'Log In | Djackets'
    }, [])


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
                                    <input type="text" placeholder='username' className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>

                            <div className="field">
                                <label>Password</label>
                                <div className="control">
                                    <input type="password" placeholder='password' className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>

                            {/* {errors.length && 
                                <div className="notification is-danger">
                                    <p>{ error }</p>
                                </div>
                            } */}

                            <div className="field">
                                <div className="control">
                                    <input type="submit" className="button is-dark" onSubmit={onSubmit} value='Log in' />
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
