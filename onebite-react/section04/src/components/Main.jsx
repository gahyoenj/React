import "./Main.css";

export default function Main () {
    const user = {
        name:'전가현',
        isLogin:true
    };

    return (
        <>
            {user.isLogin ? <div className="logout">로그아웃</div> : <div>로그인</div>}
        </>
    );
}