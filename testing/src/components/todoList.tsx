interface TodoListProps {
    text: string
}

export const TodoList = ({ text}: TodoListProps) => {
    return (
        <div>
            <p>Todo List</p>
            <p>{text}</p>
            <button>Click me</button>
            <button data-testid="button">Click me</button>
            <button>Click me</button>
        </div>
    )
}