import React, { Fragment, useState } from 'react'
import pieimitiv from '../assets/subscrip.svg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    let [x, setX] = useState(false)
    let y = () => {
        setX(true)
    }
    let a = () => {
        setX(false)

    }
    let [b, setB] = useState(false)
    let shov = () => {
        setB(true)
    }
    let dethshov = () => {
        setB(false)

    }
    return (
        <Fragment>
            <footer className={x ? "  bg-white w-full justify-between fixed left-0 bottom-0  flex  h-[61px]  pt-[9px] pl-[24px] pr-[24px] pb-[11px] border-slate-800 md:w-[160px] md:h-full  md:top-[62px] md:left-[31px] md:flex-col md: gap-[30px]bg-[#898989] md:rounded" : "bg-white w-full fixed justify-between left-0 bottom-0  flex  h-[61px]  pt-[9px] pl-[24px] pr-[24px] pb-[11px] border-slate-800 md:w-[160px] md:h-full  md:top-[62px] md:left-[31px] md:flex-col md: gap-[30px]  md:rounded md:justify-evenly"}>
                {/* ........................................................................................................................................................ */}
                <div className="hidden md:flex md:h-[96px} md: flex-col md: gap-[28px] md:items-start">
                    <NavLink to="/">
                        <div className="flex w-[78px] justify-between items-center text-[#323131]">
                            <button><i class='bx bxs-home-smile text-2xl' ></i></button>
                            <p className="">Home</p>
                        </div>
                    </NavLink>
                    <div className="flex w-[78px] justify-between items-center text-[#323131]">
                        <button><i class='bx bxs-hot  text-2xl' ></i></button>
                        <p className="">Trending</p>
                    </div>
                    <div className="flex w-[78px] justify-between items-center text-[#323131]">
                        <button><i class='bx bx-plus-medical text-2xl'></i></button>
                        <p className="">Subscr</p>
                    </div>
                </div>
                {/* ........................................................................................................................................................... */}
                <button onClick={shov} className={b ? " hidden" : "hidden md:w-full md:flex  md:justify-between md:items-center md:text-[#323131]"}>
                    <i class='bx bx-collapse-horizontal text-2xl' ></i>
                    <p>collection</p>
                </button>
                <button onClick={dethshov} className={b ? " hidden md:w-full md:flex  md:justify-between md:items-center md:text-[#323131]" : " hidden"}>
                    <i class='bx bx-expand-horizontal text-2xl' ></i>
                    <p>show more</p>
                </button>
                {/* ........................................................................................................................................................................ */}
                <div className={b ? " hidden" : "hidden md:block"}>
                    <NavLink to="/lybr">
                        <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                            <i class='bx bx-folder  text-2xl'></i>
                            <p>Library</p>
                        </button>
                    </NavLink>
                    <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                        <i class='bx bx-history  text-2xl'></i>
                        <p>History</p>
                    </button>
                    <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                        <i class='bx bx-stopwatch text-2xl' ></i>
                        <p>Watch later</p>
                    </button>
                    <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                        <i class='bx bx-star text-2xl' ></i>
                        <p>Favourites</p>
                    </button>
                    <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                        <i class='bx bx-like text-2xl' ></i>
                        <p>Liked videos</p>
                    </button>
                    <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                        <i class='bx bx-music text-2xl' ></i>
                        <p>Music</p>
                    </button>
                    <button className="flex  w-[124px] items-center justify-between text-[#323131] mb-[20px]">
                        <i class='bx bx-game text-2xl' ></i>
                        <p>Games</p>
                    </button>
                </div>
                <div className="hidden md:block"></div>
                <button onClick={y} className="w-[28px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000] md:hidden">
                    <i class='bx bxs-arrow-to-top text-[#898989] text-3xl'></i>
                    <p className="text-[#898989] font-normal text-xs">More</p>
                </button>
                <button className="w-[41px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000] md:hidden">
                    <i class='bx bxs-hot text-[#898989] text-2xl' ></i>
                    <p className="text-[#898989] font-normal text-xs">Trending</p>
                </button>
                <button className="w-[63px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000] md:hidden">
                    <i class='bx bxs-data text-[#898989] text-2xl'></i>
                    <p className="text-[#898989] font-normal text-xs">Subscriptions</p>
                </button>
                <button className="w-[33px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000] md:hidden">
                    <i class='bx bx-folder text-[#898989] text-2xl'></i>
                    <p className="text-[#898989] font-normal text-xs">Library</p>
                </button>
                <div className={x ? " flex  flex-col  items-center justify-around   bg-white  rounded w-[63px] h-[400px] fixed left-0 bottom-[61px]  transition-[1s] md:hidden" : " hidden"}>
                    <button onClick={a} className={x ? " bg-slate-50 text-black " : " text-gray-50"}><i class='bx bx-vertical-bottom w-[40px] text-2xl  font-medium'></i></button>
                    <NavLink to="/">
                        <button >
                            <i class='bx bx-home text-[#898989] text-2xl'></i>
                            <p className="text-[#898989] font-normal text-xs">Home</p>
                        </button>
                    </NavLink>
                    <button className="w-[41px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000]">
                        <i class='bx bx-music text-2xl  text-[#898989]' ></i>
                        <p className="text-[#898989] font-normal text-xs">Music</p>
                    </button>
                    <button className="w-[63px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000]">
                        <i class='bx bx-game text-2xl text-[#898989]' ></i>
                        <p className="text-[#898989] font-normal text-xs">Games</p>
                    </button>
                    <button className="w-[33px] h=[37px] flex flex-col items-center justify-between border-none hover:text-[#FF0000]">
                        <i class='bx bx-star text-2xl text-[#898989]' ></i>
                        <p className="text-[#898989] font-normal text-xs">Famouse</p>
                    </button>

                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
