import './TodoItem.css';
import { memo,useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) =>{
    const { onUpdate, onDelete} = useContext(TodoDispatchContext);
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