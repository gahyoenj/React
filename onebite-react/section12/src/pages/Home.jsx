import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();
    //  쿼리스트링으로 전달된 값이 params에 저장됨

    return <div>home</div>;
};

export default Home;
