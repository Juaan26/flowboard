import LoginForm from "../components/LoginForm"
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

type Credentials = {
  email: string
  password: string
}


function LoginPage () {
const  [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
})
const login = useAuthStore((state) => state.login)
const navigate = useNavigate()

const handleSubmit = () => {
  login({
    id: '1',
    name: 'Ada Lovelace',
    email: 'ada@test.com',
    avatarUrl: ''
  }, 'mock-token')

  navigate('/dashboard')
}

return(
<div className="min-h-screen flex items-center justify-center bg-gray-50">
<LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        handleSubmit={handleSubmit}
      />
</div>
    

)

}

export default LoginPage