import { useState } from "react";
// 훅은 반드시 함수 컴포넌트이거나 커스텀 훅 내부에서만 호출 가능
// 조건부로 호출될 수는 없다(조건문이나 반복문 내에서 호출 불가능)
// 나만의 훅(커스텀 훅)을 만들 수 있다.

//  src 폴더 내부에 hooks 폴더 만들어서 거기서 관리해줌
// function useInput() {
//     const [input, setInput] = useState("");

//     const onChange = (event) =>{
//         setInput(event.target.value);
//     };

//     return [input, onChange]
// }

import useInput from "../hooks/useinput";

const HookExam = () =>{
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    return (
        <div>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
        </div>
    )
};

export default HookExam;