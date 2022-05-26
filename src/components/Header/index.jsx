import { useNavigate } from 'react-router-dom'
import { useUserPref } from '../../contexts/UserPrefContext'

const Header = () => {

    const navigate = useNavigate()
    const {
      darkMode,
      setDarkMode
    } = useUserPref()
    console.log(darkMode)

    const handleLogout = () => {
        document.cookie = `auth=; expires=${new Date(0)}`
        navigate('/')
    }

    return (
        <>
            <header className="App-header">
                <p>
                Petshop
                </p>
            </header>

            <p onClick={handleLogout}>
                Sair
            </p>

            <button onClick={() => setDarkMode(!darkMode)}>
              Dark
            </button>
        </>
    )
}

export default Header