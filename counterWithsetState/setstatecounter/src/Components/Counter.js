import React, {useState} from 'react'

export default function Counter() {
    const initialState = 0
    const[sayac,setSayac]= useState(initialState)
    return (
        <div>
            <div className="sayac">Sayaç : {sayac}</div>
            <div className="buttonList">
                <div className="arttirButton"><button onClick={()=>setSayac(prevState => prevState +1)}>Bir Arttır</button></div>
                <div className="azaltButton"><button onClick={()=>setSayac(prevState => prevState -1)}>Bir Azalt</button></div>
                <div className="resetButton"><button onClick={()=>setSayac(initialState)}>Reset</button></div>
            </div>
        </div>
    )
}
