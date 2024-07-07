import { useState } from "react";
function useInput() {
        const [input, setInput] = useState("");
    
        const onChange = (event) =>{
            setInput(event.target.value);
        };
    
        return [input, onChange]
    }

export default useInput;