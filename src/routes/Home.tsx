import React from 'react'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import BannerHome from '../assets/bannerHome.svg'

function Home() {
    return (

        <>

            <NavBar />

            <main className='flex items-center justify-center gap-40 bg-cyan-400 h-screen'>

                <section className='flex flex-col gap-10 items-center '>
                    <h1 className='text-6xl font-bold'>Seja bem vinde!</h1>
                    <p className='text-2xl font-semibold'>Aqui você encontra Medicamentos e Cosméticos!</p>
                    <button className='w-48 h-10 bg-indigo-600 rounded-md text-base font-normal text-white' >Cadastrar produtos</button>
                </section>


                <section>
                    <img src={BannerHome} alt="Banner Home" />
                </section>

            </main>

            <Footer />

        </>

    )
}

export default Home