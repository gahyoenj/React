import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {


  return (
    <>
      <Button text={"메일"} color={"red"}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

// function App() {
//   const buttonProps ={
//     text:'메일',
//     color:'red',
//     a:1,
//     b:2,
//     c:3
//   };

//   return (
//     <>
//       {/* 스프레드 연산자로도 props 전달가능 */}
//       <Button {...buttonProps}/>   
//       <Button text={"카페"}/>
//       <Button text={"블로그"}/>
//     </>
//   )
// }

export default App
