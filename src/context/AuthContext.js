import { createContext, useState } from "react"
import axios from "axios"


const AuthContext = createContext('sin provider')

export function AuthContextProvider({ children }) {

    const initializeToken = () => (localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const initializeAuthentication = () => (localStorage.getItem('token') ? true : false)

    const [token, setToken] = useState(initializeToken())

    token && (axios.defaults.headers.common["Authorization"] = "Token " + token)

    const [isAuthenticated, setAuthentication] = useState(initializeAuthentication())


    const addToken = (token) => {

        setToken(token)
        setAuthentication(true)
        localStorage.setItem("token", token)

    }

    const removeToken = (token) => {

        localStorage.removeItem("token")
        axios.defaults.headers.common["Authorization"] = ""
        setAuthentication(false)
        setToken(token)

    }


    return (
        <AuthContext.Provider value={{ addToken, isAuthenticated, removeToken, setAuthentication }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext