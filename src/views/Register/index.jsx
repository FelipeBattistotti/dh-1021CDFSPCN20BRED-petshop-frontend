import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

const Register = () => {
  // states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  // Hooks
  const navigate = useNavigate()

  // functions
  const handleRegister = async () => {
    const user = {
      nome: name,
      email: email,
      senha: pwd
    }

    try {
      await axios.post('http://localhost:3000/usuario', user)

      alert('Cadastro efetuado!')

      navigate('/')

    } catch (error) {
      alert(error.response.data)
    }
  }

  // JSX
  return (
    <>
      <h1>Criar Conta</h1>

      <div className="container">
        <input
          id="name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
        <button onClick={handleRegister}>
          Cadastrar
        </button>

        <Link to="/">
          Voltar para Login
        </Link>
      </div>
    </>
  )
}
export default Register