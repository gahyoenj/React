import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/getStringdDate';





const Editor = ({onSubmit, initData}) =>{
    const [input, setInput] = useState({
        createdDate :new Date(),
        emotionId :3,
        content : "",
    });

    const nav = useNavigate();

    useEffect(()=>{
        if(initData) {
            setInput({...initData,
                createdDate: new Date(Number(initData.createdDate)),
            })
        }
    },[initData]) //initData의 값이 변경 될 때마다 콜백 함수가 실행됨.

    const onChangeInput = (event) =>{
        // console.log(event.target.name); //어떤 요소에 입력이 들어온건지
        // console.log(event.target.value); //입력된 값이 무엇인지
    
        let name = event.target.name;
        let value = event.target.value;

        if(name==="createdDate") {
            value = new Date(value);
        }
        setInput({...input, [name]:value,})
    };

    const onSubmitButton =() =>{
        onSubmit(input); 
    }
    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input 
                name="createdDate"
                onChange={onChangeInput}
                value={getStringedDate(input.createdDate)} type="date" />    
            </section>
            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item)=>
                    <EmotionItem
                    onClick={()=>onChangeInput({
                        target:{
                            name:"emotionId",
                            value: item.emotionId,
                        }
                    })}
                     key={item.emotionId}
                     {...item}
                     isSelected={item.emotionId === input.emotionId}/>)}
                </div>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                name="content"
                value={input.content}
                onChange={onChangeInput}
                placeholder='오늘은 어땠나요?'></textarea>
            </section>
            <section className='button_section'>
                <Button
                 onClick={()=>nav(-1)}
                 text={'취소하기'}/>
                <Button 
                onClick={onSubmitButton}
                text={'작성완료'} type="POSITIVE"/>
            </section>
        </div>
    );
};

export default Editor;