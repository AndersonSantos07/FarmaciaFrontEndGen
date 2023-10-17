import React from 'react'
import Logo from "../../assets/logo_farmacia.svg"
import LogoLogin from "../../assets/user.svg"
import Carrinho from "../../assets/shopping-cart.svg"

function NavBar() {
    return (
        <>

            <header className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <nav className="container ">
                    <ul className='flex flex-row justify-between items-center gap-4 text-lg'>
                        <div>
                            <li><a href="#"><img src={Logo} alt="Logo Farmacia" /></a></li>
                        </div>
                        <div>
                            <li><input className="rounded-md p-2 w-96" type='text' placeholder='Procurar' /></li>
                        </div>
                        <div className='flex gap-4'>
                            <li><a href="#" className='hover:underline'>Categorias</a></li>
                            <li><a href="#" className='hover:underline'>Cadastrar Categoria</a></li>
                            <li><a href="#"><img src={LogoLogin} alt="Login" /></a></li>
                            <li><a href="#"><img src={Carrinho} alt="Carrinho de Compras" /></a></li>
                        </div>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default NavBar