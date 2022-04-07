import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

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
        </>
    )
}

export default Header