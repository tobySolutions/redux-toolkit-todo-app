import "./TodoItem.css";

function TodoItem(props) {
    const deleteTodo = () => {
        props.onCheck(props.id)
    }
    return (
        <div className="todo" onClick={deleteTodo}>
            <input type="checkbox" />
            <label>{props.text}</label>
        </div>
    )
}

export default TodoItem;