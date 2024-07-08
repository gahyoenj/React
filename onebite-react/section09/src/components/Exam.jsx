import { act, useReducer } from "react";

// reducer = 상태를 실제로 변화 시키는 함수
function reducer(state, action){
    console.log(state,action);
    // if (action.type === "INCREASE"){
    //     return state + action.data
    // }
    // else if (action.type=== "DECREASE"){
    //     return state - action.data
    // }
    switch(action.type) {
        case 'INCREASE' : return state + action.data;
        case 'DECREASE' : return state - action.data;
        default: return state;
    }
    
}

const Exam = () =>{
    // dispatch = 상태 변화를 요청하기만 하는 함수
    // 상태변화가 있어야 한다를 알리는 함수라고 생각하면 됨\
    // useRedcer(reducer, 초기값)
    const [state,dispatch] = useReducer(reducer, 0);

    const onClickPlus = () =>{
        // 상태가 어떻게 변화되길 원하는지 디스패치에 인수로
        // 인수로 담고 있는 걸 액션 객체라고 부름
        dispatch({
            type:"INCREASE",
            data: 1,
        });
    };

    const onClickMinus = () =>{
        dispatch({
            type:"DECREASE",
            data:1,
        })
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
};

export default Exam;