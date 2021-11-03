import { AuthContextProvider } from "context/AuthContext"

import 'bulma/css/bulma.min.css'

import axios from 'axios'



import Routes from "routes/Routes"


const App = () => {
  axios.defaults.baseURL = 'http://127.0.0.1:8000'

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}

export default App
