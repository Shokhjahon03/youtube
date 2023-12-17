import React, { Fragment, useEffect, useState } from 'react'
import Loading from './loading'

const Libary = () => {
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 4000)
    }, [])
    return (
        <Fragment>
            {
                load ?
                    <Loading />
                    :
                    <h1 className=" mx-20 my-20 text-center">hello Libary</h1>
            }
        </Fragment>
    )
}

export default Libary
