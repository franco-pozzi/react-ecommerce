import axios from "axios"

export function logInServices ({formData, setErrors, addToken}) {    
     
    axios.defaults.headers.common["Authorization"] = ""

    localStorage.removeItem("token")

    axios
            .post("/api/v1/token/login/", formData)
            .then(response => {

                const token = response.data.auth_token

                axios.defaults.headers.common["Authorization"] = "Token " + token

                localStorage.setItem("token", token)

                addToken(token)
            })
            .catch(error => {
                if (error.response) {
                    for (const property in error.response.data) {
                        setErrors(`${property}: ${error.response.data[property]}`)
                    }
                } else {
                    setErrors('Something went wrong. Plase try again')

                    console.log(JSON.stringify(error))
                }
            })
}


