import React, { useContext } from 'react'
import Logo from "../../assets/logo_farmacia.svg"
import LogoLogin from "../../assets/user.svg"
import Carrinho from "../../assets/shopping-cart.svg"
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function NavBar() {

    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent  //variavel usada no conteúdo sobre renderização condicional

    if (usuario.token !== "") {
        navbarComponent = (
            <>

                <header className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                    <nav className="container ">
                        <ul className='flex flex-row justify-between items-center gap-4 text-lg'>
                            <div>
                                <li>
                                    <Link to="/"><img src={Logo} alt="Logo Farmacia" /> 
                                    </Link>
                                </li>
                            </div>
                            <div>
                                <li><input className="rounded-md p-2 w-96" type='text' placeholder='Procurar' /></li>
                            </div>
                            <div className='flex gap-4'>
                                <li><Link to="/categoria" className='hover:underline'>Categorias</Link></li>
                                <li><Link to="/cadastroCategoria" className='hover:underline'>Cadastrar Categoria</Link></li>
                                <li><a href="#"><img src={LogoLogin} alt="Login" /></a></li>
                                <li><a href="#"><img src={Carrinho} alt="Carrinho de Compras" /></a></li>
                            </div>
                        </ul>
                    </nav>
                </header>

            </>
        )
    }

    return (

        <>

            {navbarComponent}
        </>
    )
}

   

    export default NavBar()