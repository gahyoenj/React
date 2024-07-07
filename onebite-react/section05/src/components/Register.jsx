import { useState,useRef } from "react";

// 간단한 회원가입 폼
// 1.이름
// 2.생년월일
// 3. 국적
// 4. 자기소개 

const Register = () =>{

    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    // 위처럼 반복되는 것들 하나하나 쓰기엔 비효율적!

    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    });

    const countRef = useRef(0);
    // console.log(refObj);
    const inputRef = useRef();
    
    const onChange =(e) =>{
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            // 프로퍼티의 키 자리에다가 대괄호를 열고 그 안에 어떠한
            // 변수의 이름을 쓰면 키로써 설정이 됨
            // e.target.name이라는 변수로 키를 설정한다는 말
            // => 이벤트가 발생한 태그의 name 속성에 설정된 값이 들어있음 
            [e.target.name]:e.target.value,
        });
    }

    // console.log(input);

    const onSubmit = () =>{
        if(input.name === "") {
            // 이름을 입력하는 DOM요소 포커스
            // console.log(inputRef.current);
            inputRef.current.focus();
        }
    }

    const onChangeName = (e) =>{
        setInput({
            // 스프레드 연산자 이용해서 관련 없는 값들은 원래대로 갈 수 있게
            ...input,
            name: e.target.value
        });
    };

    const onChangeBirth = (e) =>{
        setInput({
            ...input,
            birth: e.target.value
        });
    };

    const onChangeCountry = (e) =>{
        setInput({
            ...input,
            country: e.target.value
        });
    };

    const onChangeBio = (e) =>{
        setInput({
            ...input,
            bio: e.target.value
        });
    };

    return (
        <div>
            <div>
                <input 
                    ref={inputRef}
                    name = "name"
                    value = {input.name}
                    onChange={onChange}
                    placeholder={"이름"}></input>
            </div>
            {/* {name} */}
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange} 
                    type="date" />
                {/* {birth} */}
            </div>

            <div>
                <select 
                    name="country"
                    value={input.country} 
                    onChange={onChange}>
                    {/* 맨위 옵션이 기본값으로 뜨게 됨 */}
                    <option></option>
                    <option>한국</option>
                    <option>영국</option>
                    <option>미국</option>
                </select>
                {/* {country} */}
            </div>

            <div>
                <textarea 
                    name="bio"
                    value={input.bio}
                    onChange={onChange}/>
                {/* {bio} */}
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
}

export default Register;