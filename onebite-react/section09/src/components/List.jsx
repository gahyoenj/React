import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const List = ({todos, onUpdate, onDelete}) =>{
    const [search, setSearch] = useState("");

    const onChangeSearch = (event) =>{
        setSearch(event.target.value);
    };

    const getFilteredData = () =>{
        if (search === "") {
            return todos;
        }
        return todos.filter((todo)=>{
            return todo.content.toLowerCase().includes(search.toLowerCase());
        });
    };

    const filteredTodos = getFilteredData()

    // const getAnalyzedData = () =>{
    //     console.log('getAnalyzedData 호출')
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=> todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // };


    
    // useMemo 이용하면 위에처럼 할 필요 없음
    // useMemo는 첫번째 인수인 콜백함수가 return 해주는 값을 return 해줌
    // 콜백함수를 두번쨰 인수로 전달한 deps를 기준으로 메모이제이션 함
    // 따라서 아래 useMemo 이용해서 아무것도 deps로 전달하지 않았을 때에는 첫번째 콜백 함수의 연산
    // 수행과 반환이 최초로 렌더링 되었을 때 한번만 일어나게 됨
    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log('getAnalyzedData 호출')
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=> todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    },[]);

    // const {totalCount,doneCount,notDoneCount} = getAnalyzedData();

    return (
    <div className="List">
        <h4>Todo List💫</h4>
        <div>total:{totalCount}</div>
        <div>done:{doneCount}</div>
        <div>notDone:{notDoneCount}</div>
        <input 
            value={search}
            placeholder="검색어를 입력하세요"
            onChange={onChangeSearch} />
        <div className='todos_wrapper'>
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
            })}
        </div>
    </div>
    );
};

export default List;