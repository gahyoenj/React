import { useState,createContext } from 'react'
import { Route, Routes,Link, useNavigate } from 'react-router-dom'
import './App.css'
import { useReducer,useRef } from 'react';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from "./pages/Edit";
import NotFound from './pages/NotFound';
import Button from './components/Button';
import Header from './components/Header';

import { getEmotionImage } from './util/get-emotion-image';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

const mockData = [
  {
    id:1,
    createdDate: new Date("2024-07-20").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id:2,
    createdDate: new Date("2024-07-19").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id:3,
    createdDate: new Date("2024-06-24").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  }
];

function reducer(state, action) {
  switch(action.type){
    case "CREATE" : 
      return [action.data,...state];
    case "UPDATE" :
      return state.map((item)=>String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE" :
      return state.filter((item)=>String(item.id) !== String(action.id));
    default:
      return state
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App() {

  const [data, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);
  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type:"CREATE",
      data : {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });

  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    // 기존 일기 수정하는 기능
    dispatch(
      {
        type:"UPDATE",
        data:{
          id,
          createdDate,
          emotionId,
          content
        }
      }
    );
  }

  // 일기 삭제
  const onDelete = (id) => {
    dispatch(
      {
        type:"DELETE",
        id,
      }
    );
  }


  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{
        onCreate,
        onUpdate,
        onDelete,
      }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;

// Routes 컴포넌트 안에는 Route 컴포넌트들만 들어올 수 있음
// Routes 컴포넌트 밖에 정의된 것들은 페이지 렌더링과 관계없이 모든 페에지에서 다 렌더링 됨
