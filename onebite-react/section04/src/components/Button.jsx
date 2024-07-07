const Button = ({ text, color, children }) => {
    // console.log(props);
    return (
    <button
        onClick={() => {
            console.log(text);
        }}
        style={{ color: color }}
        >
        {text} - {color.toUpperCase()}
        {children}
    </button>
    );
};

// 전달된 props가 없는 컴포넌트도 있을 수 있는데 그때 null.toUpperCase()
// 이런 식으로 하면 오류가 뜨기 때문에 기본값을 해주는 것
Button.defaultProps = {
    color: 'black',
}

export default Button;