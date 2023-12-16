import React, { Fragment, useState } from 'react'
import '../components/header.css'
import logo from "../assets/Black.svg"
import lupa from "../assets/Search.svg"
import Main from './main'
import account from '../assets/Userpic.svg'
// import points from '../assets/nuqtalar.svg'
const Header = () => {
    let [x, setX] = useState(false)
    let y = () => {
        setX(true)
    }
    let a = () => {
        setX(false)

    }
    let dark = () => {
        document.querySelector('body').setAttribute("class", "dark")
    }
    let bg = () => {
        document.querySelector('nav').setAttribute("class", "bg")
    }
    let light = () => {
        document.querySelector('body').setAttribute("class", "light")
    }
    return (
        <Fragment>

            <header>
                <nav className={x ? "pt-[12px] fixed w-full top-0 left-0 z-10 bg-white h-[50px]" : "pt-[12px] fixed w-full top-0 left-0 z-10 bg-[#898989] h-[50px]"}>
                    <div className="container">
                        <div className="navbar flex h-[25px] justify-between">
                            <div className="flex w-[164px] justify-between items-center">
                                <button><i class='hidden bx bx-menu md:block text-2xl' ></i></button>
                                <img src={logo} alt="img" />
                            </div>
                            <div className=" hidden lg:block lg:relative">
                                <input className="md:w-[530px] md:h-[34px] md:rounded-2xl md:pl-[23px]" type="text" placeholder='Search' />
                                <i class=' bx bx-search-alt-2 absolute right-[12px] top-[3px] text-2xl' ></i>
                            </div>

                            <div className=" w-[73px] flex justify-between items-center md:w-[260px]">
                                <button><img className="md:hidden" src={lupa} alt="img" /></button>
                                <button> <i class=' hidden bx bx-camera-movie md:block md:text-2xl text-[#C2C2C2]'></i></button>
                                <button onClick={dark}><i class='hidden md:block md:text-2xl text-[#C2C2C2] bx bx-moon' ></i></button>
                                <button onClick={light}><i class='hidden md:block md:text-2xl text-[#C2C2C2] bx bx-sun' ></i></button>
                                <img className="w-[30px] h-[30px] rounded-full" src={account} alt="img" />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* <i class='bx bx-moon' ></i> */}
        </Fragment>
    )
}

export default Header
