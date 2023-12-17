import React, { Fragment, useEffect, useState } from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// // or only core styles
// import '@splidejs/react-splide/css/core';
import blair from "../assets/Oval.svg"
import Loading from './loading'
import { NavLink, useParams } from 'react-router-dom'
import Videopg from './videopg'

const Main = () => {
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 4000)
    }, [])
    const [data, setData] = useState([])
    useEffect(() => {
        const url = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd3b35be7ddmshff3031c464a416bp15a222jsn1328bfa4c969',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        async function na(url, options) {
            let respons = await fetch(url, options)
            let x = await respons.json()
            // console.log(x.items);
            setData(x.items)


        }

        na(url, options);
    }, [])

    console.log(data);
    const { userID } = useParams()

    const send = <Videopg key={data} />
    return (
        <Fragment>
            {
                load ?
                    <Loading />

                    :
                    <main>
                        <div className="container">
                            <div className="w-full flex items-center justify-end">
                                <div className=" md:w-[550px] h-[280px]  lg:w-[1200px]">
                                    <div className="w-full h-[50px] flex justify-between items-center">
                                        <div className='w-[205px] h-[50px] flex justify-between items-center font-bold text-[26px]'>
                                            <img className=' w-[50px] h-[50px]' src={blair} alt="img" />
                                            <p>Dollie Blair</p>
                                        </div>
                                        <div className="w-[68px] flex justify-between items-center">
                                            <button className="w-[28px] h-[28px] rounded-[50%] bg-[#969696] border-none text-white"><i class='bx bx-chevron-left'></i></button>
                                            <button className="w-[28px] h-[28px] rounded-[50%] bg-[#969696] border-none text-white"><i class='bx bx-chevron-right' ></i></button>
                                        </div>
                                    </div>
                                    <div className="w-full h-auto  mt-[30px] flex flex-wrap justify-between">
                                        {
                                            data.map((e, index) => (
                                                <NavLink to={`/:${index}`}>
                                                    <div className="w-[250px] rounded-lg  ">
                                                        <iframe className="rounded-lg" src={`https://www.youtube.com/embed/${e.id.videoID}?si=aY6jduUgDRGVX56L`} frameborder="0"></iframe>
                                                        <div className="w-[250px]  text-slate-600">
                                                            <p className=" font-bold text-[16px] leading-[20.08px]">{e.snippet.channelTitle}</p>
                                                            <p>{e.snippet.publishTime.slice(0, 10)}</p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>



                            {/* <div className="mainroot w-full flex flex-col items-center justify-around  h-auto gap-5">
                    <div className="mainroot_child w-full  h-[198px]  bg-slate-600">
                        <img className="w-full h-[150px] bg-white rounded-lg" src="R" alt="img" />
                        <h3 className=""></h3>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="mainroot_child w-full  h-[198px]  bg-slate-600">
                        <img className="w-full h-[150px] bg-white rounded-lg" src="R" alt="img" />
                        <h3 className=""></h3>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="mainroot_child w-full  h-[198px]  bg-slate-600">
                        <img className="w-full h-[150px] bg-white rounded-lg" src="R" alt="img" />
                        <h3 className=""></h3>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="mainroot_child w-full  h-[198px]  bg-slate-600">
                        <img className="w-full h-[150px] bg-white rounded-lg" src="R" alt="img" />
                        <h3 className=""></h3>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div> */}
                        </div>
                        {/* <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <div className="flex">
                        <SplideSlide>
                            <iframe src="https://www.youtube.com/embed/cVa13fNHyj0?si=ydBLXM1QprGR_0FW" title="YouTube video player" frameborder="0" allowFullScreen="true"></iframe>
                        </SplideSlide>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex">
                        <SplideSlide>
                            <iframe src="https://www.youtube.com/embed/cVa13fNHyj0?si=ydBLXM1QprGR_0FW" title="YouTube video player" frameborder="0" allowFullScreen="true"></iframe>
                        </SplideSlide>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="flex">
                        <SplideSlide>
                            <iframe src="https://www.youtube.com/embed/cVa13fNHyj0?si=ydBLXM1QprGR_0FW" title="YouTube video player" frameborder="0" allowFullScreen="true"></iframe>
                        </SplideSlide>
                    </div>
                </SplideSlide>
            </Splide> */}
                    </main>
            }

        </Fragment>
    )
}

export default Main
