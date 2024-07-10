import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) =>{
    const onChangeCheckbox = () =>{
        onUpdate(id);
    }

    const onDeleteContent = () =>{
        onDelete(id);
    };

    return <div className="TodoItem">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onDeleteContent}>삭제</button>
    </div>
};



export default memo(TodoItem);