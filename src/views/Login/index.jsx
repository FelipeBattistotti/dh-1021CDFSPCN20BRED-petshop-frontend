import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleLogin = () => {
    const auth = {
      email: email,
      senha: pwd
    }

    try {
      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <h1>Login</h1>

      <div>
        <input
          id="email"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          id="pwd"
          type="password"
          placeholder="Senha"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <button onClick={handleLogin}>
          Entrar
        </button>

        <Link to="/register">
          Cadastrar-se
        </Link>
      </div>
    </>
  )
}
export default Login