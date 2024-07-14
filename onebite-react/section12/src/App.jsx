import { useState } from 'react'
import { Route, Routes,Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import Button from './components/Button';
import Header from './components/Header';

import { getEmotionImage } from './util/get-emotion-image';

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton =() =>{
    nav('/new');
  };
  return (
    <>
      <Header title={'Header'}
        letfChild={<Button text={'Left'}/>}
        rightChild={<Button text={'Right'}/>}/>
      <Button 
        text={'123'}
        type={'DEFAULT'}
        onClick={() =>{
          console.log('123번 버튼 클릭');
      }}/>
      <Button 
        text={'123'}
        type={'POSITIVE'}
        onClick={() =>{
          console.log('123번 버튼 클릭');
      }}/>
      <Button 
        text={'123'}
        type={'NEGATIVE'}
        onClick={() =>{
          console.log('123번 버튼 클릭');
      }}/>
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div> */}
      {/* <button onClick={onClickButton}>New 페이지로 이동</button> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// Routes 컴포넌트 안에는 Route 컴포넌트들만 들어올 수 있음
// Routes 컴포넌트 밖에 정의된 것들은 페이지 렌더링과 관계없이 모든 페에지에서 다 렌더링 됨
