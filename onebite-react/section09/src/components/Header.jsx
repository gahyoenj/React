import './Header.css';
import { memo } from "react";


const Header = () =>{
    return <div className="Header">
        <h3>오늘은 🗓️</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
};

// 이렇게 하면 자신이 받는 props가 변경되지 않았을 때에는 리렌더링 하지 않도록 최적화해서 반환
const memoizedHeader = memo(Header);

export default memoizedHeader;