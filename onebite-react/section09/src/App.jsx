import './App.css'
import { useState,useRef } from 'react';
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';
import List from './components/List.jsx';
import Exam from './components/Exam.jsx';

const mockData = [
  {
    id:0,
    isDone: false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content : "강의 듣기",
    date : new Date().getTime(),
  },
]

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) =>{
    const newTodo ={
      id :idRef.current++,
      isDone:false,
      content : content,
      date : new Date().getTime()
    }

    // todos.push(newTodo) 이렇게 push 메서드 이용해서 스테이트 값 직접 변경하면 안됨
    // state의 값은 반드시 상태변화 함수를 호출해서만 수정할 수 있음

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) =>{
    // todos State의 값들 중에
    // targetId 와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo)=>
       todo.id === targetId 
          ? {...todo, isDone:!todo.isDone} 
          : todo));
  }

  const onDelete = (targetId) =>{
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className='App'>
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> */}
    </div>
  );
}

export default App
