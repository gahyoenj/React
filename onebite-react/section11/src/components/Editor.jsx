import './Editor.css';
import { useState,useRef,useContext } from 'react';
import { TodoDispatchContext } from '../App';

const Editor = () =>{
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (event) =>{
        setContent(event.target.value);
    }

    const onKeydown = (event) =>{
        if (event.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () =>{
        if (content === "") {
            contentRef.current.focus();
            return ;
        }
        onCreate(content);
        setContent("");
    };

    return <div className="Editor">
        <input
            ref={contentRef} 
            value={content}
            placeholder="새로운 Todo..."
            onKeyDown={onKeydown}
            onChange={onChangeContent}/>
        <button onClick={onSubmit}>추가</button>
    </div>
};

export default Editor;