import React,{useReducer} from 'react'

const initialState = {
    firstCount : 0,
    secondCount : 10
}   


const reducer = (state,action) => {
    switch(action.type) {
        case 'increase':
            return {
                ...state,firstCount:state.firstCount+action.value
            }
        case 'increase-2':
            return {
                ...state,secondCount:state.secondCount+action.value
            }
        case 'decrease':
            return{
                ...state,firstCount:state.firstCount-action.value
            }
        case 'decrease-2':
            return{
                ...state,secondCount:state.secondCount-action.value
            }
        case 'reset':
            return initialState
        default :
            return state
    }
}

function Counter() {
    const [counter,dispatch]=useReducer(reducer,initialState)

    return (
        
        <div>
            <div className="counter">
                <h1>First Counter: {counter.firstCount}</h1>
                <h1>Second Counter: {counter.secondCount}</h1>
            </div>
            <div className="firstCountButton">
                <button onClick={()=>dispatch({type:'increase', value:1})}>First Counter + 1</button>
                <button onClick={()=>dispatch({type:'decrease', value:1})}>First Counter - 1</button>
            </div>
            <div className="secondCountButton">            
                <button onClick={()=>dispatch({type:'increase-2', value:1})}>Second Counter + 1</button>
                <button onClick={()=>dispatch({type:'decrease-2', value:1})}>Second Counter - 1</button>
            </div>
            <div className="resetButton"> 
                <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
