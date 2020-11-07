const Input = (props) => (
    <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.textChanged}
    />
);

export default Input;
