import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState,useContext } from "react";
import { DiaryStateContext } from "../App";


const getMonthlyData = (pivotDate, data) =>{
    const beginTime = new Date(
        pivotDate.getFullYear(), 
        pivotDate.getMonth(), 
        1, 0, 0, 0).getTime(); //pivotDate의 연도와 해당하는 월의 1일 0시 0분 0초 해당하는 값을 숫자형태로
    
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth()+1,
        0 ,23, 59, 59
    ).getTime(); //pivotDate 달+1의 이전 달의 마지막 날 23시 59분 59초
    return data.filter((item)=> beginTime <= item.createdDate && item.createdDate <= endTime);
}

const Home = () => {
    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);
    console.log(monthlyData);

    const onIncreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    }
    const onDecreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    }

    return (
    <div>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
            leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
            rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}/>
        <DiaryList data={monthlyData}/>
        </div>);
};

export default Home;
