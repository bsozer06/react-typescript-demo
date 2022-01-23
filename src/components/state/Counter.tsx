import React, { useReducer } from 'react';

type CounterState = {
    count: number
}

type UpdateAction = {
    type: "increment" | "decretment",
    payload: number
}

type ResetAction = {
    type:"reset",
}

type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload }
        case "decretment":
            return { count: state.count - action.payload  }
        case "reset":
            return initialState
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment", payload: 10} )}>Increament 10</button>
            <button onClick={() => dispatch({ type: "decretment", payload: 10} )}>Decretment 10</button>
            <button onClick={() => dispatch({ type: "reset"} )}>Reset</button>
        </>
    );
}

export default Counter;
