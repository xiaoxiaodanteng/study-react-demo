import React, {useState} from 'react';
// import  * as auth from './auth-provider'

const authContext = React.createContext(undefined)
authContext.displayName = 'AuthContext'

interface AuthForm {
  username: string,
  password: string
}

export const AuthProvider = () => {
  const [user, setUser] = useState(null)
  
  // const login = (form: AuthForm) => auth.login(form).then(user => setUser(user))
}