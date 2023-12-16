import React, { Fragment, useState } from 'react'

const Exam = () => {
    let [x, setX] = useState(false)
    let y = () => {
        setX(true)
    }
    let a = () => {
        setX(false)

    }
    return (
        <Fragment>

            {/* <p className={x ? "bg-black text-slate-300" : "bg-slate-700 text-orange-400"}>{x ? "salom" : "xayr"}</p> */}

            <body className={x ? "bg-black text-slate-300" : "bg-slate-700 text-orange-400"}>
                <button onClick={y} >+</button>
                <button onClick={a}>-</button>
            </body>

            <button onClick={y} >+</button>
            <button onClick={a}>-</button>
        </Fragment>
    )
}

export default Exam
