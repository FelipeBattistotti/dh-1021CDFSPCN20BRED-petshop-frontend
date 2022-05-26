import { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useUserPref } from '../../contexts/UserPrefContext'

const Cuidadores = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const {
      darkMode
    } = useUserPref()

    const sendCuidador = async () => {
        const cuidador = {nome: nome, email: email, senha: senha}
        try {
            const respostaPostCuidador = await axios.post('http://localhost:3000/cuidador',
                                                            cuidador,
                                                            {
                                                                headers: {
                                                                    Authorization: document.cookie.split('=')[1]
                                                                }
                                                            }
                                                        )
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className={darkMode ? "cuidadores-dark" : "cuidadores"}>
            <div className="pets-register">
                <h2 className={darkMode ? "title-dark" : "title"}>
                  Cadastro de Cuidadores
                </h2>
                <div>
                  <div className="form-group">
                      <label className={darkMode ? "label-dark" : "label"} htmlFor="cuidador-name">Nome do(a) cuidador(a): </label>
                      <input type="text" id='cuidador-name' value={nome} onChange={(event) => setNome(event.target.value)} />
                  </div>
                  <div className="form-group">
                      <label className={darkMode ? "label-dark" : "label"} htmlFor="cuidador-email">Email: </label>
                      <input type="email" id='cuidador-email' value={email} onChange={(event) => setEmail(event.target.value)} />
                  </div>
                  <div className="form-group">
                      <label className={darkMode ? "label-dark" : "label"} htmlFor="cuidador-password">Senha: </label>
                      <input type="password" id='cuidador-password' value={senha} onChange={event => setSenha(event.target.value)} />
                  </div>
                  <button className='save-btn' onClick={sendCuidador}>Salvar Cuidador!</button>
                </div>
            </div>
        </div>
    )
}

export default Cuidadores
