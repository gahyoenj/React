import { useParams,useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext,useEffect,useState } from "react";
import { DiaryDispatchContext,DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

    // params를 통해서 일기 데이터 불러오는 작업을 edit 뿐만 아니라 Diary 페이지에서도 써야하므로
    //  커스텀 훅으로 만들어서 두곳에서 쓸 수 있게 해주면 됨 (코드 중복 방지)
    // const data = useContext(DiaryStateContext);
    // const [curDiaryItem, setCurDiaryItem] = useState();

    // useEffect(()=>{
    //     const currentDiaryItem = data.find(
    //         (item)=> String(item.id) === String(params.id));
    //     if (!currentDiaryItem) {
    //         window.alert('존재하지 않는 일기입니다.')
    //         nav('/', {replace:true})
    //     }
    //     setCurDiaryItem(currentDiaryItem)

    // },[params.id, data])

    const curDiaryItem = useDiary(params.id);

    
    const onClickDelete = () => {
        if (
        window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")){
            onDelete(params.id);
            nav('/', {replace:true});
        }
    };

    const onSubmit = (input) =>{
        if(window.confirm('일기를 정말 수정할까요?')){
        onUpdate(
            params.id, 
            input.createdDate.getTime(), 
            input.emotionId, 
            input.content);
    nav('/', {replace:true})}
    };

    // const getCurrentDiaryItem = () =>{
    //     const currentDiaryItem = data.find(
    //         (item)=> String(item.id) === String(params.id));
    //     if (!currentDiaryItem) {
    //         window.alert('존재하지 않는 일기입니다.')
    //         nav('/', {replace:true})
    //     }

    //     return currentDiaryItem;
    // }

    // const currentDiaryItem = getCurrentDiaryItem();

    return (
    <div>
        <Header title={'일기 수정하기'}
        leftChild={<Button
            onClick={()=>nav(-1)} 
            text={"< 뒤로가기"} />}
        rightChild={<Button 
            onClick={onClickDelete}
            text={"삭제하기"} type="NEGATIVE" />}/>
        <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
    );
}

export default Edit;