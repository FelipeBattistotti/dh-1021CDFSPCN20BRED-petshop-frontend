import React from "react"
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleRegister = () => {
    const user = {
      nome: name,
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
      <h1>Criar Conta</h1>

      <div>
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