import { useState,useEffect,useRef } from 'react'
import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

function App() {
  const [count, setCount] =useState(0);
  const isMount = useRef(false);
  

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log('mount')
  },[]);


  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    // 컴포넌트의 업데이트에서만 콜백함수 호출하고 싶으면 이렇게 하면 됨
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log('update');
  })

  // 3. 언마운트 : 죽음
  


  // useEffect(() => {
  //   console.log(`count: ${count}`)
  // }, [count]);
  // //  배열이 변함에 따라 콜백함수 호출하므로 배열을 의존성 배열이라고 부름
  const onClickButton =(value) =>{
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/> 
      </section> 
    </div>
  )
}

export default App;
